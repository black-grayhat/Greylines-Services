import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar, Palette, Lightbulb, Paintbrush, Settings, TrendingUp, Users, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Calendar,
    title: 'Event Planning',
    description:
      'Comprehensive event planning services from concept to execution. We handle every detail to ensure your event runs smoothly and exceeds expectations.',
    image: '/service-wedding.jpg',
    features: ['Concept Development', 'Timeline Management', 'Vendor Coordination', 'Day-of Execution'],
  },
  {
    icon: Palette,
    title: 'Brand & Special Events',
    description:
      'Create memorable brand experiences and special events that leave lasting impressions on your audience and strengthen your brand identity.',
    image: '/service-corporate.jpg',
    features: ['Brand Activation', 'Product Launches', 'Corporate Parties', 'VIP Events'],
  },
  {
    icon: Lightbulb,
    title: 'Experiential Activations',
    description:
      'Engage your audience with immersive experiences that create emotional connections and memorable interactions with your brand.',
    image: '/service-birthday.jpg',
    features: ['Interactive Displays', 'Pop-up Events', 'Guerrilla Marketing', 'Live Demos'],
  },
  {
    icon: Paintbrush,
    title: 'Styling & Design',
    description:
      'Transform any space with our expert styling and design services. From elegant to modern, we create the perfect ambiance for your event.',
    image: '/service-social.jpg',
    features: ['Theme Design', 'Decor Selection', 'Lighting Design', 'Floral Arrangements'],
  },
  {
    icon: Settings,
    title: 'Technical Services',
    description:
      'Professional audio, visual, and lighting solutions to ensure your event looks and sounds impeccable.',
    image: '/gallery-2.jpg',
    features: ['Sound Systems', 'LED Screens', 'Stage Design', 'Live Streaming'],
  },
  {
    icon: TrendingUp,
    title: 'Event Marketing',
    description:
      'Strategic marketing solutions to promote your event, drive attendance, and maximize engagement.',
    image: '/gallery-3.jpg',
    features: ['Social Media', 'Email Campaigns', 'PR Management', 'Content Creation'],
  },
  {
    icon: Users,
    title: 'On-Site Management',
    description:
      'Professional on-site coordination to ensure everything runs smoothly on the day of your event.',
    image: '/gallery-5.jpg',
    features: ['Staff Coordination', 'Guest Services', 'Crisis Management', 'Logistics'],
  },
  {
    icon: Briefcase,
    title: 'Corporate Vacations',
    description:
      'Plan unforgettable corporate retreats and team-building vacations that strengthen bonds and boost morale.',
    image: '/gallery-6.jpg',
    features: ['Retreat Planning', 'Team Building', 'Travel Coordination', 'Activity Planning'],
  },
];

export default function Services() {
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
      id="services"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#f3f3f3] to-white" />

      <div className="section-padding relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`section-subtitle transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            WHAT WE OFFER
          </span>
          <h2
            className={`section-title mt-4 mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Services We <span className="text-[#1a6b7a]">Provide</span>
          </h2>
          <p
            className={`text-lg text-[#333333] transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            From concept to execution, we handle every detail to create
            extraordinary experiences tailored to your vision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 80}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Icon badge */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <service.icon className="w-5 h-5 text-[#1a6b7a]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold font-['Fraunces'] text-[#0d3d47] mb-2 group-hover:text-[#1a6b7a] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-[#333333]/80 mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* CTA */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1 text-[#1a6b7a] font-medium text-sm group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>

              {/* Hover border effect */}
              <div
                className={`absolute inset-0 border-2 border-[#1a6b7a] rounded-2xl pointer-events-none transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <p className="text-[#333333] mb-4">
            Have a unique event in mind? We love custom projects!
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary inline-flex"
          >
            Discuss Your Event
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
