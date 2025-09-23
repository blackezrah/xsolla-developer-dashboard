// src/components/Achievements.tsx
"use client"

import React from "react"
import { Medal } from "lucide-react"

export default function Achievements() {
  const items = [
    {
      id: "a1",
      title: "First API Integration",
      subtitle: "Completed first successful API integration",
      xp: "+100 XP",
      color: "#22c55e", // green
    },
    {
      id: "a2",
      title: "Event Organizer",
      subtitle: "Hosted 5 developer events",
      xp: "+250 XP",
      color: "#0ea5e9", // cyan
    },
    {
      id: "a3",
      title: "Community Builder",
      subtitle: "Reached 1000 community members",
      xp: "+500 XP",
      color: "#ec4899", // pink
    },
    {
      id: "a4",
      title: "Campaign Master",
      subtitle: "Run 10 successful campaigns",
      xp: "+300 XP",
      color: "#facc15", // yellow
    },
  ]

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-accent-pink uppercase tracking-wide">
        Achievements
      </h3>
      <div className="space-y-4">
        {items.map((it) => (
          <div
            key={it.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 rounded-lg bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.08)] transition"
          >
            {/* Left side */}
            <div className="flex items-center gap-3">
              <Medal
                className="drop-shadow-lg"
                style={{ color: it.color }}
                size={20}
              />
              <div>
                <div className="text-sm text-white font-medium">{it.title}</div>
                <div className="text-xs text-muted-foreground">{it.subtitle}</div>
              </div>
            </div>
            {/* XP on right */}
            <div className="text-sm font-semibold text-emerald-400">
              {it.xp}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
