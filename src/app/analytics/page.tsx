'use client'

import AnalyticsOverview from '@/components/AnalyticsOverview'

export default function AnalyticsPage() {
  return (
    <div className="p-6">
      <div className="rounded-xl bg-[rgba(15,23,42,0.7)] shadow-md p-6 space-y-6">
        <h1 className="text-2xl font-bold text-accent-blue">Analytics</h1>
        <p className="text-muted-foreground">
          Monitor user growth, engagement, and revenue trends.
        </p>

        <AnalyticsOverview />
      </div>
    </div>
  )
}
