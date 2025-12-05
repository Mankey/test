import { NextResponse } from "next/server"

export async function GET() {
  try {
    const response = await fetch("https://discord.com/api/v10/invites/suncrest?with_counts=true", {
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch Discord data")
    }

    const data = await response.json()
    return NextResponse.json({ memberCount: data.approximate_member_count })
  } catch (error) {
    console.error("Error fetching Discord members:", error)
    return NextResponse.json({ memberCount: null }, { status: 500 })
  }
}
