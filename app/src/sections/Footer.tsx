import { useState } from 'react';
import { Instagram, ArrowRight, Heart, Send } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'Event Planning',
  'Brand & Special Events',
  'Experiential Activations',
  'Styling & Design',
  'Technical Services',
  'Event Marketing',
  'On-Site Management',
  'Corporate Vacations',
];

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/greyline_services', label: 'Instagram - @greyline_services' },
  { icon: Instagram, href: 'https://instagram.com/greylineevet', label: 'Instagram - @greylineevet' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#0d3d47] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1a6b7a] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#3db5c8] rounded-full blur-3xl" />
      </div>

      <div className="section-padding relative">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block mb-6">
              <span className="text-3xl font-bold font-['Fraunces']">
                <span className="text-white">GREY</span>
                <span className="text-[#3db5c8]">LINE</span>
              </span>
            </a>
            <p className="text-white/70 mb-6 leading-relaxed">
              Creating unforgettable moments since 2016. Your vision, our
              expertise. Led by Dr. Adam Adelani, we transform your dreams into extraordinary
              experiences.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#1a6b7a] transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/70 hover:text-[#3db5c8] hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('#services');
                    }}
                    className="text-white/70 hover:text-[#3db5c8] hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-white/70 mb-4">
              Subscribe to get the latest updates and event planning tips.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#1a6b7a] focus:border-transparent transition-all"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#1a6b7a] rounded-lg flex items-center justify-center hover:bg-[#3db5c8] transition-colors"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
              {isSubscribed && (
                <p className="text-green-400 text-sm">
                  Thank you for subscribing!
                </p>
              )}
            </form>

            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="text-sm text-white/70">
                <p className="mb-1">+234 812 997 4354</p>
                <p>greylineservices26@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Greyline Events. All rights reserved.
            </p>
            <p className="text-white/60 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-[#3db5c8] fill-[#3db5c8]" /> by
              Dr. Adam Adelani & Team
            </p>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={() => scrollToSection('#home')}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#1a6b7a] rounded-full flex items-center justify-center shadow-lg hover:bg-[#3db5c8] transition-all duration-300 hover:-translate-y-1 z-40"
        aria-label="Back to top"
      >
        <ArrowRight className="w-5 h-5 text-white -rotate-90" />
      </button>
    </footer>
  );
}
