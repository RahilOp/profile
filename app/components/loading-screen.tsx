'use client'

import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev + 2 > 100 ? 100 : prev + 2))
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-[#f7f4ed] sl-grid-bg flex items-center justify-center z-50">
      <div className="text-center px-6">
        <div className="text-[#1c1c1c] font-semibold text-5xl md:text-6xl tracking-[-1.5px] mb-8">
          Rahil
        </div>

        <div className="w-64 max-w-full mx-auto">
          <div className="w-full h-[3px] bg-[#eceae4] overflow-hidden rounded-full">
            <div
              className="h-full bg-[#1c1c1c] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 text-sm text-[#5f5f5d]">Loading portfolio</div>
        </div>
      </div>
    </div>
  )
}
