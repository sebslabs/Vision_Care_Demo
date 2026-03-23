import { useState } from 'react';
import { jobListings } from '@/lib/data';
import CTABanner from '@/components/CTABanner';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import StructuredData from '@/components/StructuredData';

const departments = ['All', 'Clinical', 'Retail', 'Academy', 'IT', 'Marketing', 'Operations'];

export default function CareersPage() {
  const [dept, setDept] = useState('All');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = dept === 'All' ? jobListings : jobListings.filter((j) => j.department === dept);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visioncare.lk" },
      { "@type": "ListItem", "position": 2, "name": "Careers", "item": "https://visioncare.lk/careers" }
    ]
  };

  return (
    <div className="pt-28">
      <StructuredData data={breadcrumbSchema} />
      <section className="bg-navy py-20 lg:py-28 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-blue via-navy to-navy"></div>
        <div className="container mx-auto px-4 relative z-10">
          <p className="font-ui text-sm font-bold tracking-widest text-sky-blue mb-4 uppercase">
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => window.location.href = '/'}>Home</span> / Careers
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">Build a Meaningful Career</h1>
          <p className="font-body text-xl opacity-80 max-w-2xl leading-relaxed">Join a team dedicated to improving vision and quality of life across Sri Lanka.</p>
        </div>
      </section>

      {/* Why join */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 max-w-6xl mx-auto">
            {[
              { title: 'Continuous Training', desc: 'Learning and development opportunities' },
              { title: 'Career Growth', desc: 'Clear progression across departments' },
              { title: 'Island-Wide Roles', desc: 'Opportunities at 50+ branches' },
              { title: 'Making a Difference', desc: 'Help thousands see the world better' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-3xl p-8 border border-border-light shadow-sm text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <h3 className="font-display text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="font-body text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-8 text-center">Open Positions</h2>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {departments.map((d) => (
                <button key={d} onClick={() => setDept(d)} className={`px-6 py-3 rounded-full font-ui text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${dept === d ? 'bg-navy text-white shadow-md' : 'bg-white text-navy border border-border-light hover:border-navy hover:-translate-y-0.5'}`}>{d}</button>
              ))}
            </div>

            {/* Listings */}
            <div className="space-y-6">
              {filtered.map((job) => (
                <div key={job.id} className="bg-white rounded-3xl border border-border-light shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <button onClick={() => setExpandedId(expandedId === job.id ? null : job.id)} className="w-full p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between text-left gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-navy mb-3">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-ui font-bold tracking-widest uppercase text-text-muted">
                        <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-sky-blue" />{job.department}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-sky-blue" />{job.location}</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-sky-blue" />{job.type}</span>
                      </div>
                    </div>
                    <span className={`font-ui text-sm font-bold uppercase tracking-widest px-6 py-3 rounded-full border transition-colors shrink-0 ${expandedId === job.id ? 'bg-cream text-navy border-transparent' : 'bg-white text-navy border-border-light hover:border-navy'}`}>{expandedId === job.id ? 'Close' : 'View Details →'}</span>
                  </button>
                  {expandedId === job.id && (
                    <div className="px-6 md:px-8 pb-8 pt-4 border-t border-border-light bg-cream/30">
                      <p className="font-body text-base text-text-muted mb-8 leading-relaxed max-w-3xl">{job.description}</p>
                      <button className="px-8 py-4 bg-navy text-white font-ui text-sm font-bold rounded-full hover:bg-sky-blue transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                        Apply Now
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner heading="Don't See Your Role?" sub="Send us your CV and we'll keep you in mind for future opportunities." cta1="Send CV" cta2="View All Branches" />
    </div>
  );
}
