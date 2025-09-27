// src/app/layout.tsx
import React from "react"
import Sidebar from "@/components/Sidebar"
import VideoBackground from "@/components/VideoBackground"
import "@/app/globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white min-h-screen">
        {/* Background video */}
        <VideoBackground />

        {/* Sidebar (drawer on mobile, fixed on desktop) */}
        <Sidebar />

        {/* Main content - only padded on desktop */}
        <main className="min-h-screen transition-all p-4 sm:p-6 relative z-10 lg:pl-64">
          {children}
        </main>
      </body>
    </html>
  )
}
