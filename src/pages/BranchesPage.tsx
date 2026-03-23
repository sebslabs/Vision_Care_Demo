import { useState } from 'react';
import { MapPin, Phone, Clock, Search } from 'lucide-react';
import { branches } from '@/lib/data';
import StructuredData from '@/components/StructuredData';

const provinces = ['All', ...Array.from(new Set(branches.map((b) => b.province)))];

const branchesSchema = {
  "@context": "https://schema.org",
  "@graph": branches.map((b) => ({
    "@type": "MedicalBusiness",
    "@id": `https://visioncare.lk/branches#${b.name.toLowerCase().replace(/\s+/g, '-')}`,
    "name": b.name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": b.address,
      "addressLocality": b.district,
      "addressRegion": b.province,
      "addressCountry": "LK"
    },
    "telephone": b.phone,
    "openingHours": b.hours,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": b.lat,
      "longitude": b.lng
    },
    "image": "https://visioncare.lk/assets/branch-placeholder.jpg"
  }))
};

export default function BranchesPage() {
  const [search, setSearch] = useState('');
  const [province, setProvince] = useState('All');
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  const filtered = branches.filter((b) => {
    if (province !== 'All' && b.province !== province) return false;
    if (search && !b.name.toLowerCase().includes(search.toLowerCase()) && !b.district.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="pt-28 min-h-screen bg-cream">
      <StructuredData data={branchesSchema} />
      {/* Hero Section */}
      <section className="bg-navy py-20 lg:py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-blue via-navy to-navy"></div>
        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <p className="font-ui text-sm font-bold tracking-widest uppercase text-sky-blue mb-6">
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => window.location.href = '/'}>Home</span> / Branches
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-10 leading-tight">Find Your Nearest Vision Care</h1>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-3xl justify-center bg-white/5 p-4 rounded-3xl backdrop-blur-sm border border-white/10">
            <div className="flex-1 relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                placeholder="Search by town or city..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-full border-2 border-transparent bg-white text-navy placeholder:text-text-muted font-body text-base focus:outline-none focus:border-sky-blue shadow-inner transition-colors"
              />
            </div>
            <select
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              className="px-6 py-4 rounded-full border-2 border-transparent bg-white text-navy font-ui text-sm font-bold focus:outline-none focus:border-sky-blue appearance-none min-w-[200px] shadow-inner cursor-pointer"
            >
              {provinces.map((p) => <option key={p} value={p} className="text-text-dark">{p === 'All' ? 'All Provinces' : p}</option>)}
            </select>
          </div>
        </div>
      </section>

      {/* Main Interactive Section */}
      <section className="py-0">
        <div className="container mx-auto px-4 lg:px-4">
          <div className="flex flex-col lg:flex-row h-auto lg:h-[700px] bg-white lg:shadow-2xl lg:rounded-[2.5rem] overflow-hidden -mt-16 mb-20 relative z-20 border border-border-light max-w-7xl mx-auto">
            {/* Left Panel: Branch List */}
            <div className="w-full lg:w-2/5 flex flex-col border-r border-border-light bg-cream/30">
              <div className="p-8 border-b border-border-light bg-white">
                <p className="font-ui text-[10px] font-bold text-sky-blue uppercase tracking-widest">{filtered.length} locations active</p>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
                {filtered.map((b) => (
                  <button
                    key={b.name}
                    onClick={() => setSelectedBranch(b)}
                    className={`w-full text-left p-6 rounded-3xl border transition-all duration-300 ${selectedBranch.name === b.name
                      ? 'border-navy bg-white shadow-xl -translate-y-1'
                      : 'border-border-light bg-white hover:border-navy/30 hover:shadow-md'
                      }`}
                  >
                    <h3 className={`font-display text-xl font-bold mb-4 ${selectedBranch.name === b.name ? 'text-navy' : 'text-text-dark'}`}>{b.name}</h3>
                    <div className="space-y-3 text-sm font-body text-text-muted">
                      <div className="flex items-start gap-3 leading-snug"><MapPin className={`w-5 h-5 flex-shrink-0 ${selectedBranch.name === b.name ? 'text-sky-blue' : 'text-text-muted'}`} strokeWidth={1.5} />{b.address}</div>
                      <div className="flex items-center gap-3"><Phone className={`w-5 h-5 flex-shrink-0 ${selectedBranch.name === b.name ? 'text-sky-blue' : 'text-text-muted'}`} strokeWidth={1.5} />{b.phone}</div>
                      <div className="flex items-center gap-3"><Clock className={`w-5 h-5 flex-shrink-0 ${selectedBranch.name === b.name ? 'text-sky-blue' : 'text-text-muted'}`} strokeWidth={1.5} />{b.hours}</div>
                    </div>
                    {selectedBranch.name === b.name && (
                      <div className="flex gap-2 mt-6 animate-in fade-in slide-in-from-top-2">
                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=${b.lat},${b.lng}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-3 bg-navy text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-medium-blue transition-colors shadow-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Directions ↗
                        </a>
                      </div>
                    )}
                  </button>
                ))}
                {filtered.length === 0 && (
                  <div className="py-24 text-center opacity-40">
                    <Search className="w-12 h-12 mx-auto mb-6 text-navy" />
                    <p className="font-body text-base text-navy">No branches found matching your search.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Panel: Map */}
            <div className="w-full lg:w-3/5 h-[400px] lg:h-full bg-muted relative">
              <iframe
                title={`Map of ${selectedBranch.name}`}
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src={`https://maps.google.com/maps?q=${selectedBranch.lat},${selectedBranch.lng}&z=16&output=embed&t=m&hl=en&z=15`}
                className="grayscale-[0.2] contrast-[1.1]"
              />
              {/* Map Overlay Label */}
              <div className="absolute top-6 left-6 right-6 lg:left-auto lg:right-6 lg:w-80 p-6 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 animate-in fade-in slide-in-from-right-4">
                <p className="font-ui text-[10px] font-bold text-sky-blue uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Live View
                </p>
                <h4 className="font-display text-xl font-bold text-navy mb-2">{selectedBranch.name}</h4>
                <p className="font-body text-sm text-text-muted truncate">{selectedBranch.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-navy text-white rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-center shadow-2xl">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-blue via-transparent to-transparent pointer-events-none"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Can't find a branch near you?</h2>
              <p className="font-body text-xl opacity-80 mb-10 leading-relaxed">Call our island-wide hotline for assistance or to find the nearest Vision Care mobile clinic location.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <a href="tel:+94112345678" className="flex items-center gap-3 text-3xl font-display font-bold text-sky-blue hover:text-white transition-colors bg-white/10 px-8 py-4 rounded-full backdrop-blur-sm">
                  <Phone className="w-6 h-6" /> +94 11 234 5678
                </a>
                <span className="font-ui text-[10px] font-bold uppercase tracking-widest opacity-80 bg-red-500/20 text-red-100 px-4 py-2 rounded-full border border-red-500/30">Open 24/7 for Emergencies</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
