import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
import { LightboxProvider } from "@/components/Lightbox";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import EyewearPage from "./pages/EyewearPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import HearingPage from "./pages/HearingPage";
import AcademyPage from "./pages/AcademyPage";
import BranchesPage from "./pages/BranchesPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import BookingPage from "./pages/BookingPage";
import PromotionsPage from "./pages/PromotionsPage";
import NotFound from "./pages/NotFound";
import StructuredData from "@/components/StructuredData";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const mainBusinessData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Vision Care",
  "alternateName": "Vision Care Sri Lanka",
  "url": "https://visioncare.lk",
  "logo": "https://visioncare.lk/assets/logo.png",
  "image": "https://visioncare.lk/assets/hero-bg.jpg",
  "description": "Sri Lanka's leading eye care provider offering comprehensive eye testing, designer eyewear, contact lenses, and hearing solutions.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No. 6, Ward Place",
    "addressLocality": "Colombo 07",
    "addressRegion": "Western Province",
    "postalCode": "00700",
    "addressCountry": "LK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 6.9147,
    "longitude": 79.8632
  },
  "telephone": "+94112345678",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/VisionCareSL/",
    "https://www.instagram.com/visioncare.lk/",
    "https://www.linkedin.com/company/vision-care-optical-services-pvt-ltd"
  ]
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LightboxProvider>
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <StructuredData data={mainBusinessData} />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:id" element={<ServiceDetailPage />} />
              <Route path="/eyewear" element={<EyewearPage />} />
              <Route path="/eyewear/:id" element={<ProductDetailPage />} />
              <Route path="/sunglasses" element={<EyewearPage />} />
              <Route path="/contact-lenses" element={<EyewearPage />} />
              <Route path="/hearing" element={<HearingPage />} />
              <Route path="/academy" element={<AcademyPage />} />
              <Route path="/branches" element={<BranchesPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogDetailPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/promotions" element={<PromotionsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/book" element={<BookingPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
          <CookieConsent />
        </BrowserRouter>
      </LightboxProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
