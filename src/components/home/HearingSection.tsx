import { ExternalLink, Headphones, Ear, Volume2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import hearingImage from '@/assets/hearing-lifestyle.jpg';

const hearingServices = [
  { icon: Headphones, label: 'Hearing Tests', desc: 'Comprehensive audiological assessments' },
  { icon: Ear, label: 'Hearing Aids', desc: 'Premium devices from global brands' },
  { icon: Volume2, label: 'Tinnitus Management', desc: 'Expert care for persistent ringing' },
];

export default function HearingSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-navy py-24 lg:py-36">
      <div className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="font-ui text-sm font-bold text-sky-blue tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-sky-blue"></span> ear.lk — A Vision Care Company
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Vision Care<br />Hearing Solutions</h2>
            <p className="font-body text-lg text-white/80 mb-10 max-w-lg leading-relaxed">
              Reconnect with the sounds that matter. Our hearing specialists provide comprehensive audiological care with the latest technology from global leaders.
            </p>
            <div className="space-y-6 mb-12">
              {hearingServices.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/5">
                    <Icon className="w-6 h-6 text-sky-blue" strokeWidth={1.5} />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-ui text-base font-bold text-white mb-1">{label}</h3>
                    <p className="font-body text-sm text-white/60">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="https://ear.lk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-4 bg-sky-blue text-white font-ui text-sm font-bold rounded-full hover:bg-white hover:text-navy transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300">
              Explore Hearing Solutions <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="order-1 lg:order-2 rounded-[2rem] overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-sky-blue/10 mix-blend-overlay z-10"></div>
            <img src={hearingImage} alt="Hearing care specialist" className="w-full h-full object-cover aspect-[4/5] lg:aspect-square relative z-0" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
