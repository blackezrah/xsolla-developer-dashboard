"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, Home, Award, BarChart3, Zap, Settings } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { href: "/", label: "Dashboard", icon: Home },
  { href: "/quests", label: "Quests", icon: Zap },
  { href: "/achievements", label: "Achievements", icon: Award },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/settings", label: "Settings", icon: Settings },
]

export default function Sidebar() {
  return (
    <>
      {/* Sidebar for desktop */}
      <aside className="hidden lg:flex lg:flex-col fixed inset-y-0 left-0 w-64 bg-black/60 backdrop-blur-md border-r border-blue-950/10 z-50">
        {/* Logo */}
        <div className="p-6">
          <div className="relative w-full h-32"> {/* Increased height */}
            <Image
              src="/logo.png"
              alt="Xsolla Logo"
              fill
              className="object-cover" // stretches to fill width
              priority
            />
          </div>
          <h1 className="text-pink-600 text-3xl font-bold tracking-wide mt-2">
            XSOLLA
          </h1>
          <p className="text-gray-300 text-lg">Developer Dashboard</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-pink-600/20 transition"
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 text-xs text-gray-500 border-t border-blue-950/10">
          © {new Date().getFullYear()} Xsolla
        </div>
      </aside>

      {/* Mobile Sidebar with Hamburger */}
      <div className="lg:hidden p-4 border-b border-blue-950/10 flex items-center justify-between bg-black/60 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
        <h1 className="text-pink-600 font-bold text-xl">XSOLLA</h1>
        <Sheet>
          <SheetTrigger asChild>
            <button className="text-pink-500 hover:text-pink-400 transition-colors">
              <Menu size={28} />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 bg-black/90 p-6">
            <div className="mb-6">
              <div className="relative w-full h-24"> {/* taller for mobile too */}
                <Image
                  src="/logo.png"
                  alt="Xsolla Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="text-pink-600 text-2xl font-bold tracking-wide mt-2">
                XSOLLA
              </h1>
              <p className="text-gray-300 text-sm">Developer Dashboard</p>
            </div>
            <nav className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-pink-600/20 transition"
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
