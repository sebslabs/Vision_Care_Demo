import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, FlaskConical } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const courses = [
  { icon: GraduationCap, name: 'Diploma in Optometry', duration: '2 Years Full-Time' },
  { icon: FlaskConical, name: 'Contact Lens Practice', duration: '6 Months' },
  { icon: BookOpen, name: 'Dispensing Optics', duration: '1 Year' },
];

export default function AcademySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-cream">
      <div className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-ui text-sm font-medium text-navy tracking-[0.15em] uppercase mb-4">vcacademy.lk</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-6">Vision Care Academy</h2>
            <p className="font-body text-lg text-text-muted mb-6 max-w-lg">
              Shape the future of eye care in Sri Lanka. Our TVEC-registered programmes combine clinical training with industry experience, preparing graduates for meaningful careers in optometry.
            </p>
            <Link to="/academy" className="inline-flex px-7 py-3.5 bg-navy text-primary-foreground font-ui text-sm font-medium rounded-md hover:bg-medium-blue transition-colors">
              Explore the Academy
            </Link>
          </div>
          <div className="grid gap-4">
            {courses.map(({ icon: Icon, name, duration }, i) => (
              <div
                key={name}
                className={`bg-card rounded-card p-6 border border-border-light hover:-translate-y-[3px] hover:shadow-card-hover transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: isVisible ? `${(i + 1) * 100}ms` : '0ms' }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-navy" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-ui text-base font-semibold text-text-dark mb-1">{name}</h3>
                    <p className="font-body text-sm text-text-muted">{duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
