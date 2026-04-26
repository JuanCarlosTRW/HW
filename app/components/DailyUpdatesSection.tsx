"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImagePlaceholder from "./ImagePlaceholder";

gsap.registerPlugin(ScrollTrigger);

export default function DailyUpdatesSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const xDist = isMobile ? 15 : 30;

    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -xDist },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
          },
        }
      );
    }

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: xDist },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <section className="bg-bone py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div ref={textRef} className="max-w-xl opacity-0">
          <p className="font-sans text-[12px] uppercase tracking-[0.18em] text-stone mb-8">
            WHAT YOU GET, EVERY DAY
          </p>

          <h2 className="font-serif font-medium text-[36px] md:text-[48px] text-ink leading-[1.05] tracking-[-0.02em] mb-8">
            You&apos;ll know what&apos;s happening in your home every single day.
          </h2>

          <div className="space-y-6 font-sans text-[16px] md:text-[18px] leading-[1.65] text-ink">
            <p>This is the part most contractors get wrong.</p>
            <p>
              You&apos;re letting strangers tear apart a room you live in. You
              deserve to know what&apos;s happening in there. Every day.
            </p>
          </div>

          <h3 className="font-serif text-[24px] text-ink mt-12 mb-8">
            So here&apos;s what you get from me:
          </h3>

          <div className="space-y-6 font-sans text-[16px] md:text-[18px] leading-[1.65] text-ink">
            <p>A text every morning before the crew arrives.</p>
            <p>A photo at the end of the day showing what got done.</p>
            <p>
              A heads-up the night before anything noisy or disruptive is
              happening.
            </p>
            <p>
              A real timeline written down before we start, and an honest update
              if anything changes.
            </p>
          </div>

          <p className="font-serif italic font-medium text-ink text-[18px] md:text-[20px] mt-12">
            No silence. No surprises. No wondering if the crew is showing up
            tomorrow.
          </p>
        </div>

        <div ref={imageRef} className="flex justify-center items-start opacity-0">
          <ImagePlaceholder
            filename="text-thread-screenshot.png"
            className="max-w-sm w-full shadow-xl aspect-[9/16]"
          />
        </div>
      </div>
    </section>
  );
}
