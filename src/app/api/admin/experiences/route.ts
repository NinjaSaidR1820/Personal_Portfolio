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
    const experiences = await prisma.experience.findMany({
      include: { bullets: true },
      orderBy: { createdAt: "asc" },
    })
    return NextResponse.json(experiences)
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}

export async function POST(req: NextRequest) {
  try {
    await guard()
    const { role, company, period, location, type, description, bullets } = await req.json()
    const experience = await prisma.experience.create({
      data: {
        role, company, period, location, type, description,
        bullets: { create: (bullets || []).map((b: string) => ({ content: b })) },
      },
      include: { bullets: true },
    })
    return NextResponse.json(experience)
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}

export async function PUT(req: NextRequest) {
  try {
    await guard()
    const { id, role, company, period, location, type, description, bullets } = await req.json()
    await prisma.bullet.deleteMany({ where: { experienceId: id } })
    const experience = await prisma.experience.update({
      where: { id },
      data: {
        role, company, period, location, type, description,
        bullets: { create: (bullets || []).map((b: string) => ({ content: b })) },
      },
      include: { bullets: true },
    })
    return NextResponse.json(experience)
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await guard()
    const { id } = await req.json()
    await prisma.experience.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}
