import React from 'react';

const AntalyaAboutSection = () => {
  return (
    <section className="relative w-full bg-white py-32 md:py-48 min-h-[600px] flex items-center overflow-hidden font-sans">
      
      {/* Brand accent top border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#d8d6d4]"></div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-16 lg:px-24 w-full leading-[1.1] tracking-tight text-left">
        
        <h2 className="text-5xl md:text-6xl lg:text-[80px] text-slate-800 flex flex-col">
          
          {/* Line 1 */}
          <div className="overflow-hidden mb-2">
            <span className="inline-block animate-reveal-text" style={{ animationDelay: '0.1s' }}>
              <span className="font-bold mr-4">Expert</span>
              <span className="font-medium text-gray-300 mr-4">recruitment and</span>
            </span>
          </div>

          {/* Line 2 */}
          <div className="overflow-hidden mb-2">
            <span className="inline-block animate-reveal-text" style={{ animationDelay: '0.3s' }}>
              <span className="font-bold mr-4 text-[#0658d4]">placement</span>
              <span className="font-medium text-gray-300 mr-4">solutions for</span>
            </span>
          </div>

          {/* Line 3 */}
          <div className="overflow-hidden mb-2">
            <span className="inline-block animate-reveal-text" style={{ animationDelay: '0.5s' }}>
              <span className="font-bold mr-4">Healthcare,</span>
              <span className="font-medium text-gray-300 mr-4">Education,</span>
              <span className="font-bold mr-4">IT</span>
            </span>
          </div>

          {/* Line 4 */}
          <div className="overflow-hidden">
            <span className="inline-block animate-reveal-text" style={{ animationDelay: '0.7s' }}>
              <span className="font-medium text-gray-300 mr-4">&</span>
              <span className="font-bold text-gray-300">Cybersecurity</span>
              <span className="font-medium text-gray-300 ml-4">professionals.</span>
            </span>
          </div>
        </h2>

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

        .animate-reveal-text {
          opacity: 0; /* Ensures text is hidden before animation starts */
          animation: reveal-text 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

    </section>
  );
};

export default AntalyaAboutSection;