import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/lib/data';
import { Slider } from '@/components/ui/slider';
import CTABanner from '@/components/CTABanner';
import StructuredData from '@/components/StructuredData';

const brands = ['All', ...Array.from(new Set(products.map((p) => p.brand)))];
const types = ['All', ...Array.from(new Set(products.map((p) => p.type)))];
const genders = ['All', ...Array.from(new Set(products.map((p) => p.gender)))];

const MIN_PRICE = 0;
const MAX_PRICE = 100000;

export default function EyewearPage() {
  const [brand, setBrand] = useState('All');
  const [type, setType] = useState('All');
  const [gender, setGender] = useState('All');
  const [priceRange, setPriceRange] = useState([MIN_PRICE, MAX_PRICE]);

  const filtered = products.filter((p) => {
    if (brand !== 'All' && p.brand !== brand) return false;
    if (type !== 'All' && p.type !== type) return false;
    if (gender !== 'All' && p.gender !== gender) return false;
    if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
    return true;
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visioncare.lk" },
      { "@type": "ListItem", "position": 2, "name": "Eyewear", "item": "https://visioncare.lk/eyewear" }
    ]
  };

  return (
    <div className="pt-28">
      <StructuredData data={breadcrumbSchema} />
      <section className="bg-navy py-20 lg:py-28 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-blue via-navy to-navy"></div>
        <div className="container mx-auto px-4 relative z-10">
          <p className="font-ui text-sm font-bold tracking-widest text-sky-blue mb-4 uppercase">
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => window.location.href = '/'}>Home</span> / Eyewear
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">Discover Your Perfect Frame</h1>
          <p className="font-body text-xl opacity-80 max-w-2xl leading-relaxed">Explore our curated collection of premium global brands, from timeless classics to the latest fashion trends.</p>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Filters */}
            <aside className="lg:w-64 flex-shrink-0 space-y-6">
              <div>
                <h3 className="font-ui text-sm font-bold text-navy mb-3 uppercase tracking-wider">Brand</h3>
                <div className="flex flex-wrap gap-2">
                  {brands.map((b) => (
                    <button key={b} onClick={() => setBrand(b)} className={`px-4 py-2 rounded-full text-xs font-ui font-bold transition-all shadow-sm ${brand === b ? 'bg-navy text-white shadow-md' : 'bg-white text-navy border border-border-light hover:border-navy hover:-translate-y-0.5'}`}>{b}</button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-ui text-sm font-bold text-navy mb-3 uppercase tracking-wider">Type</h3>
                <div className="flex flex-wrap gap-2">
                  {types.map((tt) => (
                    <button key={tt} onClick={() => setType(tt)} className={`px-4 py-2 rounded-full text-xs font-ui font-bold transition-all shadow-sm ${type === tt ? 'bg-navy text-white shadow-md' : 'bg-white text-navy border border-border-light hover:border-navy hover:-translate-y-0.5'}`}>{tt}</button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-ui text-sm font-bold text-navy mb-3 uppercase tracking-wider">Gender</h3>
                <div className="flex flex-wrap gap-2">
                  {genders.map((g) => (
                    <button key={g} onClick={() => setGender(g)} className={`px-4 py-2 rounded-full text-xs font-ui font-bold transition-all shadow-sm ${gender === g ? 'bg-navy text-white shadow-md' : 'bg-white text-navy border border-border-light hover:border-navy hover:-translate-y-0.5'}`}>{g}</button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-ui text-sm font-semibold text-text-dark mb-3">Price Range</h3>
                <Slider
                  min={MIN_PRICE}
                  max={MAX_PRICE}
                  step={1000}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mb-3"
                />
                <div className="flex items-center justify-between font-ui text-xs text-text-muted">
                  <span>LKR {priceRange[0].toLocaleString()}</span>
                  <span>LKR {priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </aside>

            {/* Grid */}
            <div className="flex-1">
              <p className="font-body text-sm text-text-muted mb-6">{filtered.length} products</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((p) => (
                  <Link key={p.id} to={`/eyewear/${p.id}`} className="group bg-white rounded-3xl border border-border-light hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                    <div className="aspect-[4/3] bg-muted overflow-hidden relative p-8 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10 mix-blend-multiply" />
                      <img src={p.image} alt={`${p.brand} ${p.model}`} className="w-full h-auto object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 relative z-0" loading="lazy" />
                    </div>
                    <div className="p-6 flex flex-col flex-1 bg-white relative z-20">
                      <p className="font-ui text-[10px] font-bold tracking-widest uppercase text-sky-blue mb-2">{p.brand}</p>
                      <h3 className="font-display text-lg font-bold text-navy mb-1 group-hover:text-sky-blue transition-colors">{p.model}</h3>
                      <p className="font-stats text-base font-bold text-text-muted mb-4 flex-1">From LKR {p.price.toLocaleString()}</p>
                      <div className="flex gap-2">
                        <span className="flex-1 px-4 py-3 bg-navy text-white font-ui text-xs font-bold rounded-full text-center group-hover:bg-sky-blue transition-colors shadow-sm">View Details</span>
                        <span onClick={(e) => { e.preventDefault(); window.open('https://shop.visioncare.lk', '_blank'); }} className="px-4 py-3 border-2 border-border-light text-navy font-ui text-xs font-bold rounded-full hover:border-navy hover:bg-navy hover:text-white transition-all shadow-sm flex-shrink-0">Buy ↗</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner heading="Find Your Perfect Pair" sub="Visit your nearest Vision Care branch for a personalized fitting experience." />
    </div>
  );
}
