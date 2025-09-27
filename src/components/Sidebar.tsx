// src/components/Sidebar.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { name: "Dashboard", href: "/" },
  { name: "Quests", href: "/quests" },
  { name: "Achievements", href: "/achievements" },
  { name: "Analytics", href: "/analytics" },
  { name: "Settings", href: "/settings" },
  { name: "Campaign Simulator", href: "/campaign-simulator" },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-black/70 backdrop-blur-md p-4 border-b border-border/20">
        <Image
  src="/logo.png"
  alt="XSOLLA Logo"
  width={120}
  height={40}
  className="h-8 w-auto object-contain"
/>
        <Sheet>
          <SheetTrigger asChild>
            <button className="text-pink-500 hover:text-pink-400 transition">
              <Menu size={28} />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-black/90 backdrop-blur-xl p-6 w-64">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`sidebar-link ${
                    pathname === item.href ? "sidebar-link-active" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-full w-64 flex-col bg-black/80 backdrop-blur-xl z-40">
        <div className="p-6">
          <Image
  src="/logo.png"
  alt="XSOLLA Logo"
  width={200}
  height={60}
  className="w-full h-auto object-contain"
/>
        </div>
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`sidebar-link ${
                pathname === item.href ? "sidebar-link-active" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="p-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Xsolla
        </div>
      </aside>
    </>
  )
}
