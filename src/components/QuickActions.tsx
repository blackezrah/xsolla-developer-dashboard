'use client'

import { useRouter } from 'next/navigation'
import {
  PlusCircle,
  RefreshCw,
  Bug,
  Calendar,
  Map,
  FileBarChart,
  Play,
} from 'lucide-react'

export default function QuickActions() {
  const router = useRouter()

  const handleRefresh = () => window.location.reload()
  const handleReportBug = () =>
    window.open('https://github.com/your-org/your-repo/issues/new', '_blank')

  const actions = [
    {
      label: 'New Quest',
      icon: PlusCircle,
      color: 'text-green-400',
      glow: 'drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]',
      onClick: () => router.push('/quests/new'),
    },
    {
      label: 'Refresh Data',
      icon: RefreshCw,
      color: 'text-blue-400',
      glow: 'drop-shadow-[0_0_6px_rgba(59,130,246,0.8)]',
      onClick: handleRefresh,
    },
    {
      label: 'Report Bug',
      icon: Bug,
      color: 'text-red-400',
      glow: 'drop-shadow-[0_0_6px_rgba(239,68,68,0.8)]',
      onClick: handleReportBug,
    },
    {
      label: 'Schedule Event',
      icon: Calendar,
      color: 'text-purple-400',
      glow: 'drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]',
      onClick: () => router.push('/events/schedule'),
    },
    {
      label: 'View Community Map',
      icon: Map,
      color: 'text-yellow-400',
      glow: 'drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]',
      onClick: () => router.push('/map'),
    },
    {
      label: 'Analytics Report',
      icon: FileBarChart,
      color: 'text-pink-400',
      glow: 'drop-shadow-[0_0_6px_rgba(236,72,153,0.8)]',
      onClick: () => router.push('/analytics/report'),
    },
    {
      label: 'Campaign Simulator',
      icon: Play,
      color: 'text-orange-400',
      glow: 'drop-shadow-[0_0_6px_rgba(251,146,60,0.8)]',
      onClick: () => router.push('/campaign-simulator'),
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {actions.map((action) => {
        const Icon = action.icon
        return (
          <button
            key={action.label}
            onClick={action.onClick}
            className="flex items-center gap-3 p-4 rounded-xl bg-[rgba(15,23,42,0.7)] border border-border/40 text-white 
                       hover:scale-[1.02] hover:shadow-lg hover:border-pink-400/50 transition card-hover card-glow-outline w-full text-left"
          >
            {/* Glowing Icon */}
            <Icon size={20} className={`${action.color} ${action.glow}`} />
            <span className="font-medium">{action.label}</span>
          </button>
        )
      })}
    </div>
  )
}
