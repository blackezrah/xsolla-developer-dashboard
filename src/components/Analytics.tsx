// src/components/Analytics.tsx
import { Card } from "@/components/ui/card"

export default function Analytics() {
  return (
    <Card className="p-6 rounded-2xl bg-black/30 border border-green-500/50 shadow-lg backdrop-blur-md">
      <h2 className="text-xl font-bold mb-4 text-green-400">Analytics</h2>
      <div className="text-sm text-muted-foreground space-y-2">
        <p>👥 Active users: <span className="text-white">1,204</span></p>
        <p>📈 Growth rate: <span className="text-white">+12%</span></p>
        <p>💰 Revenue: <span className="text-white">$8,450</span></p>
      </div>
    </Card>
  )
}
