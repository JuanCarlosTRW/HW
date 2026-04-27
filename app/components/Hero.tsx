'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import BookCTA from './BookCTA'

export default function Hero() {
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)
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
      .from(trustRef.current, {
        opacity: 0,
        duration: 0.6 * dMult,
        ease: 'power2.out',
      }, 0.25)
      .from(imageRef.current, {
        opacity: 0,
        scale: 0.98,
        duration: 1.2 * dMult,
        ease: 'power2.out',
      }, 0.35)
      .from(subheadRef.current, {
        opacity: 0,
        y: 8 * yMult,
        duration: 0.7 * dMult,
        ease: 'power2.out',
      }, 0.65)

    return () => { tl.kill() }
  }, [])

  return (
    <section
      data-no-global-anim
      className="bg-paper pt-32 md:pt-40 pb-24 md:pb-32 px-6 md:px-12"
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
                     max-w-5xl mx-auto mb-12 md:mb-16"
        >
          Most contractors design your kitchen in their head before you finish your sentence.
        </h1>

        {/* Trust bar — between headline and image */}
        <div ref={trustRef} className="max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-stone text-[13px] uppercase tracking-[0.18em]">
            <span>Ridgeview Local</span>
            <span className="w-1 h-1 rounded-full bg-stone/40" />
            <span>Fully Insured</span>
            <span className="w-1 h-1 rounded-full bg-stone/40" />
            <span>11 Projects in 2025</span>
            <span className="w-1 h-1 rounded-full bg-stone/40" />
            <span>5★ on Google</span>
          </div>
        </div>

        {/* Hero image */}
        <div
          ref={imageRef}
          className="rounded-image relative w-full max-w-5xl mx-auto mb-16 md:mb-20
                     overflow-hidden shadow-[0_16px_48px_-16px_rgba(26,21,16,0.25)]"
        >
          <Image
            src="/images/hero-listening.jpg"
            alt="Dave listening at a kitchen table with clients, notebook open"
            width={1672}
            height={941}
            priority
            sizes="(max-width: 768px) 100vw, 83vw"
            className="w-full h-auto object-cover aspect-[16/10]"
          />
          <div className="absolute inset-0 pointer-events-none
                          shadow-[inset_0_0_120px_rgba(26,21,16,0.15)]
                          rounded-image" />
        </div>

        {/* Subhead + CTA */}
        <div ref={subheadRef} className="max-w-2xl mx-auto text-center">
          <p className="font-serif text-[28px] md:text-[36px] font-medium text-ink mb-12 leading-tight">
            I don&apos;t.
          </p>
          <p className="text-ink/85 text-[18px] md:text-[20px] leading-[1.65] mb-6">
            I build the kitchen you&apos;ve been picturing for two years. The one your friends walk into and stop talking mid-sentence. The one you get a little emotional standing in.
          </p>
          <p className="text-ink/85 text-[18px] md:text-[20px] leading-[1.65] mb-6">
            I get there by sitting at your kitchen table for an hour first, with a notebook. And by telling you every day what&apos;s happening in your home until the last tile is set.
          </p>
          <p className="text-ink/85 text-[18px] md:text-[20px] leading-[1.65]">
            That&apos;s the whole job.
          </p>
          <BookCTA />
        </div>

      </div>
    </section>
  )
}
