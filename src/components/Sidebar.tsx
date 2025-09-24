// src/components/Sidebar.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Award, BarChart3, Zap, Settings, Map } from "lucide-react"
import Image from "next/image"

const navItems = [
  { href: "/", label: "Dashboard", icon: Home },
  { href: "/quests", label: "Quests", icon: Zap },
  { href: "/achievements", label: "Achievements", icon: Award },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/settings", label: "Settings", icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed inset-y-0 left-0 z-40 w-64 bg-black/70 backdrop-blur-md border-r border-blue-950/20 flex flex-col">
      {/* Logo at top */}
      <div className="p-6 flex flex-col items-center border-b border-blue-950/20">
        <Image
          src="/logo.PNG" // ✅ make sure this file is in /public
          alt="Xsolla Logo"
          width={200}
          height={60}
          className="object-contain w-full"
          priority
        />
        <h1 className="text-pink-600 text-3xl font-bold tracking-wide mt-3">
          XSOLLA
        </h1>
        <p className="text-gray-300 text-lg">Developer Dashboard</p>
      </div>

      {/* Nav links */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-3 px-4 py-2 rounded-lg transition
                ${
                  isActive
                    ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-md"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }
              `}
            >
              <Icon size={18} />
              <span className="font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 text-xs text-gray-400 border-t border-blue-950/20">
        © {new Date().getFullYear()} Xsolla
      </div>
    </aside>
  )
}
