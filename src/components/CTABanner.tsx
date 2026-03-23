import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Star } from 'lucide-react';

interface CTABannerProps {
  heading?: string;
  sub?: string;
  cta1?: string;
  cta1Link?: string;
  cta2?: string;
  cta2Link?: string;
}

export default function CTABanner({
  heading = 'Your Vision Deserves Expert Care',
  sub = 'Book a comprehensive eye examination at your nearest Vision Care branch today.',
  cta1 = 'Book Eye Test',
  cta1Link = '/book',
  cta2 = 'Find a Branch',
  cta2Link = '/branches',
}: CTABannerProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative bg-navy overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-navy to-navy"></div>
      <div className={`container mx-auto px-4 py-24 lg:py-32 text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">{heading}</h2>
        <p className="font-body text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">{sub}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link to={cta1Link} className="px-10 py-4 bg-sky-blue text-white font-ui text-base font-bold rounded-full hover:bg-white hover:text-navy transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300">
            {cta1}
          </Link>
          <Link to={cta2Link} className="px-10 py-4 border-2 border-white/30 text-white font-ui text-base font-bold rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm shadow-sm hover:shadow-md hover:-translate-y-1 duration-300">
            {cta2}
          </Link>
        </div>
        <div className="mt-10 flex items-center justify-center gap-3 animate-fade-in-up" style={{ animationDelay: "500ms" }}>
          <div className="flex">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 text-gold fill-gold" />)}
          </div>
          <span className="font-ui text-sm text-white/80 font-semibold tracking-wide uppercase">Trusted by 10,000+ Patients</span>
        </div>
      </div>
    </section>
  );
}
