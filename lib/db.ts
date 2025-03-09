import { promises as fs } from "fs"
import path from "path"

const dbPath = path.join(process.cwd(), "db.json")

// Initialize the database if it doesn't exist
export async function initDB() {
  try {
    await fs.access(dbPath)
  } catch (error) {
    // File doesn't exist, create it with default data
    const defaultData = {
      orders: [],
      vpnConfigs: [
        {
          id: "1m_30gb",
          name: "1 Month - 30GB",
          details: "30GB Traffic, 1 Month Duration, 3 Devices",
          price: "42,000",
          features: [
            "30GB Data Traffic",
            "1 Month Duration",
            "Connect up to 3 Devices",
            "24/7 Support",
            "Secure Browsing",
          ],
        },
        {
          id: "3m_100gb",
          name: "3 Months - 100GB",
          details: "100GB Traffic, 3 Months Duration, 5 Devices",
          price: "110,000",
          features: [
            "100GB Data Traffic",
            "3 Months Duration",
            "Connect up to 5 Devices",
            "24/7 Support",
            "Secure Browsing",
            "Priority Support",
          ],
        },
        {
          id: "6m_unlimited",
          name: "6 Months Unlimited",
          details: "Unlimited Traffic, 6 Months Duration, 10 Devices",
          price: "200,000",
          features: [
            "Unlimited Data Traffic",
            "6 Months Duration",
            "Connect up to 10 Devices",
            "24/7 Support",
            "Secure Browsing",
            "Priority Support",
            "Dedicated IP (Optional)",
          ],
        },
      ],
    }
    await fs.writeFile(dbPath, JSON.stringify(defaultData, null, 2))
  }
}

// Read the entire database
export async function readDB() {
  await initDB()
  const data = await fs.readFile(dbPath, "utf8")
  return JSON.parse(data)
}

// Write to the database
export async function writeDB(data: any) {
  await fs.writeFile(dbPath, JSON.stringify(data, null, 2))
}

// Get all VPN configs
export async function getVPNConfigs() {
  const db = await readDB()
  return db.vpnConfigs
}

// Get all orders
export async function getOrders() {
  const db = await readDB()
  return db.orders
}

// Add a new order
export async function addOrder(order: any) {
  const db = await readDB()
  db.orders.push(order)
  await writeDB(db)
  return order
}

// Update order status
export async function updateOrderStatus(orderId: string, status: string) {
  const db = await readDB()
  const order = db.orders.find((o: any) => o.id === orderId)
  if (order) {
    order.status = status
    await writeDB(db)
    return order
  }
  return null
}

