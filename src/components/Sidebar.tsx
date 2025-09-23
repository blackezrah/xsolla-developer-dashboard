// src/components/Sidebar.tsx
"use client"

import Link from "next/link"
import { Menu, X, Home, Award, BarChart3, Zap, Settings } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { href: "/", label: "Dashboard", icon: Home },
  { href: "/achievements", label: "Achievements", icon: Award },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/quests", label: "Quests", icon: Zap },
  { href: "/settings", label: "Settings", icon: Settings },
]

export default function Sidebar() {
  return (
    <>
      {/* Mobile Header w/ Hamburger */}
      <div className="lg:hidden p-4 border-b border-blue-950/10 flex items-center justify-between bg-black/60 backdrop-blur-md">
        <Sheet>
          <SheetTrigger asChild>
            <button className="text-blue-500 hover:text-amber-500-400 transition-colors">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 bg-black/90 text-blue-500 backdrop-blur-md border-r border-blue-950/40">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-amber-400">Menu</h2>
              <X size={20} className="text-blue-500" />
            </div>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-md 
                             hover:bg-amber-500/20 hover:text-amber-400 transition-colors"
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <h1 className="text-lg font-bold text-pink-500">Xsolla Dashboard</h1>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:h-screen 
                        lg:fixed lg:left-0 lg:top-0 bg-black/60 backdrop-blur-md 
                        border-r border-blue-950/40 text-blue-500">
        <div className="p-6 text-xl font-bold text-pink-500">Xsolla Dashboard</div>
        <nav className="flex-1 px-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-md 
                         hover:bg-amber-500/20 hover:text-amber-400 transition-colors"
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 text-xs text-gray-400 border-t border-blue-950/20">
          © {new Date().getFullYear()} Xsolla
        </div>
      </aside>
    </>
  )
}
