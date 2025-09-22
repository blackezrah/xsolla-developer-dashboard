'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
  LayoutDashboard,
  ListChecks,
  Award,
  BarChart3,
  Zap,
  PlusCircle,
  Calendar,
  Map,
  FileBarChart,
  Play,
  ChevronDown,
  ChevronRight,
  Settings,
} from 'lucide-react'

const navItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Quests', href: '/quests', icon: ListChecks },
  { name: 'Achievements', href: '/achievements', icon: Award },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/settings', icon: Settings },
]

const quickActions = [
  { name: 'New Quest', href: '/quests/new', icon: PlusCircle },
  { name: 'Schedule Event', href: '/events/schedule', icon: Calendar },
  { name: 'Community Map', href: '/map', icon: Map },
  { name: 'Analytics Report', href: '/analytics/report', icon: FileBarChart },
  { name: 'Campaign Simulator', href: '/campaign-simulator', icon: Play },
]

export default function Sidebar() {
  const pathname = usePathname() || '/'
  const [qaOpen, setQaOpen] = useState(false)

  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-[rgba(15,23,42,0.85)] backdrop-blur-md border-r border-border/40 shadow-lg z-40 flex flex-col">
      {/* Branding */}
      <div className="p-6 border-b border-border/20">
        <h1 className="text-2xl font-bold text-pink-400 tracking-tight">Xsolla</h1>
        <p className="text-xs text-muted-foreground mt-1">Developer Dashboard</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive =
            item.href === '/'
              ? pathname === '/'
              : pathname === item.href || pathname.startsWith(item.href + '/')

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? 'page' : undefined}
              className={
                'flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-150 ' +
                (isActive
                  ? 'bg-pink-500/20 text-pink-400 font-semibold shadow-sm transform scale-100'
                  : 'text-muted-foreground hover:bg-[rgba(59,130,246,0.06)] hover:text-foreground hover:scale-[1.02]')
              }
            >
              <Icon size={18} className={isActive ? 'text-pink-400' : 'text-current'} />
              <span className="truncate">{item.name}</span>
            </Link>
          )
        })}

        {/* Quick Actions Collapsible */}
        <button
          onClick={() => setQaOpen(!qaOpen)}
          className={
            'w-full flex items-center justify-between px-4 py-2 rounded-lg transition-all duration-150 ' +
            (qaOpen
              ? 'bg-pink-500/20 text-pink-400 font-semibold'
              : 'text-muted-foreground hover:bg-[rgba(59,130,246,0.06)] hover:text-foreground')
          }
        >
          <span className="flex items-center gap-3">
            <Zap size={18} className={qaOpen ? 'text-pink-400' : 'text-current'} />
            Quick Actions
          </span>
          {qaOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </button>

        {qaOpen && (
          <div className="ml-8 mt-2 space-y-1">
            {quickActions.map((item) => {
              const Icon = item.icon
              const isActive =
                pathname === item.href || pathname.startsWith(item.href + '/')

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={
                    'flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-150 ' +
                    (isActive
                      ? 'bg-pink-500/20 text-pink-400 font-semibold shadow-sm'
                      : 'text-muted-foreground hover:bg-[rgba(59,130,246,0.06)] hover:text-foreground')
                  }
                >
                  <Icon size={16} className={isActive ? 'text-pink-400' : 'text-current'} />
                  <span className="truncate">{item.name}</span>
                </Link>
              )
            })}
          </div>
        )}
      </nav>

      {/* Footer */}
      <div className="p-4 text-xs text-muted-foreground border-t border-border/20">
        © {new Date().getFullYear()} Xsolla
      </div>
    </aside>
  )
}
