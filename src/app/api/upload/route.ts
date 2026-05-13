import { NextRequest, NextResponse } from "next/server"
import { writeFile, mkdir } from "fs/promises"
import { join } from "path"
import { prisma } from "@/lib/db"
import { auth } from "@/lib/auth"

export async function POST(req: NextRequest) {
  try {
    const session = await auth()
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

    const formData = await req.formData()
    const file = formData.get("file") as File
    const category = (formData.get("category") as string) || "projects"

    if (!file) return NextResponse.json({ error: "No file provided" }, { status: 400 })

    const validCategories = ["profile", "projects", "hobbies", "certifications"]
    const cat = validCategories.includes(category) ? category : "projects"

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`
    const dir = join(process.cwd(), "public", "images", cat)

    await mkdir(dir, { recursive: true })
    await writeFile(join(dir, filename), buffer)

    const url = `/images/${cat}/${filename}`
    const image = await prisma.image.create({
      data: { filename, category: cat, url, alt: formData.get("alt") as string || null },
    })

    return NextResponse.json(image)
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: "Upload failed" }, { status: 500 })
  }
}
