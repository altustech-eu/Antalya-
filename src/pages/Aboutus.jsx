import React, { useEffect, useState } from "react";
import Navigation from "../Homepage/Navigation";
import Footer from "./Footer";
import Lenis from "@studio-freight/lenis";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  GraduationCap,
  Handshake,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Users,
  BriefcaseBusiness,
  Globe2,
  HeartHandshake,
  FileCheck2,
  MessageCircle,
  HelpCircle,
  BookOpen,
  Award,
  Target,
  Factory,
  Stethoscope,
  Hotel,
  Code2
} from "lucide-react";

const historyItems = [
  {
    year: "2024",
    title: "Kuwait recruitment focus strengthened",
    text: "Antalya expanded its positioning as a Kuwait-based recruitment and manpower support company for employers and job seekers."
  },
  {
    year: "2025",
    title: "Multi-sector hiring model",
    text: "Healthcare, education, hospitality, IT, cybersecurity, skilled labour, logistics and administration became core hiring sectors."
  },
  {
    year: "2026",
    title: "Digital recruitment platform",
    text: "A structured web platform was developed to support job search, employer services, recruiter resources and candidate registration."
  },
  {
    year: "Next",
    title: "GCC manpower ecosystem",
    text: "The next phase is to strengthen employer pipelines, manpower partnerships, candidate documentation and mobilisation workflows."
  }
];

const groupCards = [
  {
    icon: <BriefcaseBusiness size={34} />,
    title: "Antalya Manpower",
    subtitle: "Recruitment and manpower services",
    text: "Our core division supports employers with sourcing, screening, shortlisting and workforce coordination across Kuwait and GCC sectors.",
    url: "/employer-services",
    cta: "Employer services"
  },
  {
    icon: <GraduationCap size={34} />,
    title: "Candidate Career Support",
    subtitle: "Job seeker guidance",
    text: "We help candidates prepare CVs, understand job expectations, apply for suitable roles and move through recruitment stages.",
    url: "/career-advice-hub",
    cta: "Career advice"
  },
  {
    icon: <Handshake size={34} />,
    title: "Partner Network",
    subtitle: "Recruitment and training partners",
    text: "Antalya collaborates with recruitment partners, manpower suppliers, institutions and training providers to build stronger talent pipelines.",
    url: "/graduate-recruiters-network",
    cta: "Partner with us"
  },
  {
    icon: <Globe2 size={34} />,
    title: "GCC Talent Mobility",
    subtitle: "Regional hiring support",
    text: "We support structured hiring for Kuwait and GCC employers through documentation readiness, screening and mobilisation support.",
    url: "/recruitment-process",
    cta: "View process"
  }
];

const supportBlocks = [
  {
    audience: "Employers",
    icon: <Building2 size={30} />,
    title: "Recruitment Consultancy",
    text: "End-to-end recruitment support for permanent, project-based and high-volume hiring requirements.",
    url: "/employer-services",
    cta: "Learn more"
  },
  {
    audience: "Employers",
    icon: <Users size={30} />,
    title: "Bulk Manpower Supply",
    text: "Structured workforce mobilisation for employers requiring multiple candidates across operational sectors.",
    url: "/recruitment-framework",
    cta: "Learn more"
  },
  {
    audience: "Employers",
    icon: <FileCheck2 size={30} />,
    title: "Candidate Screening",
    text: "CV review, eligibility checks, document readiness and interview coordination support.",
    url: "/selection-methods",
    cta: "Learn more"
  },
  {
    audience: "Job seekers",
    icon: <BookOpen size={30} />,
    title: "Career Advice",
    text: "Practical CV, interview, assessment and job application guidance for candidates.",
    url: "/career-advice-hub",
    cta: "Career advice"
  },
  {
    audience: "Job seekers",
    icon: <Target size={30} />,
    title: "Job Search Matching",
    text: "Search jobs by sector, location, salary and career level through the Antalya job platform.",
    url: "/searchpage",
    cta: "Search jobs"
  },
  {
    audience: "Partners",
    icon: <HeartHandshake size={30} />,
    title: "Recruitment Partnership",
    text: "Collaborate with Antalya through sourcing, institutional, training and manpower partnership models.",
    url: "/graduate-recruiters-network",
    cta: "Join network"
  }
];

