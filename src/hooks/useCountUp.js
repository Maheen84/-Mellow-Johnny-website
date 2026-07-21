import { useEffect, useRef, useState } from 'react'

/**
 * useCountUp
 * Animates a number from 0 → target using requestAnimationFrame.
 * Only fires once when `triggered` becomes true.
 *
 * @param {number} target   - The final number to count to
 * @param {boolean} triggered - Start the animation when this becomes true
 * @param {number} duration - Animation duration in ms (default 900)
 * @returns {number} current display value
 */
export function useCountUp(target, triggered, duration = 900) {
  const [count, setCount] = useState(0)
  const rafRef = useRef(null)
  const hasRun = useRef(false)

  useEffect(() => {
    // Respect reduced motion — snap to final value
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (triggered) setCount(target)
      return
    }

    if (!triggered || hasRun.current) return
    hasRun.current = true

    const startTime = performance.now()

    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [triggered, target, duration])

  return count
}
