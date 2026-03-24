import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import StatsBar from '@/components/home/StatsBar';
import PromotionsSection from '@/components/home/PromotionsSection';
import ServicesSection from '@/components/home/ServicesSection';
import LuxurySection from '@/components/home/LuxurySection';
import BrandsStrip from '@/components/home/BrandsStrip';
import WhyVisionCare from '@/components/home/WhyVisionCare';
import DoctorsSection from '@/components/home/DoctorsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTABanner from '@/components/CTABanner';

export default function Index() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <StatsBar />
      <PromotionsSection />
      <ServicesSection />
      <LuxurySection />
      <BrandsStrip />
      <WhyVisionCare />
      <DoctorsSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