const sectors = [
  {
    icon: <Stethoscope size={26} />,
    label: "Healthcare"
  },
  {
    icon: <GraduationCap size={26} />,
    label: "Education"
  },
  {
    icon: <Hotel size={26} />,
    label: "Hospitality"
  },
  {
    icon: <Code2 size={26} />,
    label: "IT & Cybersecurity"
  },
  {
    icon: <Factory size={26} />,
    label: "Skilled Labour"
  },
  {
    icon: <BriefcaseBusiness size={26} />,
    label: "Administration"
  }
];

const aboutLinks = [
  {
    icon: <Building2 size={28} />,
    title: "About us",
    text: "Learn about Antalya, our recruitment mission and how we support employers and candidates.",
    url: "/about-us"
  },
  {
    icon: <MessageCircle size={28} />,
    title: "Testimonials",
    text: "Read feedback from candidates, employers and partners who have worked with Antalya.",
    url: "/testimonials"
  },
  {
    icon: <Mail size={28} />,
    title: "Contact us",
    text: "Get in touch with the team for jobs, employer requirements and partnerships.",
    url: "/contact-us"
  },
  {
    icon: <HelpCircle size={28} />,
    title: "Help & FAQ",
    text: "Find answers to common recruitment, application and documentation questions.",
    url: "/help-faq"
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Policies and terms",
    text: "Review privacy, data protection, website usage and complaints procedures.",
    url: "/policies-and-terms"
  },
  {
    icon: <Handshake size={28} />,
    title: "Recruiter resources",
    text: "Access hiring guidance, selection methods and recruitment process resources.",
    url: "/recruiter-resources"
  }
];

