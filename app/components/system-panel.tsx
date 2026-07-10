'use client'

import { cn } from "@/lib/utils"

interface SystemPanelProps {
  children: React.ReactNode
  className?: string
  variant?: 'blue' | 'violet'
  corners?: boolean
  tag?: string
}

/**
 * Solo Leveling "System window" frame: holographic panel with angular corner
 * brackets and an optional [ TAG ] header ribbon.
 */
export function SystemPanel({
  children,
  className,
  variant = 'blue',
  corners = true,
  tag,
}: SystemPanelProps) {
  return (
    <div
      className={cn(
        'system-panel rounded-sm',
        variant === 'violet' && 'system-panel-violet',
        corners && 'system-corners',
        className
      )}
    >
      {tag && (
        <div className="system-tag text-[10px] md:text-xs mb-4 flex items-center gap-2">
          <span className="text-white/40">[</span>
          {tag}
          <span className="text-white/40">]</span>
          <span className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
        </div>
      )}
      {children}
    </div>
  )
}
