'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function SettingsPanel() {
  return (
    <Card className="bg-[rgba(15,23,42,0.7)] backdrop-blur-md border border-border/40 shadow-lg">
      <CardHeader>
        <CardTitle className="text-primary">Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">This is where user settings will be managed.</p>
      </CardContent>
    </Card>
  )
}
