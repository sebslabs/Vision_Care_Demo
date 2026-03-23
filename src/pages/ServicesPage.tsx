import { Link } from 'react-router-dom';
import { Eye, Glasses, CircleDot, Sun, Search, Activity, Baby, Moon } from 'lucide-react';
import { services } from '@/lib/data';
import CTABanner from '@/components/CTABanner';
import StructuredData from '@/components/StructuredData';

const iconMap: Record<string, React.ElementType> = { Eye, Glasses, CircleDot, Sun, Search, Activity, Baby, Moon };

export default function ServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visioncare.lk" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://visioncare.lk/services" }
    ]
  };

  return (
    <div className="pt-28">
      <StructuredData data={breadcrumbSchema} />
      {/* Hero */}
      <section className="bg-navy py-20 lg:py-28 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-blue via-navy to-navy"></div>
        <div className="container mx-auto px-4 relative z-10">
          <p className="font-ui text-sm font-bold tracking-widest text-sky-blue mb-4 uppercase">
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => window.location.href = '/'}>Home</span> / Services
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">Comprehensive Eye Care Services</h1>
          <p className="font-body text-xl opacity-80 max-w-2xl leading-relaxed">From routine eye tests to specialist care — delivered with precision and compassion at every branch.</p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 space-y-16">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Eye;
            const isReversed = i % 2 !== 0;
            return (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                <div className={isReversed ? 'lg:order-2' : ''}>
                  <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 relative bg-muted group border border-border-light">
                    {/* @ts-ignore - image exists in our updated data */}
                    {service.image ? (
                      /* @ts-ignore */
                      <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    ) : (
                      <div className="bg-cream w-full h-full" />
                    )}
                  </div>
                </div>
                <div className={isReversed ? 'lg:order-1' : ''}>
                  <div className="w-16 h-16 rounded-2xl bg-cream flex items-center justify-center mb-6 shadow-sm border border-border-light">
                    <Icon className="w-8 h-8 text-navy" strokeWidth={1.5} />
                  </div>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">{service.name}</h2>
                  <p className="font-body text-lg text-text-muted mb-8 leading-relaxed max-w-xl">{service.description}</p>
                  <Link to={`/services/${service.id}`} className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-ui text-sm font-bold rounded-full hover:bg-sky-blue transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-300">
                    Learn More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
