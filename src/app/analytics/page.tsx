'use client'

import AnalyticsOverview from '@/components/AnalyticsOverview'
import { Card } from '@/components/ui/card'

export default function AnalyticsPage() {
  return (
    <div className="p-4 sm:p-6">
      <div className="rounded-xl bg-[rgba(15,23,42,0.7)] shadow-md backdrop-blur-md p-6 space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-accent-blue">Analytics</h1>
          <p className="text-muted-foreground">Dive into trends and insights with real-time analytics charts.</p>
        </div>

        <Card className="card-hover card-glow-outline p-4 sm:p-6">
          <AnalyticsOverview />
        </Card>
      </div>
    </div>
  )
}
