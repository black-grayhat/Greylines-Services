import { useEffect, useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Greyline Events made our corporate gala absolutely perfect. Every detail was handled with care and professionalism. Dr. Adelani and his team went above and beyond to ensure everything was exactly as we envisioned.",
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    avatar: '/avatar-1.jpg',
    rating: 5,
  },
  {
    quote:
      "The brand activation they organized exceeded all expectations. Our clients were impressed, and the event helped us secure several new partnerships. Highly recommended for any business event.",
    name: 'David Chen',
    role: 'CEO, TechCorp',
    avatar: '/avatar-2.jpg',
    rating: 5,
  },
  {
    quote:
      "Best event planning experience ever! The team went above and beyond to create a magical experience for our product launch. The attention to detail and creativity was outstanding.",
    name: 'Emily Rodriguez',
    role: 'Brand Manager',
    avatar: '/avatar-3.jpg',
    rating: 5,
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const navigate = (direction: 'prev' | 'next') => {
    setActiveIndex((prev) =>
      direction === 'prev'
        ? (prev - 1 + testimonials.length) % testimonials.length
        : (prev + 1) % testimonials.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1a6b7a]/5 rounded-full blur-3xl" />

      <div className="section-padding relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`section-subtitle transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            TESTIMONIALS
          </span>
          <h2
            className={`section-title mt-4 mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            What Our <span className="text-[#1a6b7a]">Clients Say</span>
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12">
            {/* Quote icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-[#1a6b7a] rounded-xl flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Content */}
            <div className="relative min-h-[300px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className={`absolute inset-0 transition-all duration-500 ${
                    index === activeIndex
                      ? 'opacity-100 translate-x-0'
                      : index < activeIndex
                      ? 'opacity-0 -translate-x-8'
                      : 'opacity-0 translate-x-8'
                  }`}
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#1a6b7a] text-[#1a6b7a]"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-[#0d3d47] leading-relaxed mb-8 font-['Fraunces']">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#1a6b7a]"
                    />
                    <div>
                      <div className="font-semibold text-[#0d3d47]">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-[#333333]">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-100">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'bg-[#1a6b7a] w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={() => navigate('prev')}
                  className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#1a6b7a] hover:border-[#1a6b7a] hover:text-white transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => navigate('next')}
                  className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#1a6b7a] hover:border-[#1a6b7a] hover:text-white transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Client logos */}
        <div
          className={`mt-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <p className="text-center text-sm text-[#333333]/60 mb-8">
            Trusted by leading companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
            {['Google', 'Microsoft', 'Apple', 'Amazon', 'Meta'].map((company) => (
              <div
                key={company}
                className="text-xl md:text-2xl font-bold font-['Fraunces'] text-[#0d3d47]/30"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
