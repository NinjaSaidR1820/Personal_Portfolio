import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { auth } from "@/lib/auth"

async function getSession() {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")
  return session
}

export async function GET() {
  try {
    await getSession()
    const profile = await prisma.profile.findFirst()
    return NextResponse.json(profile)
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}

export async function PUT(req: NextRequest) {
  try {
    await getSession()
    const data = await req.json()
    const profile = await prisma.profile.upsert({
      where: { id: "default" },
      update: data,
      create: { id: "default", ...data },
    })
    return NextResponse.json(profile)
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}
