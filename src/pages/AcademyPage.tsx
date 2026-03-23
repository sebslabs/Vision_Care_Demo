import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, FlaskConical, Award } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import academyImage from '@/assets/academy.jpg';
import CTABanner from '@/components/CTABanner';
import StructuredData from '@/components/StructuredData';

const courses = [
  { icon: GraduationCap, name: 'Diploma in Optometry', duration: '2 Years · Full-Time', intake: '2025/2026 Academic Year — Now Open' },
  { icon: BookOpen, name: 'Certificate in Dispensing Optics', duration: '1 Year', intake: 'Intake: January & July' },
  { icon: FlaskConical, name: 'Certificate in Contact Lens Practice', duration: '6 Months', intake: 'Intake: March & September' },
  { icon: Award, name: 'Short Courses / CPD', duration: 'Flexible', intake: 'Throughout the year' },
];

export default function AcademyPage() {
  const { ref, isVisible } = useScrollAnimation();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visioncare.lk" },
      { "@type": "ListItem", "position": 2, "name": "Vision Care Academy", "item": "https://visioncare.lk/academy" }
    ]
  };

  return (
    <div className="pt-28">
      <StructuredData data={breadcrumbSchema} />
      <section className="bg-navy py-20 lg:py-28 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-blue via-navy to-navy"></div>
        <div className="container mx-auto px-4 relative z-10">
          <p className="font-ui text-sm font-bold tracking-widest text-sky-blue mb-4 uppercase">
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => window.location.href = '/'}>Home</span> / Academy
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">Shape the Future of Eye Care</h1>
          <p className="font-body text-xl opacity-80 max-w-2xl leading-relaxed">TVEC-registered programmes combining clinical training with real-world industry experience.</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-4 py-2 bg-white/10 text-white font-ui text-xs font-bold tracking-widest uppercase rounded-full backdrop-blur-sm border border-white/20">TVEC Registered</span>
            <span className="px-4 py-2 bg-white/10 text-white font-ui text-xs font-bold tracking-widest uppercase rounded-full backdrop-blur-sm border border-white/20">Ministry of Education</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section ref={ref} className="py-20 lg:py-28">
        <div className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-dark mb-6">About the Academy</h2>
              <p className="font-body text-text-muted leading-relaxed mb-4">
                Vision Care Academy is Sri Lanka's premier institution for optometry education. Our TVEC-registered programmes are designed to produce highly skilled eye care professionals, combining theoretical foundations with extensive clinical practice at Vision Care's 50+ branches.
              </p>
              <p className="font-body text-text-muted leading-relaxed">
                Graduates benefit from direct career placement opportunities within the Vision Care network, ensuring a seamless transition from education to professional practice.
              </p>
            </div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-border-light relative group">
              <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img src={academyImage} alt="Vision Care Academy" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700 relative z-0" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block font-ui text-sm font-bold tracking-widest uppercase text-sky-blue mb-4">Education</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy">Programmes Offered</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {courses.map(({ icon: Icon, name, duration, intake }) => (
              <div key={name} className="bg-white rounded-[2rem] p-8 md:p-10 border border-border-light shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-cream flex items-center justify-center mb-6 shadow-sm border border-border-light group-hover:bg-navy group-hover:border-navy transition-colors">
                  <Icon className="w-8 h-8 text-navy group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-bold text-navy mb-3">{name}</h3>
                <p className="font-body text-base text-text-muted mb-2 font-medium">{duration}</p>
                <p className="font-ui text-xs tracking-widest uppercase text-sky-blue font-bold mb-8">{intake}</p>
                <button className="mt-auto w-full py-4 border-2 border-navy text-navy font-ui text-sm font-bold rounded-full hover:bg-navy hover:text-white transition-all duration-300">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why study */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-16">Why Study at Vision Care Academy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              'Industry-Leading Experience',
              'Clinical Training at 50+ Branches',
              'TVEC & Government Recognition',
              'Career Placement Support',
            ].map((point) => (
              <div key={point} className="text-center group">
                <div className="w-20 h-20 rounded-full bg-cream flex items-center justify-center mx-auto mb-6 shadow-sm border border-border-light group-hover:-translate-y-2 transition-transform duration-300">
                  <Award className="w-8 h-8 text-navy" strokeWidth={1.5} />
                </div>
                <p className="font-display text-xl font-bold text-navy leading-tight">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Begin Your Journey in Eye Care" sub="Apply now for the 2025/2026 academic year intake." cta1="Apply Now" cta2="Contact Academy" />
    </div>
  );
}
