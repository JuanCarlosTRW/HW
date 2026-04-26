"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FirstHourSection() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const p1Ref = useRef<HTMLParagraphElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);
  const p3Ref = useRef<HTMLParagraphElement>(null);
  const p4Ref = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const elements = [
      eyebrowRef.current,
      headlineRef.current,
      p1Ref.current,
      p2Ref.current,
      p3Ref.current,
      p4Ref.current,
      ctaRef.current,
    ];

    const isMobile = window.innerWidth < 768;
    const stagger = isMobile ? 0.05 : 0.1;

    elements.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0 },
        {
          opacity: 1,
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
    <section ref={containerRef} className="bg-bone py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <p
          ref={eyebrowRef}
          className="font-sans text-[12px] uppercase tracking-[0.18em] text-stone mb-8"
        >
          THE FIRST HOUR
        </p>

        <h2
          ref={headlineRef}
          className="font-serif font-medium text-[36px] md:text-[48px] text-ink leading-[1.05] tracking-[-0.02em] mb-12"
        >
          What the first hour looks like
        </h2>

        <div className="space-y-6 font-sans text-[16px] md:text-[18px] leading-[1.65] text-ink">
          <p ref={p1Ref}>
            I come to your house. We sit at your kitchen table. You show me the
            Pinterest board. You tell me what you&apos;ve been picturing for two
            years. I ask questions. I take notes.
          </p>
          <p ref={p2Ref}>
            I don&apos;t quote on the spot. I don&apos;t pitch you a package. I
            don&apos;t tell you what you &quot;really need.&quot;
          </p>
          <p ref={p3Ref}>
            At the end of the hour, you&apos;ll know whether I&apos;m the right
            person to do this. So will I.
          </p>
          <p ref={p4Ref}>
            If we&apos;re not the right fit, I&apos;ll tell you, and I&apos;ll
            send you to someone who is.
          </p>
        </div>

        <a
          ref={ctaRef}
          href="#book"
          className="inline-block mt-12 px-8 py-4 bg-accent text-bone font-sans font-medium text-base rounded-none hover:bg-charcoal transition-colors duration-300"
        >
          Book Your Kitchen Table Consult
        </a>
      </div>
    </section>
  );
}
