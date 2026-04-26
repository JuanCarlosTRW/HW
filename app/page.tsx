import AnimationProvider from '@/app/components/AnimationProvider'
import Hero from '@/app/components/Hero'
import RecognitionSection from '@/app/components/RecognitionSection'
import IntroSection from '@/app/components/IntroSection'
import FirstHourSection from '@/app/components/FirstHourSection'
import TestimonialSection from '@/app/components/TestimonialSection'
import DailyUpdatesSection from '@/app/components/DailyUpdatesSection'
import DisqualifierSection from '@/app/components/DisqualifierSection'
import BookingFormSection from '@/app/components/BookingFormSection'
import Footer from '@/app/components/Footer'

export default function Page() {
  return (
    <>
      <a
        href="#book"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-paper focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to booking form
      </a>
      <AnimationProvider>
        <main>
          <Hero />
          <RecognitionSection />
          <IntroSection />
          <FirstHourSection />
          <TestimonialSection />
          <DailyUpdatesSection />
          <DisqualifierSection />
          <BookingFormSection />
          <Footer />
        </main>
      </AnimationProvider>
    </>
  )
}
