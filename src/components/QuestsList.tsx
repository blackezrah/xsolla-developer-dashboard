'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function QuestsList() {
  return (
    <Card className="bg-[rgba(15,23,42,0.7)] backdrop-blur-md border border-border/40 shadow-lg">
      <CardHeader>
        <CardTitle className="text-secondary">Quests</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">This is where quests will be displayed.</p>
      </CardContent>
    </Card>
  )
}
