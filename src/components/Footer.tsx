import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import logo from '@/assets/logo.png';

const serviceLinks = [
  { label: 'Eye Testing', href: '/services/eye-testing' },
  { label: 'Spectacles', href: '/services/spectacles' },
  { label: 'Contact Lenses', href: '/services/contact-lenses' },
  { label: 'Sunglasses', href: '/services/sunglasses' },
  { label: 'Low Vision Care', href: '/services/low-vision' },
  { label: 'Glaucoma Assessment', href: '/services/glaucoma' },
  { label: 'Paediatric Eye Care', href: '/services/paediatric' },
  { label: 'Ortho-K', href: '/services/ortho-k' },
];

const eyewearLinks = [
  { label: 'Spectacle Frames', href: '/eyewear' },
  { label: 'Contact Lenses', href: '/contact-lenses' },
  { label: 'Sunglasses', href: '/sunglasses' },
  { label: 'Brands', href: '/eyewear' },
  { label: 'Online Shop', href: 'https://shop.visioncare.lk', external: true },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Academy', href: '/academy' },
  { label: 'Luxury Outlet', href: '/luxury' },
  { label: 'Branches', href: '/branches' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link to="/">
                <img 
                  src={logo} 
                  alt="Vision Care Logo" 
                  className="h-12 md:h-14 w-auto object-contain bg-white/95 px-3 py-1.5 rounded-lg shadow-sm" 
                />
              </Link>
            </div>
            <p className="text-primary-foreground/70 text-sm font-body mb-5">{t('footer.tagline')}</p>
            <div className="flex items-center gap-3 mb-6">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="p-2 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-1.5 text-xs text-primary-foreground/60 font-ui">
              <a href="https://ear.lk" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/90 flex items-center gap-1">ear.lk <ExternalLink className="w-3 h-3" /></a>
              <a href="https://shop.visioncare.lk" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/90 flex items-center gap-1">shop.visioncare.lk <ExternalLink className="w-3 h-3" /></a>
              <a href="https://vcacademy.lk" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/90 flex items-center gap-1">vcacademy.lk <ExternalLink className="w-3 h-3" /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-ui text-sm font-semibold mb-4 tracking-wide uppercase text-primary-foreground/90">{t('footer.services')}</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.href}><Link to={l.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors font-body">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Eyewear */}
          <div>
            <h4 className="font-ui text-sm font-semibold mb-4 tracking-wide uppercase text-primary-foreground/90">{t('footer.eyewear')}</h4>
            <ul className="space-y-2.5">
              {eyewearLinks.map((l) => (
                <li key={l.label}>
                  {'external' in l ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors font-body flex items-center gap-1">{l.label} <ExternalLink className="w-3 h-3" /></a>
                  ) : (
                    <Link to={l.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors font-body">{l.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-ui text-sm font-semibold mb-4 tracking-wide uppercase text-primary-foreground/90">{t('footer.company')}</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}><Link to={l.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors font-body">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-ui text-sm font-semibold mb-4 tracking-wide uppercase text-primary-foreground/90">{t('footer.contact')}</h4>
            <div className="space-y-3 text-sm text-primary-foreground/60 font-body">
              <p>No. 123, Galle Road<br />Colombo 03, Sri Lanka</p>
              <p>+94 11 234 5678</p>
              <p>info@visioncare.lk</p>
              <a href="https://wa.me/94112345678" target="_blank" rel="noopener noreferrer" className="inline-block text-primary-foreground/80 hover:text-primary-foreground transition-colors">WhatsApp Us</a>
              <div className="pt-2">
                <Link to="/book" className="font-ui text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors underline underline-offset-4">Book an Appointment →</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50 font-body">
          <p>© {new Date().getFullYear()} Vision Care (Pvt) Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-primary-foreground/80">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-foreground/80">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
