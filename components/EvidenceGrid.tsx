"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

export default function EvidenceGrid() {
  const [files, setFiles] = useState<string[]>([])

  useEffect(() => {
    fetch("/api/evidence")
      .then((res) => res.json())
      .then(setFiles)
  }, [])

  const isVideo = (file: string) =>
    file.endsWith(".mp4") || file.endsWith(".mov")

  return (
    <div className="h-screen overflow-y-auto p-6">
        <h1 className="text-2xl font-bold mb-4 text-white text-center">A collection of media evidence from the Gen-Z protest</h1>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {files.map((file) => (
          <Card key={file} className="break-inside-avoid p-2 ">
            {isVideo(file) ? (
              <video
                controls
                className="w-full rounded-md"
                src={`/evidence/${file}`}
                preload="metadata"
              />
            ) : (
              <img
                src={`/evidence/${file}`}
                className="w-full rounded-md"
              />
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}