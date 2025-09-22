// src/components/ui/card.tsx
import React, { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl bg-[rgba(8,14,26,0.6)] border border-[rgba(255,255,255,0.06)] backdrop-blur-md shadow-lg p-6 transition-transform will-change-transform ${className}`}
      role="region"
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h3 className={`text-lg font-bold leading-tight ${className}`}>{children}</h3>;
}

export function CardContent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`text-sm text-muted-foreground ${className}`}>{children}</div>;
}

export default Card;
