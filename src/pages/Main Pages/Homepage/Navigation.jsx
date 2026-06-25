import React, { useState, useEffect, useRef } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi2";
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
} from "lucide-react";

const GrbHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuData = {
    "Job Search": [
      {
        title: "All Jobs",
        desc: "Browse all active jobs across healthcare, IT, education, hospitality, skilled labour, logistics, finance and GCC workforce sectors.",
        url: "/jobs"
      },
      {
        title: "Graduate Jobs",
        desc: "Explore early-career roles for graduates across professional, technical and service sectors.",
        url: "/graduate-jobs"
      },
      {
        title: "Student Jobs",
        desc: "Find student-friendly jobs, part-time roles, trainee positions and entry-level opportunities.",
        url: "/student-jobs"
      },
      {
        title: "Internships",
        desc: "Discover internship opportunities to gain real workplace exposure and practical employability skills.",
        url: "/internships"
      },
      {
        title: "Apprenticeships",
        desc: "Explore work-based learning pathways combining training, employment exposure and career development.",
        url: "/apprenticeships"
      },
      {
        title: "Experienced Graduate Jobs",
        desc: "Find professional roles for graduates with experience, certifications, internships or specialist skills.",
        url: "/experienced-graduate-jobs"
      }
    ],

    "Career Advice": [
      {
        title: "Article Hub",
        desc: "Read career articles, employer insights, graduate advice, placement guidance, interview tips and recruitment updates.",
        url: "/article-hub"
      },
      {
        title: "Career Advice Hub",
        desc: "Practical guidance for CVs, cover letters, interviews, assessments, applications and career planning.",
        url: "/career-advice-hub"
      },
      {
        title: "Graduate CV Templates",
        desc: "Build a recruiter-friendly graduate CV with clear structure, keywords and evidence.",
        url: "/graduate-cv-templates-guide"
      },
      {
        title: "Graduate Cover Letter",
        desc: "Create a strong cover letter explaining your motivation, skills and employer fit.",
        url: "/graduate-cover-letter"
      },
      {
        title: "Graduate Interview Questions",
        desc: "Prepare answers for common graduate interview questions and competency-based interviews.",
        url: "/graduate-interview-questions"
      },
      {
        title: "Graduate Phone Interviews",
        desc: "Prepare for recruiter screening calls and employer phone interviews.",
        url: "/graduate-phone-interviews"
      },
      {
        title: "Assessment Centres",
        desc: "Understand group tasks, presentations, written exercises and employer evaluation methods.",
        url: "/graduate-assessment-centres"
      },
      {
        title: "Job Applications",
        desc: "Learn how to complete applications with strong answers and accurate documents.",
        url: "/graduate-job-applications"
      },
      {
        title: "When To Apply",
        desc: "Understand application timelines, hiring cycles and document readiness.",
        url: "/when-to-apply-for-graduate-jobs"
      }
    ],

    Recruiters: [
      {
        title: "Featured Employers",
        desc: "Explore leading employers, company profiles, sectors, hiring programmes and career opportunities.",
        url: "/featured-employers"
      },
      {
        title: "Recruiter Resources Hub",
        desc: "Resources for employers and recruiters covering graduate hiring, selection and recruitment campaigns.",
        url: "/recruiter-resources"
      },
      {
        title: "Benefits of Hiring Graduates",
        desc: "Understand how graduate hiring supports workforce growth, innovation and succession planning.",
        url: "/benefits-of-hiring-graduates"
      },
      {
        title: "Psychometric Testing",
        desc: "Use assessments to understand candidate behaviour, aptitude, role fit and potential.",
        url: "/candidate-psychometric-testing"
      },
      {
        title: "Competency Based Recruitment",
        desc: "Design hiring around the competencies required for role success.",
        url: "/competency-based-recruitment"
      },
      {
        title: "Graduate Recruitment Campaign",
        desc: "Plan and execute graduate recruitment campaigns with clear timelines and selection stages.",
        url: "/running-graduate-recruitment-campaign"
      },
      {
        title: "Selection Methods",
        desc: "Compare CV screening, interviews, assessments, testing and reference checks.",
        url: "/selection-methods"
      },
      {
        title: "Recruitment Framework",
        desc: "Build a structured model from requirement intake to candidate joining.",
        url: "/recruitment-framework"
      },
      {
        title: "Recruitment Process",
        desc: "Understand sourcing, screening, shortlisting, interviews, offers and onboarding.",
        url: "/recruitment-process"
      },
      {
        title: "Why Offers Get Rejected",
        desc: "Reduce offer rejection by improving communication, salary clarity and role expectations.",
        url: "/why-job-offers-can-get-rejected"
      },
      {
        title: "Graduate Recruiters Network",
        desc: "Join a network for graduate hiring pipelines, early-career talent pools and partnerships.",
        url: "/graduate-recruiters-network"
      }
    ],

    "About Us": [
      {
        title: "About Us",
        desc: "Learn about Antalya For Recruiting Manpower LLC, our recruitment mission and sector expertise.",
        url: "/about-us"
      },
      {
        title: "Testimonials",
        desc: "Read feedback from candidates, employers and partners who have worked with Antalya Manpower.",
        url: "/testimonials"
      },
      {
        title: "Contact Us",
        desc: "Speak to Antalya Manpower for job applications, employer requirements and partnerships.",
        url: "/contact-us"
      },
      {
        title: "Help & FAQ",
        desc: "Find answers about jobs, applications, documents, recruitment stages and partnerships.",
        url: "/help-faq"
      },
      {
        title: "Policies and Terms",
        desc: "Review privacy, data protection, website usage, complaints and service terms.",
        url: "/policies-and-terms"
      },
      {
        title: "Privacy Policy",
        desc: "Understand how candidate, employer and partner information is collected and used.",
        url: "/privacy-policy"
      },
      {
        title: "Data Protection Policy",
        desc: "Review how recruitment data, CVs and documents are protected.",
        url: "/data-protection-policy"
      },
      {
        title: "GDPR Privacy Notice",
        desc: "Read GDPR-related privacy information for individuals whose data may be processed.",
        url: "/gdpr-privacy-notice"
      },
      {
        title: "Terms and Conditions",
        desc: "Review the terms for using Antalya Manpower website and recruitment services.",
        url: "/terms-and-conditions"
      },
      {
        title: "Complaints Procedure",
        desc: "Learn how to raise complaints and how our team reviews and resolves concerns.",
        url: "/complaints-procedure"
      }
    ]
  };

  const activeItems = openDropdown ? menuData[openDropdown] : [];
  const isAboutDropdown = openDropdown === "About Us";

  const handleMenuClick = (title) => {
    setOpenDropdown((current) => (current === title ? null : title));
  };

  const closeMenus = () => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const getActiveHeading = () => {
    if (openDropdown === "Job Search") return "Find matching jobs";
    if (openDropdown === "Career Advice") return "Build your career confidence";
    if (openDropdown === "Recruiters") return "Hire better talent";
    if (openDropdown === "About Us") return "About Antalya";
    return "Explore Antalya";
  };

  const getActiveDescription = () => {
    if (openDropdown === "Job Search") {
      return "Search jobs, graduate roles, internships, apprenticeships and career opportunities through Antalya’s recruitment platform.";
    }

    if (openDropdown === "Career Advice") {
      return "Access practical career articles, CV guidance, interview tips and recruitment preparation resources.";
    }

    if (openDropdown === "Recruiters") {
      return "Explore featured employers, employer profiles and recruitment resources for better hiring.";
    }

    if (openDropdown === "About Us") {
      return "Learn about Antalya Manpower, contact our team, read testimonials, review policies and get help with common recruitment questions.";
    }

    return "Explore Antalya Manpower recruitment services.";
  };

  const getActiveCta = () => {
    if (openDropdown === "Job Search") {
      return {
        label: "Search jobs",
        url: "/searchpage"
      };
    }

    if (openDropdown === "Career Advice") {
      return {
        label: "Article hub",
        url: "/article-hub"
      };
    }

    if (openDropdown === "Recruiters") {
      return {
        label: "Featured employers",
        url: "/featured-employers"
      };
    }

    if (openDropdown === "About Us") {
      return {
        label: "Contact us",
        url: "/contact-us"
      };
    }

    return {
      label: "Explore now",
      url: "/searchpage"
    };
  };

  const activeCta = getActiveCta();

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed left-0 top-0 z-50 w-full font-['Inter',sans-serif] transition-all duration-500 ${
          isScrolled || openDropdown
            ? "bg-[#0658d4] text-white shadow-lg"
            : "bg-transparent text-black"
        }`}
      >
        <div className="flex h-[86px] w-full items-center justify-between px-7 md:px-10 lg:px-16">
          {/* LOGO */}
          <a href="/" className="flex items-center" onClick={closeMenus}>
            <div className="flex flex-col leading-none">
              <span className="text-[34px] font-black tracking-[-0.08em] text-white drop-shadow-md md:text-[42px]">
                Antalya.
              </span>

              <span className="mt-1 hidden text-[8px] font-bold uppercase tracking-[0.28em] text-white/80 drop-shadow-md md:block">
                Recruiting Manpower LLC
              </span>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 lg:flex">
            {Object.keys(menuData).map((title) => (
              <div key={title} className="flex h-[86px] items-center">
                <button
                  type="button"
                  onClick={() => handleMenuClick(title)}
                  className={`flex items-center gap-1.5 text-[16px] font-semibold transition-all hover:opacity-80 ${
                    isScrolled || openDropdown ? "text-white" : "text-black"
                  }`}
                >
                  {title}

                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${
                      openDropdown === title ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            ))}

            <a
              href="/register"
              onClick={closeMenus}
              className={`flex items-center gap-2 rounded-full px-8 py-4 text-[15px] font-bold transition-all ${
                isScrolled || openDropdown
                  ? "border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0658d4]"
                  : "border-2 border-black bg-transparent text-black hover:bg-black hover:text-white"
              }`}
            >
              Register
              <CheckCircle2 size={17} strokeWidth={2.5} />
            </a>

            <a
              href="/login"
              onClick={closeMenus}
              className={`transition-all hover:opacity-70 ${
                isScrolled || openDropdown ? "text-white" : "text-black"
              }`}
            >
              <HiOutlineUserCircle size={32} strokeWidth={2} />
            </a>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className={`lg:hidden ${
              isScrolled || openDropdown ? "text-white" : "text-black"
            }`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <BiMenu size={36} />
          </button>
        </div>

        {/* DESKTOP MEGA DROPDOWN */}
        <div
          className={`absolute left-0 top-[86px] hidden w-full overflow-hidden bg-white text-[#202533] shadow-2xl transition-all duration-300 lg:block ${
            openDropdown
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-4 opacity-0"
          }`}
        >
          <div className="relative min-h-[430px]">
            <div className="absolute left-0 top-0 h-full w-[32%] bg-[#f4f8ff]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#eef5ff] to-white"></div>

              <div className="absolute bottom-2 left-8 max-w-[520px] text-[68px] font-black leading-[0.9] tracking-[-0.08em] text-[#0658d4]/5 xl:text-[84px]">
                Get the career
                <br />
                you deserve
              </div>
            </div>

            <div className="pointer-events-none absolute right-[10%] top-1/2 hidden h-[210px] w-[210px] -translate-y-1/2 opacity-[0.06] xl:block">
              <div className="h-full w-full rounded-tl-[110px] rounded-bl-[110px] bg-black"></div>
            </div>

            <div
              className={`relative mx-auto grid max-w-[1480px] gap-10 px-10 py-12 xl:px-16 ${
                isAboutDropdown ? "grid-cols-12" : "grid-cols-1"
              }`}
            >
              {/* MENU LINKS */}
              <div
                className={`grid gap-x-16 gap-y-7 ${
                  isAboutDropdown ? "col-span-7 grid-cols-2" : "grid-cols-3"
                }`}
              >
                {activeItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.url}
                    onClick={closeMenus}
                    className="group block"
                  >
                    <h3 className="mb-1 text-[24px] font-semibold tracking-[-0.04em] text-[#333333] transition-all group-hover:text-[#0658d4]">
                      {item.title}
                    </h3>

                    <p className="max-w-[390px] text-[15px] font-medium leading-[1.45] text-[#5f6368]">
                      {item.desc}
                    </p>
                  </a>
                ))}

                {/* CTA BUTTON LEFT BOTTOM FOR NON-ABOUT DROPDOWNS */}
                {!isAboutDropdown && (
                  <div className="col-span-3 mt-6">
                    <a
                      href={activeCta.url}
                      onClick={closeMenus}
                      className="inline-flex items-center gap-3 rounded-full bg-[#0658d4] px-9 py-4 text-[18px] font-bold text-white transition-all hover:bg-[#0547aa]"
                    >
                      {activeCta.label}
                      <Send size={19} />
                    </a>
                  </div>
                )}
              </div>

              {/* ABOUT US RIGHT BLOCK ONLY */}
              {isAboutDropdown && (
                <div className="col-span-5 pl-6">
                  <h2 className="text-[30px] font-semibold tracking-[-0.04em] text-[#333333]">
                    {getActiveHeading()}
                  </h2>

                  <p className="mt-2 max-w-[500px] text-[17px] font-medium leading-[1.5] text-[#5f6368]">
                    {getActiveDescription()}
                  </p>

                  <a
                    href={activeCta.url}
                    onClick={closeMenus}
                    className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#0658d4] px-9 py-4 text-[18px] font-bold text-white transition-all hover:bg-[#0547aa]"
                  >
                    {activeCta.label}
                    <Send size={19} />
                  </a>

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

                  <div className="mt-8 flex items-center gap-5">
                    {[
                      { icon: Instagram, url: "/", label: "Instagram" },
                      { icon: Linkedin, url: "/", label: "LinkedIn" },
                      { icon: Twitter, url: "/", label: "X" },
                      { icon: Youtube, url: "/", label: "YouTube" },
                      { icon: Facebook, url: "/", label: "Facebook" }
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
              )}
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-[80] transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-[390px] overflow-y-auto bg-white p-7 text-[#333333] shadow-2xl transition-transform duration-500 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-10 flex items-center justify-between">
            <a href="/" onClick={closeMenus}>
              <div className="text-[34px] font-black tracking-[-0.08em] text-[#0658d4]">
                Antalya.
              </div>

              <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">
                Recruiting Manpower LLC
              </div>
            </a>

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
                href="/register"
                onClick={closeMenus}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0658d4] px-8 py-4 text-base font-bold text-white"
              >
                Register
                <CheckCircle2 size={18} />
              </a>

              <a
                href="/login"
                onClick={closeMenus}
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