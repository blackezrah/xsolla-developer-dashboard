'use client'

import { Play } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function CampaignSimulatorPage() {
  return (
    <div className="p-4 sm:p-6">
      <div className="rounded-xl bg-[rgba(15,23,42,0.7)] shadow-md backdrop-blur-md p-6 space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-accent-orange">Campaign Simulator</h1>
          <p className="text-muted-foreground">Test and optimize your campaign strategies before launch.</p>
        </div>

        <Card className="card-hover card-glow-outline p-6 flex flex-col items-center justify-center text-center">
          <Play size={48} className="text-orange-400 mb-4" />
          <h2 className="text-lg font-semibold text-white">Campaign Simulator Coming Soon</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Simulate user journeys, test reward balancing, and analyze campaign performance in a sandbox.
          </p>
        </Card>
      </div>
    </div>
  )
}
