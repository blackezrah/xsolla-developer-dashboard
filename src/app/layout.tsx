import './globals.css'
import type { ReactNode } from 'react'
import VideoBackground from '@/components/VideoBackground'
import Sidebar from '@/components/Sidebar'

export const metadata = {
  title: 'Xsolla Developer Dashboard',
  description: 'Developer dashboard with quests, achievements, and analytics.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative min-h-screen font-sans antialiased">
        {/* Video Background */}
        <VideoBackground
          videoUrl="https://res.cloudinary.com/dwrdmqonu/video/upload/v1758080802/12900822_1920_1080_30fps_ftneoi.mp4"
          fallbackImage="/xsollalogo.PNG"
        />

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content (offset for sidebar width) */}
        <div className="ml-64 relative z-10 p-8">
          {children}
        </div>
      </body>
    </html>
  )
}
