import { useLanguage } from '@/hooks/useLanguage';
import { bankingPartners, promotions } from '@/lib/data';
import { Tag, Calendar, CreditCard, ShieldCheck, Zap, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import CTABanner from '@/components/CTABanner';
import StructuredData from '@/components/StructuredData';

export default function PromotionsPage() {
    const { t } = useLanguage();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.06 }
        }
    };

    const itemVariants = {
        hidden: { y: 5, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.4 }
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visioncare.lk" },
            { "@type": "ListItem", "position": 2, "name": "Promotions", "item": "https://visioncare.lk/promotions" }
        ]
    };

    return (
        <div className="pt-28">
            <StructuredData data={breadcrumbSchema} />
            {/* Hero */}
            <section className="bg-navy py-20 lg:py-32 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-blue via-navy to-navy"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <p className="font-ui text-sm font-bold tracking-widest uppercase text-sky-blue mb-4">
                        <span className="hover:text-white transition-colors cursor-pointer" onClick={() => window.location.href = '/'}>Home</span> / Promotions
                    </p>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                        Exclusive Offers & <br />
                        <span className="text-sky-blue bg-gradient-to-r from-sky-blue to-white bg-clip-text text-transparent">Flexible Payments</span>
                    </h1>
                    <p className="font-body text-xl opacity-80 max-w-2xl mx-auto leading-relaxed">
                        At Vision Care, we believe premium eye care should be accessible to everyone.
                        Explore our current seasonal promotions and interest-free payment plans.
                    </p>
                </div>
            </section>

            {/* Current Promotions */}
            <section className="py-20 lg:py-28">
                <div className="container mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="font-display text-3xl font-bold text-text-dark mb-3">Current Promotions</h2>
                        <div className="w-16 h-1 bg-navy rounded-full" />
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {promotions.map((promo, i) => (
                            <motion.div
                                key={promo.title}
                                variants={itemVariants}
                                style={{ transitionDelay: `${i * 60}ms` }}
                                className="group bg-white rounded-[2.5rem] border border-border-light overflow-hidden hover:border-navy hover:-translate-y-2 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
                            >
                                <div className="aspect-[21/9] overflow-hidden relative">
                                    <img
                                        src={promo.image}
                                        alt={promo.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent mix-blend-multiply" />
                                    <div className="absolute bottom-6 left-8">
                                        <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-ui text-[10px] font-bold uppercase tracking-widest">
                                            <Tag className="w-3.5 h-3.5 text-sky-blue" />
                                            {promo.code}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="font-display text-2xl font-bold text-navy mb-3 group-hover:text-sky-blue transition-colors duration-300">
                                        {promo.title}
                                    </h3>
                                    <p className="font-body text-base text-text-muted mb-8 leading-relaxed flex-1">
                                        {promo.description}
                                    </p>
                                    <div className="flex items-center justify-between pt-6 border-t border-border-light">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-cream flex items-center justify-center border border-border-light group-hover:bg-navy group-hover:border-navy transition-colors">
                                                <Calendar className="w-5 h-5 text-navy group-hover:text-white transition-colors" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted opacity-80 mb-1">Expires On</p>
                                                <p className="font-ui text-base font-bold text-navy">{promo.expiry}</p>
                                            </div>
                                        </div>
                                        <button className="px-6 py-3 bg-white border-2 border-border-light text-navy font-ui text-sm font-bold rounded-full hover:bg-navy hover:text-white hover:border-navy transition-all">
                                            More Details
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Installment Plans */}
            <section className="py-20 lg:py-28 bg-cream">
                <div className="container mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="font-display text-3xl font-bold text-text-dark mb-3">Installment Plans</h2>
                        <div className="w-16 h-1 bg-navy rounded-full mb-4" />
                        <p className="font-body text-text-muted max-w-2xl">
                            We partner with all leading banks in Sri Lanka to provide you with interest-free payment options.
                        </p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {bankingPartners.map((bank, i) => (
                            <motion.div
                                key={bank.name}
                                variants={itemVariants}
                                style={{ transitionDelay: `${i * 60}ms` }}
                                className="group bg-white rounded-[2rem] border border-border-light hover:border-navy hover:-translate-y-2 shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center border border-border-light group-hover:bg-navy group-hover:border-navy transition-colors">
                                        <CreditCard className="w-6 h-6 text-navy group-hover:text-white transition-colors" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="font-display text-xl font-bold text-navy leading-tight">{bank.name}</h3>
                                        <p className="font-ui text-[10px] text-sky-blue font-bold uppercase tracking-widest mt-1">Partner Bank</p>
                                    </div>
                                </div>

                                <div className="p-5 bg-cream/50 rounded-2xl border border-border-light mb-6 flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Zap className="w-4 h-4 text-sky-blue" />
                                        <p className="text-xs font-bold text-sky-blue uppercase tracking-widest">Active Offer</p>
                                    </div>
                                    <p className="font-body text-base text-text-dark leading-relaxed font-medium">{bank.offer}</p>
                                </div>

                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-sm font-body text-text-muted leading-snug">
                                        <ShieldCheck className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span>Valid for Credit Cards only</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm font-body text-text-muted leading-snug">
                                        <ShieldCheck className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span>Processing fee may apply</span>
                                    </li>
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* How to Redeem */}
                    <div className="mt-16 max-w-4xl mx-auto bg-navy text-white p-8 md:p-10 rounded-card relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                <Info className="w-6 h-6 text-sky-blue" />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h4 className="font-ui text-base font-semibold mb-1.5">How to Redeem?</h4>
                                <p className="font-body text-sm opacity-70 leading-relaxed">
                                    Simply inform our branch staff about your preferred bank and installment plan at the time of purchase.
                                    Our team will guide you through the quick verification and payment process.
                                </p>
                            </div>
                            <button className="px-6 py-3 bg-white text-navy font-ui text-sm font-medium rounded-md hover:bg-sky-blue hover:text-white transition-colors whitespace-nowrap">
                                Find Nearest Branch
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner />
        </div>
    );
}