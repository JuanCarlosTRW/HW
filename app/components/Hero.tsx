'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

export default function Hero() {
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const subheadRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const yMult = isMobile ? 0.5 : 1
    const dMult = isMobile ? 0.7 : 1

    const tl = gsap.timeline()
    tl.from(eyebrowRef.current, {
      opacity: 0,
      duration: 0.6 * dMult,
      ease: 'power2.out',
    }, 0)
      .from(headlineRef.current, {
        opacity: 0,
        y: 16 * yMult,
        duration: 0.9 * dMult,
        ease: 'power2.out',
      }, 0.1)
      .from(imageRef.current, {
        opacity: 0,
        scale: 0.98,
        duration: 1.2 * dMult,
        ease: 'power2.out',
      }, 0.3)
      .from(subheadRef.current, {
        opacity: 0,
        y: 8 * yMult,
        duration: 0.7 * dMult,
        ease: 'power2.out',
      }, 0.6)

    return () => { tl.kill() }
  }, [])

  return (
    <section
      data-no-global-anim
      className="bg-paper pt-20 md:pt-32 pb-32 md:pb-40 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">

        <p
          ref={eyebrowRef}
          className="text-center text-stone uppercase tracking-[0.22em] text-[11px] font-medium mb-12"
        >
          Precision Remodels &middot; Ridgeview
        </p>

        <h1
          ref={headlineRef}
          className="font-serif font-medium text-center text-ink
                     text-[44px] md:text-[72px] lg:text-[88px]
                     leading-[1.02] tracking-[-0.025em]
                     max-w-5xl mx-auto mb-16 md:mb-24"
        >
          Most contractors design your kitchen in their head before you finish your sentence.
        </h1>

        <div
          ref={imageRef}
          className="rounded-image relative w-full max-w-5xl mx-auto mb-16 md:mb-20
                     overflow-hidden shadow-[0_20px_60px_-20px_rgba(26,21,16,0.25)]"
        >
          <Image
            src="/images/hero-listening.jpg"
            alt="Dave sitting at a kitchen table with a couple, listening, notebook open"
            width={1672}
            height={941}
            priority
            sizes="(max-width: 768px) 100vw, 83vw"
            className="w-full h-auto object-cover"
          />
        </div>

        <div ref={subheadRef} className="max-w-2xl mx-auto text-center">
          <p className="font-serif text-[28px] md:text-[36px] font-medium text-ink mb-10 leading-tight">
            I don&apos;t.
          </p>
          <p className="text-ink/85 text-[18px] md:text-[20px] leading-[1.65] mb-6">
            I sit at your kitchen table for an hour with a notebook before I quote a single dollar. Then I tell you every day what&apos;s happening in your home until the last tile is set.
          </p>
          <p className="text-ink/85 text-[18px] md:text-[20px] leading-[1.65] mb-12">
            That&apos;s the whole job.
          </p>

          <a
            href="#book"
            className="inline-block w-full md:w-auto bg-accent hover:bg-accent-dark
                       text-paper px-10 py-5 text-[16px] font-medium rounded-none
                       transition-colors duration-300"
          >
            Book Your Kitchen Table Consult
          </a>
        </div>

      </div>
    </section>
  )
}
