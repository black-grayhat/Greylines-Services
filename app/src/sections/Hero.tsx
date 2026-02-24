import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#1a6b7a]/5 floating" />
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-[#0d3d47]/5 floating-delayed" />
        <div className="absolute bottom-40 left-1/4 w-16 h-16 rounded-full bg-[#1a6b7a]/10 floating" style={{ animationDelay: '1s' }} />
        
        {/* Diagonal shape */}
        <svg
          className="absolute top-0 right-0 w-1/2 h-full opacity-5"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="0,0 100,0 100,100 30,100" fill="#0d3d47" />
        </svg>
      </div>

      <div className="section-padding w-full py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="relative z-10 order-2 lg:order-1">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-[#1a6b7a]/10 rounded-full mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#1a6b7a]" />
              <span className="text-sm font-medium text-[#1a6b7a]">Professional Event Planning</span>
            </div>

            {/* Title */}
            <h1 className="mb-6">
              {['Creating', 'Unforgettable', 'Moments'].map((word, index) => (
                <span
                  key={word}
                  className={`block text-5xl md:text-6xl lg:text-7xl font-bold font-['Fraunces'] text-[#0d3d47] leading-tight transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: `${300 + index * 150}ms`,
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Description */}
            <p
              className={`text-lg md:text-xl text-[#333333] max-w-lg mb-8 leading-relaxed transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              Greyline Events transforms your vision into extraordinary experiences. 
              From corporate events to special celebrations, every detail is crafted 
              with precision and passion.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              <button onClick={scrollToServices} className="btn-primary group">
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#0d3d47] text-[#0d3d47] font-medium rounded-full hover:bg-[#0d3d47] hover:text-white transition-all duration-300"
              >
                View Our Work
              </a>
            </div>

            {/* Stats */}
            <div
              className={`flex flex-wrap gap-8 mt-12 pt-8 border-t border-gray-200 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1200ms' }}
            >
              {[
                { value: '500+', label: 'Events Delivered' },
                { value: '8+', label: 'Years Experience' },
                { value: '95%', label: 'Client Satisfaction' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold font-['Fraunces'] text-[#1a6b7a]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#333333] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative order-1 lg:order-2 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="relative perspective-1000">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl preserve-3d hover:rotate-y-[-2deg] transition-transform duration-500">
                <img
                  src="/hero-event.jpg"
                  alt="Elegant event celebration"
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#1a6b7a] rounded-2xl -z-10 floating" />
              <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-[#0d3d47] rounded-2xl -z-10 floating-delayed" />

              {/* Floating card */}
              <div
                className={`absolute bottom-8 left-8 bg-white rounded-xl shadow-xl p-4 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '1400ms' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#1a6b7a]/10 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-[#1a6b7a]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0d3d47]">Led by</div>
                    <div className="text-sm text-[#333333]">Dr. Adam Adelani, CEO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#f3f3f3"
          />
        </svg>
      </div>
    </section>
  );
}
