export default function ClosingSection() {
  return (
    <section className="bg-paper py-32 md:py-40 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-stone uppercase tracking-[0.22em] text-[11px] font-medium mb-8">
          One Last Thing
        </p>
        <h2 className="font-serif font-medium text-ink
                       text-[36px] md:text-[52px]
                       leading-[1.1] tracking-[-0.02em] mb-10">
          You&apos;ve been thinking about this kitchen for two years.
        </h2>
        <p className="font-serif italic text-ink/75 text-[22px] md:text-[26px] leading-[1.5]">
          The next step is one hour at your kitchen table.
        </p>
      </div>
    </section>
  )
}
