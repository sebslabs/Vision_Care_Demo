import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink, ChevronDown, Eye, Glasses, CircleDot, Sun, Search, Activity, Baby, Moon } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Language } from '@/lib/i18n';
import { services } from '@/lib/data';
import logo from '@/assets/logo.png';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ElementType> = { Eye, Glasses, CircleDot, Sun, Search, Activity, Baby, Moon };

const navLinks = [
  { key: 'nav.about', href: '/about' },
  { key: 'nav.services', href: '/services', isDropdown: true },
  { key: 'nav.eyewear', href: '/eyewear' },
  { key: 'nav.promotions', href: '/promotions' },
  { key: 'nav.hearing', href: '/hearing' },
  { key: 'nav.academy', href: '/academy' },
  { key: 'nav.branches', href: '/branches' },
  { key: 'nav.specialists', href: '/specialists' },
  { key: 'nav.blog', href: '/blog' },
  { key: 'nav.careers', href: '/careers' },
  { key: 'nav.contact', href: '/contact' },
];

const subBrands = [
  { label: 'Vision Care Hearing', href: 'https://ear.lk', external: true },
  { label: 'Vision Care Academy', href: 'https://vcacademy.lk', external: true },
  { label: 'Luxury Outlet — Cinnamon Life', href: '/luxury' },
  { label: 'Shop Online', href: 'https://shop.visioncare.lk', external: true },
];

