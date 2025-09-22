'use client'

import React from 'react'

type Quest = {
  id: string
  title: string
  progress: number // 0-100
  xp: number
  status: 'In Progress' | 'Pending' | 'Completed'
  remaining?: string
}

const SAMPLE: Quest[] = [
  { id: '1', title: 'Launch Regional Hackathon', progress: 75, xp: 500, status: 'In Progress', remaining: '3 days remaining' },
  { id: '2', title: 'Onboard 50 New Developers', progress: 60, xp: 300, status: 'Pending', remaining: '1 week remaining' },
  { id: '3', title: 'Create Video Tutorial Series', progress: 30, xp: 400, status: 'Pending', remaining: '2 weeks remaining' },
  { id: '4', title: 'Write Supabase Queries', progress: 15, xp: 150, status: 'In Progress', remaining: '—' },
]

export default function ActiveQuests({ items = SAMPLE }: { items?: Quest[] }) {
  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">Complete these missions to earn XP and unlock achievements</p>

      <div className="space-y-4">
        {items.map((q) => (
          <div key={q.id} className="flex items-center justify-between">
            <div>
              <div className="text-base font-medium text-[color:var(--muted-foreground,#cbd5e1)]">{q.title}</div>
              <div className="mt-2 w-[640px] max-w-full bg-white/5 rounded-full h-2 overflow-hidden">
                <div className="h-2 rounded-full" style={{ width: `${q.progress}%`, background: 'linear-gradient(90deg,#e11d9e,#7c3aed)' }} />
              </div>
              <div className="text-xs text-muted-foreground mt-2">{q.progress}% complete</div>
            </div>

            <div className="flex flex-col items-end space-y-2">
              <div className={`text-sm font-medium ${q.status === 'Completed' ? 'text-emerald-400' : q.status === 'Pending' ? 'text-amber-400' : 'text-sky-400'}`}>
                {q.status}
              </div>
              <div className="text-xs text-muted-foreground">{q.remaining}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
