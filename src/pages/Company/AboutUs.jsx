import React, { useState } from "react";
import trainer1 from "../../assests/Trainer1.png";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  Send,
  Plus,
  Minus,
  Star,
  Building2,
  MessageCircle,
  Mail,
  HelpCircle,
  ShieldCheck,
 
  BarChart3,
  UserRound
} from "lucide-react";

/* =========================================================
   HISTORY
========================================================= */

const historyItems = [
  {
    date: "2024",
    title: "Antalya recruitment platform strengthened",
    text:
      "Antalya positioned itself as a Kuwait-based recruitment and manpower support company for employers and candidates."
  },
  {
    date: "2025",
    title: "Multi-sector recruitment model",
    text:
      "Healthcare, hospitality, education, IT, cybersecurity, skilled labour, logistics and administration became core focus sectors."
  },
  {
    date: "2026",
    title: "Digital job search ecosystem",
    text:
      "Antalya developed digital pages for job search, employer services, recruiter resources, career advice and candidate registration."
  },
  {
    date: "Next",
    title: "GCC manpower network",
    text:
      "The next phase is to expand employer pipelines, candidate documentation, partner networks and workforce mobilisation support."
  }
];

/* =========================================================
   PRESS / SECTOR STRIP
========================================================= */

const seenInLogos = [
  {
    type: "textLogo",
    label: "AM",
    name: "ANTALYA MANPOWER"
  },
  {
    type: "word",
    name: "Healthcare"
  },
  {
    type: "box",
    name: "Hospitality"
  },
  {
    type: "bbc",
    name: "GCC WORKFORCE"
  },
  {
    type: "word",
    name: "IT Recruitment"
  },
  {
    type: "box",
    name: "Skilled Labour"
  }
];

/* =========================================================
   SUPPORT ACCORDION
========================================================= */

const supportTabs = {
  Employers: [
    {
      title: "Recruitment Consultancy",
      text:
        "End-to-end recruitment support covering employer requirement analysis, candidate sourcing, screening, shortlisting, interviews, offers and joining coordination."
    },
    {
      title: "Recruitment Advertising",
      text:
        "Targeted vacancy promotion across job platforms, candidate communities, social channels and recruitment networks to attract relevant applicants."
    },
    {
      title: "Recruitment Process Outsourcing (RPO)",
      text:
        "Flexible outsourced recruitment support for organisations requiring additional sourcing, screening, coordination, reporting or complete recruitment delivery."
    },
    {
      title: "Recruiter Networking",
      text:
        "Connect with recruitment partners, institutions, sourcing specialists and workforce networks to strengthen your candidate pipeline."
    },
    {
      title: "Graduate and Early-Career Hiring",
      text:
        "Build structured pipelines for graduates, interns, trainees and early-career candidates through targeted attraction and assessment support."
    }
  ],

  "Job Seekers": [
    {
      title: "Job Search",
      text:
        "Search suitable opportunities across healthcare, hospitality, education, IT, skilled labour, logistics, administration and other sectors."
    },
    {
      title: "Career Advice",
      text:
        "Access practical support for CV preparation, cover letters, job applications, interviews, assessment centres and employer communication."
    },
    {
      title: "Profile Registration",
      text:
        "Create your candidate profile, upload your CV and documents, specify career preferences and receive relevant job matching support."
    },
    {
      title: "Interview Preparation",
      text:
        "Prepare for recruiter screening, employer interviews, competency questions and role-specific selection stages."
    },
    {
      title: "Application Tracking",
      text:
        "Track shortlisted roles, recruiter communication, interview progress, document requirements and application outcomes."
    }
  ]
};

/* =========================================================
   TESTIMONIALS
========================================================= */

