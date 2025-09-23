// src/components/Sidebar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, LayoutDashboard, ListChecks, Award, BarChart3, Settings, Zap } from 'lucide-react'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'

const navItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Quests', href: '/quests', icon: ListChecks },
  { name: 'Achievements', href: '/achievements', icon: Award },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Quick Actions', href: '/quick-actions', icon: Zap },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname() || '/'
  const [open, setOpen] = useState(false)

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/')

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-[rgba(15,23,42,0.85)] backdrop-blur-md border-r border-border/20 shadow-lg z-40">
        <div className="p-6 border-b border-border/20">
          <h1 className="text-2xl font-bold text-pink-400 tracking-tight">Xsolla</h1>
          <p className="text-xs text-muted-foreground mt-1">Developer Dashboard</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={
                  'flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-150 ' +
                  (active
                    ? 'bg-pink-500/20 text-pink-400 font-semibold shadow-sm'
                    : 'text-muted-foreground hover:bg-[rgba(59,130,246,0.06)] hover:text-foreground hover:scale-[1.02]')
                }
              >
                <Icon size={18} className={active ? 'text-pink-400' : 'text-current'} />
                <span className="truncate">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        <div className="p-4 text-xs text-muted-foreground border-t border-border/20">
          © {new Date().getFullYear()} Xsolla
        </div>
      </aside>

      {/* Mobile Top Bar with Hamburger */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-50">
        <div className="flex items-center justify-between p-3 bg-[rgba(15,23,42,0.85)] backdrop-blur-md border-b border-border/20">
          <div className="flex items-center gap-3">
            <button className="text-pink-400 font-bold text-lg" aria-hidden>
              Xsolla
            </button>
            <span className="text-xs text-muted-foreground hidden">Developer Dashboard</span>
          </div>

          <div>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  aria-label="Open menu"
                  onClick={() => setOpen(true)}
                  className="p-2 rounded-md text-white hover:text-pink-400 transition"
                >
                  <Menu size={22} />
                </button>
              </SheetTrigger>

              <SheetContent side="left" className="max-w-xs">
                <div className="flex items-center justify-between mb-6">
                  <div className="font-bold text-lg text-pink-400">Xsolla</div>
                  <button
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                    className="p-2 text-white hover:text-pink-400"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="flex flex-col gap-3">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    const active = isActive(item.href)
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={
                          'flex items-center gap-3 px-3 py-2 rounded-md transition ' +
                          (active
                            ? 'bg-pink-500/20 text-pink-400 font-medium'
                            : 'text-white hover:bg-pink-500/10')
                        }
                      >
                        <Icon size={18} />
                        <span>{item.name}</span>
                      </Link>
                    )
                  })}
                </nav>

                <div className="mt-6 text-xs text-muted-foreground">© {new Date().getFullYear()} Xsolla</div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* spacer so content doesn't hide under mobile top bar */}
      <div className="lg:hidden h-14" />
    </>
  )
}
