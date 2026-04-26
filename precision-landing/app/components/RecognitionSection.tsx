"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RecognitionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const p1Ref = useRef<HTMLParagraphElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);
  const p3Ref = useRef<HTMLParagraphElement>(null);
  const p4Ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const elements = [
      eyebrowRef.current,
      headlineRef.current,
      p1Ref.current,
      p2Ref.current,
      p3Ref.current,
      p4Ref.current,
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
            trigger: el,
            start: "top 92%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-bone py-24 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-3xl mx-auto">
        <p
          ref={eyebrowRef}
          className="font-sans text-[12px] uppercase tracking-[0.18em] text-stone mb-8"
        >
          THE WAITING
        </p>

        <h2
          ref={headlineRef}
          className="font-serif font-medium text-[36px] md:text-[48px] text-ink leading-[1.05] tracking-[-0.02em] mb-12"
        >
          You&apos;ve been thinking about this for a while.
        </h2>

        <div className="space-y-6 font-sans text-[16px] md:text-[18px] leading-[1.65] text-ink">
          <p ref={p1Ref}>
            Probably saving Pinterest pins at night. Walking into your kitchen
            in the morning and feeling something between embarrassed and
            resigned.
          </p>
          <p ref={p2Ref}>
            You&apos;ve talked to a contractor or two. Maybe three. They nodded
            politely, then quoted you on a kitchen that wasn&apos;t yours. One
            of them never called back.
          </p>
          <p ref={p3Ref}>
            You&apos;ve heard the horror stories from friends. The contractor
            who disappeared. The budget that doubled. The kitchen that looked
            nothing like the inspiration board.
          </p>
          <p ref={p4Ref}>So you&apos;ve been waiting.</p>
        </div>
      </div>
    </section>
  );
}
