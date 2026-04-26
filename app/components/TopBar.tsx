'use client'

import { useEffect, useState } from 'react'

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
                        ${scrolled ? 'bg-paper/95 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <a href="/" className="font-serif text-[20px] font-medium text-ink tracking-tight">
          Precision <span className="text-stone font-normal">— Ridgeview</span>
        </a>
        <a
          href="#book"
          className="text-[13px] uppercase tracking-[0.18em] font-medium text-ink hover:text-accent transition-colors duration-300"
        >
          Book Consult →
        </a>
      </div>
    </header>
  )
}
