import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/lib/data';
import StructuredData from '@/components/StructuredData';

const categories = ['All', 'Eye Health Tips', 'New Products', 'Company News', 'Vision Care Academy', 'Hearing Health'];

export default function BlogPage() {
  const [category, setCategory] = useState('All');
  const filtered = category === 'All' ? blogPosts : blogPosts.filter((p) => p.category === category);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visioncare.lk" },
      { "@type": "ListItem", "position": 2, "name": "Blog & News", "item": "https://visioncare.lk/blog" }
    ]
  };

  return (
    <div className="pt-28">
      <StructuredData data={breadcrumbSchema} />
      <section className="bg-navy py-20 lg:py-28 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-blue via-navy to-navy"></div>
        <div className="container mx-auto px-4 relative z-10">
          <p className="font-ui text-sm font-bold tracking-widest uppercase text-sky-blue mb-4">
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => window.location.href = '/'}>Home</span> / Blog
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Eye Health Insights & News</h1>
          <p className="font-body text-lg opacity-80 max-w-2xl leading-relaxed">Expert advice, vision tips, and the latest from the world of premium optical care.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 mb-12 border-b border-border-light pb-6">
            {categories.map((c) => (
              <button key={c} onClick={() => setCategory(c)} className={`px-6 py-2.5 rounded-full font-ui text-sm font-bold transition-all shadow-sm hover:shadow-md ${category === c ? 'bg-navy text-white' : 'bg-white text-navy border border-border-light hover:border-navy hover:-translate-y-0.5'}`}>{c}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id} className="group bg-white rounded-[2rem] overflow-hidden border border-border-light hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="aspect-[16/9] bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 bg-navy/5"></div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-ui text-[10px] font-bold uppercase tracking-widest text-sky-blue bg-sky-blue/10 px-3 py-1 rounded-full">{post.category}</span>
                    <span className="font-body text-xs text-text-muted font-medium">{post.date} · {post.readTime}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-navy mb-3 group-hover:text-sky-blue transition-colors leading-tight">{post.title}</h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed line-clamp-2 mt-auto">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
