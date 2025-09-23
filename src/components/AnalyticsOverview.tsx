// src/components/AnalyticsOverview.tsx
"use client"

import { useState } from "react"
import {
  PieChart,
  Pie,
  Sector,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts"
import { Card } from "@/components/ui/card"

const pieData = [
  { name: "Authentication", value: 35, fill: "#0ea5e9" }, // cyan
  { name: "Analytics", value: 25, fill: "#a855f7" }, // purple
  { name: "Payments", value: 20, fill: "#ef4444" }, // red
  { name: "User Management", value: 20, fill: "#22c55e" }, // green
]

const lineData = [
  { name: "Mon", value: 6 },
  { name: "Tue", value: 9 },
  { name: "Wed", value: 12 },
  { name: "Thu", value: 8 },
  { name: "Fri", value: 10 },
  { name: "Sat", value: 11 },
  { name: "Sun", value: 6 },
]

// 🔹 Custom renderer for active slice
const renderActiveShape = (props: any) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, value } = props
  const RADIAN = Math.PI / 180
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)

  const offset = 6 // subtle movement
  const sx = cx + offset * cos
  const sy = cy + offset * sin

  return (
    <g>
      {/* glowing active slice */}
      <Sector
        cx={sx}
        cy={sy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 4}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        style={{
          filter: `drop-shadow(0 0 10px ${fill})`,
          transition: "all 0.2s ease-out",
        }}
      />
      {/* labels in center */}
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#fff" className="text-lg font-semibold">
        {payload.name}
      </text>
      <text x={cx} y={cy + 20} dy={8} textAnchor="middle" fill="#9ca3af" className="text-sm">
        {value}%
      </text>
    </g>
  )
}

export default function AnalyticsOverview() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Pie Chart */}
      <Card className="p-6 rounded-2xl bg-black/30 border border-purple-500/50 shadow-lg backdrop-blur-md">
        <h2 className="text-xl font-bold mb-4 text-purple-400">API Usage Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={3}
              dataKey="value"
              onMouseEnter={(_, index) => setActiveIndex(index)}
            />
            <Tooltip
              contentStyle={{ backgroundColor: "#111827", border: "1px solid #374151", color: "#fff" }}
              itemStyle={{ color: "#fff" }}
              labelStyle={{ color: "#fff" }}
            />
            <Legend wrapperStyle={{ color: "white" }} />
          </PieChart>
        </ResponsiveContainer>
      </Card>

      {/* Line Chart */}
      <Card className="p-6 rounded-2xl bg-black/30 border border-blue-500/50 shadow-lg backdrop-blur-md">
        <h2 className="text-xl font-bold mb-4 text-blue-400">Weekly Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{ backgroundColor: "#111827", border: "1px solid #374151", color: "#fff" }}
              itemStyle={{ color: "#fff" }}
              labelStyle={{ color: "#fff" }}
            />
            <Legend verticalAlign="top" height={36} wrapperStyle={{ color: "white" }} />
            <Line
              type="monotone"
              dataKey="value"
              name="API Calls"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 4, fill: "#3b82f6" }}
              activeDot={{ r: 7, strokeWidth: 2, fill: "#fff" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}
