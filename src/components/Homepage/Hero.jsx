import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronDown} from 'lucide-react';
import AntalyaHeroImage from '../../assests/hero-image.png'; 

const Hero = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
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

      {/* 2. CENTERED IMAGE WITH CORE FOCUS BLUR & ZOOM */}
      <div className="absolute inset-0 z-10 flex justify-center items-center pointer-events-none">
        <div className="relative h-full w-full flex justify-center items-center">
          <div className="relative w-full lg:w-[80%] h-full overflow-hidden flex justify-center items-center">
             <img 
              src={AntalyaHeroImage} 
              alt="Workforce" 
              className="h-full w-auto min-w-full object-cover grayscale brightness-110 contrast-115 mix-blend-multiply animate-central-focus"
            />
            {/* Improved Radial Gradient to keep the center clear while blurring edges */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_20%,_white_70%)] lg:bg-[radial-gradient(circle,_transparent_20%,_#f9fafb_80%)] opacity-80"></div>
          </div>
        </div>
      </div>

      {/* 3. FOREGROUND CONTENT LAYER */}
      <div className="relative z-30 w-full max-w-[1800px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col justify-center h-full items-start py-20 lg:py-0 animate-slide-in-right">
        
        <div className="max-w-3xl w-full">
          <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold text-white lg:text-slate-800 leading-[1.1] tracking-tight mb-8 lg:mb-12 drop-shadow-md lg:drop-shadow-sm">
            <span className="text-white">Reliable manpower</span> <br />
            <span className="text-white lg:text-slate-800">for your business</span>
          </h1>

          <form 
            onSubmit={handleSearch}
            className="flex flex-col md:flex-row items-center bg-white rounded-2xl md:rounded-full p-2 shadow-2xl w-full max-w-4xl mb-10 border border-gray-100"
          >
            <div className="flex-grow flex items-center w-full border-b md:border-b-0 md:border-r border-gray-100">
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Find skilled workers..." 
                className="w-full bg-transparent pl-6 md:pl-8 pr-4 py-4 md:py-5 text-gray-800 outline-none text-lg md:text-xl font-semibold placeholder:text-gray-300"
              />
            </div>
            
            <div className="relative flex items-center group w-full md:w-[240px]">
              <select className="w-full bg-transparent pl-6 md:pl-8 pr-12 py-4 md:py-5 text-[#0658d4] font-semibold text-lg md:text-xl outline-none appearance-none cursor-pointer z-10">
                <option>All Sectors</option>
                <option>Skilled Labor</option>
                <option>Technical</option>
                <option>Engineering</option>
              </select>
              <ChevronDown className="absolute right-6 text-[#0658d4] pointer-events-none w-5 h-5" />
            </div>

            <button 
              type="submit" 
              className="w-full md:w-auto bg-[#0658d4] p-4 md:p-5 rounded-xl md:rounded-full text-white hover:bg-[#3d7699] transition-all flex items-center justify-center md:ml-2 group"
            >
              <Search size={24} className="md:w-[28px] md:h-[28px] group-hover:scale-110 transition-transform" strokeWidth={2.5} />
            </button>
          </form>

          <div className="flex flex-wrap gap-2 md:gap-3">
            {tags.map((tag) => (
              <button 
                key={tag} 
                onClick={() => navigate('/search')}
                className="bg-slate-800/90 lg:bg-slate-800 hover:bg-[#0658d4] text-white text-[10px] md:text-[11px] font-semibold uppercase tracking-widest px-4 md:px-6 py-2 md:py-2.5 rounded-full transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Central Focus Animation: Zooms from center and modulates blur */
        @keyframes central-focus {
          0% { 
            transform: scale(1); 
            filter: blur(8px) grayscale(1); 
            opacity: 0.7;
          }
          100% { 
            transform: scale(1.1); 
            filter: blur(0px) grayscale(1); 
            opacity: 1;
          }
        }

        .animate-central-focus {
          animation: central-focus 4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          transform-origin: center center;
        }

        @keyframes slide-in-right {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;