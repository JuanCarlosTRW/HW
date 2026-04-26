import Image from 'next/image'

export default function DailyUpdatesSection() {
  return (
    <section className="bg-bone py-32 md:py-40 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

        <div className="max-w-xl">
          <p className="text-stone uppercase tracking-[0.22em] text-[11px] font-medium mb-8">
            What You Get, Every Day
          </p>

          <h2 className="font-serif font-medium text-ink
                         text-[36px] md:text-[52px]
                         leading-[1.1] tracking-[-0.02em]
                         mb-10">
            You&apos;ll know what&apos;s happening in your home every single day.
          </h2>

          <div className="space-y-6 text-ink/85 text-[18px] md:text-[20px] leading-[1.65]">
            <p>This is the part most contractors get wrong.</p>
            <p>
              You&apos;re letting strangers tear apart a room you live in. You deserve to know what&apos;s happening in there. Every day.
            </p>
          </div>

          <p className="font-serif text-[24px] md:text-[28px] font-medium text-ink mt-16 mb-10">
            So here&apos;s what you get from me:
          </p>

          <div className="space-y-6 text-ink/85 text-[18px] md:text-[20px] leading-[1.5]">
            <p>A text every morning before the crew arrives.</p>
            <p>A photo at the end of the day showing what got done.</p>
            <p>A heads-up the night before anything noisy or disruptive is happening.</p>
            <p>A real timeline written down before we start, and an honest update if anything changes.</p>
          </div>

          <p className="font-serif italic text-[24px] md:text-[28px] text-ink mt-16 leading-[1.4]">
            No silence. No surprises. No guessing what&apos;s happening in your own home.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="max-w-sm w-full rounded-image overflow-hidden
                          shadow-[0_30px_80px_-20px_rgba(26,21,16,0.3)]">
            <Image
              src="/images/text-thread-screenshot.png"
              alt="Real text message thread between Dave and a client showing daily updates"
              width={1086}
              height={1448}
              sizes="(max-width: 768px) 80vw, 384px"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
