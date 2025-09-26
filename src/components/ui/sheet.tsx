// src/components/ui/sheet.tsx
"use client"

import * as React from "react"
import * as Dialog from "@radix-ui/react-dialog"

/**
 * Minimal Sheet (drawer) wrapper using Radix Dialog.
 * Exports:
 * - Sheet: wrapper root (<Dialog.Root>)
 * - SheetTrigger: Dialog.Trigger (use asChild if you pass a button)
 * - SheetContent: portal + content anchored to left (usable for mobile)
 *
 * This file intentionally keeps typings loose so it's easy to use in different contexts.
 */

type SheetProps = {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function Sheet({ children, open, onOpenChange }: SheetProps) {
  // pass through open and onOpenChange (so page can control it if desired)
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  )
}

// Use as: <SheetTrigger asChild><button>...</button></SheetTrigger>
export const SheetTrigger: React.FC<any> = (props) => {
  return <Dialog.Trigger {...props} />
}

// A default left-side drawer content
export const SheetContent: React.FC<{
  children: React.ReactNode
  side?: "left" | "right"
  className?: string
}> = ({ children, side = "left", className = "" }) => {
  const sideClass = side === "left" ? "left-0" : "right-0"
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
      <Dialog.Content
        className={`fixed top-0 bottom-0 ${sideClass} z-50 w-64 sm:w-80 p-6 bg-black/80 border-l border-white/5 ${className}`}
        aria-label="Sidebar"
      >
        {children}
        <Dialog.Close className="sr-only">Close</Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
