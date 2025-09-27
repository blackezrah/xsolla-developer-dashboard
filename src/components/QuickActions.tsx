"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Play,
  Bug,
  PlusCircle,
  Calendar,
  RefreshCw,
  Map,
  BarChart3,
} from "lucide-react"

export default function QuickActions() {
  const actions = [
    {
      name: "Campaign Simulator",
      href: "/campaign-simulator",
      icon: Play,
      color: "text-green-400 border-green-400 hover:bg-green-400/10",
    },
    {
      name: "Report a Bug",
      href: "/settings", // adjust if you had a dedicated bug page
      icon: Bug,
      color: "text-red-400 border-red-400 hover:bg-red-400/10",
    },
    {
      name: "New Quest",
      href: "/quests",
      icon: PlusCircle,
      color: "text-pink-400 border-pink-400 hover:bg-pink-400/10",
    },
    {
      name: "Schedule Event",
      href: "/events",
      icon: Calendar,
      color: "text-blue-400 border-blue-400 hover:bg-blue-400/10",
    },
    {
      name: "Refresh Data",
      href: "/analytics",
      icon: RefreshCw,
      color: "text-yellow-400 border-yellow-400 hover:bg-yellow-400/10",
    },
    {
      name: "View Community Map",
      href: "/map",
      icon: Map,
      color: "text-purple-400 border-purple-400 hover:bg-purple-400/10",
    },
    {
      name: "Analytics Report",
      href: "/analytics",
      icon: BarChart3,
      color: "text-indigo-400 border-indigo-400 hover:bg-indigo-400/10",
    },
  ]

  return (
    <Card className="card-hover card-glow-outline p-6 rounded-2xl bg-black/60 border border-green-500/50 shadow-lg backdrop-blur-md">
      <CardContent>
        <h2 className="section-title text-amber-400 mb-4 font-semibold text-xl">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {actions.map((action) => (
            <Link key={action.name} href={action.href} className="w-full">
              <Button
                variant="outline"
                className={`w-full flex items-center justify-center gap-2 font-bold rounded-xl border-2 transition ${action.color}`}
              >
                <action.icon className="h-5 w-5" />
                {action.name}
              </Button>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
