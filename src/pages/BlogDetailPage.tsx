import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '@/lib/data';
import NotFound from './NotFound';
import CTABanner from '@/components/CTABanner';
import StructuredData from '@/components/StructuredData';

export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return <NotFound />;
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visioncare.lk" },
      { "@type": "ListItem", "position": 2, "name": "Blog & News", "item": "https://visioncare.lk/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://visioncare.lk/blog/${post.id}` }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "publisher": {
      "@type": "Organization",
      "name": "Vision Care"
    }
  };

  return (
    <div className="pt-28">
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={articleSchema} />
      
      {/* Hero Section */}
      <section className="bg-cream py-16 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-4xl space-y-8">
          <p className="font-ui text-sm font-bold tracking-widest text-navy mb-4 uppercase">
            <Link to="/" className="hover:text-sky-blue transition-colors">Home</Link> /{' '}
            <Link to="/blog" className="hover:text-sky-blue transition-colors">Blog</Link> /{' '}
            <span className="text-text-muted">{post.category}</span>
          </p>
          
          <div className="flex flex-wrap items-center gap-4 border-b border-border-light pb-6">
            <span className="font-ui text-xs font-bold uppercase tracking-widest text-sky-blue bg-sky-blue/10 px-4 py-2 rounded-full">{post.category}</span>
            <span className="font-body text-sm font-medium text-text-muted">{post.date}</span>
            <span className="font-body text-sm font-medium text-text-muted">{post.readTime} read</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
            {post.title}
          </h1>
          
          <p className="font-body text-xl md:text-2xl text-text-muted leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Main Content (Mocked) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg prose-navy leading-loose">
          <div className="aspect-[16/9] bg-muted mb-12 rounded-[2rem] overflow-hidden">
             <div className="w-full h-full bg-cream flex items-center justify-center">
                 <span className="font-ui text-text-muted opacity-50 uppercase tracking-widest text-sm font-bold">Featured Image Area</span>
             </div>
          </div>
          <p className="first-letter:text-7xl first-letter:font-display first-letter:text-sky-blue first-letter:sr-only first-letter:float-left first-letter:mr-3 first-letter:mt-2">
            The modern era of digital living has brought with it unprecedented connectivity and convenience, but it also places new demands on our vision. With {post.title.toLowerCase()} taking center stage in recent discussions, it is more important than ever to understand how these trends impact our daily lives and long-term eye health.
          </p>
          <h2>Understanding the Impact</h2>
          <p>
            Experts recommend taking regular breaks and ensuring that your environment is optimized for visual comfort. The "20-20-20" rule—looking at something 20 feet away for 20 seconds every 20 minutes—remains a cornerstone of digital eye hygiene. However, as {post.category.toLowerCase()} evolves, there are newer, more sophisticated approaches emerging.
          </p>
          <blockquote>
            "Good vision is a precious asset. Protecting it requires consistent care, timely check-ups, and a commitment to understanding how modern lifestyles affect our eyes."
          </blockquote>
          <h3>Next Steps</h3>
          <p>
            Whether it's exploring new protective eyewear, modifying your work setup, or scheduling a comprehensive eye exam, adopting a proactive stance is vital. {post.excerpt}
          </p>
          <div className="mt-16 pt-8 border-t border-border-light flex justify-between items-center">
             <Link to="/blog" className="font-ui text-sm font-bold tracking-widest uppercase text-navy hover:text-sky-blue transition-colors flex items-center gap-2">
               ← Back to Blog
             </Link>
          </div>
        </div>
      </section>
      
      <CTABanner heading="Prioritize Your Vision" sub="Schedule a consultation with our experts today." />
    </div>
  );
}
