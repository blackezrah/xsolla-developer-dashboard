// src/components/Sidebar.tsx
"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, Home, Zap, Award, BarChart3, Settings, List, CheckSquare } from "lucide-react"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"

const navItems = [
  { href: "/", label: "Dashboard", icon: Home },
  { href: "/quests", label: "Quests", icon: List },
  { href: "/achievements", label: "Achievements", icon: Award },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/settings", label: "Settings", icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname() ?? "/"
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 lg:flex lg:flex-col lg:bg-gradient-to-b lg:from-black/70 lg:via-black/80 lg:to-black/70 lg:backdrop-blur-md z-20 border-r border-white/2">
        {/* Logo area */}
        <div className="px-6 py-6 flex flex-col items-center">
          {/* Put your logo file at /public/XSOLLA.png (case-sensitive) */}
          <div className="w-full">
            <img src="/XSOLLA.png" alt="Xsolla Logo" className="w-full h-40 object-contain" />
          </div>

          <div className="mt-4 text-center">
            <div className="text-3xl font-extrabold text-pink-600 tracking-tight">XSOLLA</div>
            <div className="text-xs text-muted-foreground mt-1">Developer Dashboard</div>
          </div>
        </div>

        <nav className="mt-6 px-4 pb-6 space-y-1 flex-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  active ? "bg-pink-900/40 text-pink-300" : "text-white/85 hover:bg-white/5"
                }`}
              >
                <Icon className={`w-5 h-5 ${active ? "text-pink-400" : "text-white/60"}`} />
                <span className="font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="px-6 py-4 text-xs text-muted-foreground">© 2025 Xsolla</div>
      </aside>

      {/* Mobile header + drawer */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50">
        <div className="p-4 border-b border-white/5 flex items-center justify-between bg-black/60 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <img src="/XSOLLA.png" alt="Xsolla Logo" className="h-10 w-10 object-contain" />
            <div>
              <div className="text-pink-600 font-bold text-lg">XSOLLA</div>
              <div className="text-xs text-muted-foreground">Developer Dashboard</div>
            </div>
          </div>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="text-pink-400 hover:text-pink-300 transition-colors"
                onClick={() => setMobileOpen(true)}
              >
                <Menu size={26} />
              </button>
            </SheetTrigger>

            <SheetContent side="left" className="p-4">
              <div className="mb-6">
                <img src="/XSOLLA.png" alt="Xsolla Logo" className="w-full h-36 object-contain" />
                <div className="mt-4 text-center">
                  <div className="text-2xl font-bold text-pink-600">XSOLLA</div>
                </div>
              </div>

              <nav className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const active = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-3 py-3 rounded-md transition-colors ${
                        active ? "bg-pink-900/40 text-pink-300" : "text-white/85 hover:bg-white/5"
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${active ? "text-pink-400" : "text-white/60"}`} />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  )
}
