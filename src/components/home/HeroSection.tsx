import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import LightboxImage from '@/components/LightboxImage';
import heroImage from '@/assets/hero-eyewear.jpg';
import { Star, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center pt-24 lg:pt-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          {/* Left content — 55% */}
          <div className="lg:col-span-7 py-12 lg:py-0 lg:pr-16">
            <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-900 text-sm font-medium">
                <span className="flex text-amber-500"><Star size={14} fill="currentColor" /></span>
                Sri Lanka’s #1 Optical Provider
              </div>
              <p className="font-ui text-sm font-medium text-navy tracking-[0.2em] uppercase hidden sm:block">
                {t('hero.label')}
              </p>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.08] mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              {t('hero.heading')}
            </h1>
            <p className="font-body text-lg text-slate-600 max-w-lg mb-8 animate-fade-in-up leading-relaxed" style={{ animationDelay: '200ms' }}>
              {t('hero.sub')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <Link to="/book" className="group inline-flex items-center justify-center h-14 px-8 bg-navy text-white font-ui text-base font-bold rounded-xl hover:bg-medium-blue transition-all text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 duration-300">
                {t('hero.cta1')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center h-14 px-8 bg-white/50 backdrop-blur-md border-2 border-border-light text-navy font-ui text-base font-bold rounded-xl hover:border-sky-blue hover:bg-sky-blue/5 transition-all text-center hover:-translate-y-1 duration-300 shadow-soft hover:shadow-card">
                {t('hero.cta2')}
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 animate-fade-in-up border-t border-border-light pt-8" style={{ animationDelay: '400ms' }}>
              {['hero.stat1', 'hero.stat2', 'hero.stat3', 'hero.stat4'].map((key) => (
                <div key={key} className="flex items-center gap-2.5 bg-cream/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border-light shadow-soft transition-all hover:bg-white hover:shadow-card hover:-translate-y-0.5">
                  <span className="w-2 h-2 rounded-full bg-sky-blue" />
                  <span className="font-ui text-xs font-bold text-navy tracking-widest uppercase">{t(key)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right image — 45% */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] lg:aspect-auto lg:h-[85vh] overflow-hidden rounded-2xl lg:rounded-l-3xl lg:rounded-r-none relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent z-10 pointer-events-none mix-blend-multiply opacity-80 transition-opacity duration-500 group-hover:opacity-100"></div>
              <LightboxImage
                src={heroImage}
                alt="Professional wearing elegant eyewear"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
