import { useLightbox } from '@/components/Lightbox';

interface LightboxImageProps {
  src: string;
  alt: string;
  className?: string;
  gallery?: string[];
  galleryIndex?: number;
}

export default function LightboxImage({ src, alt, className, gallery, galleryIndex = 0 }: LightboxImageProps) {
  const { open } = useLightbox();

  const handleClick = () => {
    const images = gallery || [src];
    const index = gallery ? galleryIndex : 0;
    open(images, index);
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`cursor-zoom-in ${className || ''}`}
      onClick={handleClick}
      loading="lazy"
    />
  );
}
