'use client'

import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  value: string
  icon?: React.ReactNode
  href?: string
  titleColor?: string // accepts tailwind color class (e.g. "text-sky-400")
}

export default function StatsCard({ title, value, icon, href, titleColor = 'text-muted-foreground' }: Props) {
  const Inner = (
    <div className="p-4 rounded-md min-h-[72px] flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <div className={`text-sm font-medium ${titleColor}`}>{title}</div>
        {icon && <div className="opacity-80">{icon}</div>}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div className="text-2xl font-semibold text-white leading-tight">{value}</div>
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block">
        <div className="bg-[#0B1220]/60 backdrop-blur-md border border-white/8 rounded-lg shadow hover:shadow-md transition">
          {Inner}
        </div>
      </Link>
    )
  }

  return (
    <div className="bg-[#0B1220]/60 backdrop-blur-md border border-white/8 rounded-lg shadow">
      {Inner}
    </div>
  )
}
