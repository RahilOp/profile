interface PixelIconProps {
  className?: string
  size?: number
}

function rowsToGrid(rows: string[]): number[][] {
  return rows.map(row => row.split('').map(c => (c === '1' ? 1 : 0)))
}

/**
 * Original 1-bit pixel-art icons rendered as crisp SVG rects (no external
 * assets, no copyrighted sprite sheets). Each is hand-authored and generic
 * RPG iconography (a diamond badge, a chevron, a bar chart, etc.), not a
 * likeness of any copyrighted character or artwork.
 */
function makeIcon(rows: string[]) {
  const grid = rowsToGrid(rows)
  const cols = grid[0]?.length ?? 0
  const height = grid.length

  return function PixelIcon({ className, size = 3 }: PixelIconProps) {
    return (
      <svg
        width={cols * size}
        height={height * size}
        viewBox={`0 0 ${cols} ${height}`}
        className={className}
        fill="currentColor"
        style={{ shapeRendering: 'crispEdges' }}
        aria-hidden="true"
      >
        {grid.map((row, y) =>
          row.map((cell, x) =>
            cell ? <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} /> : null
          )
        )}
      </svg>
    )
  }
}

/** Diamond rank-badge outline */
export const PixelBadge = makeIcon([
  '00000100000',
  '00001010000',
  '00010001000',
  '00100000100',
  '01000000010',
  '10000000001',
  '01000000010',
  '00100000100',
  '00010001000',
  '00001010000',
  '00000100000',
])

/** Upward chevron, used as a small "level up" accent */
export const PixelChevron = makeIcon([
  '000010000',
  '000101000',
  '001000100',
  '010000010',
  '100000001',
])

/** Ascending bars: Strength */
export const PixelBars = makeIcon([
  '00000011',
  '00000011',
  '00011011',
  '00011011',
  '11011011',
  '11011011',
])

/** Lightning bolt: Agility */
export const PixelBolt = makeIcon([
  '0001100',
  '0011000',
  '0110000',
  '1111110',
  '0001100',
  '0011000',
  '0110000',
])

/** Book with spine: Intelligence */
export const PixelBook = makeIcon([
  '111111111',
  '100010001',
  '100010001',
  '100010001',
  '100010001',
  '100010001',
  '111111111',
])

/** Heart: Vitality */
export const PixelHeart = makeIcon([
  '0110110',
  '1111111',
  '1111111',
  '0111110',
  '0011100',
  '0001000',
])

/** Eye with pupil: Perception */
export const PixelEye = makeIcon([
  '000010000',
  '001000100',
  '100010001',
  '001000100',
  '000010000',
])

/** Hooded silhouette: decorative "shadow" accent */
export const PixelSoldier = makeIcon([
  '000111000',
  '001111100',
  '001111100',
  '000111000',
  '001111100',
  '001111100',
  '011111110',
  '011111110',
  '011111110',
  '111111111',
  '111111111',
  '111111111',
  '111111111',
  '111111111',
])
