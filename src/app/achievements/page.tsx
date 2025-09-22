import Achievements from '@/components/Achievements'
import Milestones from '@/components/Milestones'

export default function AchievementsPage() {
  return (
    <div className="p-6">
      <div className="rounded-xl bg-[rgba(15,23,42,0.7)] border border-border/40 shadow-md p-6 space-y-12">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-accent-pink">Achievements</h1>
          <p className="text-muted-foreground">
            View your earned achievements and track milestones as you progress.
          </p>
        </div>

        {/* Achievements */}
        <div className="space-y-4">
          <Achievements />
          <p className="text-sm text-muted-foreground">
            These are the rewards you’ve unlocked for completing quests and reaching goals.
          </p>
        </div>

        {/* Milestones */}
        <div className="space-y-4">
          <Milestones />
          <p className="text-sm text-muted-foreground">
            These are the milestone badges earned as your XP increases over time.
          </p>
        </div>
      </div>
    </div>
  )
}
