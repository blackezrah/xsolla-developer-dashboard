import "./globals.css"
import Sidebar from "@/components/Sidebar"
import VideoBackground from "@/components/VideoBackground"

export const metadata = {
  title: "Xsolla Developer Dashboard",
  description: "Responsive developer dashboard",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative text-white">
        {/* Video background */}
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
