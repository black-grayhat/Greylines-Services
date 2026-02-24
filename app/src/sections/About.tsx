import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Award, Users, Calendar, Heart } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized excellence in event planning',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Dedicated professionals at your service',
  },
  {
    icon: Calendar,
    title: '8+ Years',
    description: 'Of creating memorable experiences',
  },
  {
    icon: Heart,
    title: 'Passionate',
    description: 'We love what we do',
  },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-[#f3f3f3] overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#1a6b7a]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#0d3d47]/5 rounded-full blur-3xl" />

      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/about-event.jpg"
                  alt="Event celebration"
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
              </div>

              {/* Decorative shapes */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#1a6b7a] rounded-full -z-10 opacity-20" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-[#0d3d47] rounded-xl -z-10" />

              {/* Experience badge */}
              <div
                className={`absolute bottom-8 right-8 bg-white rounded-xl shadow-xl p-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <div className="text-5xl font-bold font-['Fraunces'] text-[#1a6b7a]">8+</div>
                <div className="text-sm text-[#333333] mt-1">Years of<br />Excellence</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="section-subtitle">WHO WE ARE</span>
            </div>

            <h2
              className={`section-title mt-4 mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Crafting Memories<br />
              <span className="text-[#1a6b7a]">That Last Forever</span>
            </h2>

            <p
              className={`text-lg text-[#333333] leading-relaxed mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Founded and led by <strong>Dr. Adam Adelani</strong>, Greyline Events has been 
              transforming visions into reality for over 8 years. Our dedicated team of 
              planners, designers, and coordinators work tirelessly to ensure every moment is perfect.
            </p>

            <p
              className={`text-base text-[#333333]/80 leading-relaxed mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              We believe that every event tells a story. From the initial concept to
              the final execution, we pour our hearts into creating experiences that
              resonate with you and your guests for years to come. Our commitment to 
              excellence has made us a trusted name in event planning across Nigeria.
            </p>

            {/* Features grid */}
            <div
              className={`grid grid-cols-2 gap-6 mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 group"
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 bg-[#1a6b7a]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#1a6b7a] transition-colors duration-300">
                    <feature.icon className="w-5 h-5 text-[#1a6b7a] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0d3d47]">{feature.title}</div>
                    <div className="text-sm text-[#333333]/70">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CEO Info */}
            <div
              className={`bg-white rounded-xl p-6 mb-8 shadow-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#1a6b7a] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">DA</span>
                </div>
                <div>
                  <div className="font-bold text-[#0d3d47]">Dr. Adam Adelani</div>
                  <div className="text-sm text-[#1a6b7a]">Chief Executive Officer</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-[#1a6b7a] font-semibold hover:gap-4 transition-all duration-300 group"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
