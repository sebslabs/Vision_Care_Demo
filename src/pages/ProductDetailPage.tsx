import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '@/lib/data';
import CTABanner from '@/components/CTABanner';
import { Eye, Ruler, ShoppingBag, MapPin, ChevronRight, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import StructuredData from '@/components/StructuredData';

const colorMap: Record<string, string> = {
  Gold: 'bg-yellow-500',
  Black: 'bg-gray-900',
  Silver: 'bg-gray-400',
  Tortoise: 'bg-amber-700',
  Rose: 'bg-rose-400',
  Navy: 'bg-navy',
  Gunmetal: 'bg-gray-500',
  'Matte Black': 'bg-gray-800',
  Havana: 'bg-amber-800',
  Crystal: 'bg-white border border-border-light',
  Brown: 'bg-amber-600',
  Pink: 'bg-pink-400',
  Blue: 'bg-blue-500',
  Red: 'bg-red-500',
  'Black Gold': 'bg-gradient-to-r from-gray-900 to-yellow-600',
  White: 'bg-white border border-border-light',
  Burgundy: 'bg-rose-800',
  Grey: 'bg-gray-500',
};

const specs: Record<string, { material: string; lensWidth: string; bridgeWidth: string; templeLength: string }> = {
  default: { material: 'Acetate & Metal', lensWidth: '54mm', bridgeWidth: '18mm', templeLength: '145mm' },
};

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const [activeTab, setActiveTab] = useState<'details' | 'size'>('details');

  if (!product) {
    return (
      <div className="pt-28 min-h-screen flex flex-col items-center justify-center">
        <h1 className="font-display text-3xl font-bold text-text-dark mb-4">Product Not Found</h1>
        <Link to="/eyewear" className="font-ui text-sm text-navy hover:underline">← Back to Eyewear</Link>
      </div>
    );
  }

  const related = products
    .filter((p) => p.id !== product.id && (p.brand === product.brand || p.type === product.type))
    .slice(0, 4);

  const colorVariants = products.filter(
    (p) => p.brand === product.brand && p.model === product.model
  );

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${product.brand} ${product.model}`,
    "image": product.image,
    "description": `${product.brand} ${product.model} ${product.type} for ${product.gender}. Features ${product.shape} shape in ${product.color}.`,
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    "offers": {
      "@type": "Offer",
      "url": window.location.href,
      "priceCurrency": "LKR",
      "price": product.price,
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStoreOnly",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "color": product.color,
    "category": product.type
  };

  return (
    <div className="pt-28">
      <StructuredData data={productSchema} />
      {/* Header Section */}
      <section className="bg-navy py-12 lg:py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 font-body text-sm opacity-70 mb-4">
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => window.location.href = '/'}>Home</span>
            <span>/</span>
            <Link to="/eyewear" className="hover:text-white transition-colors">Eyewear</Link>
            <span>/</span>
            <span className="font-medium text-white">{product.brand} {product.model}</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            {product.brand} <span className="text-sky-blue">{product.model}</span>
          </h1>
        </div>
      </section>

      {/* Main Product Section */}
      <section className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-card flex items-center justify-center border border-border-light overflow-hidden">
              <div className="text-center">
                <span className="font-display text-4xl md:text-5xl font-bold text-text-muted/30">{product.brand}</span>
                <p className="font-ui text-sm text-text-muted mt-2">{product.model}</p>
              </div>
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`aspect-square bg-muted rounded-lg flex items-center justify-center border cursor-pointer transition-all duration-200 ${i === 1 ? 'border-navy ring-2 ring-navy/20' : 'border-border-light hover:border-navy/40'}`}
                >
                  <span className="font-ui text-[10px] text-text-muted">View {i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-1 font-ui text-sm text-text-muted hover:text-navy transition-colors lg:hidden"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>

            <div>
              <p className="font-ui text-sm font-medium text-sky-blue mb-1">{product.brand}</p>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-text-dark mb-2">{product.model}</h1>
              <p className="font-body text-text-muted">{product.type} · {product.gender}</p>
            </div>

            <p className="font-stats text-2xl md:text-3xl font-bold text-text-dark">
              From LKR {product.price.toLocaleString()}
            </p>

            {/* Colour Variants */}
            <div>
              <h3 className="font-ui text-sm font-semibold text-text-dark mb-3">Colour — {product.color}</h3>
              <div className="flex gap-3">
                {colorVariants.length > 1 ? (
                  colorVariants.map((v) => (
                    <Link
                      key={v.id}
                      to={`/eyewear/${v.id}`}
                      className={`w-8 h-8 rounded-full ${colorMap[v.color] || 'bg-gray-300'} ${v.id === product.id ? 'ring-2 ring-navy ring-offset-2' : 'hover:ring-2 hover:ring-border-light hover:ring-offset-1'} transition-all`}
                      title={v.color}
                    />
                  ))
                ) : (
                  <div
                    className={`w-8 h-8 rounded-full ${colorMap[product.color] || 'bg-gray-300'} ring-2 ring-navy ring-offset-2`}
                    title={product.color}
                  />
                )}
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-border-light">
              <div className="flex gap-6">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`pb-3 font-ui text-sm font-medium transition-colors ${activeTab === 'details' ? 'text-navy border-b-2 border-navy' : 'text-text-muted hover:text-text-dark'}`}
                >
                  Details & Specs
                </button>
                <button
                  onClick={() => setActiveTab('size')}
                  className={`pb-3 font-ui text-sm font-medium transition-colors ${activeTab === 'size' ? 'text-navy border-b-2 border-navy' : 'text-text-muted hover:text-text-dark'}`}
                >
                  Size Guide
                </button>
              </div>
            </div>

            {activeTab === 'details' && (
              <div className="space-y-4">
                <p className="font-body text-text-muted leading-relaxed">
                  The {product.brand} {product.model} combines iconic design heritage with contemporary craftsmanship.
                  Featuring premium materials and precision engineering, these {product.type.toLowerCase()} deliver
                  exceptional comfort and style for everyday wear.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-lg p-4">
                    <p className="font-ui text-xs text-text-muted mb-1">Material</p>
                    <p className="font-ui text-sm font-medium text-text-dark">{specs.default.material}</p>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="font-ui text-xs text-text-muted mb-1">Lens Width</p>
                    <p className="font-ui text-sm font-medium text-text-dark">{specs.default.lensWidth}</p>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="font-ui text-xs text-text-muted mb-1">Bridge Width</p>
                    <p className="font-ui text-sm font-medium text-text-dark">{specs.default.bridgeWidth}</p>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="font-ui text-xs text-text-muted mb-1">Temple Length</p>
                    <p className="font-ui text-sm font-medium text-text-dark">{specs.default.templeLength}</p>
                  </div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="font-ui text-xs text-text-muted mb-1">Frame Shape</p>
                  <p className="font-ui text-sm font-medium text-text-dark">{product.shape}</p>
                </div>
              </div>
            )}

            {activeTab === 'size' && (
              <div className="space-y-4">
                <p className="font-body text-text-muted leading-relaxed">
                  For the best fit, visit your nearest Vision Care branch for a personalised fitting session.
                  Our trained opticians will help you find the perfect frame size.
                </p>
                <div className="bg-muted rounded-card p-6">
                  <div className="aspect-[3/1] flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <Ruler className="w-10 h-10 text-text-muted mx-auto" />
                      <div className="flex gap-8 justify-center">
                        <div>
                          <p className="font-stats text-lg font-bold text-text-dark">54</p>
                          <p className="font-ui text-xs text-text-muted">Lens (mm)</p>
                        </div>
                        <div>
                          <p className="font-stats text-lg font-bold text-text-dark">18</p>
                          <p className="font-ui text-xs text-text-muted">Bridge (mm)</p>
                        </div>
                        <div>
                          <p className="font-stats text-lg font-bold text-text-dark">145</p>
                          <p className="font-ui text-xs text-text-muted">Temple (mm)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                to="/book"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-navy text-primary-foreground font-ui text-sm font-medium rounded-md hover:bg-medium-blue transition-colors"
              >
                <MapPin className="w-4 h-4" /> Try In-Store
              </Link>
              <a
                href="https://shop.visioncare.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-navy text-navy font-ui text-sm font-medium rounded-md hover:bg-navy hover:text-primary-foreground transition-colors"
              >
                <ShoppingBag className="w-4 h-4" /> Buy Online ↗
              </a>
            </div>

            {/* Trust note */}
            <div className="flex items-start gap-3 bg-muted rounded-lg p-4">
              <Eye className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
              <p className="font-body text-sm text-text-muted">
                All frames include a complimentary fitting session and lens consultation at any Vision Care branch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="bg-cream py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text-dark mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/eyewear/${p.id}`}
                  className="group bg-card rounded-card border border-border-light hover:-translate-y-[3px] hover:shadow-card-hover transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-square bg-muted flex items-center justify-center">
                    <span className="font-ui text-xs text-text-muted">{p.brand}</span>
                  </div>
                  <div className="p-4">
                    <p className="font-ui text-xs font-medium text-sky-blue mb-1">{p.brand}</p>
                    <h3 className="font-ui text-sm font-semibold text-text-dark mb-1">{p.model}</h3>
                    <p className="font-stats text-sm font-bold text-text-dark">From LKR {p.price.toLocaleString()}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner heading="Need Help Choosing?" sub="Visit your nearest Vision Care branch for a personalised fitting experience with our trained opticians." />
    </div>
  );
}
