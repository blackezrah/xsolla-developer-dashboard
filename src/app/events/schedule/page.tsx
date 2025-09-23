'use client'

import { Calendar } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function ScheduleEventPage() {
  return (
    <div className="p-6">
      <div className="rounded-xl bg-[rgba(15,23,42,0.7)] border border-border/40 shadow-md backdrop-blur-md p-6 space-y-8">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-accent-purple">Schedule Event</h1>
          <p className="text-muted-foreground">
            Plan and manage developer events, launches, and campaigns.
          </p>
        </div>

        {/* Event Scheduler Placeholder */}
        <Card className="card-hover card-glow-outline p-6 flex flex-col items-center justify-center text-center">
          <Calendar size={48} className="text-purple-400 mb-4" />
          <h2 className="text-lg font-semibold text-white">Event Scheduler Coming Soon</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Here you’ll be able to add, edit, and view scheduled events.
          </p>
        </Card>
      </div>
    </div>
  )
}
