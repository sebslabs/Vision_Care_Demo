import { Link } from 'react-router-dom';
import { Eye, Glasses, CircleDot, Sun, Search, Activity, Baby, Moon } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { services } from '@/lib/data';

const iconMap: Record<string, React.ElementType> = { Eye, Glasses, CircleDot, Sun, Search, Activity, Baby, Moon };

export default function ServicesSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-cream">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-4">{t('services.heading')}</h2>
          <p className="font-body text-lg text-text-muted max-w-xl mx-auto">{t('services.sub')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Eye;
            return (
              <Link
                to={`/services/${service.id}`}
                key={service.id}
                className={`group bg-white rounded-2xl p-8 border border-border-light hover:border-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
              >
                <div className="w-14 h-14 rounded-xl bg-muted/60 flex items-center justify-center mb-6 group-hover:bg-sky-blue transition-colors duration-500">
                  <Icon className="w-7 h-7 text-navy group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h3 className="font-ui text-xl font-bold text-navy mb-3">{service.name}</h3>
                <p className="font-body text-base text-text-muted mb-6 leading-relaxed line-clamp-3">{service.description}</p>
                <span className="font-ui text-sm text-sky-blue font-bold tracking-wide group-hover:text-navy transition-colors flex items-center gap-1 group-hover:gap-2">Learn More <span className="text-lg">→</span></span>
              </Link>
            );
          })}
        </div>
        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Link to="/services" className="px-8 py-4 border-2 border-navy text-navy font-ui text-base font-bold rounded-full hover:bg-navy hover:text-white transition-colors duration-300 shadow-sm hover:shadow-md inline-block">
            {t('services.viewall')}
          </Link>
        </div>
      </div>
    </section>
  );
}
