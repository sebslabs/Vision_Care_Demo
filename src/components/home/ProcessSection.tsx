import { Calendar, Stethoscope, Activity, HeartHandshake } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
    { icon: Calendar, title: 'Book Your Visit', desc: 'Schedule an appointment online or via phone at your convenience.' },
    { icon: Stethoscope, title: 'Expert Examination', desc: 'Undergo a comprehensive eye assessment with advanced technology.' },
    { icon: Activity, title: 'Personalized Treatment', desc: 'Receive tailored solutions, from custom eyewear to surgical care.' },
    { icon: HeartHandshake, title: 'Follow-Up Care', desc: 'Ongoing support to ensure your long-term vision health and comfort.' },
];

export default function ProcessSection() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section ref={ref} className="py-24 lg:py-36 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">How It Works</h2>
                    <p className="font-body text-lg text-text-muted max-w-2xl mx-auto">Your journey to clearer vision is simple, comfortable, and expertly guided.</p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting line */}
                    <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-border-light z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
                        {steps.map((step, i) => (
                            <div
                                key={step.title}
                                className={`relative flex flex-col items-center text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: isVisible ? `${i * 150}ms` : '0ms' }}
                            >
                                <div className="w-24 h-24 rounded-full bg-cream border-4 border-white shadow-xl flex items-center justify-center mb-6 text-sky-blue relative z-10">
                                    <span className="absolute -top-1 -right-1 w-7 h-7 bg-navy text-white text-xs font-bold font-ui rounded-full flex items-center justify-center shadow-md">{i + 1}</span>
                                    <step.icon className="w-10 h-10" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-ui text-xl font-bold text-navy mb-3">{step.title}</h3>
                                <p className="font-body text-sm text-text-muted leading-relaxed px-4">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
