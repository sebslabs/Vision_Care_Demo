import { Link } from 'react-router-dom';
import { Eye, Award, Users, MapPin, Heart, Target, Lightbulb, Shield, ChevronRight } from 'lucide-react';
import CTABanner from '@/components/CTABanner';
import StructuredData from '@/components/StructuredData';

const milestones = [
  { year: '1984', title: 'Founded in Colombo', description: 'Vision Care opened its first optical centre on Galle Road, Colombo 03, with a mission to bring world-class eye care to Sri Lanka.' },
  { year: '1995', title: 'Introduced Contact Lens Clinic', description: 'Became one of the first optical chains to offer professional contact lens fitting and aftercare services island-wide.' },
  { year: '2003', title: 'Expanded to 5 Branches', description: 'Rapid growth across Western Province, establishing locations in Nugegoda, Colombo 07, and Negombo.' },
  { year: '2010', title: 'Launched Hearing Division', description: 'Partnered with leading audiological brands to introduce hearing care under the Vision Care umbrella.' },
  { year: '2016', title: 'Vision Care Academy Founded', description: 'Established Sri Lanka\'s premier optometry training institute, elevating professional standards across the industry.' },
  { year: '2022', title: '15 Branches Nationwide', description: 'Expanded from Jaffna to Matara, bringing accessible eye and hearing care to every corner of the island.' },
  { year: '2024', title: 'Luxury Outlet at Cinnamon Life', description: 'Opened the flagship luxury eyewear boutique at Colombo\'s most prestigious retail destination.' },
];

const values = [
  { icon: Heart, title: 'Patient-Centred Care', description: 'Every decision begins and ends with the well-being of our patients.' },
  { icon: Target, title: 'Clinical Excellence', description: 'We invest in cutting-edge diagnostics and continuous professional development.' },
  { icon: Lightbulb, title: 'Innovation', description: 'Pioneering new technologies and treatments to stay at the forefront of optical science.' },
  { icon: Shield, title: 'Trust & Integrity', description: 'Transparent advice, honest pricing, and ethical practice form our foundation.' },
];

const leadership = [
  { name: 'Dr. Anura Wijesinghe', role: 'Founder & Chairman', bio: 'A visionary optometrist with over 40 years of experience, Dr. Wijesinghe established Vision Care to democratise quality eye care across Sri Lanka.' },
  { name: 'Dr. Priya Ramanathan', role: 'Chief Clinical Officer', bio: 'Fellow of the British Contact Lens Association, Dr. Ramanathan oversees clinical protocols and training across all branches.' },
  { name: 'Kasun Jayasuriya', role: 'Managing Director', bio: 'A seasoned healthcare executive who has driven Vision Care\'s nationwide expansion and digital transformation strategy.' },
  { name: 'Dr. Nishanthi Fernando', role: 'Head of Academy', bio: 'An educator and researcher passionate about raising the next generation of Sri Lankan optometrists to global standards.' },
];

