export default function FirstHourSection() {
  return (
    <section className="bg-bone py-32 md:py-40 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <p className="text-stone uppercase tracking-[0.22em] text-[11px] font-medium mb-8">
          The First Hour
        </p>

        <h2 className="font-serif font-medium text-ink
                       text-[36px] md:text-[52px]
                       leading-[1.1] tracking-[-0.02em]
                       mb-6">
          What the first hour looks like
        </h2>

        <p className="font-serif italic text-stone text-[22px] md:text-[24px] mt-6 mb-16">
          The same hour every one of my clients started with.
        </p>

        <div className="space-y-6 text-ink/85 text-[18px] md:text-[20px] leading-[1.65]">
          <p>
            I come to your house. We sit at your kitchen table. You show me the Pinterest board. You tell me what you&apos;ve been picturing for two years. I ask questions. I take notes.
          </p>
          <p>
            I don&apos;t quote on the spot. I don&apos;t pitch you a package. I don&apos;t tell you what you &quot;really need.&quot;
          </p>
          <p>
            At the end of the hour, you&apos;ll know whether I&apos;m the right person to do this. So will I.
          </p>
          <p>
            If we&apos;re not the right fit, I&apos;ll tell you, and I&apos;ll send you to someone who is.
          </p>
        </div>

        <div className="mt-16">
          <a
            href="#book"
            className="inline-block w-full md:w-auto bg-accent hover:bg-accent-dark
                       text-paper px-10 py-5 text-[16px] font-medium rounded-none
                       transition-colors duration-300"
          >
            Book Your Kitchen Table Consult
          </a>
        </div>
      </div>
    </section>
  )
}
