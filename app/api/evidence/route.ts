import fs from "fs"
import path from "path"
import { NextResponse } from "next/server"

export async function GET() {
  const folder = path.join(process.cwd(), "public", "evidence")

  const files = fs.readdirSync(folder)

  const allowed = ["mp4", "mov", "jpg", "webp"]

  const media = files.filter((file) => {
    const ext = file.split(".").pop()?.toLowerCase()
    return allowed.includes(ext || "")
  })

  return NextResponse.json(media)
}