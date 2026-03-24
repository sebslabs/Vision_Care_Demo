import { useState } from 'react';
import { Link } from 'react-router-dom';
import { specialists } from '@/lib/data';
import { Search, MapPin, Calendar, Award } from 'lucide-react';
import CTABanner from '@/components/CTABanner';
import StructuredData from '@/components/StructuredData';

export default function SpecialistsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('All');
  const [branchFilter, setBranchFilter] = useState('All');

  const specialties = ['All', ...Array.from(new Set(specialists.map(s => s.specialty)))];
  const branches = ['All', ...Array.from(new Set(specialists.map(s => s.branch)))];

  const filteredSpecialists = specialists.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          s.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = specialtyFilter === 'All' || s.specialty === specialtyFilter;
    const matchesBranch = branchFilter === 'All' || s.branch === branchFilter;
    return matchesSearch && matchesSpecialty && matchesBranch;
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visioncare.lk" },
      { "@type": "ListItem", "position": 2, "name": "Specialists", "item": "https://visioncare.lk/specialists" }
    ]
  };

  return (
    <div className="pt-28">
      <StructuredData data={breadcrumbSchema} />
      
      {/* Hero Section */}
      <section className="bg-navy py-20 lg:py-28 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-blue via-navy to-navy"></div>
        <div className="container mx-auto px-4 relative z-10">
          <p className="font-ui text-sm font-bold tracking-widest text-sky-blue mb-4 uppercase">
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => window.location.href = '/'}>Home</span> / Specialists
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">Meet Our Eye Care Experts</h1>
          <p className="font-body text-xl opacity-80 max-w-2xl leading-relaxed">
            Leading ophthalmologists, optometrists, and hearing care professionals dedicated to providing you with world-class clinical care and personalized attention.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-cream min-h-[50vh]">
        <div className="container mx-auto px-4">
          
          {/* Filters Area */}
          <div className="bg-white rounded-[2rem] p-6 lg:p-8 shadow-sm border border-border-light mb-12 transform -translate-y-24 shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search */}
              <div className="relative">
                 <label className="font-ui text-sm font-bold text-navy mb-2 block uppercase tracking-wider">Search by Name</label>
                 <div className="relative">
                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                     <Search className="h-5 w-5 text-text-muted" />
                   </div>
                   <input 
                     type="text" 
                     placeholder="e.g. Dr. Perera"
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                     className="w-full pl-12 pr-4 py-3.5 bg-cream border border-border-light rounded-xl font-body text-text-dark focus:outline-none focus:border-sky-blue focus:ring-1 focus:ring-sky-blue transition-all"
                   />
                 </div>
              </div>

               {/* Specialty Filter */}
               <div>
                 <label className="font-ui text-sm font-bold text-navy mb-2 block uppercase tracking-wider">Specialty</label>
                 <select 
                   value={specialtyFilter} 
                   onChange={(e) => setSpecialtyFilter(e.target.value)}
                   className="w-full px-4 py-3.5 bg-cream border border-border-light rounded-xl font-body text-text-dark focus:outline-none focus:border-sky-blue focus:ring-1 focus:ring-sky-blue transition-all cursor-pointer appearance-none"
                 >
                   {specialties.map(spec => (
                     <option key={spec} value={spec}>{spec}</option>
                   ))}
                 </select>
               </div>

                {/* Branch Filter */}
                <div>
                 <label className="font-ui text-sm font-bold text-navy mb-2 block uppercase tracking-wider">Branch</label>
                 <select 
                   value={branchFilter} 
                   onChange={(e) => setBranchFilter(e.target.value)}
                   className="w-full px-4 py-3.5 bg-cream border border-border-light rounded-xl font-body text-text-dark focus:outline-none focus:border-sky-blue focus:ring-1 focus:ring-sky-blue transition-all cursor-pointer appearance-none"
                 >
                   {branches.map(branch => (
                     <option key={branch} value={branch}>{branch}</option>
                   ))}
                 </select>
               </div>
            </div>
          </div>

          <div className="-mt-16 mb-8 text-center md:text-left">
             <p className="font-body text-text-muted font-medium">Found <span className="text-navy font-bold">{filteredSpecialists.length}</span> specialists</p>
          </div>

          {/* Directory Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpecialists.map(specialist => (
              <div key={specialist.id} className="bg-white rounded-[2rem] overflow-hidden border border-border-light group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col items-center p-8 text-center text-navy relative">
                 <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-ui text-[10px] font-bold uppercase tracking-widest text-sky-blue bg-sky-blue/10 px-3 py-1.5 rounded-full">{specialist.specialty}</span>
                 </div>
                 
                 <div className="w-32 h-32 rounded-full overflow-hidden border-[6px] border-cream mb-6 shrink-0 shadow-soft group-hover:border-sky-blue/20 transition-colors">
                    <img src={specialist.image} alt={specialist.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 </div>
                 
                 <h3 className="font-display text-2xl font-bold mb-1 group-hover:text-sky-blue transition-colors">{specialist.name}</h3>
                 <p className="font-ui text-sm font-semibold tracking-wide text-sky-blue uppercase mb-4">{specialist.title}</p>
                 
                 <div className="flex flex-col gap-2.5 w-full font-body text-sm text-text-muted mt-auto">
                    <div className="flex items-start gap-3 bg-cream p-3 rounded-xl border border-border-light/50">
                       <Award className="w-5 h-5 text-text-dark/40 shrink-0" />
                       <span className="text-left leading-tight group-hover:text-text-dark transition-colors">{specialist.qualifications}</span>
                    </div>
                    <div className="flex items-center gap-3 bg-cream p-3 rounded-xl border border-border-light/50">
                       <MapPin className="w-5 h-5 text-text-dark/40 shrink-0" />
                       <span className="text-left font-medium group-hover:text-text-dark transition-colors">{specialist.branch} Branch</span>
                    </div>
                    <div className="flex items-center gap-3 bg-cream p-3 rounded-xl border border-border-light/50">
                       <Calendar className="w-5 h-5 text-text-dark/40 shrink-0" />
                       <span className="text-left group-hover:text-text-dark transition-colors">{specialist.availableDays.join(', ')}</span>
                    </div>
                 </div>

                 <Link to="/book" className="mt-8 w-full py-3.5 rounded-xl border-2 border-navy text-navy font-ui text-sm font-bold tracking-widest uppercase hover:bg-navy hover:text-white transition-all group-hover:shadow-md">
                    Book Appointment
                 </Link>
              </div>
            ))}
            
            {filteredSpecialists.length === 0 && (
                <div className="col-span-1 md:col-span-2 lg:col-span-3 py-20 text-center">
                   <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white border border-border-light text-navy/20 mb-6 drop-shadow-sm">
                      <Search className="w-10 h-10" />
                   </div>
                   <h3 className="font-display text-3xl font-bold text-navy mb-3">No specialists found</h3>
                   <p className="font-body text-text-muted text-lg max-w-md mx-auto">Try adjusting your filters or search terms to find the specific care provider you need.</p>
                </div>
            )}
          </div>
        </div>
      </section>

      <CTABanner heading="Not sure who you need to see?" sub="Contact our customer care team for guidance on booking the right specialist." />
    </div>
  );
}
