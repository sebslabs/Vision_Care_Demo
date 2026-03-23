import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('vc-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('vc-cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('vc-cookie-consent', 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6 sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-[26rem] pointer-events-none"
        >
          <div className="bg-card/95 backdrop-blur-xl border border-border-light shadow-2xl rounded-[1.5rem] p-6 pointer-events-auto relative overflow-hidden">
            {/* Subtle Gradient background matching theme */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-blue/10 rounded-full blur-[40px] -mr-16 -mt-16 pointer-events-none" />

            <div className="flex items-start justify-between gap-4 relative z-10">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-navy/5 text-navy shrink-0 border border-navy/10 shadow-sm">
                <Cookie className="w-6 h-6" />
              </div>
              <button onClick={decline} className="text-text-muted hover:text-navy transition-colors p-2 -mr-2 -mt-2 bg-background/50 rounded-full hover:bg-background">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-5 relative z-10 font-body">
              <h3 className="font-ui font-extrabold text-navy text-lg tracking-tight">Cookie Preferences 🍪</h3>
              <p className="text-[14px] text-text-muted mt-2 leading-relaxed font-medium">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-6 relative z-10">
              <button
                onClick={decline}
                className="flex-1 px-4 py-3 border border-border-light bg-background text-text-dark font-ui text-[14px] font-semibold rounded-xl hover:bg-muted hover:text-navy transition-all duration-300"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="flex-1 px-4 py-3 bg-navy text-white font-ui text-[14px] font-semibold rounded-xl shadow-lg shadow-navy/20 hover:shadow-xl hover:-translate-y-0.5 hover:bg-medium-blue transition-all duration-300"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
