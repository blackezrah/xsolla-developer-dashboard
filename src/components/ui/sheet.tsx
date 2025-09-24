"use client"

import * as React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { cn } from "@/lib/utils"

interface SheetProps {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function Sheet({ children, open, onOpenChange }: SheetProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  )
}

export const SheetTrigger = Dialog.Trigger

export function SheetContent({
  className,
  side = "left",
  children,
}: {
  className?: string
  side?: "left" | "right" | "top" | "bottom"
  children: React.ReactNode
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
      <Dialog.Content
        className={cn(
          "fixed z-50 bg-black text-white shadow-xl p-6",
          side === "left" && "inset-y-0 left-0 w-64 animate-slide-in-left",
          side === "right" && "inset-y-0 right-0 w-64 animate-slide-in-right",
          side === "top" && "inset-x-0 top-0 h-64 animate-slide-in-top",
          side === "bottom" && "inset-x-0 bottom-0 h-64 animate-slide-in-bottom",
          className
        )}
      >
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  )
}

export const SheetClose = Dialog.Close
