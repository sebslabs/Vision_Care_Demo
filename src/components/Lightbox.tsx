import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxContextType {
  open: (images: string[], index?: number) => void;
}

const LightboxContext = createContext<LightboxContextType>({ open: () => {} });

export function useLightbox() {
  return useContext(LightboxContext);
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback((imgs: string[], index = 0) => {
    setImages(imgs);
    setCurrentIndex(index);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, close, prev, next]);

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {isOpen && images.length > 0 && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center"
          onClick={close}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-foreground/90 backdrop-blur-sm" />

          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-6 right-6 z-10 p-2 rounded-full bg-card/10 hover:bg-card/20 text-primary-foreground transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation - Previous */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 z-10 p-2 rounded-full bg-card/10 hover:bg-card/20 text-primary-foreground transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1} of ${images.length}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            {images.length > 1 && (
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${i === currentIndex ? 'bg-primary-foreground' : 'bg-primary-foreground/30'}`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Navigation - Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 z-10 p-2 rounded-full bg-card/10 hover:bg-card/20 text-primary-foreground transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      )}
    </LightboxContext.Provider>
  );
}
