import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import luxuryImage from '@/assets/luxury-outlet.jpg';

export default function LuxurySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-32 lg:py-48 overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={luxuryImage} alt="Vision Care Luxury Outlet" className="w-full h-full object-cover opacity-40 mix-blend-overlay" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
      </div>
      <div className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
        <div className="max-w-2xl">
          <p className="font-ui text-sm font-bold text-gold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-gold"></span> Exclusive Collection
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Vision Care Luxury<br /><span className="text-gold">Cinnamon Life</span>
          </h2>
          <p className="font-body text-lg md:text-xl mb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Experience an unparalleled selection of premium eyewear. Prada, Porsche Design, and Armani — exclusively available at our boutique with personalized fitting by master opticians.
          </p>
          <p className="font-ui text-sm font-medium tracking-wide mb-10" style={{ color: 'rgba(255,255,255,0.5)' }}>
            R.A. De Mel Mawatha, Colombo 03 · Mon–Sun: 10am–9pm
          </p>
          <button className="px-10 py-4 bg-gold text-navy font-ui text-base font-bold rounded-full hover:bg-white transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300">
            Visit the Boutique
          </button>
        </div>
      </div>
    </section>
  );
}
