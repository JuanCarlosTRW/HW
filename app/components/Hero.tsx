"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ImagePlaceholder from "./ImagePlaceholder";

export default function Hero() {
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const idontRef = useRef<HTMLParagraphElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const stagger = isMobile ? 0.075 : 0.15;
    const yDist = isMobile ? 10 : 20;

    const elements = [
      eyebrowRef.current,
      headlineRef.current,
      idontRef.current,
      bodyRef.current,
      ctaRef.current,
    ];

    gsap.fromTo(
      elements,
      { opacity: 0, y: yDist },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section className="relative min-h-screen flex items-center" style={{ minHeight: "min(100svh, 100vh)" }}>
      <div className="absolute inset-0">
        <ImagePlaceholder
          filename="hero-listening.jpg"
          className="w-full h-full"
        />
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-charcoal/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 pt-[40vh]">
        <div className="max-w-3xl">
          <p
            ref={eyebrowRef}
            className="font-sans text-[12px] uppercase tracking-[0.18em] text-stone mb-8 opacity-0"
          >
            PRECISION REMODELS · RIDGEVIEW
          </p>

          <h1
            ref={headlineRef}
            className="font-serif font-medium text-ink leading-[1.05] tracking-[-0.02em] text-[36px] md:text-[56px] lg:text-[72px] opacity-0"
          >
            Most contractors design your kitchen in their head before you finish
            your sentence.
          </h1>

          <p
            ref={idontRef}
            className="font-serif font-medium text-ink text-[28px] md:text-[40px] my-6 opacity-0"
          >
            I don&apos;t.
          </p>

          <p
            ref={bodyRef}
            className="font-sans text-[16px] md:text-[18px] leading-[1.65] text-ink max-w-2xl opacity-0"
          >
            I sit at your kitchen table for an hour with a notebook before I
            quote a single dollar. Then I tell you every day what&apos;s
            happening in your home until the last tile is set.
            <br />
            <br />
            That&apos;s the whole job.
          </p>

          <a
            ref={ctaRef}
            href="#book"
            className="inline-block mt-10 px-8 py-4 bg-accent text-bone font-sans font-medium text-base rounded-none hover:bg-charcoal transition-colors duration-300 opacity-0"
          >
            Book Your Kitchen Table Consult
          </a>
        </div>
      </div>
    </section>
  );
}
