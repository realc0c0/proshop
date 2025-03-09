import { NextResponse } from "next/server"
import { getVPNConfigs } from "@/lib/db"

export async function GET() {
  try {
    const configs = await getVPNConfigs()
    return NextResponse.json(configs)
  } catch (error) {
    console.error("Error fetching VPN configs:", error)
    return NextResponse.json({ error: "Failed to fetch VPN configs" }, { status: 500 })
  }
}

