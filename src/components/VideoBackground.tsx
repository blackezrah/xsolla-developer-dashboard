// src/components/VideoBackground.tsx
"use client"

import React from "react"

export default function VideoBackground() {
  // Uses public/background.mp4 (place your file at /public/background.mp4)
  // playsInline + muted allow autoplay on mobile browsers
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        // Use the filename you placed in /public
        src="/background.mp4"
      />
      {/* subtle dark overlay so text/cards stay readable */}
      <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
    </div>
  )
}
