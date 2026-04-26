export default function BookCTA({ wrapperClass = 'mt-16' }: { wrapperClass?: string }) {
  return (
    <div className={`flex flex-col items-center ${wrapperClass}`}>
      <a
        href="#book"
        className="group inline-flex items-center gap-3
                   bg-accent hover:bg-charcoal
                   text-paper px-12 py-6
                   text-[16px] md:text-[17px] font-medium
                   tracking-wide rounded-none
                   transition-all duration-300 ease-out
                   shadow-[0_8px_24px_-8px_rgba(184,149,106,0.5)]
                   hover:shadow-[0_12px_32px_-8px_rgba(13,11,9,0.4)]"
      >
        <span>Book Your Kitchen Table Consult</span>
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
      <p className="text-stone text-[14px] mt-5 tracking-wide">
        Free &middot; 60 minutes &middot; No quote on the spot &middot; No pressure
      </p>
    </div>
  )
}
