import express from "express"
import cors from "cors"
import path from "path"
import { startTelegramBot } from "./telegram-bot"
import { initDB, getVPNConfigs, getOrders } from "../lib/db"

// Load environment variables
const BOT_TOKEN = process.env.BOT_TOKEN
const ADMIN_ID = process.env.ADMIN_ID
const PORT = process.env.PORT || 3000

async function startServer() {
  // Initialize database
  await initDB()

  // Setup express
  const app = express()
  app.use(cors())
  app.use(express.json())

  // Serve static files from the Next.js build output
  app.use(express.static(path.join(__dirname, "../.next")))

  // API endpoints
  app.get("/api/configs", async (req, res) => {
    try {
      const configs = await getVPNConfigs()
      res.json(configs)
    } catch (error) {
      console.error("Error fetching VPN configs:", error)
      res.status(500).json({ error: "Failed to fetch VPN configs" })
    }
  })

  app.get("/api/orders", async (req, res) => {
    try {
      const orders = await getOrders()
      res.json(orders)
    } catch (error) {
      console.error("Error fetching orders:", error)
      res.status(500).json({ error: "Failed to fetch orders" })
    }
  })

  // Start Telegram bot
  if (BOT_TOKEN && ADMIN_ID) {
    startTelegramBot(BOT_TOKEN, ADMIN_ID)
  } else {
    console.warn("BOT_TOKEN or ADMIN_ID not provided. Telegram bot not started.")
  }

  // Fallback handler for all other routes - serve Next.js app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../.next/server/pages/index.html"))
  })

  // Start server
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

startServer().catch(console.error)

