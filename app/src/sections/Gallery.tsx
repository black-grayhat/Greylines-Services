import { useEffect, useRef, useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    src: '/gallery-1.jpg',
    title: 'Elegant Wedding Reception',
    category: 'Wedding',
  },
  {
    src: '/gallery-2.jpg',
    title: 'Corporate Conference',
    category: 'Corporate',
  },
  {
    src: '/gallery-3.jpg',
    title: 'Evening Garden Party',
    category: 'Social',
  },
  {
    src: '/gallery-4.jpg',
    title: 'Luxury Birthday Celebration',
    category: 'Birthday',
  },
  {
    src: '/gallery-5.jpg',
    title: 'Grand Gala Dinner',
    category: 'Corporate',
  },
  {
    src: '/gallery-6.jpg',
    title: 'Intimate Garden Wedding',
    category: 'Wedding',
  },
];

const categories = ['All', 'Wedding', 'Corporate', 'Birthday', 'Social'];

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
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

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const newIndex =
      direction === 'prev'
        ? (selectedImage - 1 + filteredImages.length) % filteredImages.length
        : (selectedImage + 1) % filteredImages.length;
    setSelectedImage(newIndex);
  };

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-[#f3f3f3] overflow-hidden"
    >
      <div className="section-padding">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span
            className={`section-subtitle transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            OUR PORTFOLIO
          </span>
          <h2
            className={`section-title mt-4 mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Event <span className="text-[#1a6b7a]">Gallery</span>
          </h2>
          <p
            className={`text-lg text-[#333333] transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Browse through our collection of memorable moments we've created
            for our clients.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#1a6b7a] text-white'
                  : 'bg-white text-[#333333] hover:bg-[#1a6b7a]/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 transition-opacity duration-500 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <span className="text-[#3db5c8] text-sm font-medium mb-1">
                  {image.category}
                </span>
                <h3 className="text-white text-xl font-bold font-['Fraunces']">
                  {image.title}
                </h3>
              </div>

              {/* Zoom icon */}
              <div
                className={`absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all duration-500 ${
                  hoveredIndex === index
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-75'
                }`}
              >
                <ZoomIn className="w-5 h-5 text-[#0d3d47]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation */}
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[80vh] mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <span className="text-[#3db5c8] text-sm font-medium">
                {filteredImages[selectedImage].category}
              </span>
              <h3 className="text-white text-xl font-bold font-['Fraunces'] mt-1">
                {filteredImages[selectedImage].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
