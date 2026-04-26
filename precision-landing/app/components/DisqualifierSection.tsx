"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DisqualifierSection() {
  const containerRef = useRef<HTMLElement>(null);
  const item1Ref = useRef<HTMLDivElement>(null);
  const item2Ref = useRef<HTMLDivElement>(null);
  const item3Ref = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const yDist = isMobile ? 8 : 16;
    const stagger = isMobile ? 0.075 : 0.15;

    const items = [
      item1Ref.current,
      item2Ref.current,
      item3Ref.current,
      closingRef.current,
      ctaRef.current,
    ];

    items.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: yDist },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="bg-cream py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <p className="font-sans text-[12px] uppercase tracking-[0.18em] text-stone mb-8">
          WHO I&apos;M NOT FOR
        </p>

        <h2 className="font-serif font-medium text-[36px] md:text-[48px] text-ink leading-[1.05] tracking-[-0.02em] mb-12">
          Three reasons you might not be a fit for me
        </h2>

        <div className="font-sans text-[16px] md:text-[18px] leading-[1.65] text-ink space-y-4 mb-8">
          <p>I take three projects at a time. Not five. Not eight. Three.</p>
          <p>
            That means I can&apos;t be the right person for everyone.
            Specifically:
          </p>
        </div>

        <div ref={item1Ref} className="mt-8 opacity-0">
          <p className="font-serif font-medium text-[22px] text-ink">
            You&apos;re not a fit if you want the cheapest quote.
          </p>
          <p className="font-sans text-[16px] md:text-[18px] leading-[1.65] text-ink mt-2">
            I&apos;m not it.
          </p>
        </div>

        <div ref={item2Ref} className="mt-8 opacity-0">
          <p className="font-serif font-medium text-[22px] text-ink">
            You&apos;re not a fit if you want it done in three weeks.
          </p>
          <p className="font-sans text-[16px] md:text-[18px] leading-[1.65] text-ink mt-2">
            Real kitchens take real time, and I&apos;d rather lose the job than
            rush yours.
          </p>
        </div>

        <div ref={item3Ref} className="mt-8 opacity-0">
          <p className="font-serif font-medium text-[22px] text-ink">
            You&apos;re not a fit if you&apos;ve already designed it in your
            head and just want someone to execute.
          </p>
          <p className="font-sans text-[16px] md:text-[18px] leading-[1.65] text-ink mt-2">
            I work best with people who have a vision but want a real
            conversation about what&apos;s possible.
          </p>
        </div>

        <p
          ref={closingRef}
          className="font-sans text-[16px] md:text-[18px] leading-[1.65] text-ink mt-12 opacity-0"
        >
          If any of that lost you, no hard feelings. If it didn&apos;t,
          let&apos;s talk.
        </p>

        <a
          ref={ctaRef}
          href="#book"
          className="inline-block mt-10 px-8 py-4 bg-accent text-bone font-sans font-medium text-base rounded-none hover:bg-charcoal transition-colors duration-300 opacity-0"
        >
          Book Your Kitchen Table Consult
        </a>
      </div>
    </section>
  );
}
