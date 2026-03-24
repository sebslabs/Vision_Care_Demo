import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import raybanLogo from '@/assets/brands/rayban.png';
import pradaLogo from '@/assets/brands/prada.png';
import carreraLogo from '@/assets/brands/carrera.png';
import coachLogo from '@/assets/brands/coach.png';
import vogueLogo from '@/assets/brands/vogue.png';
import armaniLogo from '@/assets/brands/armani.png';
import porscheLogo from '@/assets/brands/porsche-design.png';
import oakleyLogo from '@/assets/brands/oakley.png';

const brands = [
  { name: 'Ray-Ban', logo: raybanLogo },
  { name: 'Prada', logo: pradaLogo },
  { name: 'Carrera', logo: carreraLogo },
  { name: 'Coach', logo: coachLogo },
  { name: 'Vogue', logo: vogueLogo },
  { name: 'Armani', logo: armaniLogo },
  { name: 'Porsche Design', logo: porscheLogo },
  { name: 'Oakley', logo: oakleyLogo },
];

export default function BrandsStrip() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className={`py-12 md:py-20 lg:py-28 bg-white overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="container mx-auto px-4 mb-8 md:mb-14 text-center">
        <p className="font-ui text-sm font-bold text-sky-blue tracking-[0.2em] uppercase mb-4">Official Retailer</p>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy">World-Class Eyewear Brands</h2>
      </div>

      <div className="relative max-w-[100vw] overflow-hidden">
        {/* Gradient fades for smooth scrolling effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-scroll-brands hover:[animation-play-state:paused] whitespace-nowrap">
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex-shrink-0 px-8 md:px-12 py-6 flex items-center justify-center group cursor-pointer">
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="h-28 md:h-36 lg:h-48 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-14">
        <a href="/eyewear" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-border-light text-navy font-ui text-sm font-bold rounded-full hover:border-navy hover:bg-navy hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5">
          Shop All Brands →
        </a>
      </div>
    </section>
  );
}
