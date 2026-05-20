import React, { useState, useEffect } from 'react';
import { BiWinkSmile, BiMenu, BiX } from 'react-icons/bi'; 
import { HiOutlineUserCircle } from 'react-icons/hi2'; 

const GrbHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['ManPowerServices', 'SectorsWeServed', 'About Us', 'For Employer'];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0658d4] ' : ''
      }`}
    >
      <div className="flex h-[70px] md:h-[80px] w-full items-center justify-between overflow-hidden">
        
        {/* Left Section: Branding */}
        <div className={`relative flex h-full items-center pl-4 md:pl-8 pr-12 md:pr-16 transition-all duration-300 ${
          isScrolled 
            ? 'bg-transparent' 
            : 'bg-[#0658d4] after:absolute after:top-0 after:right-[-40px] after:h-full after:w-[80px] after:origin-top-left after:-skew-x-[25deg] after:bg-[#0658d4] after:content-[""]'
        }`}>
          <div className="flex flex-col leading-tight z-10">
            <span className="text-2xl md:text-3xl font-semibold tracking-wide text-white font-sans uppercase">
              Antalya
            </span>
            <span className="text-[8px] md:text-[10px] font-bold text-[#eb770b] uppercase tracking-tighter whitespace-nowrap">
              Recruiting Manpower LLC
            </span>
          </div>
        </div>

        {/* Middle Section: Texture (Desktop Only) */}
        <div className={`relative flex-grow h-full overflow-hidden transition-opacity duration-300 hidden lg:block ${
          isScrolled ? 'opacity-0' : 'opacity-100'
        }`}>
          {!isScrolled && (
            <img 
              src="https://www.transparenttextures.com/patterns/clean-gray-paper.png" 
              alt="Texture"
              className="absolute inset-0 h-full w-full object-cover opacity-20 grayscale"
            />
          )}
        </div>

        {/* Right Section: Desktop Navigation */}
        <div className={`flex h-full items-center gap-4 md:gap-10 px-4 md:px-8 transition-colors duration-300 ${
          isScrolled ? 'bg-transparent' : 'bg-white'
        }`}>
          <nav className="hidden lg:flex items-center gap-8 font-medium">
            {navLinks.map((item) => (
              <a 
                key={item} 
                href="/" 
                className={`text-[17px] transition-colors whitespace-nowrap ${
                  isScrolled ? 'text-white hover:text-blue-100' : 'text-gray-800 hover:text-[#0658d4]'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-6">
            {/* Join Button - Adjusted padding for mobile */}
            <button className={`flex items-center gap-2 rounded-full border-2 px-4 py-2 md:px-8 md:py-3 text-sm md:text-[17px] font-bold shadow-md transition-all ${
              isScrolled 
                ? 'bg-white text-[#0658d4] border-white hover:bg-blue-50' 
                : 'bg-[#0658d4] text-white border-white hover:bg-[#3d7699]'
            }`}>
              <span className="hidden sm:inline">Apply</span>
              <span className="sm:hidden">Join</span>
             
            </button>

            {/* User Icon */}
            <a href="/" className={`transition-colors ${
              isScrolled ? 'text-white hover:text-blue-100' : 'text-gray-600 hover:text-gray-900'
            }`}>
              <HiOutlineUserCircle className="h-8 w-8 md:h-10 md:w-10" />
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className={`lg:hidden p-1 transition-colors ${isScrolled ? 'text-white' : 'text-gray-800'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <BiX size={32} /> : <BiMenu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Side Drawer */}
      <div className={`fixed inset-0 z-[60] lg:hidden transition-transform duration-300 transform ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Drawer Content */}
        <div className="absolute right-0 top-0 h-full w-[280px] bg-white p-8 shadow-2xl">
          <div className="flex justify-end mb-8">
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800">
              <BiX size={32} />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {navLinks.map((item) => (
              <a 
                key={item} 
                href="/" 
                className="text-xl font-semibold text-gray-800 hover:text-[#0658d4] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <hr className="my-4 border-gray-100" />
            <button className="w-full bg-[#0658d4] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
              Join Antalya <BiWinkSmile size={24} />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default GrbHeader;