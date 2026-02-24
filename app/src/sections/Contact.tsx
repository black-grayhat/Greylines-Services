import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, Clock, Send, CheckCircle, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+234 812 997 4354'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['greylineservices26@gmail.com'],
  },
  {
    icon: Instagram,
    title: 'Follow Us',
    details: ['@greyline_services', '@greylineevet'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon - Sat: 9AM - 6PM'],
  },
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: '',
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f3f3f3] -skew-x-12 translate-x-1/4" />

      <div className="section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <div>
            <span
              className={`section-subtitle transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              GET IN TOUCH
            </span>
            <h2
              className={`section-title mt-4 mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Let's Plan Your<br />
              <span className="text-[#1a6b7a]">Perfect Event</span>
            </h2>
            <p
              className={`text-lg text-[#333333] mb-10 max-w-md transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Ready to create something extraordinary? Get in touch with us and
              let's start planning your unforgettable event.
            </p>

            {/* CEO Card */}
            <div
              className={`bg-[#0d3d47] rounded-2xl p-6 mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '250ms' }}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#1a6b7a] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">DA</span>
                </div>
                <div>
                  <div className="font-bold text-white text-lg">Dr. Adam Adelani</div>
                  <div className="text-[#3db5c8]">Chief Executive Officer</div>
                  <div className="text-white/70 text-sm mt-1">Greyline Events</div>
                </div>
              </div>
            </div>

            {/* Contact Info Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className={`flex items-start gap-4 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-[#1a6b7a]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-[#1a6b7a]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0d3d47] mb-1">
                      {info.title}
                    </h4>
                    {info.details.map((detail) => (
                      <p key={detail} className="text-sm text-[#333333]/70">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold font-['Fraunces'] text-[#0d3d47] mb-2">
                    Thank You!
                  </h3>
                  <p className="text-[#333333]">
                    We've received your message and will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#0d3d47] mb-2">
                        Your Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1a6b7a] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0d3d47] mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1a6b7a] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#0d3d47] mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 812 997 4354"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1a6b7a] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0d3d47] mb-2">
                        Event Type
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1a6b7a] focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Select Event Type</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="brand">Brand Activation</option>
                        <option value="wedding">Wedding</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="social">Social Gathering</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0d3d47] mb-2">
                      Your Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your event..."
                      rows={4}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1a6b7a] focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-primary py-4"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
