'use client'

import { useEffect, useState } from 'react'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { supabase } from '@/lib/supabaseClient'

export default function XPProgress({ userId }: { userId?: string }) {
  const [xp, setXp] = useState<number | null>(null)
  const [level, setLevel] = useState<number | null>(null)
  const [maxXp, setMaxXp] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    const fetch = async () => {
      setLoading(true)
      setErrorMsg(null)
      try {
        const { data } = await supabase.auth.getUser()
        const id = userId ?? data?.user?.id
        if (!id) {
          setErrorMsg('No authenticated user')
          setLoading(false)
          return
        }
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('xp, level, max_xp')
          .eq('id', id)
          .maybeSingle()
        if (error) {
          setErrorMsg(error.message)
          setLoading(false)
          return
        }
        setXp(profile?.xp ?? 0)
        setLevel(profile?.level ?? 1)
        setMaxXp(profile?.max_xp ?? null)
      } catch (err: any) {
        setErrorMsg(err?.message ?? String(err))
      } finally {
        if (mounted) setLoading(false)
      }
    }
    fetch()
    return () => {
      mounted = false
    }
  }, [userId])

  const xpForNextLevel = maxXp ?? (level ?? 1) * 1000
  const progress =
    xpForNextLevel > 0 ? Math.min(((xp ?? 0) / xpForNextLevel) * 100, 100) : 0

  return (
    <Card className="card-hover card-glow-outline">
      <CardHeader>
        <CardTitle className="section-title text-accent-blue">
          XP Progress (Last 7 Days)
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="text-muted-foreground">Loading XP…</div>
        ) : (
          <>
            {errorMsg && (
              <div className="text-rose-400 text-sm mb-2">
                Unable to load profile: {errorMsg}
              </div>
            )}
            <div className="flex justify-between text-sm text-white mb-2">
              <span>Level {level}</span>
              <span>
                {xp} / {xpForNextLevel} XP
              </span>
            </div>
            <Progress value={progress} />
          </>
        )}
      </CardContent>
    </Card>
  )
}
