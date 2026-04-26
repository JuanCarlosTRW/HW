import Hero from "@/app/components/Hero";
import RecognitionSection from "@/app/components/RecognitionSection";
import IntroSection from "@/app/components/IntroSection";
import FirstHourSection from "@/app/components/FirstHourSection";
import TestimonialSection from "@/app/components/TestimonialSection";
import DailyUpdatesSection from "@/app/components/DailyUpdatesSection";
import DisqualifierSection from "@/app/components/DisqualifierSection";
import BookingFormSection from "@/app/components/BookingFormSection";
import Footer from "@/app/components/Footer";

export default function Page() {
  return (
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
  );
}
