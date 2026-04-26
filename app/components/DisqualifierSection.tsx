export default function DisqualifierSection() {
  return (
    <section className="bg-cream py-32 md:py-40 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <p className="text-stone uppercase tracking-[0.22em] text-[11px] font-medium mb-8">
          Who I&apos;m Not For
        </p>

        <h2 className="font-serif font-medium text-ink
                       text-[36px] md:text-[52px]
                       leading-[1.1] tracking-[-0.02em]
                       mb-12">
          Three reasons you might not be a fit for me
        </h2>

        <div className="space-y-6 text-ink/85 text-[18px] md:text-[20px] leading-[1.65] mb-16">
          <p>I take three projects at a time. Not five. Not eight. Three.</p>
          <p>That means I can&apos;t be the right person for everyone. Specifically:</p>
        </div>

        <div className="space-y-12">

          <div>
            <p className="font-serif text-[24px] md:text-[28px] font-medium text-ink mb-3 leading-[1.3]">
              You&apos;re not a fit if you want the cheapest quote.
            </p>
            <p className="text-ink/85 text-[18px] md:text-[20px] leading-[1.65]">
              I&apos;m not the cheapest, and I&apos;m not trying to be.
            </p>
          </div>

          <div>
            <p className="font-serif text-[24px] md:text-[28px] font-medium text-ink mb-3 leading-[1.3]">
              You&apos;re not a fit if you want it done in three weeks.
            </p>
            <p className="text-ink/85 text-[18px] md:text-[20px] leading-[1.65]">
              Real kitchens take real time, and I&apos;d rather lose the job than rush yours.
            </p>
          </div>

          <div>
            <p className="font-serif text-[24px] md:text-[28px] font-medium text-ink mb-3 leading-[1.3]">
              You&apos;re not a fit if you&apos;ve already designed it in your head and just want someone to execute.
            </p>
            <p className="text-ink/85 text-[18px] md:text-[20px] leading-[1.65]">
              I work best with people who have a vision but want a real conversation about what&apos;s possible.
            </p>
          </div>

        </div>

        <p className="font-serif italic text-[22px] md:text-[26px] text-ink mt-16 mb-10 leading-[1.4]">
          If any of that lost you, no hard feelings. If it didn&apos;t, let&apos;s talk.
        </p>

        <a
          href="#book"
          className="inline-block w-full md:w-auto bg-accent hover:bg-accent-dark
                     text-paper px-10 py-5 text-[16px] font-medium rounded-none
                     transition-colors duration-300"
        >
          Book Your Kitchen Table Consult
        </a>
      </div>
    </section>
  )
}
