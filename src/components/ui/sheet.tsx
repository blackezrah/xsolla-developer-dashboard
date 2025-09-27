"use client"

import * as React from "react"
import * as Dialog from "@radix-ui/react-dialog"

export function Sheet({ children }: { children: React.ReactNode }) {
  return <Dialog.Root>{children}</Dialog.Root>
}

export function SheetTrigger({ children, asChild }: { children: React.ReactNode; asChild?: boolean }) {
  return <Dialog.Trigger asChild={asChild}>{children}</Dialog.Trigger>
}

export function SheetContent({
  children,
  side = "left",
  className = "",
}: {
  children: React.ReactNode
  side?: "left" | "right"
  className?: string
}) {
  const sideClass = side === "left" ? "left-0" : "right-0"
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />
      <Dialog.Content
        className={`fixed top-0 bottom-0 ${sideClass} z-50 w-64 sm:w-80 p-6 
          bg-black text-white border-r border-white/10 shadow-lg 
          backdrop-blur-md ${className}`}
      >
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  )
}
