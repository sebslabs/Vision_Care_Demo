import { ExternalLink, Headphones, Ear, Volume2, Baby } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import hearingImage from '@/assets/hearing-lifestyle.jpg';
import CTABanner from '@/components/CTABanner';
import HearingSelfTest from '@/components/hearing/HearingSelfTest';
import StructuredData from '@/components/StructuredData';

import phonakLogo from '@/assets/brands/phonak-logo.png';
import signiaLogo from '@/assets/brands/signia-logo.png';
import widexLogo from '@/assets/brands/widex-logo.png';
import oticonLogo from '@/assets/brands/oticon-logo.png';
import starkeyLogo from '@/assets/brands/starkey-logo.png';

const hearingBrands = [
  { name: 'Phonak', logo: phonakLogo },
  { name: 'Signia', logo: signiaLogo },
  { name: 'Widex', logo: widexLogo },
  { name: 'Oticon', logo: oticonLogo },
  { name: 'Starkey', logo: starkeyLogo },
];

const hearingServices = [
  { icon: Headphones, name: 'Hearing Tests', desc: 'Comprehensive audiological assessments using advanced diagnostic equipment.' },
  { icon: Ear, name: 'Hearing Aids', desc: 'Premium devices from Phonak, Signia, and Widex with expert fitting.' },
  { icon: Volume2, name: 'Tinnitus Management', desc: 'Specialized programmes for persistent ringing and buzzing in the ears.' },
  { icon: Baby, name: "Children's Hearing Care", desc: 'Gentle, child-friendly hearing assessments and paediatric solutions.' },
];

export default function HearingPage() {
  const { ref, isVisible } = useScrollAnimation();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visioncare.lk" },
      { "@type": "ListItem", "position": 2, "name": "Hearing Solutions", "item": "https://visioncare.lk/hearing" }
    ]
  };

  return (
    <div className="pt-28">
      <StructuredData data={breadcrumbSchema} />
      <section className="bg-navy py-20 lg:py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-blue via-navy to-navy"></div>
        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <p className="font-ui text-sm font-bold tracking-widest text-sky-blue mb-4 uppercase">
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => window.location.href = '/'}>Home</span> / Hearing Solutions
          </p>
          <div className="flex items-center gap-3 mb-6">
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold">Vision Care Hearing Solutions</h1>
          </div>
          <p className="font-body text-xl opacity-80 max-w-2xl mx-auto mb-8 leading-relaxed">Reconnect with the sounds that matter. Comprehensive hearing care at select Vision Care branches island-wide.</p>
          <span className="inline-block px-5 py-2.5 bg-white/10 text-white font-ui text-xs font-bold tracking-widest uppercase rounded-full backdrop-blur-sm border border-white/20">ear.lk — A Vision Care Company</span>
        </div>
      </section>

      {/* About */}
      <section ref={ref} className="py-20 lg:py-28">
        <div className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-dark mb-6">Expert Hearing Care, Close to You</h2>
              <p className="font-body text-text-muted leading-relaxed mb-6">
                Vision Care Hearing Solutions brings together advanced audiological technology and experienced specialists to provide comprehensive hearing care. From initial assessment to ongoing support, we're with you every step of the way.
              </p>
              <a href="https://ear.lk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-primary-foreground font-ui text-sm font-medium rounded-md hover:bg-medium-blue transition-colors">
                Visit ear.lk <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-border-light relative group">
              <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img src={hearingImage} alt="Hearing care" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700 relative z-0" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hearingServices.map(({ icon: Icon, name, desc }) => (
              <div key={name} className="bg-white rounded-3xl p-8 border border-border-light shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-cream flex items-center justify-center mb-6 shadow-sm border border-border-light">
                  <Icon className="w-8 h-8 text-navy" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">{name}</h3>
                <p className="font-body text-sm text-text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-text-dark mb-10">Trusted Hearing Aid Brands</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
            {hearingBrands.map((b) => (
              <img key={b.name} src={b.logo} alt={b.name} className="h-24 md:h-28 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300" />
            ))}
          </div>
        </div>
      </section>

      <HearingSelfTest />

      <CTABanner heading="Take the First Step" sub="Book a hearing assessment at your nearest Vision Care branch." cta1="Book Hearing Test" cta2="Find a Branch" />
    </div>
  );
}
