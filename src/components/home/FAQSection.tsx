import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const faqs = [
    { q: "How do I book an appointment?", a: "You can easily book an appointment by clicking the 'Book Eye Test' button at the top of the page, calling our hotline, or via WhatsApp." },
    { q: "Do you offer paediatric eye testing?", a: "Yes, we have specialized paediatric optometrists and child-friendly equipment to ensure a comfortable experience for your little ones." },
    { q: "What should I bring to my visit?", a: "Please bring your current glasses, contact lenses (if any), and a record of any previous eye prescriptions or medical history." },
    { q: "Do you offer contact lens fitting and support?", a: "Absolutely. We offer comprehensive contact lens consultations, fittings, and ongoing support for all types of lenses including toric and multifocal." },
    { q: "How long does a comprehensive eye exam take?", a: "A standard comprehensive eye examination usually takes about 20 to 30 minutes. If additional diagnostics are required, it may take slightly longer." }
];

export default function FAQSection() {
    const { ref, isVisible } = useScrollAnimation();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section ref={ref} className="py-24 lg:py-36 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
                    <p className="font-body text-lg text-text-muted max-w-2xl mx-auto">Find answers to common questions about our services and what to expect during your visit.</p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={i}
                                className={`mb-4 bg-white rounded-2xl border ${isOpen ? 'border-sky-blue/30 shadow-md' : 'border-border-light shadow-sm'} overflow-hidden transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                                style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                                >
                                    <span className="font-ui text-lg font-bold text-navy pr-8">{faq.q}</span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-sky-blue text-white' : 'bg-muted text-navy'}`}>
                                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                    </div>
                                </button>
                                <div className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[200px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="font-body text-base text-text-muted leading-relaxed">{faq.a}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
