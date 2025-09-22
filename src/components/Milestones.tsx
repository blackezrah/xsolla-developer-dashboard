'use client'

import { Star, Trophy, Award } from 'lucide-react'

export default function Milestones() {
  const items = [
    {
      id: 'm1',
      title: 'Total XP',
      subtitle: 'All-time earned',
      value: '1150 XP',
      icon: Star,
      color: 'text-indigo-400',
      glow: 'drop-shadow-[0_0_6px_rgba(129,140,248,0.8)]',
    },
    {
      id: 'm2',
      title: 'Badges Earned',
      subtitle: 'Recognition count',
      value: '4',
      icon: Trophy,
      color: 'text-rose-400',
      glow: 'drop-shadow-[0_0_6px_rgba(251,113,133,0.8)]',
    },
    {
      id: 'm3',
      title: 'Rank',
      subtitle: 'Current tier',
      value: 'Pro',
      icon: Award,
      color: 'text-emerald-400',
      glow: 'drop-shadow-[0_0_6px_rgba(52,211,153,0.8)]',
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
            <div key={it.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Glowing Icon */}
                <Icon className={`${it.color} ${it.glow}`} size={22} />
                <div className="leading-tight">
                  <div className="text-sm text-white font-medium">{it.title}</div>
                  <div className="text-xs text-muted-foreground">{it.subtitle}</div>
                </div>
              </div>
              <div className="text-sm font-semibold text-emerald-400">{it.value}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
