// src/app/layout.tsx
import "./globals.css"
import Sidebar from "@/components/Sidebar"
import VideoBackground from "@/components/VideoBackground"

export const metadata = {
  title: "Xsolla Developer Dashboard",
  description: "Developer Dashboard built with Next.js and Tailwind",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white relative">
        {/* Video Background */}
        <VideoBackground />

        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <main className="min-h-screen transition-all lg:pl-64 p-6 relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}
