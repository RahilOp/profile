'use client'

/**
 * Static warm backdrop: cream base with a soft, barely-visible multi-color
 * gradient wash. Intentionally motionless.
 */
export function AnimatedBackground() {
  return (
    <>
      <div className="fixed inset-0 bg-[#f7f4ed] z-0" />
      <div className="fixed inset-0 sl-grid-bg opacity-70 z-0 pointer-events-none" />
    </>
  )
}
