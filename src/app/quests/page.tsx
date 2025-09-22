'use client'

export default function QuestsPage() {
  return (
    <div className="p-6">
      <div className="rounded-xl bg-[rgba(15,23,42,0.7)] shadow-md p-6 space-y-6">
        <h1 className="text-2xl font-bold text-accent-green">Quests</h1>
        <p className="text-muted-foreground">
          View and manage your active and completed quests here.
        </p>

        {/* Page content goes here */}
        <div className="text-sm text-muted-foreground">
          (Quest list will be displayed here)
        </div>
      </div>
    </div>
  )
}
