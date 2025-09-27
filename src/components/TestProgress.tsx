'use client'

import { useState } from 'react'

export default function TestProgress() {
  const [progress, setProgress] = useState(60)

  return (
    <div style={{ width: '300px', padding: '20px', backgroundColor: '#111' }}>
      <h3 style={{ color: '#ec4899', fontWeight: 'bold', marginBottom: '10px' }}>
        Test Progress Bar
      </h3>
      <div style={{ width: '100%', height: '20px', backgroundColor: '#333', borderRadius: '10px', overflow: 'hidden' }}>
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: '#ec4899',
            transition: 'width 0.5s ease-in-out',
          }}
        />
      </div>
      <button
        style={{ marginTop: '10px', padding: '5px 10px' }}
        onClick={() => setProgress((p) => (p + 10 > 100 ? 0 : p + 10))}
      >
        Increase
      </button>
    </div>
  )
}