const testimonials = [
  {
    initials: "MH",
    name: "Maia H.",
    date: "Jun 22, 2026",
    avatarClass: "bg-[#ffb800]",
    text:
      "I had an amazing experience with Antalya. The team was supportive from the beginning to the end of my recruitment process and maintained clear communication throughout."
  },
  {
    initials: "GP",
    name: "Gabriel P.",
    date: "Jun 21, 2026",
    avatarClass: "bg-[#ff3b3b]",
    text:
      "Very helpful and professional. The team supported me throughout the process and made my job search much easier."
  },
  {
    initials: "NF",
    name: "Nifemi F.",
    date: "Jun 18, 2026",
    avatarClass: "bg-[#08b4c7]",
    text:
      "My experience with Antalya has been excellent. The recruitment team provided useful feedback and kept me informed throughout the application process."
  },
  {
    initials: "BL",
    name: "Ben L.",
    date: "Jun 18, 2026",
    avatarClass: "bg-[#ffb800]",
    text:
      "Antalya helped me find roles best suited to my background and gave valuable advice during every step of the application process."
  },
  {
    initials: "AB",
    name: "Aditi B.",
    date: "May 21, 2026",
    avatarClass: "bg-[#08b4c7]",
    text:
      "The team was extremely helpful. The job search process can feel overwhelming, but I received guidance and support at every stage."
  },
  {
    initials: "ES",
    name: "Ella S.",
    date: "May 19, 2026",
    avatarClass: "bg-[#08b4c7]",
    text:
      "I could not recommend Antalya enough. The team was informative throughout the process, from applying and interviewing to receiving the final outcome."
  }
];

/* =========================================================
   ABOUT LINKS
========================================================= */

const aboutLinks = [
  {
    icon: Building2,
    title: "About us",
    text:
      "Learn about Antalya, our history and how we support employers and candidates.",
    url: "/about-us"
  },
  {
    icon: HelpCircle,
    title: "Help & FAQ",
    text:
      "Get help and find answers to common recruitment and application questions.",
    url: "/help-faq"
  },
  {
    icon: Mail,
    title: "Contact us",
    text:
      "Get in touch with our team. We would be pleased to hear from you.",
    url: "/contact-us"
  },
  {
    icon: MessageCircle,
    title: "Testimonials",
    text:
      "Read feedback from our job seeker, employer and recruitment partner community.",
    url: "/testimonials"
  },
  {
    icon: UserRound,
    title: "Join our team",
    text:
      "Learn what it is like to work with Antalya and explore current opportunities.",
    url: "/contact-us"
  },
  {
    icon: ShieldCheck,
    title: "Policies and terms",
    text:
      "Review our privacy, data protection, website usage and service policies.",
    url: "/policies-and-terms"
  }
];

export default function Aboutus() {
  const [activeTab, setActiveTab] = useState("Employers");
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="overflow-hidden bg-[#f4f4f4] font-['Inter',sans-serif] text-[#202533]">
      {/* =====================================================
          SECTION 1: HERO
      ====================================================== */}

      <section className="relative min-h-[760px] overflow-hidden bg-white pt-[86px]">
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-[36%_64%]">
          <div className="relative bg-[#0658d4]">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
              alt="Antalya recruitment team"
              className="h-full w-full object-cover grayscale mix-blend-multiply"
            />

            <div className="absolute inset-0 bg-[#0658d4]/78" />
          </div>

          <div className="relative hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop"
              alt="Recruitment meeting"
              className="h-full w-full object-cover grayscale"
            />
          </div>
        </div>

        <div className="relative z-10 flex min-h-[830px] max-w-[1500px] items-end px-6 pb-14 md:px-12 lg:px-10">
          <div className="max-w-[610px] text-white">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.28em] text-white/85">
              The Antalya Team
            </p>

            <h1 className="text-[68px] font-black leading-[0.88] tracking-[-0.075em] md:text-[112px]">
              About us
            </h1>

            <p className="mt-8 max-w-[560px] text-[19px] font-bold leading-[1.45] text-white">
              We are the go-to source for employers who want to hire reliable
              manpower and professional talent.
            </p>

            <a
              href="/contact-us"
              className="mt-9 inline-flex items-center gap-3 rounded-full border-2 border-white px-9 py-4 text-base font-black text-white transition hover:bg-white hover:text-[#0658d4]"
            >
              Join the team
              <Send size={19} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden h-24 w-24 rounded-tl-[90px] bg-white lg:block" />
      </section>

      {/* =====================================================
          SECTION 2: INTRO
      ====================================================== */}

      <section className="relative bg-white px-6 py-28 md:px-12">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="text-[42px] font-black leading-[1.05] tracking-[-0.06em] text-[#333333] md:text-[68px]">
            Established in Kuwait,{" "}
            <span className="text-[#9c9c9c]">
              we are recognised as a
            </span>{" "}
            trusted, independent,{" "}
            <span className="text-[#9c9c9c]">
              manpower recruitment consultancy
            </span>
          </h2>
        </div>

        <div className="absolute bottom-6 right-[5%] hidden text-[220px] font-black leading-none text-[#f1f1f1] lg:block">
          ”
        </div>
      </section>

    

    {/* =====================================================
    SECTION 3: HEY THERE
====================================================== */}

