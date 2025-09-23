'use client'

import Achievements from '@/components/Achievements'
import Milestones from '@/components/Milestones'
import { Card } from '@/components/ui/card'

export default function AchievementsPage() {
  return (
    <div className="p-4 sm:p-6">
      <div className="rounded-xl bg-[rgba(15,23,42,0.7)] shadow-md backdrop-blur-md p-6 space-y-12">
        <div>
          <h1 className="text-2xl font-bold text-accent-pink">Achievements</h1>
          <p className="text-muted-foreground">View your earned achievements and track milestones as you progress.</p>
        </div>

        <Card className="card-hover card-glow-outline p-4 sm:p-6">
          <Achievements />
        </Card>

        <Card className="card-hover card-glow-outline p-4 sm:p-6">
          <Milestones />
        </Card>
      </div>
    </div>
  )
}
