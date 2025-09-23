"use client"

import { useState } from "react"

export default function ActiveQuests() {
  const [quests] = useState([
    { id: "q1", title: "Integrate API", progress: 70 },
    { id: "q2", title: "Fix 10 bugs", progress: 40 },
    { id: "q3", title: "Host community event", progress: 90 },
  ])

  return (
    <div className="space-y-4">
      {quests.map((q) => (
        <div key={q.id} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-white">{q.title}</span>
            <span className="text-muted-foreground">{q.progress}%</span>
          </div>
          <div className="w-full max-w-full bg-white/5 rounded-full h-2 overflow-hidden">
            <div
              className="h-2 rounded-full"
              style={{
                width: `${q.progress}%`,
                background: "linear-gradient(90deg,#e11d9e,#7c3aed)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
