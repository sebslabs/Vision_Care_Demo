import { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { testimonials } from '@/lib/data';

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 360;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="py-24 lg:py-36 overflow-hidden">
      <div className={`container mx-auto px-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy mb-4">Voices of Our Patients</h2>
            <p className="font-body text-lg text-text-muted">Real experiences from our community</p>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => scroll('left')} className="w-12 h-12 flex items-center justify-center rounded-full border border-border-light hover:bg-navy hover:text-white transition-colors" aria-label="Previous">
              <ChevronLeft className="w-6 h-6 shrink-0" />
            </button>
            <button onClick={() => scroll('right')} className="w-12 h-12 flex items-center justify-center rounded-full border border-border-light hover:bg-navy hover:text-white transition-colors" aria-label="Next">
              <ChevronRight className="w-6 h-6 shrink-0" />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12 -mx-4 px-4" style={{ scrollbarWidth: 'none' }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[340px] md:w-[420px] snap-start bg-white rounded-2xl p-8 border border-border-light shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative"
            >
              <div className="absolute top-8 right-8 w-12 h-12 bg-muted/50 rounded-full flex items-center justify-center text-4xl font-display text-navy/20 font-bold leading-none">"</div>

              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
              <p className="font-body text-[15px] text-text-dark mb-8 leading-relaxed line-clamp-4">"{t.quote}"</p>

              <div className="flex items-center gap-4 mt-auto border-t border-border-light pt-6">
                {t.img ? (
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover shrink-0 shadow-sm" />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy to-sky-blue flex items-center justify-center shrink-0 shadow-inner">
                    <span className="font-ui text-sm font-bold text-white">{t.avatar}</span>
                  </div>
                )}
                <div>
                  <p className="font-ui text-base font-bold text-navy">{t.name}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <p className="font-body text-xs text-text-muted font-medium">{t.city} · {t.service}</p>
                    <span className="flex items-center gap-1 text-[10px] bg-muted px-2 py-0.5 rounded-sm font-ui font-semibold text-text-dark"><svg className="w-3 h-3 text-[hsl(217,89%,61%)]" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg> Review</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
