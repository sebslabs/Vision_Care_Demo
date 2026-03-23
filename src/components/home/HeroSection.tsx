import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import LightboxImage from '@/components/LightboxImage';
import heroImage from '@/assets/hero-eyewear.jpg';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center pt-24 lg:pt-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          {/* Left content — 55% */}
          <div className="lg:col-span-7 py-12 lg:py-0 lg:pr-16">
            <p className="font-ui text-sm font-medium text-navy tracking-[0.2em] uppercase mb-6 animate-fade-in-up">
              {t('hero.label')}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-dark leading-[1.08] mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              {t('hero.heading')}
            </h1>
            <p className="font-body text-lg text-text-muted max-w-lg mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              {t('hero.sub')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <Link to="/book" className="px-8 py-4 bg-sky-blue text-white font-ui text-base font-bold rounded-full hover:bg-medium-blue transition-colors text-center shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300">
                {t('hero.cta1')}
              </Link>
              <Link to="/services" className="px-8 py-4 bg-white border-2 border-border-light text-navy font-ui text-base font-semibold rounded-full hover:bg-muted transition-colors text-center hover:-translate-y-0.5 duration-300">
                {t('hero.cta2')}
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6 animate-fade-in-up border-t border-border-light pt-6" style={{ animationDelay: '400ms' }}>
              {['hero.stat1', 'hero.stat2', 'hero.stat3', 'hero.stat4'].map((key) => (
                <div key={key} className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  <span className="font-ui text-xs font-semibold text-navy tracking-wide">{t(key)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right image — 45% */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] lg:aspect-auto lg:h-[85vh] overflow-hidden rounded-2xl lg:rounded-l-3xl lg:rounded-r-none">
              <LightboxImage
                src={heroImage}
                alt="Professional wearing elegant eyewear"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
