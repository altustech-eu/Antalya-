import React from 'react';

const AntalyaAboutSection = () => {
  return (
    /* flex and min-h-screen ensures it is perfectly centered vertically in the viewport */
    <section className="relative w-full bg-white py-32 md:py-48 min-h-[600px] flex items-center overflow-hidden font-sans">
      
      {/* Brand accent top border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#d8d6d4]"></div>

      {/* - mx-auto: Centers the container horizontally
          - text-left: Keeps the actual words aligned to the left side of that container
          - max-w-screen-xl: Standardizes the width so it looks premium on large monitors
      */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-16 lg:px-24 w-full leading-[1.1] tracking-tight text-left">
        
        <h2 className="text-5xl md:text-6xl lg:text-[80px] text-slate-800">
          {/* Line 1 */}
          <span className="font-bold mr-4">Expert</span>
          <span className="font-medium text-gray-300 mr-4">recruitment and</span>
          <br className="hidden lg:block" />

          {/* Line 2 */}
          <span className="font-bold mr-4 text-[#0658d4]">placement</span>
          <span className="font-medium text-gray-300 mr-4">solutions for</span>
          <br className="hidden lg:block" />

          {/* Line 3 */}
          <span className="font-bold mr-4">Healthcare,</span>
          <span className="font-medium text-gray-300 mr-4">Education,</span>
          <span className="font-bold mr-4">IT</span>
          <br className="hidden lg:block" />

          {/* Line 4 */}
          <span className="font-medium text-gray-300 mr-4">&</span>
          <span className="font-bold text-gray-300">Cybersecurity</span>
          <span className="font-medium text-gray-300 ml-4">professionals.</span>
        </h2>

      </div>
    </section>
  );
};

export default AntalyaAboutSection;