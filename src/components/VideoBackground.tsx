// src/components/VideoBackground.tsx
export default function VideoBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        src="/background.mp4" // ✅ matches the file you added
      />
      <div className="absolute inset-0 bg-black/50" /> {/* dark overlay for readability */}
    </div>
  )
}
