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
 * Bordered cream card (Lovable style): containment via a warm 1px border,
 * no drop shadow, optional small muted section label.
 */
export function SystemPanel({ children, className, tag }: SystemPanelProps) {
  return (
    <div className={cn('system-panel', className)}>
      {tag && (
        <div className="system-tag text-xs mb-4">{tag}</div>
      )}
      {children}
    </div>
  )
}
