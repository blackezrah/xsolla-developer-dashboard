'use client'

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'

const pieData = [
  { name: 'Authentication', value: 400 },
  { name: 'Analytics', value: 300 },
  { name: 'Payments', value: 200 },
  { name: 'User Management', value: 100 },
]

const COLORS = ['#06b6d4', '#a855f7', '#f43f5e', '#22c55e']

const lineData = [
  { day: 'Mon', value: 6 },
  { day: 'Tue', value: 9 },
  { day: 'Wed', value: 12 },
  { day: 'Thu', value: 8 },
  { day: 'Fri', value: 10 },
  { day: 'Sat', value: 7 },
  { day: 'Sun', value: 6 },
]

export default function AnalyticsOverview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="card-hover card-glow-outline">
        <CardHeader>
          <CardTitle className="section-title text-accent-violet">
            API Usage Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="card-hover card-glow-outline">
        <CardHeader>
          <CardTitle className="section-title text-accent-green">
            Weekly Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={lineData}>
              <XAxis dataKey="day" stroke="#888" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
