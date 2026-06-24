import React, { useState, useEffect } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';

const GrbHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuData = {
    'About Us': [
      'Our Company',
      'Mission & Values',
      'Our Team',
      'Why Choose Us?'
    ],
    Services: [
      'Healthcare Staffing',
      'IT & Cybersecurity',
      'Education Recruitment',
      'Hospitality Staffing',
      'Skilled Labor Solutions'
    ],
    'For Job Seekers': [
      'Find a Job',
      'CV Writing Tips',
      'Interview Preparation',
      'Career Insights'
    ],
    'For Employers': [
      'Post a Job',
      'Recruitment Process',
      'Industry Specialisms',
      'Employer Resources'
    ],
    'Become Partner': [
      'Recruitment Partner',
      'Manpower Supply Partner',
      'Training Partner',
      'Institution Partner',
      'Employer Partnership',
      'Franchise Opportunity'
    ],
    'Contact Us': [
      'Contact Form',
      'Our Location',
      'Phone: 69039059',
      'Email: info@antalyamanpower.com.kw'
    ]
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 font-['Inter',sans-serif] ${
        isScrolled
          ? 'bg-[#0658d4] text-white shadow-lg'
          : 'bg-transparent text-black'
      }`}
    >
      <div className="flex h-[86px] w-full items-center justify-between px-7 md:px-10 lg:px-16">

        {/* LEFT LOGO */}
        <a href="/" className="flex items-center">
          <div className="flex flex-col leading-none">
            <span className="text-[34px] md:text-[42px] font-black tracking-[-0.08em] text-white drop-shadow-md">
              Antalya.
            </span>

            <span className="mt-1 hidden text-[8px] font-bold uppercase tracking-[0.28em] text-white/80 drop-shadow-md md:block">
              Recruiting Manpower LLC
            </span>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-7 lg:flex">
          {Object.entries(menuData).map(([title, items]) => (
            <div
              key={title}
              className="relative flex h-[86px] items-center"
              onMouseEnter={() => setOpenDropdown(title)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`flex items-center gap-1.5 text-[16px] font-medium transition-all hover:opacity-75 ${
                  isScrolled ? 'text-white' : 'text-black'
                }`}
              >
                {title}

                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${
                    openDropdown === title ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* DROPDOWN */}
              <div
                className={`absolute right-0 top-[86px] rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl transition-all duration-300 ${
                  openDropdown === title
                    ? 'visible translate-y-0 opacity-100'
                    : 'invisible translate-y-3 opacity-0'
                } ${
                  title === 'Services' ||
                  title === 'For Employers' ||
                  title === 'Become Partner'
                    ? 'w-[520px]'
                    : 'w-[310px]'
                }`}
              >
                <div
                  className={`grid gap-2 ${
                    title === 'Services' ||
                    title === 'For Employers' ||
                    title === 'Become Partner'
                      ? 'grid-cols-2'
                      : 'grid-cols-1'
                  }`}
                >
                  {items.map((item) => (
                    <a
                      key={item}
                      href="/"
                      className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-gray-600 transition-all hover:bg-blue-50 hover:text-[#0658d4]"
                    >
                      <span>{item}</span>

                      <ArrowRight
                        size={13}
                        className="ml-auto -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* CTA */}
          <a
            href="/join"
            className={`flex items-center gap-2 rounded-full px-8 py-4 text-[15px] font-semibold transition-all ${
              isScrolled
                ? 'border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0658d4]'
                : 'border-2 border-black bg-transparent text-black hover:bg-black hover:text-white'
            }`}
          >
            Join now
            <CheckCircle2 size={17} strokeWidth={2.5} />
          </a>

          {/* USER ICON */}
          <a
            href="/login"
            className={`transition-all hover:opacity-70 ${
              isScrolled ? 'text-white' : 'text-black'
            }`}
          >
            <HiOutlineUserCircle size={32} strokeWidth={2} />
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className={`lg:hidden ${isScrolled ? 'text-white' : 'text-black'}`}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <BiMenu size={36} />
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-[80] transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-[390px] overflow-y-auto bg-white p-7 text-[#333333] shadow-2xl transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mb-10 flex items-center justify-between">
            <div>
              <div className="text-[34px] font-black tracking-[-0.08em] text-[#0658d4]">
                Antalya.
              </div>

              <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">
                Recruiting Manpower LLC
              </div>
            </div>

            <button onClick={() => setIsMobileMenuOpen(false)}>
              <BiX size={36} />
            </button>
          </div>

          <div className="space-y-8">
            {Object.entries(menuData).map(([title, items]) => (
              <div key={title}>
                <h3 className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-gray-400">
                  {title}
                </h3>

                <div className="flex flex-col gap-2 border-l-2 border-[#0658d4]/20 pl-4">
                  {items.map((item) => (
                    <a
                      key={item}
                      href="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="py-2 text-sm font-semibold text-gray-700 transition-colors hover:text-[#0658d4]"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <div className="space-y-3 border-t border-gray-100 pt-5">
              <a
                href="/join"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0658d4] px-8 py-4 text-base font-bold text-white"
              >
                Join now
                <CheckCircle2 size={18} />
              </a>

              <a
                href="/login"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 px-8 py-4 text-base font-bold text-gray-700"
              >
                <HiOutlineUserCircle size={24} />
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GrbHeader;