const stats = [
  { value: '40+', label: 'Years of Service' },
  { value: '15', label: 'Branches Nationwide' },
  { value: '500K+', label: 'Patients Served' },
  { value: '120+', label: 'Eye Care Professionals' },
];

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visioncare.lk" },
      { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://visioncare.lk/about" }
    ]
  };

  return (
    <div className="pt-28">
      <StructuredData data={breadcrumbSchema} />
      {/* Hero */}
      <section className="bg-navy py-20 lg:py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-blue via-navy to-navy"></div>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <p className="font-ui text-sm font-bold tracking-widest uppercase text-sky-blue mb-6">
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => window.location.href = '/'}>Home</span> / About Us
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Sri Lanka's Most Trusted Name in Eye & Hearing Care
          </h1>
          <p className="font-body text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
            For over four decades, Vision Care has been at the forefront of optical excellence — combining clinical precision with genuine compassion to protect and enhance the way Sri Lankans see and hear the world.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-0 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-6xl mx-auto -translate-y-1/2 bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-border-light">
            {stats.map((s) => (
              <div key={s.label} className="p-2 md:p-6 border-b md:border-b-0 md:border-r last:border-r-0 last:border-b-0 border-border-light/50">
                <div className="font-display text-4xl md:text-5xl font-bold text-navy mb-2 bg-gradient-to-r from-navy to-sky-blue bg-clip-text text-transparent inline-block">{s.value}</div>
                <div className="font-ui text-[10px] md:text-xs tracking-widest uppercase text-text-muted font-bold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-cream rounded-[2.5rem] p-10 md:p-12 shadow-lg border border-border-light relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-blue/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[40px] group-hover:bg-sky-blue/10 transition-colors" />
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm">
                <Eye className="w-8 h-8 text-sky-blue" />
              </div>
              <h2 className="font-display text-3xl font-bold text-navy mb-4 relative z-10">Our Mission</h2>
              <p className="font-body text-text-muted leading-relaxed text-lg relative z-10">
                To deliver accessible, world-class eye and hearing care to every Sri Lankan — through advanced technology, highly trained professionals, and an unwavering commitment to patient well-being.
              </p>
            </div>
            <div className="bg-cream rounded-[2.5rem] p-10 md:p-12 shadow-lg border border-border-light relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-navy/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[40px] group-hover:bg-navy/10 transition-colors" />
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm">
                <Award className="w-8 h-8 text-navy" />
              </div>
              <h2 className="font-display text-3xl font-bold text-navy mb-4 relative z-10">Our Vision</h2>
              <p className="font-body text-text-muted leading-relaxed text-lg relative z-10">
                To be South Asia's leading integrated optical and audiological care provider — setting benchmarks in clinical excellence, patient experience, and professional education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block font-ui text-sm font-bold tracking-widest uppercase text-sky-blue mb-4">What Guides Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-3xl border border-border-light p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-cream flex items-center justify-center mx-auto mb-6">
                  <v.icon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">{v.title}</h3>
                <p className="font-body text-sm text-text-muted leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20">
            <span className="inline-block font-ui text-sm font-bold tracking-widest uppercase text-sky-blue mb-4">Our Journey</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy">40 Years of Excellence</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-blue/20 via-sky-blue/50 to-transparent md:-translate-x-px" />
            {milestones.map((m, i) => (
              <div key={m.year} className={`relative flex items-center gap-8 mb-16 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="hidden md:block md:w-1/2" />
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-navy text-white font-display text-sm font-bold flex items-center justify-center shadow-xl border-4 border-cream ring-4 ring-white">
                    {m.year}
                  </div>
                </div>
                <div className="w-full md:w-1/2 bg-white rounded-3xl border border-border-light p-8 shadow-lg hover:shadow-xl transition-shadow relative">
                  {/* Small pointer triangle */}
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-border-light rotate-45 ${i % 2 === 0 ? '-left-2 border-b border-l' : '-right-2 border-t border-r'}`} />
                  <h3 className="font-display text-2xl font-bold text-navy mb-3">{m.title}</h3>
                  <p className="font-body text-base text-text-muted leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block font-ui text-sm font-bold tracking-widest uppercase text-sky-blue mb-4">Leadership</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy">Meet the Board</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {leadership.map((l) => (
              <div key={l.name} className="bg-cream rounded-3xl border border-border-light p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col">
                <div className="w-24 h-24 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-6 border border-border-light">
                  <Users className="w-10 h-10 text-navy" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy">{l.name}</h3>
                <p className="font-ui text-xs font-bold tracking-widest uppercase text-sky-blue mb-4 mt-2">{l.role}</p>
                <p className="font-body text-sm text-text-muted leading-relaxed mt-auto">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches CTA */}
      <section className="py-24 lg:py-32 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-blue/20 via-navy to-navy opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 w-full max-w-3xl flex flex-col items-center">
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-8 backdrop-blur-md">
            <MapPin className="w-10 h-10 text-sky-blue" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Visit Us Across Sri Lanka</h2>
          <p className="font-body text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            With 15 branches from Jaffna to Matara, quality clinical eye care is never far away. Find your nearest Vision Care center today.
          </p>
          <Link
            to="/branches"
            className="inline-flex items-center gap-3 px-10 py-5 bg-sky-blue text-white font-ui text-sm font-bold rounded-full hover:bg-white hover:text-navy transition-all duration-300 shadow-xl hover:-translate-y-1"
          >
            Find Your Branch <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
