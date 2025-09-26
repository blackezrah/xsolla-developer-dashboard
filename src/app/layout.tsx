// src/app/layout.tsx
import React from "react"
import Sidebar from "@/components/Sidebar"
import VideoBackground from "@/components/VideoBackground"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white min-h-screen">
        {/* Background video sits behind everything */}
        <VideoBackground />

        {/* Sidebar (fixed on left on lg, drawer on mobile) */}
        <Sidebar />

        {/* Main content area - leave a large left padding on lg to avoid being hidden by the sidebar */}
        <main className="min-h-screen transition-all lg:pl-64 p-6 relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}
