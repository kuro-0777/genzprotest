"use client"

import { useState } from "react"
import EvidenceGrid from "./EvidenceGrid"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

let blocked = false

export default function AgeGate() {
  const [allowed, setAllowed] = useState<boolean | null>(null)

  if (blocked) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black text-white">
        <p>Access denied.</p>
      </div>
    )
  }

  if (allowed) return <EvidenceGrid />

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70">
      <Card className="p-6 space-y-4 text-center">
        <h2 className="text-lg font-semibold">
          Are you 18 or older?
        </h2>

        <div className="flex gap-4 justify-center">
          <Button onClick={() => setAllowed(true)}>Yes</Button>

          <Button
            variant="destructive"
            onClick={() => {
              blocked = true
              setAllowed(false)
            }}
          >
            No
          </Button>
        </div>
      </Card>
    </div>
  )
}