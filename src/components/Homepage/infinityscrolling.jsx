import React from 'react';

const AntalyaStatsAndTicker = () => {
  const jobs = [
    "Skilled Construction Laborer - Dubai",
    "Hospitality Supervisor - Abu Dhabi",
    "Maintenance Technician - Qatar",
    "Heavy Equipment Operator - Saudi Arabia",
    "Warehouse Logistics Assistant - Oman",
  ];

  // Removed 'stats' constant to prevent the 'no-unused-vars' linting error

  const marqueeItems = [...jobs, ...jobs];

  return (
    <div className="w-full bg-white">
      {/* 1. SCROLLING TICKER SECTION */}
      <div className="relative flex overflow-hidden bg-[#e6ff00] py-5 border-y border-white/10 select-none">
        <div className="flex animate-ticker whitespace-nowrap items-center">
          {marqueeItems.map((job, index) => (
            <div key={index} className="flex items-center mx-10">
              <span className="text-black font-semibold text-base md:text-lg tracking-wide uppercase">
                {job}
              </span>
              <span className="ml-16 text-xl text-black/20">✱</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 40s linear infinite;
          display: flex;
          width: fit-content;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default AntalyaStatsAndTicker;