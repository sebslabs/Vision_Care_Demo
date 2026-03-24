import { useEffect, useState, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/hooks/useLanguage';

const stats = [
  { value: 30, suffix: '+', key: 'stats.years' },
  { value: 50, suffix: '+', key: 'stats.branches' },
  { value: 500, suffix: 'K+', key: 'stats.patients', display: '500' },
  { value: 20, suffix: '+', key: 'stats.brands' },
];

function useCountUp(target: number, isVisible: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!isVisible || started.current) return;
    started.current = true;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [isVisible, target, duration]);

  return count;
}

function StatItem({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) {
  const { t } = useLanguage();
  const count = useCountUp(stat.value, isVisible);
  const display = stat.display
    ? (count >= stat.value ? stat.display : count.toLocaleString())
    : count.toString();

  return (
    <>{display}{stat.suffix}</>
  );
}

export default function StatsBar() {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-blue via-navy to-navy"></div>
      <div className={`container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {stats.map((s, i) => (
          <div key={s.key} className="text-center" style={{ transitionDelay: isVisible ? `${i * 150}ms` : '0ms' }}>
            <div className="font-stats text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-blue/80 mb-3 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              <StatItem stat={s} isVisible={isVisible} />
            </div>
            <div className="font-ui text-sm lg:text-base font-semibold text-white/80 tracking-widest uppercase">{t(s.key)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
