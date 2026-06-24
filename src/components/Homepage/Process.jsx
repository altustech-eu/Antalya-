import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, Target, Award, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const EmployerServices = () => {
  const scrollingText = "Reliable recruitment solutions for Healthcare, Education, IT, and Cybersecurity sectors in Kuwait and the GCC.";

  // Image carousel data for the left side
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop",
      alt: "Strategic business meeting with Antalya recruitment team in Kuwait City",
      label: "Strategic Planning"
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
      alt: "Healthcare professionals collaborating at Antalya Manpower Kuwait",
      label: "Healthcare Recruitment"
    },
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
      alt: "Antalya recruitment team interview session in Kuwait City",
      label: "Talent Acquisition"
    },
    {
      src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
      alt: "Professional networking at Antalya Manpower GCC recruitment event",
      label: "Networking"
    },
    {
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop",
      alt: "Antalya staffing solutions team in Kuwait office meeting",
      label: "Staffing Solutions"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, carouselImages.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-white overflow-hidden font-sans py-12 md:py-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16">
        <div className="flex flex-col lg:flex-row items-stretch bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl min-h-[600px] md:min-h-[650px] relative border border-gray-100">
          
          {/* LEFT: IMAGE CAROUSEL SECTION WITH CLIP MASK */}
          <div className="lg:w-1/2 relative min-h-[400px] md:min-h-[500px] overflow-hidden">
            {/* Clip Mask Container */}
            <div 
              className="absolute inset-0 bg-[#0658d4]"
              style={{ 
                clipPath: 'polygon(0 0, 75% 0, 85% 100%, 0% 100%)',
                zIndex: 2
              }}
            >
              {/* Image Carousel inside Clip Mask */}
              <div className="relative w-full h-full">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentIndex 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-110'
                    }`}
                  >
                    <img 
                      src={image.src} 
                      className="w-full h-full object-cover"
                      alt={image.alt}
                    />
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-black/20" />
                    
                    {/* Image label */}
                    <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full z-10">
                      <span className="text-white text-xs font-medium tracking-wider uppercase">
                        {image.label}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Carousel Controls inside clip mask */}
                <div className="absolute bottom-6 right-6 flex items-center gap-3 z-10">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-white/30 transition-all flex items-center justify-center"
                    aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </button>
                  <button 
                    onClick={goToPrevious}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-white/30 transition-all flex items-center justify-center"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button 
                    onClick={goToNext}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-white/30 transition-all flex items-center justify-center"
                    aria-label="Next image"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                {/* Dot Indicators inside clip mask */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentIndex 
                          ? 'w-8 h-1.5 bg-[#0658d4]' 
                          : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Vertical Text Label */}
                <div className="absolute bottom-10 right-4 origin-bottom-right -rotate-90 text-white font-semibold uppercase tracking-[0.3em] text-[10px] md:text-sm opacity-80 whitespace-nowrap z-10 pointer-events-none">
                    Kuwait's Trusted Recruitment Partner
                </div>
              </div>
            </div>

            {/* Fallback background for areas outside clip mask */}
            <div className="absolute inset-0 bg-[#0658d4] opacity-10"></div>
          </div>

          {/* RIGHT: TEXT CONTENT SECTION */}
          <div className="lg:w-1/2 flex flex-col bg-white relative">
            
            {/* INTERNAL AUTOSCROLLING HEADER */}
            <div className="bg-gray-50 py-4 border-b border-gray-100 overflow-hidden whitespace-nowrap">
              <div className="flex animate-marquee-fast">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-gray-400 text-[10px] font-semibold mx-10 uppercase tracking-[0.2em]">
                    {scrollingText}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-10 md:p-20 flex flex-col justify-center h-full">
              {/* Sector Label */}
              <span className="text-[#0658d4] font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] mb-6 block text-left">
                For Employers
              </span>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-6xl font-semibold text-slate-800 leading-[0.9] tracking-tighter mb-8 md:mb-10 text-left">
                Strategic Staffing <br /> Solutions
              </h2>

              {/* Blockquote Section */}
              <div className="relative mb-8 md:mb-10 pl-6 border-l-4 border-[#0658d4]/20">
                <p className="text-xl md:text-2xl font-medium text-slate-700 leading-tight italic text-left">
                  "Excellence is not a skill, it is an attitude that drives the workforce of the future."
                </p>
              </div>

              {/* Description Text */}
              <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 md:mb-12 max-w-xl text-left">
                Antalya For Recruiting Manpower LLC is a premier staffing partner registered in <span className="font-semibold text-gray-700">Kuwait City</span>. 
                We deliver high-impact recruitment for <span className="font-semibold text-gray-700">Healthcare, Education, IT, and Cybersecurity</span>, 
                ensuring every hire matches your company's standards of excellence.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 mb-8 md:mb-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#0658d4]/10 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-[#0658d4]" />
                  </div>
                  <span className="text-sm text-gray-600">120k+ Placements</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#0658d4]/10 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-[#0658d4]" />
                  </div>
                  <span className="text-sm text-gray-600">100% Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#0658d4]/10 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-[#0658d4]" />
                  </div>
                  <span className="text-sm text-gray-600">4.9/5 Rating</span>
                </div>
              </div>

              {/* Button */}
              <button className="flex items-center gap-3 bg-[#0658d4] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold w-full md:w-fit hover:bg-[#0547a8] transition-all shadow-xl shadow-blue-100 group justify-center">
                Explore Employer Services 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            {/* DECORATIVE WATERMARK */}
            <div className="absolute -bottom-10 -right-10 opacity-[0.02] pointer-events-none">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-slate-900 rounded-tl-[160px]"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-fast {
          animation: marquee-fast 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default EmployerServices;