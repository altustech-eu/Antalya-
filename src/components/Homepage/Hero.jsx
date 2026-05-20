import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import { Search, ChevronDown, ArrowRight } from 'lucide-react';
import AntalyaHeroImage from '../../assests/hero-image.png'; 

const Hero = () => {
  const navigate = useNavigate(); // 2. Initialize navigate
  const [searchTerm, setSearchTerm] = useState(''); // State for input

  const handleSearch = (e) => {
    e.preventDefault();
    // 3. Navigate to search page (optionally passing the search term)
    navigate('/searchpage'); 
  };

  const tags = [
    "General Labor", "Construction", "Hospitality", 
    "Cleaning", "Maintenance", "Security", "Warehouse"
  ];

  return (
    <section className="relative w-full h-[auto] min-h-[92vh] lg:h-[800px] flex items-center bg-white overflow-hidden font-sans pt-20 lg:pt-0">
      
      {/* 1. ASYMMETRIC BACKGROUND PANELS */}
      <div className="absolute inset-0 flex z-0 pointer-events-none">
        <div className="w-full lg:w-[50%] h-full bg-[#0658d4]"></div>
        <div className="hidden lg:block lg:w-[50%] h-full bg-[#f9fafb]"></div>
      </div>

      {/* 2. CENTERED PORTRAIT WITH SMOOTH ZOOM & RADIAL BLUR */}
      <div className="absolute inset-0 z-10 flex justify-center pointer-events-none">
        <div className="relative h-full w-full max-w-[1400px]">
          <div className="absolute inset-0 lg:left-[25%] h-full w-full lg:w-auto overflow-hidden">
             <img 
              src={AntalyaHeroImage} 
              alt="Workforce" 
              className="h-full w-full lg:w-auto object-cover grayscale brightness-110 contrast-115 mix-blend-multiply animate-smooth-zoom"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_40%,_white_90%)] lg:bg-[radial-gradient(circle,_transparent_30%,_#f9fafb_100%)] opacity-60"></div>
          </div>
        </div>
      </div>

      {/* 3. FOREGROUND CONTENT LAYER */}
      <div className="relative z-30 w-full max-w-[1800px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col justify-center h-full items-start py-20 lg:py-0">
        
        <div className="max-w-3xl w-full">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold text-white lg:text-slate-800 leading-[1.1] tracking-tight mb-8 lg:mb-12 drop-shadow-md lg:drop-shadow-sm">
            <span className="text-white">Reliable manpower</span> <br />
            <span className="text-white lg:text-slate-800">for your business</span>
          </h1>

          {/* COMPLEX SEARCH BAR UI - Wrap in a form to handle 'Enter' key */}
          <form 
            onSubmit={handleSearch}
            className="flex flex-col md:flex-row items-center bg-white rounded-2xl md:rounded-full p-2 shadow-2xl w-full max-w-4xl mb-10 border border-gray-100"
          >
            {/* Field 1: Keywords */}
            <div className="flex-grow flex items-center w-full border-b md:border-b-0 md:border-r border-gray-100">
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Find skilled workers..." 
                className="w-full bg-transparent pl-6 md:pl-8 pr-4 py-4 md:py-5 text-gray-800 outline-none text-lg md:text-xl font-semibold placeholder:text-gray-300"
              />
            </div>
            
            {/* Field 2: Job Category */}
            <div className="relative flex items-center group w-full md:w-[240px]">
              <select className="w-full bg-transparent pl-6 md:pl-8 pr-12 py-4 md:py-5 text-[#0658d4] font-semibold text-lg md:text-xl outline-none appearance-none cursor-pointer z-10">
                <option>All Sectors</option>
                <option>Skilled Labor</option>
                <option>Technical</option>
              </select>
              <ChevronDown className="absolute right-6 text-[#0658d4] pointer-events-none w-5 h-5" />
            </div>

            {/* Field 3: Search Action */}
            <button 
              type="submit" 
              className="w-full md:w-auto bg-[#0658d4] p-4 md:p-5 rounded-xl md:rounded-full text-white hover:bg-[#3d7699] transition-all flex items-center justify-center md:ml-2 group"
            >
              <Search size={24} className="md:w-[28px] md:h-[28px] group-hover:scale-110 transition-transform" strokeWidth={2.5} />
            </button>
          </form>

          {/* TRENDING TAGS */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {tags.map((tag) => (
              <button 
                key={tag} 
                onClick={() => navigate('/search')} // Also redirect on tag click
                className="bg-slate-800/90 lg:bg-slate-800 hover:bg-[#0658d4] text-white text-[10px] md:text-[11px] font-semibold uppercase tracking-widest px-4 md:px-6 py-2 md:py-2.5 rounded-full transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 4. SIGNATURE BRAND ELEMENTS */}
      <div className="absolute bottom-12 right-12 z-40 hidden xl:block">
        <div className="relative w-32 h-32 animate-spin-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
            <text className="text-[8px] font-bold uppercase tracking-[0.2em] fill-slate-800">
              <textPath xlinkHref="#circlePath">• ANTALYA MANPOWER • ANTALYA MANPOWER </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <ArrowRight className="w-6 h-6 text-[#f29100] -rotate-45" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes smooth-zoom {
          0% { transform: scale(1); filter: blur(0px); }
          100% { transform: scale(1.15); filter: blur(2px); } 
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-smooth-zoom {
          animation: smooth-zoom 12s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite alternate;
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;