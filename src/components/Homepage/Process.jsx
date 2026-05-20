import React from 'react';
import { ArrowRight } from 'lucide-react';

const EmployerServices = () => {
  const scrollingText = "Reliable recruitment solutions for Healthcare, Education, and IT sectors globally.";

  return (
    <section className="bg-white overflow-hidden font-sans py-12 md:py-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16">
        <div className="flex flex-col lg:flex-row items-stretch bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl min-h-[600px] md:min-h-[650px] relative border border-gray-100">
          
          {/* LEFT: ASYMMETRIC IMAGE SECTION */}
          <div className="lg:w-1/2 relative min-h-[350px] md:min-h-[400px]">
            {/* The base Black & White Image - High Quality Professional Context */}
            <img 
              src="https://images.unsplash.com/photo-1600880212319-78443973a116?q=80&w=1200&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover grayscale"
              alt="Professional Business Meeting"
            />
            {/* The Antalya Blue Overlay Clip (Angled) */}
            <div 
              className="absolute inset-0 bg-[#0658d4] mix-blend-multiply opacity-85"
              style={{ clipPath: 'polygon(0 0, 75% 0, 85% 100%, 0% 100%)' }}
            />
            {/* Vertical Text Label */}
            <div className="absolute bottom-10 right-10 origin-bottom-right -rotate-90 text-white font-semibold uppercase tracking-[0.3em] text-[10px] md:text-sm opacity-80 whitespace-nowrap">
                Empowering Global Enterprises
            </div>
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
                Partner with us
              </span>

              {/* Main Heading - Reduced from font-bold/black to font-semibold */}
              <h2 className="text-4xl md:text-6xl font-semibold text-slate-800 leading-[0.9] tracking-tighter mb-8 md:mb-10 text-left">
                Strategic Staffing <br /> Solutions
              </h2>

              {/* Blockquote Section - Focused on Talent quality */}
              <div className="relative mb-8 md:mb-10 pl-6 border-l-4 border-blue-50">
                <p className="text-xl md:text-2xl font-medium text-slate-700 leading-tight italic text-left">
                  "Excellence is not a skill, it is an attitude that drives the workforce of the future."
                </p>
              </div>

              {/* Description Text */}
              <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 md:mb-12 max-w-xl text-left">
                Antalya For Recruiting Manpower LLC is a leading staffing partner registered in Kuwait City. 
                We specialize in delivering high-impact recruitment for Healthcare, Education, and IT, 
                ensuring every hire matches your company's standard of excellence.
              </p>

              {/* Button */}
              <button className="flex items-center gap-3 bg-[#0658d4] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold w-full md:w-fit hover:bg-[#3d7699] transition-all shadow-xl shadow-blue-50 group justify-center">
                Employer Services 
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