export default function AboutUs() {
  const [activeAudience, setActiveAudience] = useState("Employers");

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
      wheelMultiplier: 1.2
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const filteredSupport = supportBlocks.filter(
    (block) => block.audience === activeAudience
  );

  return (
    <div className="bg-[#f4f4f4] font-['Inter',sans-serif] text-[#202533]">
      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden bg-white pt-28">
        <div className="absolute left-0 top-0 h-full w-[43%] bg-[#0658d4]"></div>

        <div className="relative mx-auto grid min-h-[760px] max-w-[1600px] grid-cols-1 items-center gap-12 px-6 py-16 md:px-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative z-10 text-white">
            <p className="mb-6 text-sm font-black uppercase tracking-[0.28em] text-white/75">
              About us
            </p>

            <h1 className="max-w-[760px] text-[52px] font-black leading-[0.92] tracking-[-0.07em] md:text-[84px] lg:text-[100px]">
              We connect employers with people who are ready to work.
            </h1>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/searchpage"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-black text-[#0658d4] transition hover:bg-[#eef4ff]"
              >
                Search jobs
                <ArrowRight size={18} />
              </a>

              <a
                href="/employer-services"
                className="inline-flex items-center gap-3 rounded-full border-2 border-white px-8 py-4 text-base font-black text-white transition hover:bg-white hover:text-[#0658d4]"
              >
                Hire talent
                <CheckCircle2 size={18} />
              </a>
            </div>
          </div>

          <div className="relative z-10">
            <div className="overflow-hidden rounded-[36px] bg-[#0658d4] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop"
                alt="Antalya recruitment team"
                className="h-[560px] w-full object-cover grayscale mix-blend-multiply"
              />
            </div>

            <div className="absolute -bottom-10 -left-8 hidden max-w-[520px] rounded-[28px] bg-white p-8 shadow-2xl lg:block">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0658d4]">
                Employer and candidate support
              </p>

              <p className="mt-4 text-[25px] font-black leading-[1.15] tracking-[-0.04em] text-black">
                Recruitment support for healthcare, education, hospitality, IT,
                skilled labour and professional services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-[#0658d4]">
              Who we are
            </p>

            <h2 className="text-[48px] font-black leading-[0.96] tracking-[-0.06em] text-black md:text-[72px]">
              Antalya For Recruiting Manpower LLC.
            </h2>
          </div>

          <div className="space-y-7 text-[21px] font-medium leading-[1.55] text-[#4b5563]">
            <p>
              Antalya is a Kuwait-based recruitment and manpower services
              company supporting employers, candidates and workforce partners
              through structured recruitment services.
            </p>

            <p>
              Our model combines employer requirement intake, candidate sourcing,
              screening, interview coordination, documentation readiness and
              mobilisation support for Kuwait and GCC hiring needs.
            </p>

            <p>
              We support both sides of the labour market: employers who need
              reliable talent, and candidates who need clear guidance, suitable
              job matching and professional recruitment support.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#f4f4f4] px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-6 md:grid-cols-4">
          {[
            {
              value: "12+",
              label: "Hiring sectors"
            },
            {
              value: "GCC",
              label: "Regional workforce focus"
            },
            {
              value: "360°",
              label: "Recruitment support"
            },
            {
              value: "24/7",
              label: "Candidate access online"
            }
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-[28px] bg-white p-8 text-center shadow-sm"
            >
              <h3 className="text-[58px] font-black leading-none tracking-[-0.06em] text-black">
                {stat.value}
              </h3>

              <p className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-[#0658d4]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HISTORY TIMELINE */}
      <section className="bg-white px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-16 max-w-[820px]">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#0658d4]">
              Our history
            </p>

            <h2 className="text-[48px] font-black leading-[0.96] tracking-[-0.06em] text-black md:text-[72px]">
              Building a stronger recruitment platform.
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-8 hidden h-[2px] w-full bg-gray-200 lg:block"></div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              {historyItems.map((item) => (
                <article
                  key={item.title}
                  className="relative rounded-[28px] bg-[#f4f4f4] p-8"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#0658d4] text-lg font-black text-white">
                    {item.year}
                  </div>

                  <h3 className="text-[26px] font-black leading-tight tracking-[-0.04em] text-black">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[16px] leading-7 text-[#4b5563]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="overflow-hidden bg-[#0658d4] py-12 text-white">
        <div className="flex animate-marquee gap-6 whitespace-nowrap">
          {[...sectors, ...sectors, ...sectors].map((sector, index) => (
            <span
              key={`${sector.label}-${index}`}
              className="inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-4 text-[22px] font-black tracking-[-0.03em]"
            >
              {sector.icon}
              {sector.label}
            </span>
          ))}
        </div>

        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 34s linear infinite;
          }
        `}</style>
      </section>

      {/* GROUP FAMILY */}
      <section className="bg-[#f4f4f4] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-16 max-w-[920px]">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#0658d4]">
              Our ecosystem
            </p>

            <h2 className="text-[48px] font-black leading-[0.96] tracking-[-0.06em] text-black md:text-[72px]">
              One recruitment platform for employers, candidates and partners.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {groupCards.map((card) => (
              <article
                key={card.title}
                className="group overflow-hidden rounded-[34px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-[0.75fr_1fr]">
                  <div className="flex min-h-[280px] items-center justify-center bg-[#0658d4] text-white">
                    {card.icon}
                  </div>

                  <div className="p-8">
                    <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#0658d4]">
                      {card.subtitle}
                    </p>

                    <h3 className="text-[34px] font-black tracking-[-0.05em] text-black">
                      {card.title}
                    </h3>

                    <p className="mt-4 text-[17px] leading-7 text-[#4b5563]">
                      {card.text}
                    </p>

                    <a
                      href={card.url}
                      className="mt-8 inline-flex items-center gap-2 text-base font-black text-[#0658d4]"
                    >
                      {card.cta}
                      <ArrowRight
                        size={18}
                        className="transition group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT TABS */}
      <section className="bg-white px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#0658d4]">
                What we provide
              </p>

              <h2 className="max-w-[900px] text-[46px] font-black leading-[0.98] tracking-[-0.06em] text-black md:text-[68px]">
                Expert support, resources and opportunities.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Employers", "Job seekers", "Partners"].map((audience) => (
                <button
                  key={audience}
                  onClick={() => setActiveAudience(audience)}
                  className={`rounded-full px-7 py-4 text-sm font-black transition ${
                    activeAudience === audience
                      ? "bg-[#0658d4] text-white"
                      : "bg-[#f4f4f4] text-black hover:bg-gray-200"
                  }`}
                >
                  {audience}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {filteredSupport.map((block) => (
              <article
                key={block.title}
                className="rounded-[30px] bg-[#f4f4f4] p-8"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#0658d4]">
                  {block.icon}
                </div>

                <h3 className="text-[30px] font-black leading-tight tracking-[-0.05em] text-black">
                  {block.title}
                </h3>

                <p className="mt-4 text-[17px] leading-7 text-[#4b5563]">
                  {block.text}
                </p>

                <a
                  href={block.url}
                  className="mt-8 inline-flex items-center gap-2 text-base font-black text-[#0658d4]"
                >
                  {block.cta}
                  <ArrowRight size={18} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS / TEAM STYLE SECTION */}
      <section className="bg-[#001a33] px-6 py-24 text-white md:px-12">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#7ab1ff]">
              Careers with Antalya
            </p>

            <h2 className="text-[48px] font-black leading-[0.96] tracking-[-0.06em] text-white md:text-[72px]">
              Join a recruitment team built around trust and delivery.
            </h2>

            <p className="mt-7 text-[21px] font-medium leading-[1.55] text-white/70">
              Recruitment is a people-first business. We value process,
              communication, discipline, compliance and the ability to support
              both employers and candidates with clarity.
            </p>

            <a
              href="/contact-us"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#0658d4] px-9 py-5 text-lg font-black text-white transition hover:bg-[#0547aa]"
            >
              Contact our team
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="rounded-[34px] bg-white/8 p-8 backdrop-blur-md">
            <div className="rounded-[28px] bg-white p-8 text-[#202533]">
              <Award size={42} className="mb-6 text-[#0658d4]" />

              <p className="text-[28px] font-black leading-[1.25] tracking-[-0.04em] text-black">
                “Strong recruitment depends on accurate requirements, clear
                communication and disciplined follow-up. That is the operating
                standard we are building.”
              </p>

              <p className="mt-8 text-base font-black uppercase tracking-[0.16em] text-[#0658d4]">
                Antalya Recruitment Team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / COMMUNITY */}
      <section className="bg-[#f4f4f4] px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#0658d4]">
              Loved by our community
            </p>

            <h2 className="text-[48px] font-black leading-[0.96] tracking-[-0.06em] text-black md:text-[72px]">
              Trusted by candidates, employers and partners.
            </h2>

            <p className="mt-7 text-[21px] font-medium leading-[1.55] text-[#4b5563]">
              Our goal is to make recruitment clearer, faster and more
              accountable for everyone involved in the hiring journey.
            </p>

            <a
              href="/testimonials"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#0658d4] px-9 py-5 text-lg font-black text-white transition hover:bg-[#0547aa]"
            >
              Read testimonials
              <Star size={20} />
            </a>
          </div>

          <div className="rounded-[34px] bg-white p-9 shadow-sm">
            <div className="mb-6 flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={26}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <p className="text-[26px] font-medium leading-[1.35] tracking-[-0.03em] text-black">
              “Antalya helped us structure our manpower requirement, shortlist
              candidates and coordinate communication professionally.”
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0658d4] text-lg font-black text-white">
                AM
              </div>

              <div>
                <h4 className="text-lg font-black text-black">
                  Employer feedback
                </h4>
                <p className="text-sm font-medium text-gray-500">
                  Kuwait recruitment client
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT LINK GRID */}
      <section className="bg-white px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 max-w-[840px]">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#0658d4]">
              About Antalya
            </p>

            <h2 className="text-[48px] font-black leading-[0.96] tracking-[-0.06em] text-black md:text-[70px]">
              Explore our support sections.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {aboutLinks.map((link) => (
              <a
                key={link.title}
                href={link.url}
                className="group rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#eef4ff] text-[#0658d4]">
                  {link.icon}
                </div>

                <h3 className="text-[30px] font-black tracking-[-0.05em] text-black transition group-hover:text-[#0658d4]">
                  {link.title}
                </h3>

                <p className="mt-4 text-[16px] leading-7 text-[#4b5563]">
                  {link.text}
                </p>

                <div className="mt-8 flex items-center gap-2 text-base font-black text-[#0658d4]">
                  Learn more
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0658d4] px-6 py-20 text-white md:px-12">
        <div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <h2 className="max-w-[900px] text-[44px] font-black leading-[1] tracking-[-0.06em] md:text-[66px]">
            Register your free account now to see your matching jobs.
          </h2>

          <div className="flex flex-wrap gap-4">
            <a
              href="/register"
              className="inline-flex items-center gap-3 rounded-full border-2 border-white px-9 py-5 text-lg font-black text-white transition hover:bg-white hover:text-[#0658d4]"
            >
              Register
              <CheckCircle2 size={20} />
            </a>

            <a
              href="/login"
              className="inline-flex items-center gap-3 rounded-full px-9 py-5 text-lg font-black text-white transition hover:bg-white/10"
            >
              Login
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}