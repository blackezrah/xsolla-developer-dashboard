'use client'

export default function ActiveQuests() {
  const quests = [
    { id: 1, title: 'Complete API Integration', progress: 80 },
    { id: 2, title: 'Design Campaign Flow', progress: 50 },
    { id: 3, title: 'Host Community Event', progress: 25 },
  ]

  return (
    <div className="space-y-4">
      {quests.map((q) => (
        <div key={q.id} className="w-full">
          {/* Quest title */}
          <div className="flex justify-between text-sm text-white mb-1">
            <span>{q.title}</span>
            <span>{q.progress}%</span>
          </div>

          {/* Progress bar */}
          <div className="w-full max-w-full bg-white/5 rounded-md h-2 overflow-hidden">
            <div
              className="h-2 rounded-md"
              style={{
                width: `${q.progress}%`,
                background: 'linear-gradient(90deg,#e11d9e,#7c3aed)',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
