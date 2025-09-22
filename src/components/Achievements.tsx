'use client'

import React from 'react'
import { Medal } from 'lucide-react'

export default function Achievements() {
  const items = [
    {
      id: 'a1',
      title: 'First API Integration',
      subtitle: 'Completed first successful API integration',
      xp: '+100 XP',
      color: 'text-green-400',
      glow: 'drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]',
    },
    {
      id: 'a2',
      title: 'Event Organizer',
      subtitle: 'Hosted 5 developer events',
      xp: '+250 XP',
      color: 'text-sky-400',
      glow: 'drop-shadow-[0_0_6px_rgba(56,189,248,0.8)]',
    },
    {
      id: 'a3',
      title: 'Community Builder',
      subtitle: 'Reached 1000 community members',
      xp: '+500 XP',
      color: 'text-pink-400',
      glow: 'drop-shadow-[0_0_6px_rgba(236,72,153,0.8)]',
    },
    {
      id: 'a4',
      title: 'Campaign Master',
      subtitle: 'Run 10 successful campaigns',
      xp: '+300 XP',
      color: 'text-yellow-400',
      glow: 'drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]',
    },
  ]

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-accent-pink uppercase tracking-wide">
        Achievements
      </h3>
      <div className="space-y-4">
        {items.map((it) => (
          <div key={it.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Glowing Icon */}
              <Medal
                className={`${it.color} ${it.glow}`}
                size={22}
              />
              <div>
                <div className="text-sm text-white font-medium">{it.title}</div>
                <div className="text-xs text-muted-foreground">{it.subtitle}</div>
              </div>
            </div>
            <div className="text-sm font-semibold text-emerald-400">{it.xp}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
