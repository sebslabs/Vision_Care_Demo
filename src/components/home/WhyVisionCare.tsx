import { MapPin, Award, Glasses, GraduationCap, Monitor } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

import luxuryImage from '@/assets/luxury-outlet.jpg';

const points = [
  { icon: MapPin, title: 'Island-Wide Accessibility', desc: '50+ branches ensuring expert care is never far away.' },
  { icon: Award, title: 'Qualified Optometrists', desc: 'Every exam by experienced professionals.' },
  { icon: Glasses, title: 'Global Eyewear', desc: 'Curated collections from renowned brands.' },
  { icon: Monitor, title: 'Advanced Diagnostics', desc: 'Equipped with the latest ophthalmic tech.' },
];

export default function WhyVisionCare() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-cream overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className={`relative ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} transition-all duration-1000`}>
            <div className="absolute inset-0 bg-navy/5 rounded-[2rem] -rotate-3 scale-105 transform origin-bottom-left transition-transform"></div>
            <img
              src={luxuryImage}
              alt="Premium Vision Care Equipment"
              className="relative z-10 w-full h-full object-cover rounded-[2rem] shadow-2xl aspect-[4/5] lg:aspect-square"
            />
          </div>

          <div className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} transition-all duration-1000 delay-200`}>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">Why Sri Lanka Trusts<br />Vision Care</h2>
            <p className="font-body text-lg text-text-muted mb-12 max-w-lg">Three decades of commitment to the nation's vision health, delivering premium care and international standards.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {points.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-sky-blue">
                    <Icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-ui text-lg font-bold text-navy mb-2">{title}</h3>
                    <p className="font-body text-sm text-text-muted leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
