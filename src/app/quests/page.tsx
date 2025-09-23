'use client'

import { ListChecks } from 'lucide-react'
import { Card } from '@/components/ui/card'
import QuestsList from '@/components/QuestsList'

export default function QuestsPage() {
  return (
    <div className="p-4 sm:p-6">
      <div className="rounded-xl bg-[rgba(15,23,42,0.7)] shadow-md backdrop-blur-md p-6 space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-accent-green">Quests</h1>
          <p className="text-muted-foreground">Track, start, and manage your active and completed quests.</p>
        </div>

        <Card className="card-hover card-glow-outline p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-4">
            <ListChecks className="text-pink-400" size={24} />
            <h2 className="text-lg font-semibold text-pink-400">Available Quests</h2>
          </div>
          <QuestsList />
        </Card>
      </div>
    </div>
  )
}
