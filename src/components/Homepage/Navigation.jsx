import React, { useState, useEffect, useRef } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Send,
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
  Twitter,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const GrbHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuData = {
    'About Us': [
      {
        title: 'Our Company',
        desc: 'Learn about Antalya Manpower, our story and recruitment mission.',
        url: '/about'
      },
      {
        title: 'Mission & Values',
        desc: 'Understand our values, ethics and manpower delivery standards.',
        url: '/mission-values'
      },
      {
        title: 'Our Team',
        desc: 'Meet the consultants and recruitment professionals behind Antalya.',
        url: '/team'
      },
      {
        title: 'Why Choose Us?',
        desc: 'See how we support employers, candidates and manpower partners.',
        url: '/why-choose-us'
      }
    ],
    Services: [
      {
        title: 'Healthcare Staffing',
        desc: 'Recruitment for nurses, technicians, physiotherapists and medical staff.',
        url: '/healthcare'
      },
      {
        title: 'IT & Cybersecurity',
        desc: 'Technology, software, cloud, infrastructure and security professionals.',
        url: '/it-cybersecurity'
      },
      {
        title: 'Education Recruitment',
        desc: 'Teachers, trainers, school administrators and education support staff.',
        url: '/education'
      },
      {
        title: 'Hospitality Staffing',
        desc: 'Hotel, restaurant, front office, F&B and guest service recruitment.',
        url: '/hospitality'
      },
      {
        title: 'Skilled Labor Solutions',
        desc: 'Technicians, facility staff, maintenance, logistics and site workforce.',
        url: '/skilled-labor'
      },
      {
        title: 'Bulk Manpower Supply',
        desc: 'Structured workforce mobilisation for large-scale employer requirements.',
        url: '/bulk-manpower'
      }
    ],
    'For Job Seekers': [
      {
        title: 'Find a Job',
        desc: 'Search active opportunities across Kuwait and GCC industries.',
        url: '/jobs'
      },
      {
        title: 'CV Writing Tips',
        desc: 'Improve your CV with recruiter-friendly structure and presentation.',
        url: '/cv-tips'
      },
      {
        title: 'Interview Preparation',
        desc: 'Prepare for employer interviews, screening calls and technical rounds.',
        url: '/interview-preparation'
      },
      {
        title: 'Career Insights',
        desc: 'Explore salary, benefits, work culture and industry expectations.',
        url: '/career-insights'
      }
    ],
    'For Employers': [
      {
        title: 'Post a Job',
        desc: 'Share your manpower requirement and start sourcing qualified candidates.',
        url: '/post-job'
      },
      {
        title: 'Recruitment Process',
        desc: 'Understand our sourcing, screening, shortlisting and mobilisation workflow.',
        url: '/recruitment-process'
      },
      {
        title: 'Industry Specialisms',
        desc: 'Explore our recruitment coverage across key business sectors.',
        url: '/industry-specialisms'
      },
      {
        title: 'Employer Resources',
        desc: 'Access hiring guidance, workforce planning and recruitment support.',
        url: '/employer-resources'
      }
    ],
    'Become Partner': [
      {
        title: 'Recruitment Partner',
        desc: 'Partner with Antalya to support candidate sourcing and placements.',
        url: '/recruitment-partner'
      },
      {
        title: 'Manpower Supply Partner',
        desc: 'Collaborate for bulk hiring, project staffing and workforce mobilisation.',
        url: '/manpower-supply-partner'
      },
      {
        title: 'Training Partner',
        desc: 'Support candidate upskilling, language training and readiness programs.',
        url: '/training-partner'
      },
      {
        title: 'Institution Partner',
        desc: 'Work with us through colleges, institutes and professional networks.',
        url: '/institution-partner'
      },
      {
        title: 'Employer Partnership',
        desc: 'Build long-term hiring pipelines for sector-specific workforce needs.',
        url: '/employer-partnership'
      },
      {
        title: 'Franchise Opportunity',
        desc: 'Explore regional office, sourcing centre and business partnership models.',
        url: '/franchise'
      }
    ],
    'Contact Us': [
      {
        title: 'Contact Form',
        desc: 'Send us your enquiry and our recruitment team will respond.',
        url: '/contact'
      },
      {
        title: 'Our Location',
        desc: 'Visit Antalya Manpower at Ali Tower, Kuwait City.',
        url: '/location'
      },
      {
        title: 'Phone: 69039059',
        desc: 'Call us for employer enquiries, job applications and partnerships.',
        url: 'tel:+96569039059'
      },
      {
        title: 'Email: info@antalyamanpower.com.kw',
        desc: 'Send official enquiries, CVs and business requests by email.',
        url: 'mailto:info@antalyamanpower.com.kw'
      }
    ]
  };

  const activeItems = openDropdown ? menuData[openDropdown] : [];

  const handleMenuClick = (title) => {
    setOpenDropdown((current) => (current === title ? null : title));
  };

  const closeMenus = () => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed left-0 top-0 z-50 w-full font-['Inter',sans-serif] transition-all duration-500 ${
          isScrolled || openDropdown
            ? 'bg-[#0658d4] text-white shadow-lg'
            : 'bg-transparent text-black'
        }`}
      >
        <div className="flex h-[86px] w-full items-center justify-between px-7 md:px-10 lg:px-16">
          {/* LEFT LOGO */}
          <a href="/" className="flex items-center">
            <div className="flex flex-col leading-none">
              <span className="text-[34px] font-black tracking-[-0.08em] text-white drop-shadow-md md:text-[42px]">
                Antalya.
              </span>

              <span className="mt-1 hidden text-[8px] font-bold uppercase tracking-[0.28em] text-white/80 drop-shadow-md md:block">
                Recruiting Manpower LLC
              </span>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-7 lg:flex">
            {Object.keys(menuData).map((title) => (
              <div key={title} className="flex h-[86px] items-center">
                <button
                  type="button"
                  onClick={() => handleMenuClick(title)}
                  className={`flex items-center gap-1.5 text-[16px] font-semibold transition-all hover:opacity-80 ${
                    isScrolled || openDropdown ? 'text-white' : 'text-black'
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
              </div>
            ))}

            {/* CTA */}
            <a
              href="/join"
              className={`flex items-center gap-2 rounded-full px-8 py-4 text-[15px] font-bold transition-all ${
                isScrolled || openDropdown
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
                isScrolled || openDropdown ? 'text-white' : 'text-black'
              }`}
            >
              <HiOutlineUserCircle size={32} strokeWidth={2} />
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className={`lg:hidden ${
              isScrolled || openDropdown ? 'text-white' : 'text-black'
            }`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <BiMenu size={36} />
          </button>
        </div>

        {/* DESKTOP MEGA DROPDOWN - CLICK BASED */}
        <div
          className={`absolute left-0 top-[86px] hidden w-full overflow-hidden bg-white text-[#202533] shadow-2xl transition-all duration-300 lg:block ${
            openDropdown
              ? 'visible translate-y-0 opacity-100'
              : 'invisible -translate-y-4 opacity-0'
          }`}
        >
          <div className="relative min-h-[390px]">
            {/* LEFT FADED BLOCK */}
            <div className="absolute left-0 top-0 h-full w-[32%] bg-[#f4f8ff]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#eef5ff] to-white"></div>

              <div className="absolute bottom-2 left-8 max-w-[520px] text-[70px] font-black leading-[0.9] tracking-[-0.08em] text-[#0658d4]/5 xl:text-[86px]">
                Get the career
                <br />
                you deserve
              </div>
            </div>

            {/* RIGHT DECORATIVE SHAPE */}
            <div className="pointer-events-none absolute right-[10%] top-1/2 hidden h-[210px] w-[210px] -translate-y-1/2 opacity-[0.06] xl:block">
              <div className="h-full w-full rounded-tl-[110px] rounded-bl-[110px] bg-black"></div>
            </div>

            <div className="relative mx-auto grid max-w-[1440px] grid-cols-12 gap-10 px-10 py-12 xl:px-16">
              {/* COLUMN 1: MENU LINKS */}
              <div className="col-span-7 grid grid-cols-2 gap-x-16 gap-y-7">
                {activeItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.url}
                    onClick={closeMenus}
                    className="group block"
                  >
                    <h3 className="mb-1 text-[25px] font-semibold tracking-[-0.04em] text-[#333333] transition-all group-hover:text-[#0658d4]">
                      {item.title}
                    </h3>

                    <p className="max-w-[390px] text-[16px] font-medium leading-[1.45] text-[#5f6368]">
                      {item.desc}
                    </p>
                  </a>
                ))}
              </div>

              {/* COLUMN 2: ACTIVE SECTION CTA */}
              <div className="col-span-5 pl-6">
                <h2 className="text-[28px] font-semibold tracking-[-0.04em] text-[#333333]">
                  {openDropdown === 'About Us' && 'About Antalya'}
                  {openDropdown === 'Services' && 'Recruitment services'}
                  {openDropdown === 'For Job Seekers' && 'Find your next role'}
                  {openDropdown === 'For Employers' && 'Hire talent'}
                  {openDropdown === 'Become Partner' && 'Partner with us'}
                  {openDropdown === 'Contact Us' && 'Contact Antalya'}
                </h2>

                <p className="mt-2 max-w-[480px] text-[17px] font-medium leading-[1.5] text-[#5f6368]">
                  {openDropdown === 'About Us' &&
                    'Learn how Antalya Manpower supports employers, job seekers and workforce partners across Kuwait and GCC markets.'}

                  {openDropdown === 'Services' &&
                    'Access sector-specific staffing services for healthcare, IT, education, hospitality and skilled workforce requirements.'}

                  {openDropdown === 'For Job Seekers' &&
                    'Explore suitable jobs, prepare your CV, improve interview readiness and move confidently through the recruitment process.'}

                  {openDropdown === 'For Employers' &&
                    'Share your hiring requirement and build a structured manpower pipeline with Antalya’s recruitment support.'}

                  {openDropdown === 'Become Partner' &&
                    'Collaborate with Antalya through recruitment partnerships, training support, employer tie-ups and franchise opportunities.'}

                  {openDropdown === 'Contact Us' &&
                    'Connect with our Kuwait team for job applications, employer requirements, manpower projects and business partnerships.'}
                </p>

                <a
                  href={
                    openDropdown === 'For Employers'
                      ? '/employers'
                      : openDropdown === 'Become Partner'
                      ? '/become-partner'
                      : openDropdown === 'Contact Us'
                      ? '/contact'
                      : '/jobs'
                  }
                  onClick={closeMenus}
                  className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#0658d4] px-9 py-4 text-[18px] font-bold text-white transition-all hover:bg-[#0547aa]"
                >
                  {openDropdown === 'For Employers'
                    ? 'Get in touch'
                    : openDropdown === 'Become Partner'
                    ? 'Become a partner'
                    : openDropdown === 'Contact Us'
                    ? 'Contact us'
                    : 'Explore now'}
                  <Send size={19} />
                </a>

                {/* CONTACT QUICK INFO */}
                <div className="mt-9 space-y-3 text-[15px] font-semibold text-[#5f6368]">
                  <div className="flex items-center gap-3">
                    <Phone size={17} className="text-[#0658d4]" />
                    <span>+965 69039059</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail size={17} className="text-[#0658d4]" />
                    <span>info@antalyamanpower.com.kw</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin size={17} className="text-[#0658d4]" />
                    <span>Ali Tower, Kuwait City</span>
                  </div>
                </div>

                {/* SOCIAL ICONS */}
                <div className="mt-8 flex items-center gap-5">
                  {[
                    { icon: Instagram, url: '/', label: 'Instagram' },
                    { icon: Linkedin, url: '/', label: 'LinkedIn' },
                    { icon: Twitter, url: '/', label: 'X' },
                    { icon: Youtube, url: '/', label: 'YouTube' },
                    { icon: Facebook, url: '/', label: 'Facebook' }
                  ].map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        aria-label={social.label}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0658d4] text-white transition-all hover:-translate-y-1 hover:bg-[#0547aa]"
                      >
                        <Icon size={21} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

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

                <div className="flex flex-col gap-3 border-l-2 border-[#0658d4]/20 pl-4">
                  {items.map((item) => (
                    <a
                      key={item.title}
                      href={item.url}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group py-2"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm font-bold text-gray-800 transition-colors group-hover:text-[#0658d4]">
                          {item.title}
                        </span>

                        <ArrowRight size={15} className="text-[#0658d4]" />
                      </div>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        {item.desc}
                      </p>
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
    </>
  );
};

export default GrbHeader;