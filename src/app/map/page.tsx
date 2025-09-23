'use client'

import { Map as MapIcon } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function CommunityMapPage() {
  return (
    <div className="p-4 sm:p-6">
      <div className="rounded-xl bg-[rgba(15,23,42,0.7)] shadow-md backdrop-blur-md p-6 space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-accent-yellow">Community Map</h1>
          <p className="text-muted-foreground">Visualize global developer activity and community engagement.</p>
        </div>

        <Card className="card-hover card-glow-outline p-6 flex flex-col items-center justify-center text-center">
          <MapIcon size={48} className="text-yellow-400 mb-4" />
          <h2 className="text-lg font-semibold text-white">Community Map Coming Soon</h2>
          <p className="text-sm text-muted-foreground mt-2">
            A dynamic map will show real-time activity, users, and clusters of engagement worldwide.
          </p>
        </Card>
      </div>
    </div>
  )
}
