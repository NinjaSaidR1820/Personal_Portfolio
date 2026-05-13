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
    const categories = await prisma.skillCategory.findMany({
      include: { skills: true },
      orderBy: { order: "asc" },
    })
    return NextResponse.json(categories)
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}

export async function POST(req: NextRequest) {
  try {
    await guard()
    const { title, icon, className, order, skills } = await req.json()
    const category = await prisma.skillCategory.create({
      data: {
        title, icon, className, order: order || 0,
        skills: { create: (skills || []).map((s: string) => ({ name: s })) },
      },
      include: { skills: true },
    })
    return NextResponse.json(category)
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}

export async function PUT(req: NextRequest) {
  try {
    await guard()
    const { id, title, icon, className, order, skills } = await req.json()
    await prisma.skill.deleteMany({ where: { categoryId: id } })
    const category = await prisma.skillCategory.update({
      where: { id },
      data: {
        title, icon, className, order,
        skills: { create: (skills || []).map((s: string) => ({ name: s })) },
      },
      include: { skills: true },
    })
    return NextResponse.json(category)
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await guard()
    const { id } = await req.json()
    await prisma.skillCategory.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}
