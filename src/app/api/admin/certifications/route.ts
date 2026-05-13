import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { auth } from "@/lib/auth"

async function guard() {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")
}

export async function GET() {
  try {
    await guard()
    const certifications = await prisma.certification.findMany()
    return NextResponse.json(certifications)
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}

export async function POST(req: NextRequest) {
  try {
    await guard()
    const data = await req.json()
    const certification = await prisma.certification.create({ data })
    return NextResponse.json(certification)
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}

export async function PUT(req: NextRequest) {
  try {
    await guard()
    const { id, ...data } = await req.json()
    const certification = await prisma.certification.update({ where: { id }, data })
    return NextResponse.json(certification)
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await guard()
    const { id } = await req.json()
    await prisma.certification.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}
