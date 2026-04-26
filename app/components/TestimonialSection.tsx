import Image from 'next/image'

export default function TestimonialSection() {
  return (
    <section className="bg-charcoal text-bone py-32 md:py-40 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        <p className="text-accent uppercase tracking-[0.22em] text-[11px] font-medium mb-16">
          Tamara&apos;s Kitchen &middot; Ridgeview &middot; $42,000
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-center">

          <div className="md:col-span-2 rounded-image overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]">
            <Image
              src="/images/tamara-kitchen.jpg"
              alt="Tamara in her finished kitchen"
              width={1448}
              height={1086}
              sizes="(max-width: 768px) 100vw, 40vw"
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>

          <blockquote className="md:col-span-3">
            <p className="font-serif italic font-normal text-bone
                          text-[26px] md:text-[34px]
                          leading-[1.4] tracking-[-0.01em]">
              &ldquo;I was so nervous about this. $42K is a lot of money and I&apos;ve heard horror stories. Dave came out, spent an hour just talking through what we wanted, didn&apos;t push anything we didn&apos;t need. The kitchen is done and I honestly get emotional looking at it sometimes. It&apos;s exactly what I pictured.&rdquo;
            </p>
            <footer className="mt-10 text-stone text-[14px] font-sans tracking-wider">
              -- Tamara J., Ridgeview
            </footer>
          </blockquote>

        </div>
      </div>
    </section>
  )
}
