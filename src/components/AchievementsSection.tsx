import Achievements from '@/components/Achievements'
import Milestones from '@/components/Milestones'

export default function AchievementsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Achievements */}
      <div>
        <Achievements />
      </div>

      {/* Milestones */}
      <div>
        <Milestones />
      </div>
    </div>
  )
}
