import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const blogPosts = [
  {
    title: '10 Event Trends for 2024',
    excerpt:
      'Discover the latest trends shaping modern events, from sustainable celebrations to immersive experiences and bold design choices.',
    image: '/blog-1.jpg',
    date: 'Jan 15, 2024',
    readTime: '5 min read',
    category: 'Trends',
  },
  {
    title: 'How to Plan a Corporate Event',
    excerpt:
      'Essential tips for organizing successful business events that impress clients, engage employees, and achieve your company goals.',
    image: '/blog-2.jpg',
    date: 'Jan 10, 2024',
    readTime: '7 min read',
    category: 'Corporate',
  },
  {
    title: 'Budget-Friendly Event Ideas',
    excerpt:
      'Create memorable celebrations without breaking the bank. Smart tips and creative ideas for stunning events on any budget.',
    image: '/blog-3.jpg',
    date: 'Jan 5, 2024',
    readTime: '4 min read',
    category: 'Tips',
  },
];

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-[#f3f3f3] overflow-hidden"
    >
      <div className="section-padding">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span
              className={`section-subtitle transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              LATEST NEWS
            </span>
            <h2
              className={`section-title mt-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              From Our <span className="text-[#1a6b7a]">Blog</span>
            </h2>
            <p
              className={`text-lg text-[#333333] mt-4 max-w-xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Insights, tips, and stories from the world of event planning.
            </p>
          </div>

          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 text-[#1a6b7a] font-semibold hover:gap-4 transition-all duration-300 group"
            >
              View All Articles
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#1a6b7a] text-white text-xs font-medium rounded-full">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-[#333333]/60 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-['Fraunces'] text-[#0d3d47] mb-3 group-hover:text-[#1a6b7a] transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[#333333]/80 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-2 text-[#1a6b7a] font-medium text-sm group/link"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
