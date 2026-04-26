'use client'

import { useState, FormEvent } from 'react'

interface FormData {
  fullName: string
  email: string
  phone: string
  projectAddress: string
  bestTime: string
  notes: string
}

const inputClass =
  'bg-charcoal border-0 border-b border-bone/30 text-bone py-5 w-full placeholder:text-bone/40 focus:outline-none focus:border-accent transition-colors duration-200 font-sans text-base'

const labelClass =
  'block font-sans text-[12px] uppercase tracking-[0.15em] text-bone/70 mb-2'

export default function BookingFormSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    projectAddress: '',
    bestTime: '',
    notes: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await fetch('/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setSubmitted(true)
  }

  return (
    <section id="book" className="bg-charcoal py-32 md:py-40 px-6 md:px-12">
      <div className="max-w-2xl mx-auto">
        <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-accent mb-8">
          Book Your Consult
        </p>

        <h2 className="font-serif font-medium text-[36px] md:text-[52px] text-bone leading-[1.1] tracking-[-0.02em] mb-8">
          What happens after you book
        </h2>

        <p className="text-bone/85 text-[18px] md:text-[20px] leading-[1.65] max-w-xl mb-16">
          Within 24 hours, I&apos;ll text you to confirm. We&apos;ll pick a time that works for you, usually within the next week. I&apos;ll show up on time, with a notebook. The hour is yours.
        </p>
        <p className="text-bone/85 text-[18px] md:text-[20px] leading-[1.65] max-w-xl mb-16 -mt-10">
          That&apos;s it. No deposit. No paperwork. No pressure to decide anything by the end of the hour. Just a conversation about your kitchen.
        </p>

        {submitted ? (
          <div
            className="text-center py-16"
            style={{ animation: 'fadeIn 300ms ease-out' }}
          >
            <style>{`@keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }`}</style>
            <p className="font-serif text-[32px] text-bone mb-6">Got it.</p>
            <p className="text-bone/80 text-[18px] md:text-[20px] leading-[1.65]">
              I&apos;ll text you within 24 hours to confirm a time. Talk soon.
            </p>
            <p className="font-serif text-[20px] text-bone/80 mt-4">-- Dave</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="space-y-10">
              <div>
                <label htmlFor="fullName" className={labelClass}>Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={form.fullName}
                  onChange={handleChange}
                  className={inputClass}
                  autoComplete="name"
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  autoComplete="email"
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                  autoComplete="tel"
                />
              </div>

              <div>
                <label htmlFor="projectAddress" className={labelClass}>
                  Where&apos;s the Project?
                </label>
                <input
                  id="projectAddress"
                  name="projectAddress"
                  type="text"
                  required
                  value={form.projectAddress}
                  onChange={handleChange}
                  className={inputClass}
                  autoComplete="street-address"
                />
              </div>

              <div>
                <label htmlFor="bestTime" className={labelClass}>Best Time to Reach You</label>
                <select
                  id="bestTime"
                  name="bestTime"
                  required
                  value={form.bestTime}
                  onChange={handleChange}
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="" disabled>Select a time</option>
                  <option value="Morning (8am-12pm)">Morning (8am-12pm)</option>
                  <option value="Afternoon (12pm-5pm)">Afternoon (12pm-5pm)</option>
                  <option value="Evening (5pm-8pm)">Evening (5pm-8pm)</option>
                  <option value="Anytime">Anytime</option>
                </select>
              </div>

              <div>
                <label htmlFor="notes" className={labelClass}>
                  What Are You Thinking About Renovating?{' '}
                  <span className="normal-case tracking-normal text-bone/40">(optional)</span>
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Kitchen, master bath, whole-home... whatever's on your mind. A sentence is fine."
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            <button
              type="submit"
              aria-label="Book my kitchen table consult with Dave"
              className="w-full mt-10 bg-accent hover:bg-accent-dark text-paper py-6 font-sans font-medium text-base tracking-normal rounded-none transition-colors duration-300 cursor-pointer min-h-[56px]"
            >
              Book My Kitchen Table Consult
            </button>

            <p className="font-sans text-sm text-stone mt-4 text-center">
              I&apos;ll text you within 24 hours to confirm.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
