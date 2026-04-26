"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImagePlaceholder from "./ImagePlaceholder";

gsap.registerPlugin(ScrollTrigger);

const quoteText =
  "I was so nervous about this. $42K is a lot of money and I've heard horror stories. Dave came out, spent an hour just talking through what we wanted, didn't push anything we didn't need. The kitchen is done and I honestly get emotional looking at it sometimes. It's exactly what I pictured.";

export default function TestimonialSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

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

    if (quoteRef.current) {
      const words = quoteRef.current.querySelectorAll(".word");
      const stagger = isMobile ? 0.015 : 0.03;
      gsap.fromTo(
        words,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.4,
          stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  const words = quoteText.split(" ");

  return (
    <section className="bg-charcoal py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <p className="font-sans text-[12px] uppercase tracking-[0.18em] text-accent mb-12">
          TAMARA&apos;S KITCHEN · RIDGEVIEW · $42,000
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div ref={imageRef} className="opacity-0">
            <ImagePlaceholder
              filename="tamara-kitchen.jpg"
              className="aspect-[4/3] w-full"
            />
          </div>

          <div>
            <div ref={quoteRef}>
              <blockquote className="font-serif italic text-bone text-[28px] md:text-[32px] leading-[1.4]">
                &ldquo;
                {words.map((word, i) => (
                  <span key={i} className="word opacity-0">
                    {word}
                    {i < words.length - 1 ? " " : ""}
                  </span>
                ))}
                &rdquo;
              </blockquote>
            </div>
            <p className="font-sans text-sm text-stone mt-8">
              -- Tamara J., Ridgeview
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
