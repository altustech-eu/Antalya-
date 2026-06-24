import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import AntalyaHeroImage from '../../assests/hero-image.png';

const Hero = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/searchpage');
  };

  const sectors = [
    'Healthcare Staffing',
    'IT Recruitment',
    'Cybersecurity Hiring',
    'Hospitality Staffing',
    'Education Recruitment',
    'Skilled Labor'
  ];

  return (
    <section
      className="relative w-full min-h-[92vh] lg:h-[820px] flex items-center bg-white overflow-hidden pt-20 lg:pt-0"
      style={{ fontFamily: "'Inter', 'Manrope', 'Segoe UI', sans-serif" }}
    >

      {/* BACKGROUND PANELS */}
      <div className="absolute inset-0 flex z-0 pointer-events-none">
        <div className="w-full lg:w-[52%] h-full bg-[#0658d4]"></div>
        <div className="hidden lg:block lg:w-[48%] h-full bg-[#f9fafb]"></div>
      </div>

      {/* HERO IMAGE / VIDEO BACKGROUND AREA */}
      <div className="absolute inset-0 z-10 flex justify-center items-center pointer-events-none">
        <div className="relative h-full w-full flex justify-center items-center">
          <div className="relative w-full lg:w-[82%] h-full overflow-hidden flex justify-center items-center">
            <img
              src={AntalyaHeroImage}
              alt="Antalya For Recruiting Manpower LLC Kuwait staffing and recruitment solutions"
              className="h-full w-auto min-w-full object-cover grayscale brightness-110 contrast-115 mix-blend-multiply animate-central-focus"
            />

            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(6,88,212,0.92)_0%,_rgba(6,88,212,0.72)_35%,_rgba(249,250,251,0.65)_72%,_rgba(249,250,251,0.96)_100%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_18%,_rgba(249,250,251,0.85)_82%)] opacity-60"></div>
          </div>
        </div>
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-30 w-full max-w-[1800px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col justify-center h-full items-start py-20 lg:py-0 animate-slide-in-right">

        <div className="max-w-4xl w-full">

          {/* HEADLINE */}
          <h1 className="text-4xl md:text-6xl lg:text-[72px] font-semibold text-white lg:text-slate-900 leading-[1.05] tracking-[-0.045em] mb-6 drop-shadow-md lg:drop-shadow-sm">
            <span className="text-white block">
              Driven by Talent,
            </span>

            <span className="text-white lg:text-slate-900 block font-light">
              Focused on Success.
            </span>
          </h1>

          {/* SUB-HEADLINE */}
          <p className="max-w-3xl text-base md:text-xl lg:text-2xl text-white/90 lg:text-gray-700 font-normal leading-relaxed mb-8 tracking-[-0.01em]">
            Antalya For Recruiting Manpower LLC is a trusted staffing partner in Kuwait City,
            delivering specialized recruitment solutions for high-demand sectors.
          </p>

          {/* LIVE SEARCH BAR */}
          <form
            onSubmit={handleSearch}
            className="flex flex-col md:flex-row items-center bg-white rounded-2xl md:rounded-full p-2 shadow-2xl w-full max-w-4xl mb-7 border border-gray-100"
          >
            <div className="flex-grow flex items-center w-full">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Jobs..."
                className="w-full bg-transparent pl-6 md:pl-8 pr-4 py-4 md:py-5 text-gray-800 outline-none text-lg md:text-xl font-medium placeholder:text-gray-300 tracking-[-0.01em]"
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-[#0658d4] p-4 md:p-5 rounded-xl md:rounded-full text-white hover:bg-[#3d7699] transition-all flex items-center justify-center md:ml-2 group"
            >
              <Search
                size={24}
                className="md:w-[28px] md:h-[28px] group-hover:scale-110 transition-transform"
                strokeWidth={2.5}
              />
            </button>
          </form>

          {/* SECTOR TAGS */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {sectors.map((sector) => (
              <button
                key={sector}
                onClick={() => navigate('/services')}
                className="bg-slate-900/90 hover:bg-[#0658d4] text-white text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.18em] px-4 md:px-6 py-2 md:py-2.5 rounded-full transition-all"
              >
                {sector}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes central-focus {
          0% {
            transform: scale(1);
            filter: blur(8px) grayscale(1);
            opacity: 0.75;
          }
          100% {
            transform: scale(1.08);
            filter: blur(0px) grayscale(1);
            opacity: 1;
          }
        }

        .animate-central-focus {
          animation: central-focus 4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          transform-origin: center center;
        }

        @keyframes slide-in-right {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-right {
          animation: slide-in-right 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;