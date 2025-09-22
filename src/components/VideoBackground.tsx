'use client'

interface VideoBackgroundProps {
  videoUrl: string
  fallbackImage: string
}

export default function VideoBackground({ videoUrl, fallbackImage }: VideoBackgroundProps) {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <video
        key={videoUrl}
        className="w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Fallback image (if video fails) */}
      <noscript>
        <img
          src={fallbackImage}
          alt="Background fallback"
          className="w-full h-full object-cover"
        />
      </noscript>
    </div>
  )
}
