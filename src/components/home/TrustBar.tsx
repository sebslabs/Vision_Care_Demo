import { ShieldCheck, Stethoscope, HandHeart, CalendarCheck, Users } from 'lucide-react';

export default function TrustBar() {
    return (
        <div className="bg-white border-y border-border-light py-10 relative z-10 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-center text-center">
                    <div className="flex flex-col items-center gap-3">
                        <Stethoscope className="w-8 h-8 text-sky-blue" strokeWidth={1.5} />
                        <span className="font-ui text-xs font-bold text-navy uppercase tracking-widest text-center">Experienced Specialists</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <ShieldCheck className="w-8 h-8 text-sky-blue" strokeWidth={1.5} />
                        <span className="font-ui text-xs font-bold text-navy uppercase tracking-widest text-center">Modern Equipment</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <HandHeart className="w-8 h-8 text-sky-blue" strokeWidth={1.5} />
                        <span className="font-ui text-xs font-bold text-navy uppercase tracking-widest text-center">Personalized Care</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <CalendarCheck className="w-8 h-8 text-sky-blue" strokeWidth={1.5} />
                        <span className="font-ui text-xs font-bold text-navy uppercase tracking-widest text-center">Easy Appointments</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 col-span-2 md:col-span-1">
                        <Users className="w-8 h-8 text-sky-blue" strokeWidth={1.5} />
                        <span className="font-ui text-xs font-bold text-navy uppercase tracking-widest text-center">Trusted by Patients</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
