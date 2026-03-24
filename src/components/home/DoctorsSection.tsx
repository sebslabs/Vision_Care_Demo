import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const doctors = [
    { id: 1, name: 'Dr. Sarah Silva', spec: 'Senior Consultant Ophthalmologist', exp: '15+ Years Experience', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=400' },
    { id: 2, name: 'Dr. Rohan Perera', spec: 'Cataract & Refractive Surgeon', exp: '12+ Years Experience', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=400' },
    { id: 3, name: 'Dr. Amila Jayawardena', spec: 'Paediatric Ophthalmologist', exp: '10+ Years Experience', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=400' },
];

export default function DoctorsSection() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section ref={ref} className="py-24 lg:py-36 bg-white border-b border-border-light">
            <div className="container mx-auto px-4">
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">Meet Our Leading Specialists</h2>
                    <p className="font-body text-lg text-text-muted max-w-2xl mx-auto">Expert care delivered by Sri Lanka's most trusted and experienced ophthalmologists and eye care professionals.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {doctors.map((doc, i) => (
                        <div
                            key={doc.id}
                            className={`group bg-white rounded-2xl overflow-hidden border border-border-light hover:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] flex flex-col h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
                        >
                            <div className="aspect-[4/3] overflow-hidden bg-muted">
                                <img src={doc.img} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="flex flex-col flex-grow p-8">
                                <h3 className="font-ui text-xl font-bold text-navy mb-1">{doc.name}</h3>
                                <p className="font-ui text-sm font-semibold text-sky-blue mb-4 flex-grow">{doc.spec}</p>
                                <div className="mt-auto flex items-center justify-between pt-6 border-t border-border-light">
                                    <span className="font-body text-sm text-text-muted bg-muted/50 px-3 py-1 rounded-full">{doc.exp}</span>
                                    <Link to="/book" className="font-ui text-sm text-navy font-bold hover:text-sky-blue transition-colors">Book Consult →</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <Link to="/about" className="px-8 py-4 border-2 border-navy text-navy font-ui text-base font-bold rounded-full hover:bg-navy hover:text-white transition-colors duration-300 inline-block shadow-sm">
                        View All Doctors
                    </Link>
                </div>
            </div>
        </section>
    );
}
