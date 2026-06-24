import React, { useState, useEffect } from 'react';
import { BiMenu, BiX} from 'react-icons/bi';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { Briefcase, Users, BookOpen, Shield, Coffee, Code, GraduationCap, Heart, ArrowRight } from 'lucide-react';

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
    "About Us": {
      icon: <Users size={16} />,
      items: [
        "Our Company",
        "Mission & Values",
        "Our Team",
        "Why Choose Us?"
      ]
    },
    "Services": {
      icon: <Briefcase size={16} />,
      items: [
        { label: "Healthcare Staffing", icon: <Heart size={14} /> },
        { label: "IT & Cybersecurity", icon: <Shield size={14} /> },
        { label: "Education Recruitment", icon: <GraduationCap size={14} /> },
        { label: "Hospitality Staffing", icon: <Coffee size={14} /> },
        { label: "Skilled Labor Solutions", icon: <Code size={14} /> }
      ]
    },
    "For Job Seekers": {
      icon: <Users size={16} />,
      items: [
        "Find a Job",
        "CV Writing Tips",
        "Interview Preparation",
        "Career Insights"
      ]
    },
    "For Employers": {
      icon: <Briefcase size={16} />,
      items: [
        "Post a Job",
        "Recruitment Process",
        "Industry Specialisms",
        "Employer Resources"
      ]
    },
    "Insights & Blog": {
      icon: <BookOpen size={16} />,
      items: [
        "Industry News",
        "Market Trends",
        "Career Guides",
        "Company Updates"
      ]
    },
    "Contact Us": {
      icon: <Users size={16} />,
      items: [
        "Contact Form",
        "Our Location",
        "Phone: 69039059",
        "Email: info@antalyamanpower.com.kw"
      ]
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-['Inter',sans-serif] ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="flex h-[72px] md:h-[84px] w-full items-center justify-between overflow-visible max-w-[1600px] mx-auto px-4 md:px-8">

        {/* Left Section: Branding */}
        <div className="flex h-full items-center">
          <div className="flex flex-col leading-tight">
            <span className="text-2xl md:text-3xl font-extrabold tracking-tighter text-[#000000] uppercase">
              Antalya
            </span>
            <span className="text-[8px] md:text-[10px] font-bold text-[#312d26] uppercase tracking-[0.25em] whitespace-nowrap">
              Recruiting Manpower LLC
            </span>
          </div>
        </div>

        {/* Right Section: Navigation */}
        <div className="flex h-full items-center gap-2 md:gap-4">
          <nav className="hidden lg:flex items-center h-full gap-1 font-medium">
            {Object.entries(menuData).map(([title, { icon, items }]) => (
              <div
                key={title}
                className="relative h-full flex items-center group"
                onMouseEnter={() => setOpenDropdown(title)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition-all text-sm font-semibold ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#0658d4] hover:bg-gray-50' 
                    : 'text-black hover:bg-white/10'
                }`}>
                  <span className="opacity-70">{icon}</span>
                  {title}
                  <BiChevDown size={16} className={`transition-transform duration-300 ${openDropdown === title ? 'rotate-180' : ''}`} />
                </button>

                {/* MEGA DROPDOWN */}
                <div className={`absolute top-[84px] left-0 bg-white shadow-2xl rounded-2xl p-6 transition-all duration-300 border border-gray-100 origin-top
                  ${openDropdown === title ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
                  ${title === "Services" || title === "For Employers" ? 'w-[560px]' : 'w-[320px]'}
                `}>
                  <div className={`grid gap-3 ${
                    title === "Services" || title === "For Employers"
                      ? 'grid-cols-2'
                      : 'grid-cols-1'
                  }`}>
                    {items.map((item) => (
                      <a
                        key={typeof item === 'string' ? item : item.label}
                        href="/"
                        className="group/item flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-600 hover:text-[#0658d4] hover:bg-blue-50/50 transition-all"
                      >
                        {typeof item === 'object' && item.icon && (
                          <span className="text-[#0658d4] opacity-60 group-hover/item:opacity-100 transition-opacity">
                            {item.icon}
                          </span>
                        )}
                        <span className="font-medium">
                          {typeof item === 'string' ? item : item.label}
                        </span>
                        <ArrowRight size={12} className="ml-auto opacity-0 group-hover/item:opacity-100 transition-all -translate-x-2 group-hover/item:translate-x-0" />
                      </a>
                    ))}
                  </div>
                  
                  {/* Dropdown Footer */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <a href="/" className="text-xs text-[#0658d4] font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      View All {title} <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className={`rounded-full px-6 py-2.5 text-sm font-bold shadow-lg transition-all duration-300 flex items-center gap-2 ${
              isScrolled 
                ? 'bg-[#0658d4] text-white hover:bg-[#0547a8] shadow-blue-100' 
                : 'bg-white text-[#0658d4] hover:bg-gray-50 shadow-white/20'
            }`}>
              <span>Apply Now</span>
              <ArrowRight size={16} className="opacity-70" />
            </button>

            <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              isScrolled 
                ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' 
                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
            }`}>
              <HiOutlineUserCircle size={22} />
            </div>

            <button
              className={`lg:hidden p-2 rounded-xl transition-all ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <BiMenu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div className={`fixed inset-0 z-[70] lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        <div className={`absolute right-0 top-0 h-full w-[85%] max-w-[380px] bg-white p-6 overflow-y-auto transition-all duration-500 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex justify-between items-center mb-8">
            <div>
              <span className="text-xl font-extrabold text-[#0658d4]">Menu</span>
              <span className="block text-[10px] text-gray-400 font-medium tracking-wider">Navigation</span>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-all"
            >
              <BiX size={32} className="text-gray-600" />
            </button>
          </div>

          <div className="space-y-8">
            {Object.entries(menuData).map(([title, { icon, items }]) => (
              <div key={title}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#0658d4]">{icon}</span>
                  <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.15em]">
                    {title}
                  </h3>
                </div>

                <div className="flex flex-col gap-2 pl-4 border-l-2 border-[#0658d4]/20">
                  {items.map((item) => (
                    <a
                      key={typeof item === 'string' ? item : item.label}
                      href="/"
                      className="flex items-center gap-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#0658d4] transition-colors group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {typeof item === 'object' && item.icon && (
                        <span className="text-gray-400 group-hover:text-[#0658d4] transition-colors">
                          {item.icon}
                        </span>
                      )}
                      <span>{typeof item === 'string' ? item : item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-4 border-t border-gray-100 space-y-3">
              <button className="w-full rounded-full bg-[#0658d4] text-white px-6 py-3.5 text-sm font-bold shadow-lg hover:bg-[#0547a8] transition-all flex items-center justify-center gap-2">
                Apply Now <ArrowRight size={16} />
              </button>
              <button className="w-full rounded-full border-2 border-gray-200 text-gray-700 px-6 py-3 text-sm font-bold hover:bg-gray-50 transition-all">
                Employer Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Custom ChevronDown component to avoid conflict with BiChevronDown
const BiChevDown = ({ size, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 16} 
    height={size || 16} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default GrbHeader;