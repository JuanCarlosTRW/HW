'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('h1, h2').forEach((el) => {
        if (el.closest('[data-no-global-anim]')) return
        gsap.from(el, {
          opacity: 0,
          y: 16,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        })
      })

      gsap.utils.toArray<HTMLElement>('p, blockquote').forEach((el) => {
        if (el.closest('[data-no-global-anim]')) return
        gsap.from(el, {
          opacity: 0,
          y: 8,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            once: true,
          },
        })
      })

      gsap.utils.toArray<HTMLElement>('.rounded-image').forEach((el) => {
        if (el.closest('[data-no-global-anim]')) return
        gsap.from(el, {
          opacity: 0,
          scale: 0.98,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return <>{children}</>
}
