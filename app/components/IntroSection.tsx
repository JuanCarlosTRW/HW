import Image from 'next/image'

export default function IntroSection() {
  return (
    <section className="bg-cream py-28 md:py-36 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

        <div className="rounded-image overflow-hidden shadow-[0_16px_48px_-16px_rgba(26,21,16,0.2)]">
          <Image
            src="/images/dave-onsite.jpg"
            alt="Dave on a job site"
            width={1122}
            height={1402}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto object-cover aspect-[4/5]"
          />
        </div>

        <div className="max-w-xl">
          <p className="text-stone uppercase tracking-[0.22em] text-[11px] font-medium mb-8">
            Who You&apos;re Working With
          </p>
          <h2 className="font-serif font-medium text-ink
                         text-[36px] md:text-[52px]
                         leading-[1.1] tracking-[-0.02em]
                         mb-10">
            I&apos;m Dave. I&apos;ve been doing this in Ridgeview for 25 years.
          </h2>
          <div className="space-y-6 text-ink/85 text-[18px] md:text-[20px] leading-[1.65]">
            <p>
              I run Precision with a small crew I&apos;ve worked with for years. I&apos;m on every job site, every day. When you text me, I answer. When something changes, I tell you before you have to ask.
            </p>
            <p>I won&apos;t be the cheapest quote you get. I&apos;m not trying to be.</p>
            <p className="font-serif italic text-[22px] md:text-[24px] text-ink mt-8">
              I&apos;m trying to be the one you&apos;d recommend to your sister.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
