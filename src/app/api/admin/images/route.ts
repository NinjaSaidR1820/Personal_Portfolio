import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { auth } from "@/lib/auth"
import { unlink } from "fs/promises"
import { join } from "path"

async function guard() {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")
}

export async function GET() {
  try {
    await guard()
    const images = await prisma.image.findMany({ orderBy: { createdAt: "desc" } })
    return NextResponse.json(images)
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await guard()
    const { id } = await req.json()
    const image = await prisma.image.findUnique({ where: { id } })
    if (image) {
      const filePath = join(process.cwd(), "public", image.url)
      try { await unlink(filePath) } catch {}
      await prisma.image.delete({ where: { id } })
    }
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}
