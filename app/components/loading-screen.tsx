'use client'

import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('Initializing AI Systems...')

  const loadingSteps = [
    'Initializing AI Systems...',
    'Loading Neural Networks...',
    'Connecting to Data Sources...',
    'Optimizing Algorithms...',
    'Preparing Interface...',
    'System Ready!'
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
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 mx-auto relative">
            <div className="absolute inset-0 border-4 border-emerald-400/30 rounded-full animate-spin" />
            <div className="absolute inset-2 border-4 border-purple-400/30 rounded-full animate-spin-reverse" />
            <div className="absolute inset-4 border-4 border-yellow-400/30 rounded-full animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400">
                AI
              </span>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-white mb-8 animate-pulse">
          {loadingText}
        </h2>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-4">
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-emerald-500 to-purple-500 h-2 rounded-full transition-all duration-300 relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>
          </div>
          <div className="text-center mt-2 text-gray-400 text-sm">
            {progress.toFixed(0)}%
          </div>
        </div>

        {/* Binary Animation */}
        <div className="text-emerald-400/30 text-xs font-mono">
          <div className="animate-pulse">
            01001000 01100101 01101100 01101100 01101111
          </div>
        </div>
      </div>
    </div>
  )
}
