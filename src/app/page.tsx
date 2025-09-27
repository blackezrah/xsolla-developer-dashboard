'use client'

import XPProgress from '@/components/XPProgress'
import ActiveQuests from '@/components/ActiveQuests'
import AchievementsSection from '@/components/AchievementsSection'
import AnalyticsOverview from '@/components/AnalyticsOverview'
import QuickActions from '@/components/QuickActions'
import Analytics from '@/components/Analytics'
import AnalyticsPieChart from '@/components/analytics/AnalyticsPieChart' // optional, if created
import { Card } from '@/components/ui/card'

export default function DashboardPage() {
  return (
    <div className="space-y-8 p-6">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="card-hover card-glow-outline p-4 flex items-center gap-3">
          <div className="text-pink-500 text-3xl font-bold">★</div>
          <div>
            <div className="tile-title text-pink-400">XP</div>
            <div className="tile-value text-white">12,450</div>
          </div>
        </Card>

        <Card className="card-hover card-glow-outline p-4 flex items-center gap-3">
          <div className="text-green-500 text-3xl font-bold">✓</div>
          <div>
            <div className="tile-title text-green-400">Completed Quests</div>
            <div className="tile-value text-white">87</div>
          </div>
        </Card>

        <Card className="card-hover card-glow-outline p-4 flex items-center gap-3">
          <div className="text-amber-500 text-3xl font-bold">★</div>
          <div>
            <div className="tile-title text-amber-400">Achievements</div>
            <div className="tile-value text-white">24</div>
          </div>
        </Card>

        <Card className="card-hover card-glow-outline p-4 flex items-center gap-3">
          <div className="text-blue-500 text-3xl font-bold">≡</div>
          <div>
            <div className="tile-title text-blue-400">Analytics</div>
            <div className="tile-value text-white">NR $128K (+12% MoM) ↑</div>
          </div>
        </Card>
      </div>

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

      {/* Analytics */}
      <Card className="card-hover card-glow-outline">
        <div className="px-6 pt-6">
          <h2 className="section-title text-pink-400">Analytics</h2>
        </div>
        <div className="p-6 pt-4 space-y-6">
          <AnalyticsOverview />  {/* Three metric cards: Active Users, Revenue, Engagement */}
          <Analytics />          {/* Line chart */}
          {AnalyticsPieChart && <AnalyticsPieChart />} {/* Pie/Donut chart if exists */}
        </div>
      </Card>
    </div>
  )
}
