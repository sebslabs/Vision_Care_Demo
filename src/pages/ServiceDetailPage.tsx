import { useParams, Link } from 'react-router-dom';
import { Eye, Glasses, CircleDot, Sun, Search, Activity, Baby, Moon, CheckCircle2, ArrowRight } from 'lucide-react';
import { services } from '@/lib/data';
import CTABanner from '@/components/CTABanner';
import NotFound from './NotFound';
import StructuredData from '@/components/StructuredData';

const iconMap: Record<string, React.ElementType> = { Eye, Glasses, CircleDot, Sun, Search, Activity, Baby, Moon };

export default function ServiceDetailPage() {
    const { id } = useParams<{ id: string }>();
    const service = services.find(s => s.id === id);

    if (!service) {
        return <NotFound />;
    }

    const Icon = iconMap[service.icon] || Eye;

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.name,
        "description": service.description,
        "provider": {
            "@type": "MedicalBusiness",
            "name": "Vision Care",
            "url": "https://visioncare.lk"
        },
        "areaServed": "Sri Lanka",
        "serviceType": "Ophthalmology / Optometry",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Eye Care Services",
            "itemListElement": (service as any).benefits?.map((b: string) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": b
                }
            }))
        }
    };

    return (
        <div className="pt-28">
            <StructuredData data={serviceSchema} />
            {/* Hero Section */}
            <section className="bg-navy py-20 lg:py-32 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-blue via-navy to-navy"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <nav className="flex mb-8 text-ui text-sm font-bold uppercase tracking-widest text-sky-blue" aria-label="Breadcrumb">
                        <span className="hover:text-white transition-colors cursor-pointer" onClick={() => window.location.href = '/'}>Home</span>
                        <span className="mx-2">/</span>
                        <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white">{service.name}</span>
                    </nav>

                    <div className="max-w-4xl">
                        <div className="w-20 h-20 rounded-[2rem] bg-white/10 flex items-center justify-center mb-8 backdrop-blur-md border border-white/20 shadow-xl">
                            <Icon className="w-10 h-10 text-sky-blue" strokeWidth={1.5} />
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                            {service.name}
                        </h1>
                        <p className="font-body text-xl opacity-80 leading-relaxed max-w-2xl">
                            {service.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 lg:py-32 bg-cream">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-[2.5rem] shadow-2xl border border-border-light p-8 lg:p-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            {/* Left: Image and Key Info */}
                            <div className="space-y-12">
                                <div className="aspect-[16/10] rounded-[2rem] overflow-hidden shadow-sm bg-muted relative group">
                                    <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                    {/* @ts-ignore - image property is present in our data */}
                                    {service.image ? (
                                        /* @ts-ignore */
                                        <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 relative z-0" />
                                    ) : (
                                        <div className="w-full h-full bg-cream flex items-center justify-center relative z-0">
                                            <Icon className="w-20 h-20 text-navy/10" />
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <h2 className="font-display text-3xl font-bold text-navy mb-8 flex items-center gap-4">
                                        <span className="w-10 h-10 rounded-full bg-navy/5 text-navy flex items-center justify-center text-sm font-bold font-ui">01</span>
                                        Why Choose Vision Care?
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {(service as any).benefits?.map((benefit: string, idx: number) => (
                                            <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-cream border border-border-light shadow-sm hover:border-navy/30 transition-colors">
                                                <CheckCircle2 className="w-6 h-6 text-sky-blue shrink-0 mt-0.5" strokeWidth={1.5} />
                                                <span className="font-body text-base text-text-dark font-medium leading-snug">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right: Detailed Info and Process */}
                            <div className="space-y-12">
                                <div className="prose prose-navy max-w-none">
                                    <h2 className="font-display text-3xl font-bold text-navy mb-6">Overview</h2>
                                    <p className="font-body text-text-muted text-lg leading-relaxed">
                                        {(service as any).longDescription}
                                    </p>
                                </div>

                                <div className="bg-navy p-10 lg:p-12 rounded-[2rem] text-white relative overflow-hidden shadow-xl">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-sky-blue/20 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />

                                    <h2 className="font-display text-2xl font-bold mb-10 flex items-center gap-4">
                                        <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-sky-blue font-ui">02</span>
                                        The Process
                                    </h2>

                                    <div className="space-y-10 relative">
                                        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-white/10" />
                                        {(service as any).process?.map((step: string, idx: number) => (
                                            <div key={idx} className="relative pl-12">
                                                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-navy border-2 border-sky-blue flex items-center justify-center z-10">
                                                    <div className="w-2 h-2 rounded-full bg-sky-blue" />
                                                </div>
                                                <div className="absolute left-[-2rem] top-[-1rem] font-display text-4xl font-bold text-white/5 pointer-events-none select-none">
                                                    {String(idx + 1).padStart(2, '0')}
                                                </div>
                                                <p className="font-body text-white/90 text-lg font-medium leading-relaxed">
                                                    {step}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                                    <Link to="/book" className="flex-1 px-8 py-4 bg-navy text-white font-ui text-sm font-bold uppercase tracking-widest rounded-full hover:bg-sky-blue transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                                        Book Now <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    {['spectacles', 'sunglasses', 'contact-lenses'].includes(service.id) && (
                                        <Link
                                            to={service.id === 'spectacles' ? '/eyewear' : `/${service.id}`}
                                            className="flex-1 px-8 py-4 bg-sky-blue text-navy font-ui text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white border-2 border-transparent hover:border-sky-blue transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                                        >
                                            Shop Collection
                                        </Link>
                                    )}
                                    <Link to="/contact" className="flex-1 px-8 py-4 bg-white border-2 border-border-light text-navy font-ui text-sm font-bold uppercase tracking-widest rounded-full hover:border-navy hover:bg-navy hover:text-white transition-all duration-300 text-center flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-0.5">
                                        Enquire Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner />
        </div>
    );
}
