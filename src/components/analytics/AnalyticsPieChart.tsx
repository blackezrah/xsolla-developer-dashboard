"use client"

import { Card, CardContent } from "@/components/ui/card"
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Completed Quests", value: 87 },
  { name: "Remaining Quests", value: 13 },
]

const COLORS = ["#f472b6", "#a78bfa"] // Pink → Purple gradient colors

export default function AnalyticsPieChart() {
  return (
    <Card className="p-6 rounded-2xl bg-black/60 border border-green-500/50 shadow-lg backdrop-blur-md card-hover card-glow-outline mt-6">
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">Quest Completion</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
