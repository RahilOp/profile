'use client'

import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('Connecting to the System...')

  const loadingSteps = [
    'Connecting to the System...',
    'Authenticating Player...',
    'Loading Neural Interface...',
    'Syncing Skill Tree...',
    'Calibrating Shadow Army...',
    'System Ready.'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2
        const stepIndex = Math.floor((newProgress / 100) * loadingSteps.length)
        if (stepIndex < loadingSteps.length) {
          setLoadingText(loadingSteps[stepIndex])
        }
        return newProgress > 100 ? 100 : newProgress
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-[#060911] sl-grid-bg flex items-center justify-center z-50">
      <div className="text-center px-6">
        {/* Animated System core */}
        <div className="mb-10 relative">
          <div className="w-28 h-28 mx-auto relative animate-flicker">
            <div className="absolute inset-0 border-2 border-primary/40 rounded-full animate-spin" />
            <div className="absolute inset-2 border-2 border-secondary/40 rounded-full animate-spin-reverse" />
            <div className="absolute inset-5 border border-primary/60 rotate-45" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#7dd3fc] to-primary text-glow-blue">
                SR
              </span>
            </div>
          </div>
        </div>

        {/* System notification */}
        <div className="system-tag text-xs mb-3">[ SYSTEM ]</div>
        <h2 className="font-hud text-2xl font-semibold text-white/90 mb-10 tracking-wide animate-pulse">
          {loadingText}
        </h2>

        {/* Progress Bar */}
        <div className="w-80 max-w-full mx-auto mb-4">
          <div className="flex justify-between text-[10px] font-display tracking-widest text-primary/70 mb-2">
            <span>INITIALIZING</span>
            <span>{progress.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-white/5 border border-primary/20 h-2 relative overflow-hidden">
            <div
              className="bg-gradient-to-r from-primary to-secondary h-full transition-all duration-300 relative overflow-hidden"
              style={{ width: `${progress}%`, boxShadow: '0 0 16px rgba(0,168,255,0.7)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
            </div>
          </div>
        </div>

        <div className="text-primary/25 text-[10px] font-mono tracking-[0.3em] mt-6 animate-pulse">
          ARISE
        </div>
      </div>
    </div>
  )
}
