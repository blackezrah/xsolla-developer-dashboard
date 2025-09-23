// src/components/Milestones.tsx
"use client"

import { Star, Trophy, Award } from "lucide-react"

export default function Milestones() {
  const items = [
    {
      id: "m1",
      title: "Total XP",
      subtitle: "All-time earned",
      value: "1150 XP",
      icon: Star,
      color: "#6366f1", // indigo
    },
    {
      id: "m2",
      title: "Badges Earned",
      subtitle: "Recognition count",
      value: "4",
      icon: Trophy,
      color: "#f43f5e", // rose
    },
    {
      id: "m3",
      title: "Rank",
      subtitle: "Current tier",
      value: "Pro",
      icon: Award,
      color: "#10b981", // emerald
    },
  ]

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-accent-blue uppercase tracking-wide">
        Milestones
      </h3>
      <div className="space-y-4">
        {items.map((it) => {
          const Icon = it.icon
          return (
            <div
              key={it.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 rounded-lg bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.08)] transition"
            >
              {/* Left side */}
              <div className="flex items-center gap-3">
                <Icon
                  className="drop-shadow-lg"
                  style={{ color: it.color }}
                  size={20}
                />
                <div className="leading-tight">
                  <div className="text-sm text-white font-medium">
                    {it.title}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {it.subtitle}
                  </div>
                </div>
              </div>
              {/* Value on right */}
              <div className="text-sm font-semibold text-emerald-400">
                {it.value}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
