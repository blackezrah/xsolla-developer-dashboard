"use client"

export default function VideoBackground() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      poster="/background-poster.jpg"
      className="fixed top-0 left-0 w-full h-full object-cover -z-10"
    >
      <source src="/background-silent.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
