import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { blogPosts } from '@/lib/data';

export default function NewsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const featured = blogPosts.slice(0, 3);

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-cream">
      <div className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <div className="text-center mb-16">
          <p className="font-ui text-sm font-bold text-sky-blue tracking-[0.2em] uppercase mb-4">Our Blog</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy mb-4">Insight & Inspiration</h2>
          <p className="font-body text-lg text-text-muted max-w-2xl mx-auto">Latest news, tips, and trends from the world of premium eye care.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((post, i) => (
            <Link
              to={`/blog/${post.id}`}
              key={post.id}
              className={`group bg-white rounded-[2rem] overflow-hidden border border-border-light hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
            >
              <div className="aspect-[16/10] bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-navy/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img src={post.image || `https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=2000&auto=format&fit=crop`} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 relative z-0" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-ui text-[10px] font-bold uppercase tracking-widest text-sky-blue bg-sky-blue/10 px-3 py-1.5 rounded-full">{post.category}</span>
                  <span className="font-body text-xs text-text-muted font-medium">{post.date}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-navy mb-4 group-hover:text-sky-blue transition-colors duration-300 line-clamp-2">{post.title}</h3>
                <p className="font-body text-base text-text-muted leading-relaxed mb-6 flex-1 line-clamp-3">{post.excerpt}</p>
                <span className="inline-flex items-center gap-2 font-ui text-sm font-bold text-navy uppercase tracking-widest group-hover:text-sky-blue transition-colors">
                  Read Article <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link to="/blog" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-border-light text-navy font-ui text-sm font-bold rounded-full hover:border-navy hover:bg-navy hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5">
            View All Articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
