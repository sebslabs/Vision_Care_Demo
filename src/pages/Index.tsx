import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import ServicesSection from '@/components/home/ServicesSection';
import VisionSelfTest from '@/components/home/VisionSelfTest';
import BrandsStrip from '@/components/home/BrandsStrip';
import HearingSection from '@/components/home/HearingSection';
import AcademySection from '@/components/home/AcademySection';
import LuxurySection from '@/components/home/LuxurySection';
import StatsBar from '@/components/home/StatsBar';
import WhyVisionCare from '@/components/home/WhyVisionCare';
import DoctorsSection from '@/components/home/DoctorsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ProcessSection from '@/components/home/ProcessSection';
import FAQSection from '@/components/home/FAQSection';
import NewsSection from '@/components/home/NewsSection';
import PromotionsSection from '@/components/home/PromotionsSection';
import CTABanner from '@/components/CTABanner';

export default function Index() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <VisionSelfTest />
      <StatsBar />
      <BrandsStrip />
      <HearingSection />
      <AcademySection />
      <LuxurySection />
      <PromotionsSection />
      <WhyVisionCare />
      <DoctorsSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <NewsSection />
      <CTABanner />
    </>
  );
}
