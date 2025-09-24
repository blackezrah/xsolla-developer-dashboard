"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Home, Award, BarChart3, Zap, Settings } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { href: "/", label: "Dashboard", icon: Home },
  { href: "/quests", label: "Quests", icon: Zap },
  { href: "/achievements", label: "Achievements", icon: Award },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/settings", label: "Settings", icon: Settings },
]

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  const NavLinks = () => (
    <nav className="mt-8 space-y-2">
      {navItems.map((item) => {
        const Icon = item.icon
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-300 
                       hover:text-white hover:bg-pink-600/20 transition-colors"
          >
            <Icon size={18} />
            <span>{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )

  const LogoBlock = () => (
    <div className="flex flex-col items-center gap-2 p-6">
      <Image
        src="/logo.png"
        alt="Xsolla Logo"
        width={200}
        height={60}
        className="h-auto w-full object-contain"
        priority
      />
      <h1 className="text-pink-600 font-extrabold text-2xl tracking-wide text-center">
        XSOLLA
      </h1>
      <h2 className="text-gray-300 font-medium text-sm text-center">
        Developer Dashboard
      </h2>
    </div>
  )

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden p-4 border-b border-pink-500/20 flex items-center justify-between bg-black/60 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
        <LogoBlock />
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="text-pink-500 hover:text-pink-400 transition-colors">
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-black/95 border-r border-pink-500/20 p-6">
            <LogoBlock />
            <NavLinks />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-full w-64 flex-col bg-black/80 border-r border-pink-500/20 z-40">
        <LogoBlock />
        <NavLinks />
      </aside>
    </>
  )
}
