'use client'

import { useState, useEffect } from 'react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'

export default function XPProgressTest() {
  const [progressPercent, setProgressPercent] = useState(45) // Test value 45%

  return (
    <Card className="card-hover card-glow-outline p-6">
      <CardHeader>
  <h2 className="section-title text-pink-500 font-bold text-lg mb-4">
    XP Progress (Last 7 Days)
  </h2>
</CardHeader>

      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', marginBottom: '8px', fontSize: '0.875rem' }}>
          <span>Level 3</span>
          <span>450 / 1000 XP</span>
        </div>

        <div
          style={{
            width: '100%',
            height: '32px', // taller so it doesn't collapse
            borderRadius: '16px',
            backgroundColor: '#111',
            border: '1px solid #444',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: `${progressPercent}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #f472b6, #a78bfa)', // pink → purple
              transition: 'width 0.5s ease-in-out',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
        </div>
      </CardContent>
    </Card>
  )
}
