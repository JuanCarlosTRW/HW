import Image from 'next/image'

export default function TestimonialSection() {
  return (
    <section className="bg-charcoal text-bone py-32 md:py-44 px-6 md:px-12 relative overflow-hidden">

      {/* Decorative background quote mark */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2
                      font-serif text-[400px] md:text-[600px]
                      text-bone/[0.03] leading-none pointer-events-none select-none">
        &ldquo;
      </div>

      <div className="max-w-6xl mx-auto relative">

        <div className="text-center mb-20">
          <p className="text-accent uppercase tracking-[0.22em] text-[11px] font-medium mb-4">
            Real Project &middot; Real Numbers
          </p>
          <p className="font-serif text-[32px] md:text-[40px] font-medium text-bone">
            Tamara&apos;s Kitchen
          </p>
          <p className="text-stone text-[14px] mt-2 tracking-wider">
            RIDGEVIEW &middot; 6-WEEK BUILD &middot; $42,000
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">

          <div className="md:col-span-5 rounded-image overflow-hidden
                          shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]">
            <Image
              src="/images/tamara-kitchen.jpg"
              alt="Tamara in her finished kitchen"
              width={1448}
              height={1086}
              sizes="(max-width: 768px) 100vw, 42vw"
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>

          <blockquote className="md:col-span-7">
            <p className="font-serif italic font-normal text-bone
                          text-[24px] md:text-[30px] lg:text-[34px]
                          leading-[1.45] tracking-[-0.005em]">
              &ldquo;I was so nervous about this. $42K is a lot of money and I&apos;ve heard horror stories. Dave came out, spent an hour just talking through what we wanted, didn&apos;t push anything we didn&apos;t need.&rdquo;
            </p>
            <p className="font-serif italic font-medium text-accent
                          text-[24px] md:text-[30px] lg:text-[34px]
                          leading-[1.45] tracking-[-0.005em] mt-8">
              &ldquo;The kitchen is done and I honestly get emotional looking at it sometimes. It&apos;s exactly what I pictured.&rdquo;
            </p>

            <footer className="mt-12 pt-8 border-t border-bone/10">
              <p className="font-sans text-[15px] text-bone/90 font-medium tracking-wide">
                Tamara J.
              </p>
              <p className="font-sans text-[13px] text-stone tracking-wider uppercase mt-1">
                Ridgeview &middot; Kitchen renovation &middot; 2025
              </p>
            </footer>
          </blockquote>

        </div>
      </div>
    </section>
  )
}
