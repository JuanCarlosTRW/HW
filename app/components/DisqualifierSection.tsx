import BookCTA from './BookCTA'

export default function DisqualifierSection() {
  return (
    <section className="bg-cream py-32 md:py-44 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-stone uppercase tracking-[0.22em] text-[11px] font-medium mb-6">
            Who I&apos;m Not For
          </p>
          <h2 className="font-serif font-medium text-ink
                         text-[36px] md:text-[52px]
                         leading-[1.1] tracking-[-0.02em] mb-8">
            Three reasons you might not be a fit for me
          </h2>
          <p className="text-ink/85 text-[18px] md:text-[20px] leading-[1.65]">
            I take three projects at a time. Not five. Not eight. Three. That means I can&apos;t be the right person for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-20">

          <div className="bg-paper rounded-image p-10 md:p-12
                          border border-border
                          shadow-[0_4px_20px_-8px_rgba(26,21,16,0.08)]">
            <p className="font-serif text-accent text-[48px] font-medium leading-none mb-6">01</p>
            <p className="font-serif text-ink text-[22px] md:text-[24px] font-medium leading-[1.3] mb-4">
              You want the cheapest quote.
            </p>
            <p className="text-ink/75 text-[16px] md:text-[17px] leading-[1.6]">
              I&apos;m not the cheapest, and I&apos;m not trying to be.
            </p>
          </div>

          <div className="bg-paper rounded-image p-10 md:p-12
                          border border-border
                          shadow-[0_4px_20px_-8px_rgba(26,21,16,0.08)]">
            <p className="font-serif text-accent text-[48px] font-medium leading-none mb-6">02</p>
            <p className="font-serif text-ink text-[22px] md:text-[24px] font-medium leading-[1.3] mb-4">
              You want it done in three weeks.
            </p>
            <p className="text-ink/75 text-[16px] md:text-[17px] leading-[1.6]">
              Real kitchens take real time, and I&apos;d rather lose the job than rush yours.
            </p>
          </div>

          <div className="bg-paper rounded-image p-10 md:p-12
                          border border-border
                          shadow-[0_4px_20px_-8px_rgba(26,21,16,0.08)]">
            <p className="font-serif text-accent text-[48px] font-medium leading-none mb-6">03</p>
            <p className="font-serif text-ink text-[22px] md:text-[24px] font-medium leading-[1.3] mb-4">
              You&apos;ve already designed it in your head.
            </p>
            <p className="text-ink/75 text-[16px] md:text-[17px] leading-[1.6]">
              I work best with people who have a vision but want a real conversation about what&apos;s possible.
            </p>
          </div>

        </div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="font-serif italic text-ink text-[24px] md:text-[28px] mb-12 leading-[1.4]">
            If any of that lost you, no hard feelings. If it didn&apos;t, let&apos;s talk.
          </p>
          <BookCTA wrapperClass="mt-0" />
        </div>

      </div>
    </section>
  )
}
