'use client'

import Achievements from '@/components/Achievements'
import Milestones from '@/components/Milestones'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'

export default function AchievementsSection() {
  return (
    <Card className="card-hover card-glow-outline">
      <CardHeader>
        <CardTitle className="section-title text-accent-amber">
          Achievements & Milestones
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <Achievements />
          </div>
          <div className="flex-1">
            <Milestones />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
