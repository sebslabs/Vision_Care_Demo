import { bankingPartners, promotions } from '@/lib/data';
import { Tag, Calendar, CreditCard, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PromotionsSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.06
            }
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

    return (
        <section className="py-24 lg:py-36 bg-cream relative overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-navy/[0.03] rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.1, 1], x: [0, -30, 0], y: [0, 50, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-sky-blue/[0.05] rounded-full blur-[100px]"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-xl"
                    >
                        <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy mb-4 leading-tight">
                            Exclusive Offers &{' '}
                            <span className="text-sky-blue">Flexible Payments</span>
                        </h2>
                        <p className="font-body text-lg text-text-muted max-w-xl leading-relaxed">
                            Experience premium vision care with our curated seasonal promotions and tailored 0% interest-free installment plans.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to="/promotions"
                            className="flex items-center gap-2 px-8 py-4 border-2 border-navy text-navy font-ui text-sm font-bold rounded-full hover:bg-navy hover:text-white transition-colors duration-300 shadow-sm hover:shadow-md"
                        >
                            View All Offers
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                >
                    {/* Promotions Cards */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {promotions.map((promo, i) => (
                            <motion.div
                                key={promo.title}
                                variants={itemVariants}
                                className="group bg-white rounded-3xl border border-border-light shadow-sm hover:border-sky-blue/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden"
                                style={{ transitionDelay: `${i * 60}ms` }}
                            >
                                {/* Image */}
                                <div className="aspect-[16/9] overflow-hidden relative">
                                    <img
                                        src={promo.image}
                                        alt={promo.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                                    <div className="absolute top-4 right-4">
                                        <div className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-ui text-[10px] font-bold uppercase tracking-widest rounded-full">
                                            {promo.code}
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <div className="flex items-center gap-1.5 text-white/90 font-ui text-[10px] font-bold uppercase tracking-widest">
                                            <Tag className="w-3 h-3 text-sky-blue" />
                                            Seasonal Exclusive
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="font-ui text-base font-semibold text-text-dark mb-2 group-hover:text-navy transition-colors duration-300">
                                        {promo.title}
                                    </h3>
                                    <p className="font-body text-sm text-text-muted mb-4 leading-relaxed line-clamp-2">
                                        {promo.description}
                                    </p>
                                    <div className="flex items-center justify-between pt-4 border-t border-border-light">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-8 h-8 rounded-lg bg-navy/5 flex items-center justify-center group-hover:bg-navy/10 transition-colors">
                                                <Calendar className="w-4 h-4 text-navy" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted opacity-60 mb-0.5">Valid Until</p>
                                                <p className="font-ui text-sm font-semibold text-text-dark">{promo.expiry}</p>
                                            </div>
                                        </div>
                                        <Link
                                            to="/promotions"
                                            className="font-ui text-sm text-navy font-medium group-hover:underline"
                                        >
                                            Unlock Details →
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Banking Sidebar */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-navy rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden flex flex-col shadow-2xl border border-white/10"
                    >
                        {/* Decorative accents */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.03] rounded-full -translate-y-1/2 translate-x-1/2 blur-[60px]" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-blue/[0.06] rounded-full translate-y-1/2 -translate-x-1/2 blur-[60px]" />

                        <div className="relative z-10 flex flex-col h-full">
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/10">
                                    <CreditCard className="w-5 h-5 text-sky-blue" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="font-ui text-base font-semibold tracking-tight">Bank Offers</h3>
                                    <div className="h-0.5 w-8 bg-sky-blue/40 rounded-full mt-1" />
                                </div>
                            </div>

                            <p className="font-body text-sm opacity-70 mb-6 leading-relaxed">
                                Seamless eye care with exclusive 0% interest-free payment options available island-wide.
                            </p>

                            {/* Bank Cards */}
                            <div className="space-y-3 flex-1">
                                {bankingPartners.slice(0, 4).map((bank) => (
                                    <motion.div
                                        key={bank.name}
                                        whileHover={{ x: 4 }}
                                        className="group p-4 bg-white/[0.04] border border-white/[0.08] rounded-xl hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 cursor-default"
                                    >
                                        <div className="flex items-center justify-between mb-1">
                                            <div className="font-ui text-[10px] font-bold uppercase tracking-widest text-sky-blue opacity-80 group-hover:opacity-100 transition-opacity">
                                                {bank.name}
                                            </div>
                                            <div className="w-1.5 h-1.5 rounded-full bg-sky-blue/30 group-hover:bg-sky-blue transition-colors duration-300" />
                                        </div>
                                        <div className="font-body text-sm leading-snug opacity-90">
                                            {bank.offer}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="mt-8 space-y-4">
                                <p className="font-body text-[10px] opacity-40 leading-relaxed italic text-center">
                                    * Terms & conditions apply. Available at selected Vision Care branches.
                                </p>
                                <Link
                                    to="/promotions"
                                    className="block w-full text-center py-3 bg-white text-navy font-ui text-xs font-bold uppercase tracking-widest rounded-md hover:bg-sky-blue hover:text-white transition-colors duration-300"
                                >
                                    Browse All Bank Plans
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}