const langLabels: Record<Language, string> = { en: 'EN', si: 'සි', ta: 'த' };

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [eyeCareOpen, setEyeCareOpen] = useState(false);
  const { lang, switchLang, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setEyeCareOpen(false);
  }, [location]);

  return (
    <>
      {/* Sub-brands strip */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-navy text-primary-foreground">
        <div className="container mx-auto flex items-center justify-between px-4 py-1.5">
          <div className="hidden md:flex items-center gap-6 text-xs font-ui tracking-wide">
            {subBrands.map((sb) => (
              sb.external ? (
                <a key={sb.label} href={sb.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity">
                  {sb.label} <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <Link key={sb.label} to={sb.href} className="opacity-80 hover:opacity-100 transition-opacity">{sb.label}</Link>
              )
            ))}
          </div>
          <div className="flex items-center gap-1 ml-auto">
            {(['en', 'si', 'ta'] as Language[]).map((l, i) => (
              <span key={l}>
                <button
                  onClick={() => switchLang(l)}
                  className={`text-xs px-1.5 py-0.5 rounded transition-colors font-ui ${lang === l ? 'bg-primary-foreground/20 font-semibold' : 'opacity-70 hover:opacity-100'}`}
                >
                  {langLabels[l]}
                </button>
                {i < 2 && <span className="text-primary-foreground/40 mx-0.5">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`fixed top-[32px] left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-card/95 backdrop-blur-md border-b border-border-light shadow-soft' : 'bg-transparent'}`}>
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Vision Care Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-4">
            <NavigationMenu className="w-full">
              <NavigationMenuList className="gap-1">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.key}>
                    {link.isDropdown ? (
                      <>
                        <NavigationMenuTrigger className={cn(
                          "bg-transparent hover:bg-navy hover:text-white focus:bg-navy focus:text-white data-[active]:bg-navy data-[active]:text-white data-[state=open]:bg-navy data-[state=open]:text-white h-auto px-3 py-1.5 rounded-md font-ui text-sm font-medium transition-all duration-300",
                          location.pathname.startsWith('/services') ? 'bg-navy text-white' : 'text-text-muted'
                        )}>
                          {t(link.key)}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[600px] gap-3 p-6 grid-cols-2">
                            {services.map((service) => {
                              const Icon = iconMap[service.icon] || Eye;
                              return (
                                <li key={service.id}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      to={`/services/${service.id}`}
                                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                                    >
                                      <div className="flex items-center gap-2 mb-1">
                                        <div className="w-8 h-8 rounded bg-navy/5 flex items-center justify-center group-hover:bg-navy/10 transition-colors">
                                          <Icon className="w-4 h-4 text-navy" strokeWidth={1.5} />
                                        </div>
                                        <div className="text-sm font-bold text-text-dark leading-none">{service.name}</div>
                                      </div>
                                      <p className="line-clamp-2 text-xs leading-snug text-text-muted font-body">
                                        {service.description}
                                      </p>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              )
                            })}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        to={link.href}
                        className={cn(
                          "px-3 py-1.5 rounded-md font-ui text-sm font-medium transition-all duration-300 hover:bg-navy hover:text-white",
                          location.pathname === link.href ? 'bg-navy text-white' : 'text-text-muted hover:text-white'
                        )}
                      >
                        {t(link.key)}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <a href="https://shop.visioncare.lk" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-md font-ui text-sm font-medium text-text-muted hover:bg-navy hover:text-white transition-all duration-300 flex items-center gap-1 group">
                    {t('nav.shop')} <ExternalLink className="w-3.5 h-3.5 group-hover:text-white" />
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/book" className="hidden lg:inline-flex items-center px-6 py-2.5 bg-navy text-primary-foreground font-ui text-sm font-bold rounded-full hover:bg-medium-blue transition-all hover:scale-105 hover:shadow-lg">
              {t('nav.book')}
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-navy" aria-label="Menu">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-cream/95 backdrop-blur-xl pt-6 px-4 pb-28 overflow-y-auto lg:hidden flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-300">
          <div className="flex items-center justify-between mb-8 border-b border-border-light/50 pb-4">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <img src={logo} alt="Vision Care Logo" className="h-10 w-auto" />
            </Link>
            <button onClick={() => setMenuOpen(false)} className="p-2 text-navy hover:text-sky-blue hover:bg-navy/5 rounded-full transition-colors">
              <X className="w-7 h-7" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.key}>
                {link.isDropdown ? (
                  <>
                    <button
                      onClick={() => setEyeCareOpen(!eyeCareOpen)}
                      className="w-full flex items-center justify-between font-display text-2xl font-semibold text-navy py-3 border-b border-border-light"
                    >
                      {t(link.key)}
                      <ChevronDown className={cn("w-5 h-5 transition-transform", eyeCareOpen ? "rotate-180" : "")} />
                    </button>
                    {eyeCareOpen && (
                      <div className="bg-muted/30 px-4 py-2 flex flex-col gap-2 animate-in slide-in-from-top-2 duration-300">
                        {services.map((s) => (
                          <Link
                            key={s.id}
                            to={`/services/${s.id}`}
                            className="font-ui font-medium text-text-dark text-lg py-2"
                            onClick={() => setMenuOpen(false)}
                          >
                            {s.name}
                          </Link>
                        ))}
                        <Link
                          to="/services"
                          className="font-ui font-bold text-navy text-lg py-2 mt-1 underline"
                          onClick={() => setMenuOpen(false)}
                        >
                          {t('nav.eyecare_all')}
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className="font-display text-2xl font-semibold text-navy py-3 border-b border-border-light"
                    onClick={() => setMenuOpen(false)}
                  >
                    {t(link.key)}
                  </Link>
                )}
              </div>
            ))}
            <a href="https://shop.visioncare.lk" target="_blank" rel="noopener noreferrer" className="font-display text-2xl font-semibold text-navy py-3 border-b border-border-light flex items-center gap-2">
              {t('nav.shop')} <ExternalLink className="w-5 h-5" />
            </a>
          </nav>
          <div className="mt-8 flex flex-col gap-3 text-sm text-text-muted font-ui pb-10">
            {subBrands.map((sb) => (
              sb.external ? (
                <a key={sb.label} href={sb.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  {sb.label} <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <Link key={sb.label} to={sb.href}>{sb.label}</Link>
              )
            ))}
          </div>
        </div>
      )}

      {/* Mobile Sticky Booking CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-card/90 backdrop-blur-md border-t border-border-light z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <Link to="/book" className="flex w-full items-center justify-center px-6 py-3.5 bg-navy text-primary-foreground font-ui text-base font-bold rounded-xl shadow-lg hover:bg-medium-blue transition-colors">
          {t('nav.book')}
        </Link>
      </div>
    </>
  );
}
