import React from 'react';

const AntalyaHeroSection = () => {
  return (
    <section className="relative w-full bg-white py-32 md:py-30 min-h-[500px] flex items-center overflow-hidden font-sans">
      
      {/* Brand accent top border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0658d4]"></div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12 lg:px-14 w-full leading-[1.1] tracking-tight text-left">
        
        <h1 className="text-5xl md:text-6xl lg:text-[60px] text-slate-800 flex flex-col">
          
          {/* Line 1 */}
          <div className="overflow-hidden mb-2">
            <span className="inline-block animate-reveal-text" style={{ animationDelay: '0.1s' }}>
              <span className="font-bold mr-4">Driven by</span>
              <span className="font-medium text-gray-300 mr-4">Talent,</span>
            </span>
          </div>

          {/* Line 2 */}
          <div className="overflow-hidden mb-2">
            <span className="inline-block animate-reveal-text" style={{ animationDelay: '0.3s' }}>
              <span className="font-bold text-[#0658d4] mr-4">Focused on</span>
              <span className="font-bold mr-4">Success.</span>
            </span>
          </div>

          {/* Line 3 */}
          <div className="overflow-hidden mb-2">
            <span className="inline-block animate-reveal-text" style={{ animationDelay: '0.5s' }}>
              <span className="font-medium text-gray-400 mr-4">Premier staffing solutions</span>
              <span className="font-medium text-gray-300 mr-4">in</span>
              <span className="font-bold mr-4">Kuwait City</span>
            </span>
          </div>

          {/* Line 4 */}
          <div className="overflow-hidden">
            <span className="inline-block animate-reveal-text" style={{ animationDelay: '0.7s' }}>
              <span className="font-medium text-gray-400 mr-4">for</span>
              <span className="font-bold mr-4">Healthcare,</span>
              <span className="font-medium text-gray-300 mr-4">Education,</span>
              <span className="font-bold mr-4">IT</span>
            </span>
          </div>

          {/* Line 5 */}
          <div className="overflow-hidden mt-2">
            <span className="inline-block animate-reveal-text" style={{ animationDelay: '0.9s' }}>
              <span className="font-medium text-gray-300 mr-4">&</span>
              <span className="font-bold text-[#0658d4] mr-4">Cybersecurity</span>
              <span className="font-medium text-gray-400">professionals.</span>
            </span>
          </div>
        </h1>

        {/* Sub-headline */}
        <div className="mt-8 max-w-2xl">
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed animate-fade-in" style={{ animationDelay: '1.1s' }}>
            Antalya For Recruiting Manpower LLC — your trusted recruitment partner 
            in <span className="font-semibold text-gray-800">Mirqab-Block 1</span>, 
            connecting exceptional talent with industry leaders across the GCC.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '1.3s' }}>
          <a 
            href="/for-employers" 
            className="px-8 py-4 bg-[#0658d4] text-white font-semibold rounded-lg hover:bg-[#0547a8] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Hire Top Talent
          </a>
          <a 
            href="/for-job-seekers" 
            className="px-8 py-4 border-2 border-[#0658d4] text-[#0658d4] font-semibold rounded-lg hover:bg-[#0658d4] hover:text-white transition-all duration-300"
          >
            Find a Job
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 flex flex-wrap items-center gap-8 text-sm text-gray-500 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#0658d4] rounded-full"></span>
            120k+ Candidates Placed
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#0658d4] rounded-full"></span>
            4.9/5 Client Rating
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#0658d4] rounded-full"></span>
            100% Compliance Rate
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#0658d4] rounded-full"></span>
            Registered in Kuwait
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes reveal-text {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-reveal-text {
          opacity: 0;
          animation: reveal-text 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-fade-in {
          opacity: 0;
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>

    </section>
  );
};

export default AntalyaHeroSection;