<section className="bg-[#f4f4f4] px-6 pt-28 md:px-12">
  <div className="mx-auto grid min-h-[680px] max-w-[1180px] grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1fr]">
    {/* IMAGE */}
    <div className="flex items-center justify-center">
      <img
        src={trainer1}
        alt="Antalya leadership and recruitment team"
        className="aspect-square w-full max-w-[620px] object-cover"
      />
    </div>

    {/* CONTENT */}
    <div className="flex flex-col justify-center">
      <h2 className="text-[56px] font-black leading-none tracking-[-0.06em] text-black md:text-[78px]">
        Hey there 👋
      </h2>

      <div className="mt-10 flex items-start gap-4">
        <span className="text-[90px] font-black leading-none text-gray-200">
          “
        </span>

        <div>
          <p className="text-[26px] font-medium italic leading-[1.35] tracking-[-0.03em] text-[#4a4a4a]">
            As a Kuwait-based recruitment team, we had an idea to make manpower
            hiring clearer, faster and more reliable for employers and
            candidates.
          </p>

          <p className="mt-7 text-[16px] font-semibold text-[#555555]">
            — Antalya Recruitment Team
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* AUTO-SCROLLING SECTOR STRIP */}
  <div className="mx-auto mt-20 overflow-hidden bg-[#eeeeee] py-12">
    <div className="mx-auto flex max-w-[1500px] items-center gap-10 px-6 md:px-12">
      <div className="shrink-0 text-[15px] font-medium uppercase tracking-[0.32em] text-[#111827]">
        Working across:
      </div>

      <div className="relative min-w-0 flex-1 overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#eeeeee] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#eeeeee] to-transparent" />

        <div className="flex w-max animate-seen-in-marquee items-center gap-20">
          {[...seenInLogos, ...seenInLogos, ...seenInLogos].map(
            (logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex h-[74px] shrink-0 items-center justify-center"
              >
                {logo.type === "textLogo" && (
                  <div className="flex items-center gap-4">
                    <div className="flex h-[58px] w-[66px] items-center justify-center bg-black text-[25px] font-black text-white">
                      {logo.label}
                    </div>

                    <div className="text-[23px] font-black uppercase leading-[0.9] tracking-[-0.04em] text-black">
                      Antalya
                      <br />
                      Manpower
                    </div>
                  </div>
                )}

                {logo.type === "word" && (
                  <div className="text-[36px] font-black tracking-[-0.06em] text-black">
                    {logo.name}
                  </div>
                )}

                {logo.type === "box" && (
                  <div className="bg-black px-8 py-4 text-center text-[24px] font-black leading-[0.95] text-white">
                    {logo.name}
                  </div>
                )}

                {logo.type === "bbc" && (
                  <div className="flex items-center gap-4">
                    <div className="grid grid-cols-3 gap-1">
                      {["G", "C", "C"].map((letter, letterIndex) => (
                        <span
                          key={`${letter}-${letterIndex}`}
                          className="flex h-8 w-8 items-center justify-center bg-black text-[17px] font-black text-white"
                        >
                          {letter}
                        </span>
                      ))}

                      <span className="col-span-3 text-center text-[19px] font-black leading-none text-black">
                        WORKFORCE
                      </span>
                    </div>

                    <div className="flex h-[66px] w-[66px] items-center justify-center rounded-full bg-black text-[30px] font-black text-white">
                      360
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* =====================================================
          SECTION 4: GO-TO SOURCE
      ====================================================== */}

      <section className="bg-white px-6 py-28 md:px-12">
        <div className="mx-auto max-w-[1180px]">
          <h2 className="max-w-[1100px] text-[52px] font-black leading-[1.03] tracking-[-0.065em] text-black md:text-[78px]">
            We are the go-to source for employers who want to hire reliable
            manpower and professional talent
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-12 border-t-2 border-black pt-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[25px] font-black leading-[1.35] tracking-[-0.035em] text-black">
                Our service helps job seekers connect with suitable
                opportunities while employers access screened candidates.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/searchpage"
                  className="inline-flex items-center gap-3 rounded-full bg-[#0658d4] px-9 py-5 text-lg font-black text-white transition hover:bg-[#0547aa]"
                >
                  Search jobs
                  <Search size={20} />
                </a>

                <a
                  href="/employer-services"
                  className="inline-flex items-center gap-3 rounded-full border-2 border-gray-300 px-9 py-5 text-lg font-black text-[#555555] transition hover:border-black hover:bg-black hover:text-white"
                >
                  Hire talent
                </a>
              </div>
            </div>

            <div className="space-y-7 text-[19px] font-medium leading-[1.65] text-[#555555]">
              <p>
                Antalya supports employers with requirement intake, candidate
                sourcing, shortlisting, interview coordination and
                documentation readiness.
              </p>

              <p>
                We work across healthcare, hospitality, education, IT,
                cybersecurity, skilled labour, facility management, logistics
                and administration sectors.
              </p>

              <p>
                Our platform provides candidates with job search, registration,
                CV support and career advice, while employers receive structured
                recruitment resources and manpower services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 5: HISTORY
      ====================================================== */}

      <section className="bg-[#1f1c26] px-6 py-28 text-white md:px-12">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="mb-16 text-[58px] font-black tracking-[-0.06em] md:text-[86px]">
            Our History
          </h2>

          <div className="divide-y divide-white/25 border-t border-white/25">
            {historyItems.map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-1 gap-8 py-12 md:grid-cols-[180px_1fr_1.4fr]"
              >
                <div className="text-[20px] font-black text-white/85">
                  {item.date}
                </div>

                <h3 className="text-[31px] font-black leading-tight tracking-[-0.05em] text-white">
                  {item.title}
                </h3>

                <p className="text-[17px] font-semibold leading-[1.55] text-white/75">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 6: DARK MARQUEE
      ====================================================== */}

      <section className="overflow-hidden bg-[#1f1c26] pb-8 text-white">
        <div className="animate-about-marquee w-max whitespace-nowrap text-[70px] font-black leading-none tracking-[-0.07em] md:text-[108px]">
          Kuwait’s trusted manpower recruitment partner • Kuwait’s trusted
          manpower recruitment partner • Kuwait’s trusted manpower recruitment
          partner •
        </div>
      </section>

      {/* =====================================================
          SECTION 7: GROUP FAMILY
      ====================================================== */}

      <section className="bg-[#f4f4f4] px-6 py-28 md:px-12">
        <div className="mx-auto max-w-[1180px] text-center">
          <h2 className="text-[54px] font-black leading-none tracking-[-0.065em] text-black md:text-[82px]">
            The Antalya Group Family
          </h2>

          <p className="mx-auto mt-6 max-w-[780px] text-[23px] font-medium leading-[1.3] text-[#303643]">
            Discover how our group of platforms can support your job search or
            help you hire the right candidates.
          </p>

          <div className="mt-20 grid grid-cols-1 gap-5 lg:grid-cols-[1.25fr_1.6fr]">
            {/* LARGE LEFT CARD */}

            <a
              href="/employer-services"
              className="group relative min-h-[620px] overflow-hidden rounded-[18px] rounded-tl-[92px] bg-[#0658d4]"
            >
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
                alt="Antalya Recruiting Manpower"
                className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-[#0867b7]/78 mix-blend-multiply" />
              <div className="absolute inset-0 bg-black/10" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[78px] font-black leading-none tracking-[-0.12em] text-white md:text-[110px]">
                  Antalya.
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 text-left">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-white/70">
                  Core Recruitment Company
                </p>

                <h3 className="mt-2 text-[28px] font-black tracking-[-0.05em] text-white">
                  Recruiting Manpower LLC
                </h3>
              </div>
            </a>

            {/* RIGHT GRID */}

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <a
                href="/career-advice-hub"
                className="group relative min-h-[300px] overflow-hidden rounded-[18px] bg-[#9b35ff]"
              >
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=900&auto=format&fit=crop"
                  alt="Career academy"
                  className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-br from-[#00b894]/70 via-[#7d2cff]/80 to-[#ff4ecb]/75" />

                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    <h3 className="text-[36px] font-black uppercase leading-none tracking-[-0.08em] text-white">
                      Career
                    </h3>

                    <p className="mt-2 text-[13px] font-black uppercase tracking-[0.45em] text-white/80">
                      Academy
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="/graduate-recruiters-network"
                className="group relative min-h-[300px] overflow-hidden rounded-[18px] bg-[#0658d4]"
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900&auto=format&fit=crop"
                  alt="Candidate mentor"
                  className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-[#0f5f7d]/78 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/15" />

                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <h3 className="text-center text-[38px] font-black lowercase leading-[0.88] tracking-[-0.08em] text-white">
                    candidate
                    <br />
                    mentor
                  </h3>
                </div>
              </a>

              <a
                href="/recruiter-resources"
                className="group relative min-h-[300px] overflow-hidden rounded-[18px] bg-[#111827]"
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop"
                  alt="Recruitment network"
                  className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-[#0b2637]/72 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <h3 className="text-[64px] font-light leading-none tracking-[-0.09em] text-white">
                    ARN
                  </h3>
                </div>

                <div className="absolute bottom-0 left-0 h-[6px] w-full">
                  <div className="grid h-full grid-cols-5">
                    <span className="bg-orange-400" />
                    <span className="bg-yellow-400" />
                    <span className="bg-pink-500" />
                    <span className="bg-blue-700" />
                    <span className="bg-green-500" />
                  </div>
                </div>
              </a>

              <a
                href="/employer-services"
                className="group relative min-h-[300px] overflow-hidden rounded-[18px] rounded-br-[92px] bg-[#111827]"
              >
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop"
                  alt="Employer intelligence"
                  className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/58" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#053b32]/80" />

                <div className="absolute inset-0 opacity-40">
                  <div className="absolute left-[15%] top-[20%] h-px w-[70%] rotate-[28deg] bg-emerald-400/60" />
                  <div className="absolute left-[18%] top-[70%] h-px w-[64%] -rotate-[24deg] bg-emerald-400/50" />
                  <div className="absolute left-[22%] top-[38%] h-2 w-2 rounded-full bg-emerald-400" />
                  <div className="absolute right-[20%] top-[28%] h-2 w-2 rounded-full bg-emerald-400" />
                  <div className="absolute left-[34%] bottom-[20%] h-2 w-2 rounded-full bg-emerald-400" />
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
                  <div className="mb-4 h-12 w-14 bg-white [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />

                  <h3 className="text-center text-[38px] font-light lowercase leading-none tracking-[-0.07em]">
                    talent intelligence
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 8: SUPPORT ACCORDION
      ====================================================== */}

      <section className="bg-white px-6 py-24 md:px-12 lg:py-32">
        <div className="mx-auto max-w-[1180px]">
          <h2 className="max-w-[950px] text-[42px] font-black leading-[0.98] tracking-[-0.055em] text-black sm:text-[52px] md:text-[64px] lg:text-[76px]">
            We provide expert support,
            <br />
            resources, and opportunities to the
            <br />
            recruitment market
          </h2>

          <div className="mt-16 flex flex-wrap gap-4 md:mt-20">
            {[
              {
                name: "Employers",
                icon: BarChart3
              },
              {
                name: "Job Seekers",
                icon: UserRound
              }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.name;

              return (
                <button
                  key={tab.name}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.name);
                    setOpenIndex(null);
                  }}
                  className={`flex h-[118px] w-[190px] flex-col items-center justify-center rounded-[12px] transition-all duration-300 md:h-[140px] md:w-[220px] ${
                    isActive
                      ? "bg-[#0658d4] text-white shadow-lg"
                      : "bg-[#f1f1f1] text-[#444444] hover:bg-[#e7e7e7]"
                  }`}
                >
                  <Icon size={29} strokeWidth={2} />

                  <span className="mt-3 text-[16px] font-semibold md:text-[18px]">
                    {tab.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-10 border-t border-[#c9c9c9] md:mt-12">
            {supportTabs[activeTab].map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.title} className="border-b border-[#c9c9c9]">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="group flex w-full items-center justify-between gap-8 py-6 text-left md:py-7"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[20px] font-medium tracking-[-0.025em] text-[#282828] transition group-hover:text-[#0658d4] md:text-[24px]">
                      {item.title}
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center text-black">
                      {isOpen ? (
                        <Minus size={20} strokeWidth={2.4} />
                      ) : (
                        <Plus size={20} strokeWidth={2.4} />
                      )}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="max-w-[800px] pb-7 pr-10">
                        <p className="text-[16px] font-medium leading-[1.7] text-[#666666] md:text-[18px]">
                          {item.text}
                        </p>

                        <a
                          href={
                            activeTab === "Employers"
                              ? "/employer-services"
                              : "/career-advice-hub"
                          }
                          className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#0658d4]"
                        >
                          Learn more
                          <ArrowRight size={17} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 9: JOIN OUR TEAM
      ====================================================== */}

      <section className="overflow-hidden bg-[#f4f4f4]">
        <div className="grid min-h-[720px] grid-cols-1 lg:grid-cols-[57%_43%]">
          <div className="relative min-h-[580px] overflow-hidden bg-[#0658d4] lg:min-h-[720px]">
            <div className="absolute inset-0 grid grid-cols-2">
              <div className="relative overflow-hidden bg-[#0658d4]">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                  alt="Antalya team discussion"
                  className="h-full w-full object-cover grayscale mix-blend-multiply"
                />

                <div className="absolute inset-0 bg-[#0658d4]/72" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0658d4]/30 to-transparent" />
              </div>

              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop"
                  alt="Antalya team meeting"
                  className="h-full w-full object-cover grayscale"
                />

                <div className="absolute inset-0 bg-black/8" />
              </div>
            </div>

            <div className="absolute bottom-10 left-[56%] z-20 origin-bottom-left -rotate-90 whitespace-nowrap text-[16px] font-black text-white">
              Careers with Antalya
            </div>

            <div className="absolute bottom-0 right-[5.5%] z-20 h-[190px] w-[165px] bg-white [clip-path:polygon(0_0,100%_0,100%_70%,75%_100%,45%_100%,45%_70%,0_70%)] md:h-[215px] md:w-[185px]" />
          </div>

          <div className="flex items-center bg-[#f4f4f4] px-7 py-20 md:px-14 lg:px-16 xl:px-20">
            <div className="max-w-[650px]">
              <p className="mb-5 text-[13px] font-black uppercase tracking-[0.28em] text-[#0658d4]">
                The Antalya Team
              </p>

              <h2 className="text-[48px] font-black leading-[0.95] tracking-[-0.06em] text-black md:text-[68px] lg:text-[76px]">
                Join our team!
              </h2>

              <div className="mt-9 flex items-start gap-3">
                <span className="-mt-4 text-[95px] font-black leading-none text-[#d6d6d6]">
                  “
                </span>

                <div>
                  <blockquote className="text-[22px] font-medium italic leading-[1.38] tracking-[-0.025em] text-[#404040] md:text-[27px]">
                    Recruitment gives people the opportunity to build meaningful
                    careers while helping employers find the talent they need.
                    It rewards communication, responsibility, teamwork and a
                    strong commitment to delivery.
                  </blockquote>

                  <p className="mt-5 text-[14px] font-semibold text-[#555555]">
                    — Antalya Recruitment Team
                  </p>
                </div>
              </div>

              <p className="mt-9 text-[16px] font-medium leading-[1.7] text-[#555555] md:text-[18px]">
                You spend a large part of your life with the people you work
                with, so culture matters. We are building a collaborative
                recruitment team focused on ethical hiring, clear
                communication, structured processes and successful outcomes for
                candidates and employers.
              </p>

              <a
                href="/contact-us"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#0658d4] px-9 py-4 text-[16px] font-black text-white transition-all duration-300 hover:bg-[#0547aa]"
              >
                Learn more
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 10: REVIEWS
      ====================================================== */}

      <section className="bg-white px-6 py-24 md:px-12 lg:py-28">
        <div className="mx-auto max-w-[1260px]">
            <div className="text-center">
            <h2 className="text-[50px] font-black leading-none tracking-[-0.055em] text-black md:text-[68px]">
              Loved by our community
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] text-[20px] font-medium leading-[1.45] text-[#30313b] md:text-[26px]">
             Hear from the people who have experienced 
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[20px] text-[#59596a] md:text-[24px] mt-8">
            <span>Overall rating</span>

            <span className="font-black text-[#4f4f61]">4.9</span>

            <Star
              size={27}
              className="fill-[#ffad00] text-[#ffad00]"
              strokeWidth={1.5}
            />

            <span>based on</span>

            <span className="font-black text-[#4f4f61]">1,265</span>

            <span>reviews</span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((review) => (
              <article
                key={review.name}
                className="relative min-h-[235px] rounded-[16px] border border-[#dedede] bg-white px-7 py-7 text-left transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute right-5 top-4 text-[29px] font-black text-[#4285f4]">
                  G
                </div>

                <div className="flex items-start gap-4 pr-10">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-[23px] font-medium text-white ${review.avatarClass}`}
                  >
                    {review.initials}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[18px] font-black text-[#2c2c33]">
                      {review.name}
                    </h3>

                    <div className="mt-1 flex items-center gap-[2px]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={18}
                          className="fill-[#ffa800] text-[#ffa800]"
                          strokeWidth={1}
                        />
                      ))}
                    </div>

                    <p className="mt-1 text-[13px] font-medium text-[#a2a2a8]">
                      {review.date}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-[15px] font-medium leading-[1.55] text-[#5f6073]">
                  {review.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <a
              href="/testimonials"
              className="inline-flex min-w-[180px] items-center justify-center gap-3 rounded-full bg-[#0658d4] px-8 py-4 text-[17px] font-bold text-white transition hover:bg-[#0547aa]"
            >
              Read more
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 11: ABOUT US LINKS
      ====================================================== */}

      <section className="bg-[#f4f4f4] px-6 py-24 md:px-12 lg:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="text-center">
            <h2 className="text-[50px] font-black leading-none tracking-[-0.055em] text-black md:text-[68px]">
              About us
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] text-[20px] font-medium leading-[1.45] text-[#30313b] md:text-[26px]">
              Learn more about Antalya across the following sections:
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-x-16 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
            {aboutLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.title}
                  href={link.url}
                  className="group relative block min-h-[145px] pr-14"
                >
                  <div className="mb-5 text-[#0658d4]">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <div className="absolute right-0 top-0 text-[#0658d4] transition-transform duration-300 group-hover:translate-x-2">
                    <ArrowRight size={40} strokeWidth={2} />
                  </div>

                  <h3 className="text-[22px] font-medium tracking-[-0.025em] text-[#292934] md:text-[24px]">
                    {link.title}
                  </h3>

                  <p className="mt-5 max-w-[330px] text-[17px] font-medium leading-[1.55] text-[#30313b]">
                    {link.text}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          ANIMATION STYLES
      ====================================================== */}

      <style>{`
        @keyframes seen-in-marquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-seen-in-marquee {
          animation: seen-in-marquee 28s linear infinite;
        }

        .animate-seen-in-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes about-marquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-about-marquee {
          animation: about-marquee 28s linear infinite;
        }

        .animate-about-marquee:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-seen-in-marquee,
          .animate-about-marquee {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}