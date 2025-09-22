import QuickActions from '@/components/QuickActions'
import { Card } from '@/components/ui/card'

export default function QuickActionsPage() {
  return (
    <div className="space-y-8 p-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-accent-amber">Quick Actions</h1>
        <p className="text-muted-foreground">Perform common tasks instantly.</p>
      </div>

      <Card className="card-hover card-glow-outline">
        <div className="px-6 pt-6">
          <h2 className="section-title text-accent-amber">Available Actions</h2>
        </div>
        <div className="p-6 pt-4">
          <QuickActions />
        </div>
      </Card>
    </div>
  )
}
