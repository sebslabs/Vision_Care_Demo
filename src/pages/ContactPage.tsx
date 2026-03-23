import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { branches } from '@/lib/data';
import { toast } from 'sonner';
import StructuredData from '@/components/StructuredData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', branch: '', service: '', message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      toast.error('Please fill in all required fields.');
      return;
    }
    toast.success('Thank you! Your inquiry has been submitted. We will contact you shortly.');
    setFormData({ name: '', phone: '', email: '', branch: '', service: '', message: '' });
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visioncare.lk" },
      { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://visioncare.lk/contact" }
    ]
  };

  return (
    <div className="pt-28">
      <StructuredData data={breadcrumbSchema} />
      <section className="bg-navy py-20 lg:py-28 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-blue via-navy to-navy"></div>
        <div className="container mx-auto px-4 relative z-10">
          <p className="font-ui text-sm font-bold tracking-widest text-sky-blue mb-4 uppercase">
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => window.location.href = '/'}>Home</span> / Contact
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">We're Here for Your Vision</h1>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-10 rounded-[2rem] border border-border-light shadow-xl">
              <div>
                <label className="font-ui text-sm font-bold text-navy mb-2 block">Full Name *</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-5 py-4 rounded-xl border-2 border-border-light bg-cream font-body text-sm focus:outline-none focus:ring-0 focus:border-sky-blue transition-colors" maxLength={100} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-ui text-sm font-bold text-navy mb-2 block">Phone *</label>
                  <input type="tel" placeholder="+94" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-5 py-4 rounded-xl border-2 border-border-light bg-cream font-body text-sm focus:outline-none focus:ring-0 focus:border-sky-blue transition-colors" maxLength={15} />
                </div>
                <div>
                  <label className="font-ui text-sm font-bold text-navy mb-2 block">Email</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-5 py-4 rounded-xl border-2 border-border-light bg-cream font-body text-sm focus:outline-none focus:ring-0 focus:border-sky-blue transition-colors" maxLength={255} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-ui text-sm font-bold text-navy mb-2 block">Nearest Branch</label>
                  <select value={formData.branch} onChange={(e) => setFormData({ ...formData, branch: e.target.value })} className="w-full px-5 py-4 rounded-xl border-2 border-border-light bg-cream font-ui text-sm focus:outline-none focus:ring-0 focus:border-sky-blue transition-colors cursor-pointer">
                    <option value="">Select branch</option>
                    {branches.map((b) => <option key={b.name} value={b.name}>{b.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="font-ui text-sm font-bold text-navy mb-2 block">Service</label>
                  <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full px-5 py-4 rounded-xl border-2 border-border-light bg-cream font-ui text-sm focus:outline-none focus:ring-0 focus:border-sky-blue transition-colors cursor-pointer">
                    <option value="">Select service</option>
                    {['Eye Care', 'Eyewear', 'Hearing', 'Academy', 'General Inquiry'].map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="font-ui text-sm font-bold text-navy mb-2 block">Message *</label>
                <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={5} className="w-full px-5 py-4 rounded-xl border-2 border-border-light bg-cream font-body text-sm focus:outline-none focus:ring-0 focus:border-sky-blue transition-colors resize-none" maxLength={1000} />
              </div>
              <button type="submit" className="w-full px-8 py-4 bg-sky-blue text-white font-ui text-sm font-bold rounded-full hover:bg-navy transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-300">
                Submit Inquiry
              </button>
            </form>

            <div className="space-y-8 pt-4">
              <div className="bg-cream p-8 md:p-10 rounded-[2rem] border border-border-light">
                <h3 className="font-display text-2xl font-bold text-navy mb-6">Head Office</h3>
                <div className="space-y-5 text-base font-body text-navy hover:[&_svg]:text-sky-blue">
                  <div className="flex items-start gap-4"><MapPin className="w-6 h-6 mt-0.5 text-navy/50 transition-colors flex-shrink-0" strokeWidth={1.5} />No. 123, Galle Road,<br />Colombo 03, Sri Lanka</div>
                  <div className="flex items-center gap-4"><Phone className="w-6 h-6 text-navy/50 transition-colors flex-shrink-0" strokeWidth={1.5} />+94 11 234 5678</div>
                  <div className="flex items-center gap-4"><Mail className="w-6 h-6 text-navy/50 transition-colors flex-shrink-0" strokeWidth={1.5} />info@visioncare.lk</div>
                  <div className="flex items-center gap-4"><Clock className="w-6 h-6 text-navy/50 transition-colors flex-shrink-0" strokeWidth={1.5} />Mon–Sat: 9am–6pm</div>
                </div>
              </div>

              {/* Sub-brand contacts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'Vision Care Academy', phone: '+94 11 345 6789', email: 'academy@visioncare.lk' },
                  { name: 'Hearing Solutions', phone: '+94 11 456 7890', email: 'hearing@visioncare.lk' },
                  { name: 'Luxury Outlet', phone: '+94 11 567 8901', email: 'luxury@visioncare.lk' },
                ].map((sub) => (
                  <div key={sub.name} className="p-6 bg-white border border-border-light rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-ui text-sm font-bold text-navy mb-3 leading-tight">{sub.name}</h4>
                    <div className="space-y-1.5 text-xs font-body text-text-muted">
                      <p>{sub.phone}</p>
                      <p className="underline hover:text-sky-blue cursor-pointer">{sub.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
