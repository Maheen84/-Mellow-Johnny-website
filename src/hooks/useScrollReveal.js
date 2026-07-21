import { useEffect, useRef, useState } from 'react'

/**
 * useScrollReveal
 * Observes a ref element and returns `isVisible` once it enters the viewport.
 * Triggers ONCE per page load — does not reset on scroll back.
 *
 * @param {Object} options - IntersectionObserver options
 * @returns {{ ref, isVisible }}
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // If user prefers reduced motion, immediately mark visible (no animation)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el) // fire only once
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
        ...options,
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return { ref, isVisible }
}
