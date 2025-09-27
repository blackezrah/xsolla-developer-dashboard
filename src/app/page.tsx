'use client'

import XPProgress from '@/components/XPProgress'
import ActiveQuests from '@/components/ActiveQuests'
import AchievementsSection from '@/components/AchievementsSection'
import QuickActions from '@/components/QuickActions'
import AnalyticsOverview from '@/components/AnalyticsOverview'
import AnalyticsLineChart from '@/components/analytics/AnalyticsLineChart'
import AnalyticsPieChart from '@/components/analytics/AnalyticsPieChart'
import { Card } from '@/components/ui/card'

export default function DashboardPage() {
  return (
    <div className="space-y-8 p-6">
      {/* Top Stats */}
      <AnalyticsOverview />

      {/* XP Progress */}
      <XPProgress />

      {/* Active Quests */}
      <Card className="card-hover card-glow-outline">
        <div className="px-6 pt-6">
          <h2 className="section-title text-green-400">Active Quests</h2>
        </div>
        <div className="p-6 pt-4">
          <ActiveQuests />
        </div>
      </Card>

      {/* Achievements + Milestones */}
      <Card className="card-hover card-glow-outline">
        <div className="px-6 pt-6">
          <h2 className="section-title text-purple-400">Achievements & Milestones</h2>
        </div>
        <div className="p-6 pt-4">
          <AchievementsSection />
        </div>
      </Card>

      {/* Quick Actions */}
      <Card className="card-hover card-glow-outline">
        <div className="px-6 pt-6">
          <h2 className="section-title text-amber-400">Quick Actions</h2>
        </div>
        <div className="p-6 pt-4">
          <QuickActions />
        </div>
      </Card>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnalyticsLineChart />
        <AnalyticsPieChart />
      </div>
    </div>
  )
}
