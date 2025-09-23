// src/components/ui/sheet.tsx
'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type SheetContextType = {
  open: boolean
  setOpen: (v: boolean) => void
}

const SheetContext = createContext<SheetContextType | null>(null)

export function Sheet({
  children,
  open: controlledOpen,
  onOpenChange,
}: {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (v: boolean) => void
}) {
  const [internalOpen, setInternalOpen] = useState<boolean>(!!controlledOpen)

  useEffect(() => {
    if (typeof controlledOpen === 'boolean') {
      setInternalOpen(controlledOpen)
    }
  }, [controlledOpen])

  const setOpen = (v: boolean) => {
    if (onOpenChange) onOpenChange(v)
    if (controlledOpen === undefined) setInternalOpen(v)
  }

  return <SheetContext.Provider value={{ open: internalOpen, setOpen }}>{children}</SheetContext.Provider>
}

export function SheetTrigger({
  children,
  asChild = false,
}: {
  children: React.ReactElement
  asChild?: boolean
}) {
  const ctx = useContext(SheetContext)
  if (!ctx) return null
  const { setOpen } = ctx
  const child = React.Children.only(children) as React.ReactElement
  const props = {
    onClick: (e: any) => {
      setOpen(true)
      if (typeof child.props.onClick === 'function') child.props.onClick(e)
    },
  }
  if (asChild) return React.cloneElement(child, props)
  return <button type="button" onClick={() => setOpen(true)}>{children}</button>
}

export function SheetContent({
  children,
  side = 'left',
  className = '',
}: {
  children: React.ReactNode
  side?: 'left' | 'right'
  className?: string
}) {
  const ctx = useContext(SheetContext)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!ctx) return null
  const { open, setOpen } = ctx

  if (!mounted) return null
  if (!open) return null

  const panel = (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 ${side === 'left' ? 'left-0' : 'right-0'} h-full w-72 bg-[rgba(15,23,42,0.95)] backdrop-blur-md p-6 z-50 ${className}`}
      >
        {children}
      </div>
    </>
  )

  return createPortal(panel, document.body)
}
