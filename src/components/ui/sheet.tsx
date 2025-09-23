'use client'

import * as React from 'react'
import * as Dialog from '@radix-ui/react-dialog'

interface SheetProps {
  children: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function Sheet({ children, open, onOpenChange }: SheetProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  )
}

interface SheetTriggerProps {
  children: React.ReactElement
  asChild?: boolean
}

export function SheetTrigger({ children, asChild = false }: SheetTriggerProps) {
  return <Dialog.Trigger asChild={asChild}>{children}</Dialog.Trigger>
}

interface SheetContentProps {
  children: React.ReactNode
  side?: 'left' | 'right'
  className?: string
}

export function SheetContent({
  children,
  side = 'left',
  className = '',
}: SheetContentProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
      <Dialog.Content
        className={`fixed top-0 ${side}-0 h-full w-64 bg-[rgba(15,23,42,0.95)] shadow-lg z-50 p-6 ${className}`}
      >
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  )
}
