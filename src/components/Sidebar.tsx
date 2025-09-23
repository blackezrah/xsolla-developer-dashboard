'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  ListChecks,
  Award,
  BarChart3,
  Settings,
} from 'lucide-react'

const navItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Quests', href: '/quests', icon: ListChecks },
  { name: 'Achievements', href: '/achievements', icon: Award },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname() || '/'

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="flex items-center justify-between p-4 bg-[rgba(15,23,42,0.85)] border-b border-border/20 md:hidden">
        <h1 className="text-lg font-bold text-pink-400">Xsolla</h1>
        <button className="p-2 rounded-md bg-white/10 text-white">☰</button>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed inset-y-0 left-0 w-64 bg-[rgba(15,23,42,0.85)] backdrop-blur-md border-r border-border/40 shadow-lg z-40 flex-col">
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
        </nav>

        {/* Footer */}
        <div className="p-4 text-xs text-muted-foreground border-t border-border/20">
          © {new Date().getFullYear()} Xsolla
        </div>
      </aside>
    </>
  )
}
