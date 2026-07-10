'use client'

/**
 * Static System backdrop: deep monarch gradient, subtle grid, and a radial
 * vignette. Intentionally motionless, since all animation lives in the loading screen.
 */
export function AnimatedBackground() {
  return (
    <>
      {/* Deep monarch gradient wash */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#18202f] via-[#1f2b44]/70 to-[#221b38] z-0" />
      {/* System grid overlay */}
      <div className="fixed inset-0 sl-grid-bg opacity-40 z-0" />
      {/* Radial vignette focus */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 40%, transparent 45%, rgba(15,20,32,0.55) 100%)' }}
      />
      {/* Static corner accents */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-8 w-16 h-16 border-l border-t border-primary/15" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-secondary/15" />
      </div>
    </>
  )
}
