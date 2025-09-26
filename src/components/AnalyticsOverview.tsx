"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, DollarSign, Activity } from "lucide-react"

export default function Overview() {
  const stats = [
    { name: "Active Users", value: "12,345", icon: Users },
    { name: "Revenue", value: "$45,678", icon: DollarSign },
    { name: "Engagement", value: "76%", icon: Activity },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <Card
          key={stat.name}
          className="p-6 rounded-2xl bg-black/60 border border-green-500/50 shadow-lg backdrop-blur-md card-hover card-glow-outline"
        >
          <CardContent className="flex items-center space-x-4">
            <stat.icon className="h-8 w-8 text-green-400" />
            <div>
              <p className="text-sm text-gray-400">{stat.name}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
