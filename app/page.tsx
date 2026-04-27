import AnimationProvider from '@/app/components/AnimationProvider'
import TopBar from '@/app/components/TopBar'
import Hero from '@/app/components/Hero'
import RecognitionSection from '@/app/components/RecognitionSection'
import DreamStateSection from '@/app/components/DreamStateSection'
import IntroSection from '@/app/components/IntroSection'
import PullQuoteSection from '@/app/components/PullQuoteSection'
import FirstHourSection from '@/app/components/FirstHourSection'
import TestimonialSection from '@/app/components/TestimonialSection'
import DailyUpdatesSection from '@/app/components/DailyUpdatesSection'
import DisqualifierSection from '@/app/components/DisqualifierSection'
import ClosingSection from '@/app/components/ClosingSection'
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
      <TopBar />
      <AnimationProvider>
        <main>
          <Hero />
          <RecognitionSection />
          <DreamStateSection />
          <IntroSection />
          <PullQuoteSection />
          <FirstHourSection />
          <TestimonialSection />
          <DailyUpdatesSection />
          <DisqualifierSection />
          <ClosingSection />
          <BookingFormSection />
          <Footer />
        </main>
      </AnimationProvider>
    </>
  )
}
