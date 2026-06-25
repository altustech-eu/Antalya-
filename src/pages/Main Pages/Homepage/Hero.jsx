import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronDown } from 'lucide-react';
import AntalyaHeroImage from '../../../assests/hero-image.jpg';

const Hero = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/searchpage');
  };

  const tags = [
    'Healthcare',
    'Education',
    'Hospitality',
    'IT Recruitment',
    'Cybersecurity',
    'Skilled Labor'
  ];

  const tickerItems = [
    'Healthcare Staffing Kuwait',
    'Education Recruitment',
    'Hospitality Jobs',
    'IT & Cybersecurity Hiring',
    'Skilled Labor Solutions',
    'Recruitment Partner in Kuwait City'
  ];

  const grainStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.55'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'repeat',
    backgroundSize: '180px 180px'
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#eeeeee] font-sans">

      {/* MAIN HERO GRID */}
      <div className="relative grid min-h-screen grid-cols-1 lg:grid-cols-[60%_40%]">

        {/* LEFT VISUAL PANEL */}
        <div className="relative min-h-screen overflow-hidden bg-[#0658d4]">

          {/* BACKGROUND IMAGE */}
          <img
            src={AntalyaHeroImage}
            alt="Antalya For Recruiting Manpower LLC staffing professionals"
            className="absolute inset-0 h-full w-full object-cover grayscale mix-blend-multiply opacity-90"
          />

          {/* BLUE OVERLAY */}
          <div className="absolute inset-0 bg-[#0658d4]/80"></div>

          {/* GRAIN OVERLAY ON BLUE BLOCK */}
          <div
            className="absolute inset-0 z-20 opacity-[0.22] mix-blend-overlay pointer-events-none"
            style={grainStyle}
          ></div>

          {/* EXTRA SOFT DEPTH OVERLAY */}
          <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_25%_35%,rgba(255,255,255,0.16),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)] pointer-events-none"></div>

          {/* IMAGE SPLIT EFFECT */}
          <div className="absolute right-0 top-0 hidden h-full w-[50%] bg-white/0 lg:block">
            <img
              src={AntalyaHeroImage}
              alt="Recruitment professionals"
              className="h-full w-full object-cover grayscale opacity-90 mix-blend-normal"
            />
            <div className="absolute inset-0 bg-black/15"></div>
          </div>

          {/* HERO CONTENT */}
          <div className="relative z-30 flex min-h-screen flex-col justify-center px-7 pb-24 pt-28 md:px-14 lg:px-16">

            <h1 className="max-w-4xl text-[52px] font-bold leading-[0.95] tracking-tight text-white md:text-[76px] lg:text-[70px] xl:text-[90px]">
              Get the career
              <br />
              you deserve
            </h1>

            {/* SEARCH BAR */}
            <form
              onSubmit={handleSearch}
              className="mt-8 flex w-full max-w-[650px] items-center rounded-full bg-white p-2 shadow-2xl"
            >
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search jobs"
                className="h-14 flex-1 rounded-full bg-transparent px-6 text-base font-medium text-gray-700 outline-none placeholder:text-gray-400"
              />

              <div className="hidden h-10 w-px bg-gray-200 md:block"></div>

              <div className="relative hidden min-w-[160px] items-center px-5 md:flex">
                <select className="w-full appearance-none bg-transparent text-base font-medium text-gray-500 outline-none">
                  <option>Graduate</option>
                  <option>Healthcare</option>
                  <option>Education</option>
                  <option>Hospitality</option>
                  <option>IT</option>
                </select>
                <ChevronDown size={18} className="absolute right-4 text-gray-500" />
              </div>

              <button
                type="submit"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0658d4] text-white transition-all hover:scale-105 hover:bg-[#0547aa]"
              >
                <Search size={22} strokeWidth={2.6} />
              </button>
            </form>

            {/* TAGS */}
            <div className="mt-7 flex max-w-[620px] flex-wrap gap-3">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => navigate('/services')}
                  className="rounded-full bg-[#06245c] px-5 py-2 text-xs font-bold text-white shadow-md transition-all hover:bg-white hover:text-[#0658d4]"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* YELLOW STRIPED DECORATION */}
          <div className="absolute bottom-[110px] right-[42%] z-40 hidden h-28 w-28 rotate-[-45deg] rounded-full bg-[repeating-linear-gradient(90deg,#dfff00_0px,#dfff00_10px,transparent_10px,transparent_22px)] lg:block"></div>
        </div>

        {/* RIGHT BLANK PANEL */}
        <div className="relative hidden min-h-screen bg-[#efefef] lg:block">

          {/* TOP RIGHT ICON ONLY - no navbar */}
          <div className="absolute right-10 top-8 flex items-center gap-6"></div>

          {/* VERTICAL TEXT */}
          <div className="absolute left-0 top-[64%] -translate-y-1/2">
            <div className="-translate-x-[47%] -rotate-90 text-3xl font-black tracking-[-0.04em] text-black">
              Early talent experts
            </div>
          </div>

          {/* CIRCULAR TEXT STYLE MARK */}
          <div className="absolute bottom-24 right-16 flex h-24 w-24 items-center justify-center rounded-full border border-transparent">
            <div className="relative h-20 w-20 animate-spin-slow rounded-full">
              <span className="absolute left-1/2 top-0 -translate-x-1/2 text-[8px] font-black uppercase tracking-[0.2em] text-black">
                Hiring
              </span>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-[8px] font-black uppercase tracking-[0.2em] text-black">
                Who
              </span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 rotate-180 text-[8px] font-black uppercase tracking-[0.2em] text-black">
                Hiring
              </span>
              <span className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-[8px] font-black uppercase tracking-[0.2em] text-black">
                Who
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM TICKER */}
      <div className="absolute bottom-0 left-0 z-50 flex h-16 w-full items-center overflow-hidden bg-[#dfff00] text-black">
        <div className="ticker-track flex whitespace-nowrap text-base font-medium">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
            <span key={index} className="mx-4 flex items-center gap-4">
              <span className="text-2xl font-black">*</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ticker-track {
          animation: ticker 30s linear infinite;
        }

        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 18s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;