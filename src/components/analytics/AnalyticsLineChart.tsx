'use client'

import { Card, CardContent } from '@/components/ui/card'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const data = [
  { name: 'Jan', users: 400, revenue: 2400 },
  { name: 'Feb', users: 300, revenue: 2210 },
  { name: 'Mar', users: 500, revenue: 2290 },
  { name: 'Apr', users: 278, revenue: 2000 },
]

export default function AnalyticsLineChart() {
  return (
    <Card className="p-6 rounded-2xl bg-black/60 border border-green-500/50 shadow-lg backdrop-blur-md card-hover card-glow-outline">
      <CardContent>
        <h3 className="text-xl font-semibold mb-4">Active Users & Revenue</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="name" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#00ffcc" strokeWidth={2} />
            <Line type="monotone" dataKey="revenue" stroke="#ff4081" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
