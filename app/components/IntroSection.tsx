"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImagePlaceholder from "./ImagePlaceholder";

gsap.registerPlugin(ScrollTrigger);

export default function IntroSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const xDist = isMobile ? 15 : 30;

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -xDist },
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

    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: xDist },
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
  }, []);

  return (
    <section className="bg-cream py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div ref={imageRef} className="opacity-0">
          <ImagePlaceholder
            filename="dave-onsite.jpg"
            className="aspect-[4/5] w-full"
          />
        </div>

        <div ref={textRef} className="max-w-xl opacity-0">
          <p className="font-sans text-[12px] uppercase tracking-[0.18em] text-stone mb-8">
            WHO YOU&apos;RE WORKING WITH
          </p>

          <h2 className="font-serif font-medium text-[36px] md:text-[48px] text-ink leading-[1.05] tracking-[-0.02em] mb-8">
            I&apos;m Dave. I&apos;ve been doing this in Ridgeview for [X] years.
          </h2>

          <div className="space-y-6 font-sans text-[16px] md:text-[18px] leading-[1.65] text-ink">
            <p>
              I run Precision with a small crew I&apos;ve worked with for years.
              I&apos;m on every job site, every day. When you text me, I answer.
              When something changes, I tell you before you have to ask.
            </p>
            <p>I won&apos;t be the cheapest quote you get. I&apos;m not trying to be.</p>
            <p>I&apos;m trying to be the one you&apos;d recommend to your sister.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
