import { useMemo } from 'react'

/**
 * Fixed, decorative backdrop: a faint grid, two soft radial glows, and a
 * handful of slow-drifting dots. Everything here is aria-hidden and sits
 * behind the content (z-0), never affecting readability or layout.
 */
export default function Background() {
  const dots = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        top: `${(i * 53) % 100}%`,
        size: 2 + (i % 3),
        delay: `${(i % 7) * 0.6}s`,
        duration: `${6 + (i % 5)}s`,
      })),
    [],
  )

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(139,150,166,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,150,166,0.08) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      {/* ambient glows */}
      <div className="absolute -top-40 left-1/4 h-[420px] w-[420px] rounded-full bg-sky-500/[0.10] blur-[110px]" />
      <div className="absolute top-1/3 right-0 h-[360px] w-[360px] rounded-full bg-cyan-400/[0.08] blur-[110px]" />

      {/* faint drifting dots */}
      {dots.map((dot) => (
        <span
          key={dot.id}
          className="absolute rounded-full bg-accent-from/40 animate-drift"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            animationDelay: dot.delay,
            animationDuration: dot.duration,
          }}
        />
      ))}
    </div>
  )
}
