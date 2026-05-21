import React, { useState, useEffect } from 'react';
import { BiWinkSmile, BiMenu, BiX, BiChevronDown } from 'react-icons/bi'; 
import { HiOutlineUserCircle } from 'react-icons/hi2'; 

const GrbHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuData = {
    "About Us": [
      "Company Overview", "Antalya Manpower Kuwait Division", 
      "India Manpower License & Compliance", "AltusCareer UAE / Gulf Portal Integration",
      "Global Presence", "Leadership & Advisory Board", "Why EuroWorkForce"
    ],
    "Employer Solutions": [
      "Hire Migrant Workforce", "Bulk Recruitment", "Project-Based Hiring", 
      "Contract Staffing", "Managed Workforce Supply", "Recruitment Process Outsourcing",
      "Seasonal Workforce Hiring", "Workforce Replacement Support", "Employer Account Management"
    ],
    "Industries Served": [
      "Construction", "Oil & Gas", "Manufacturing", "Warehousing & Logistics",
      "Hospitality", "Retail", "Agriculture", "Facility Management",
      "Healthcare Support", "Transportation & Drivers", "Food Processing", "Infrastructure Projects"
    ]
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0658d4] shadow-lg' : ''}`}>
      <div className="flex h-[70px] md:h-[80px] w-full items-center justify-between overflow-visible">
        
        {/* Left Section: Branding */}
        <div className={`relative flex h-full items-center pl-4 md:pl-8 pr-12 md:pr-16 transition-all duration-300 ${
          isScrolled ? 'bg-transparent' : 'bg-[#0658d4] after:absolute after:top-0 after:right-[-40px] after:h-full after:w-[80px] after:origin-top-left after:-skew-x-[25deg] after:bg-[#0658d4] after:content-[""]'
        }`}>
          <div className="flex flex-col leading-tight z-10">
            <span className="text-2xl md:text-3xl font-black tracking-tighter text-white uppercase">Antalya</span>
            <span className="text-[8px] md:text-[10px] font-bold text-[#eb770b] uppercase tracking-widest whitespace-nowrap">Recruiting Manpower LLC</span>
          </div>
        </div>

        {/* Right Section: Navigation */}
        <div className={`flex h-full items-center gap-4 px-4 md:px-8 transition-colors duration-300 ${isScrolled ? 'bg-transparent' : 'bg-white'}`}>
          <nav className="hidden lg:flex items-center h-full gap-2 font-medium">
            {Object.entries(menuData).map(([title, items]) => (
              <div 
                key={title}
                className="relative h-full flex items-center group"
                onMouseEnter={() => setOpenDropdown(title)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className={`flex items-center gap-1 px-4 py-2 rounded-full transition-all text-[15px] font-bold ${
                  isScrolled ? 'text-white hover:bg-white/10' : 'text-gray-800 hover:bg-gray-100'
                }`}>
                  {title} <BiChevronDown className={`transition-transform ${openDropdown === title ? 'rotate-180' : ''}`} />
                </button>

                {/* MEGA DROPDOWN BOX */}
                <div className={`absolute top-[80px] left-0 bg-white shadow-2xl rounded-2xl p-6 transition-all duration-300 border border-gray-100 origin-top
                  ${openDropdown === title ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
                  ${title === "About Us" ? 'w-[300px]' : 'w-[600px]'}
                `}>
                  <div className={`grid gap-4 ${title === "About Us" ? 'grid-cols-1' : 'grid-cols-2'}`}>
                    {items.map((item) => (
                      <a key={item} href="/" className="text-sm text-gray-600 hover:text-[#0658d4] font-semibold transition-colors flex items-center group/item">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0658d4] mr-2 opacity-0 group-hover/item:opacity-100 transition-opacity"></span>
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <a href="/" className={`px-4 text-[15px] font-bold ${isScrolled ? 'text-white' : 'text-gray-800'}`}>ManPowerServices</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className={`rounded-full border-2 px-6 py-2.5 text-sm font-black shadow-md transition-all ${
              isScrolled ? 'bg-white text-[#0658d4] border-white' : 'bg-[#0658d4] text-white border-[#0658d4]'
            }`}>
              Apply Now
            </button>
            <HiOutlineUserCircle className={`h-9 w-9 ${isScrolled ? 'text-white' : 'text-gray-400'}`} />
            <button className={`lg:hidden ${isScrolled ? 'text-white' : 'text-gray-800'}`} onClick={() => setIsMobileMenuOpen(true)}>
              <BiMenu size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div className={`fixed inset-0 z-[70] lg:hidden transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className="absolute right-0 top-0 h-full w-[85%] max-w-[350px] bg-white p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-black text-[#0658d4]">MENU</span>
            <BiX size={35} onClick={() => setIsMobileMenuOpen(false)} />
          </div>
          <div className="space-y-6">
            {Object.entries(menuData).map(([title, items]) => (
              <div key={title}>
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">{title}</h3>
                <div className="flex flex-col gap-3 pl-3 border-l-2 border-gray-100">
                  {items.map(item => <a key={item} href="/" className="text-sm font-bold text-gray-700">{item}</a>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default GrbHeader;