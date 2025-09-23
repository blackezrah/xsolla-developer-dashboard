import "./globals.css"
import Sidebar from "@/components/Sidebar"

export const metadata = {
  title: "Xsolla Developer Dashboard",
  description: "Gamified developer dashboard built with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <main className="min-h-screen transition-all lg:pl-64 p-6">
          {children}
        </main>
      </body>
    </html>
  )
}
