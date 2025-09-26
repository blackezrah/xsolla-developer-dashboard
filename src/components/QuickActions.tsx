"use client"

import { useRouter } from "next/navigation"
import {
  PlusCircle,
  RefreshCw,
  Bug,
  Calendar,
  Map,
  FileBarChart,
  Play,
} from "lucide-react"

export default function QuickActions() {
  const router = useRouter()

  const handleRefresh = () => window.location.reload()
  const handleReportBug = () =>
    window.open("https://github.com/your-org/your-repo/issues/new", "_blank")

  const actions = [
    { label: "New Quest", icon: PlusCircle, color: "bg-green-500", onClick: () => router.push("/quests/new") },
    { label: "Refresh Data", icon: RefreshCw, color: "bg-blue-500", onClick: handleRefresh },
    { label: "Report Bug", icon: Bug, color: "bg-red-500", onClick: handleReportBug },
    { label: "Schedule Event", icon: Calendar, color: "bg-purple-500", onClick: () => router.push("/events/schedule") },
    { label: "View Community Map", icon: Map, color: "bg-yellow-500", onClick: () => router.push("/map") },
    { label: "Analytics Report", icon: FileBarChart, color: "bg-pink-500", onClick: () => router.push("/analytics/report") },
    { label: "Campaign Simulator", icon: Play, color: "bg-orange-500", onClick: () => router.push("/campaign-simulator") },
  ]

  return (
    <section className="px-6 pt-6">
      <h2 className="section-title text-accent-amber mb-4">Quick Actions</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {actions.map((action) => {
          const Icon = action.icon
          return (
            <button
              key={action.label}
              onClick={action.onClick}
              className="flex items-center gap-3 p-4 rounded-xl 
                         bg-black/60 border border-amber-500/50 
                         text-white hover:scale-[1.02] hover:shadow-lg 
                         hover:border-amber-400/70 transition
                         card-hover card-glow-outline backdrop-blur-md w-full text-left"
            >
              <span className={`flex items-center justify-center w-8 h-8 rounded-full ${action.color}`}>
                <Icon size={16} className="text-white" />
              </span>
              <span className="font-medium">{action.label}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
