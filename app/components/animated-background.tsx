'use client'

/**
 * Static "System" backdrop — deep monarch gradient, subtle grid, and a radial
 * vignette. Intentionally motionless: all animation lives in the loading screen.
 */
export function AnimatedBackground() {
  return (
    <>
      {/* Deep monarch gradient wash */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#060911] via-[#0a1428]/70 to-[#0b0620] z-0" />
      {/* System grid overlay */}
      <div className="fixed inset-0 sl-grid-bg opacity-40 z-0" />
      {/* Radial vignette focus */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 40%, transparent 40%, rgba(3,6,15,0.85) 100%)' }}
      />
      {/* Static corner accents */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-8 w-16 h-16 border-l border-t border-primary/15" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-secondary/15" />
      </div>
    </>
  )
}
