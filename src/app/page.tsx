'use client'

import XPProgress from '@/components/XPProgress'
import ActiveQuests from '@/components/ActiveQuests'
import AchievementsSection from '@/components/AchievementsSection'
import AnalyticsOverview from '@/components/AnalyticsOverview'
import QuickActions from '@/components/QuickActions'
import { Card } from '@/components/ui/card'
import { Zap, CheckCircle, Award, BarChart3 } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="space-y-8 p-6">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="group card-hover card-glow-outline p-4 flex items-center gap-3">
          <Zap
            size={22}
            className="text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.8)] transition duration-300 group-hover:drop-shadow-[0_0_12px_rgba(250,204,21,1)]"
          />
          <div>
            <div className="tile-title text-accent-pink">XP</div>
            <div className="tile-value text-white">12,450</div>
          </div>
        </Card>

        <Card className="group card-hover card-glow-outline p-4 flex items-center gap-3">
          <CheckCircle
            size={22}
            className="text-green-400 drop-shadow-[0_0_6px_rgba(34,197,94,0.8)] transition duration-300 group-hover:drop-shadow-[0_0_12px_rgba(34,197,94,1)]"
          />
          <div>
            <div className="tile-title text-accent-green">Completed Quests</div>
            <div className="tile-value text-white">87</div>
          </div>
        </Card>

        <Card className="group card-hover card-glow-outline p-4 flex items-center gap-3">
          <Award
            size={22}
            className="text-pink-400 drop-shadow-[0_0_6px_rgba(236,72,153,0.8)] transition duration-300 group-hover:drop-shadow-[0_0_12px_rgba(236,72,153,1)]"
          />
          <div>
            <div className="tile-title text-accent-amber">Achievements</div>
            <div className="tile-value text-white">24</div>
          </div>
        </Card>

        <Card className="group card-hover card-glow-outline p-4 flex items-center gap-3">
          <BarChart3
            size={22}
            className="text-blue-400 drop-shadow-[0_0_6px_rgba(59,130,246,0.8)] transition duration-300 group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,1)]"
          />
          <div>
            <div className="tile-title text-accent-blue">Analytics</div>
            <div className="tile-value text-white">Growth ↑</div>
          </div>
        </Card>
      </div>

      {/* XP Progress */}
      <XPProgress />

      {/* Active Quests */}
      <Card className="card-hover card-glow-outline">
        <div className="px-6 pt-6">
          <h2 className="section-title text-accent-green">Active Quests</h2>
        </div>
        <div className="p-6 pt-4">
          <ActiveQuests />
        </div>
      </Card>

      {/* Achievements + Milestones */}
      <AchievementsSection />

      {/* Quick Actions */}
      <Card className="card-hover card-glow-outline">
        <div className="px-6 pt-6">
          <h2 className="section-title text-accent-amber">Quick Actions</h2>
        </div>
        <div className="p-6 pt-4">
          <QuickActions />
        </div>
      </Card>

      {/* Analytics */}
      <Card className="card-hover card-glow-outline">
        <div className="px-6 pt-6">
          <h2 className="section-title text-accent-blue">Analytics</h2>
        </div>
        <div className="p-6 pt-4">
          <AnalyticsOverview />
        </div>
      </Card>
    </div>
  )
}
