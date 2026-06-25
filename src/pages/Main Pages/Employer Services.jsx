import React, { useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  Search,
  Plus,
  Minus,
  Send,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CalendarDays,
  Tag
} from "lucide-react";

const services = [
  {
    title: "Recruitment Consultancy",
    text: "Use our traditional search and selection recruitment service to source talent on a no-hire, no-fee basis.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",
    url: "/recruitment-framework"
  },
  {
    title: "Recruitment Process Outsourcing",
    text: "Tap into a structured recruitment process support model designed for sourcing, screening, shortlisting and hiring delivery.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop",
    url: "/recruitment-process"
  },
  {
    title: "Recruitment Advertising",
    text: "Leverage job advertising, candidate campaigns and digital reach to attract the right people faster.",
    image:
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1600&auto=format&fit=crop",
    url: "/recruiter-resources"
  },
  {
    title: "Diversity, Equality and Inclusion",
    text: "Build fair, transparent and inclusive hiring processes that widen access to qualified candidates.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    url: "/selection-methods"
  }
];

const serviceFaq = [
  {
    title: "Recruitment Consultancy",
    text:
      "Our recruitment consultancy service helps employers define role requirements, source qualified candidates, screen CVs, coordinate interviews and support final selection. This model is suitable when you need targeted hiring support for professional, technical or specialist roles."
  },
  {
    title: "Recruitment Process Outsourcing (RPO)",
    text:
      "Our RPO support can cover selected stages or the complete recruitment lifecycle, including sourcing, shortlisting, interview scheduling, candidate communication, reporting and joining coordination."
  },
  {
    title: "Recruitment Advertising",
    text:
      "Recruitment advertising helps employers promote vacancies to the right candidate audience through job posts, campaign pages, social channels, candidate databases and targeted digital reach."
  },
  {
    title: "Diversity, Equality and Inclusion",
    text:
      "We help employers create a structured and fair hiring process by improving job communication, candidate access, screening consistency and transparent selection practices."
  },
  {
    title: "Not Sure Yet?",
    text:
      "If you are unsure which service fits your requirement, Antalya can review your hiring need and recommend the right model based on role type, headcount, urgency, candidate availability and mobilisation timeline."
  }
];

const resources = [
  {
    category: "Graduate Recruitment",
    title: "Effective Graduate Onboarding",
    text:
      "A strong onboarding process improves retention, productivity and long-term workforce performance.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
    url: "/benefits-of-hiring-graduates"
  },
  {
    category: "Candidate Attraction",
    title: "Employer Branding",
    text:
      "Employer branding shapes how candidates perceive your company and your recruitment opportunities.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop",
    url: "/recruiter-resources"
  },
  {
    category: "Student Recruitment",
    title: "Gaining Value from Student Placements",
    text:
      "Create meaningful placement structures, clear expectations and practical project responsibilities.",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop",
    url: "/selection-methods"
  }
];

const contactMethods = [
  {
    icon: MessageCircle,
    title: "Open our live chat",
    href: "#employer-enquiry"
  },
  {
    icon: CalendarDays,
    title: "Book in a Discovery Call",
    href: "#employer-enquiry"
  },
  {
    icon: Phone,
    title: "Call us: +965 69039059",
    href: "tel:+96569039059"
  },
  {
    icon: Mail,
    title: "Email us: info@antalyamanpower.com.kw",
    href: "mailto:info@antalyamanpower.com.kw"
  }
];

const seenInLogos = [
  "ANTALYA",
  "Healthcare",
  "Hospitality",
  "Logistics",
  "Facility",
  "BBC RADIO 1",
  "GCC Workforce",
  "Manpower",
  "Recruitment",
  "Education",
  "Engineering",
  "Finance"
];

export default function EmployerServices() {
  const [openIndex, setOpenIndex] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    requirement: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Employer enquiry submitted successfully");
  };

  return (
    <main className="min-h-screen bg-[#f4f4f4] font-['Inter',sans-serif] text-[#202533]">
      {/* =====================================================
          SECTION 1: HERO
      ====================================================== */}

      <section className="relative min-h-[920px] overflow-hidden bg-black text-white">
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1800&auto=format&fit=crop"
          alt="Employer recruitment services"
          className="absolute inset-0 h-full w-full object-cover grayscale"
        />

        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-y-0 left-0 w-[38%] bg-[#0658d4]/92 mix-blend-multiply"></div>
        <div className="absolute inset-y-0 left-0 w-[38%] bg-[#0658d4]/78"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20"></div>

        <div className="relative z-10 flex min-h-[760px] items-end px-6 pb-28 md:px-12 lg:px-16">
          <div className="max-w-[1320px]">
            <p className="mb-7 text-[15px] font-black uppercase tracking-[0.28em] text-white/90">
              Employer Services
            </p>

            <h1 className="max-w-[1350px] text-[58px] font-black leading-[0.95] tracking-[-0.07em] text-white md:text-[92px] lg:text-[118px]">
              Early Talent
              <br />
              Recruitment Services
            </h1>

            <p className="mt-8 max-w-[600px] text-[19px] font-bold leading-[1.55] text-white/95">
              Explore consultancy, outsourcing, and advertising solutions built
              to help you find exceptional candidates and workforce talent.
            </p>

            <a
              href="#employer-enquiry"
              className="mt-8 inline-flex items-center gap-3 rounded-full border-2 border-white px-8 py-4 text-[17px] font-black text-white transition hover:bg-white hover:text-[#0658d4]"
            >
              Get in touch
              <Send size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 2: TRUST STATEMENT
      ====================================================== */}

      <section className="relative overflow-hidden bg-white px-6 py-28 md:px-12">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="max-w-[1080px] text-[48px] font-black leading-[1.03] tracking-[-0.06em] text-[#303030] md:text-[72px]">
            We are <span className="text-[#9d9d9d]">trusted</span> by leading
            employers for supplying first-class{" "}
            <span className="text-[#9d9d9d]">workforce talent</span>
          </h2>
        </div>

        <div className="absolute bottom-0 right-12 hidden text-[260px] font-black leading-none text-[#f0f0f0] lg:block">
          ”
        </div>
      </section>

      {/* =====================================================
          SECTION 2B: AUTO-SCROLLING AS SEEN IN STRIP
      ====================================================== */}

      <section className="overflow-hidden bg-[#eeeeee] py-14">
        <div className="relative mx-auto flex max-w-[1600px] items-center gap-10 px-6 md:px-12">
          <div className="shrink-0 text-[14px] font-medium uppercase tracking-[0.32em] text-[#111827]">
            As seen in:
          </div>

          <div className="relative min-w-0 flex-1 overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#eeeeee] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#eeeeee] to-transparent" />

            <div className="flex w-max animate-logo-marquee items-center gap-24">
              {[...seenInLogos, ...seenInLogos, ...seenInLogos].map(
                (logo, index) => (
                  <div
                    key={`${logo}-${index}`}
                    className="flex h-[80px] shrink-0 items-center justify-center"
                  >
                    {logo === "ANTALYA" ? (
                      <div className="flex items-center gap-4">
                        <div className="flex h-[58px] w-[58px] items-center justify-center bg-black text-[20px] font-black text-white">
                          A
                        </div>

                        <div className="text-[30px] font-black leading-none tracking-[-0.06em] text-black">
                          Antalya
                        </div>
                      </div>
                    ) : logo === "BBC RADIO 1" ? (
                      <div className="flex items-center gap-4">
                        <div className="grid grid-cols-3 gap-1">
                          {["B", "B", "C"].map((letter, letterIndex) => (
                            <span
                              key={`${letter}-${letterIndex}`}
                              className="flex h-8 w-8 items-center justify-center bg-black text-[17px] font-black text-white"
                            >
                              {letter}
                            </span>
                          ))}

                          <span className="col-span-3 text-center text-[20px] font-black leading-none text-black">
                            RADIO
                          </span>
                        </div>

                        <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-black text-[38px] font-black text-white">
                          1
                        </div>
                      </div>
                    ) : logo === "GCC Workforce" ? (
                      <div className="flex items-center gap-3">
                        <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-black text-[18px] font-black text-white">
                          360
                        </div>

                        <div className="text-[26px] font-black uppercase leading-none tracking-[-0.04em] text-black">
                          GCC
                          <br />
                          Workforce
                        </div>
                      </div>
                    ) : (
                      <div className="text-[34px] font-black leading-none tracking-[-0.06em] text-black">
                        {logo}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes logo-marquee {
            0% {
              transform: translateX(0);
            }

            100% {
              transform: translateX(-50%);
            }
          }

          .animate-logo-marquee {
            animation: logo-marquee 32s linear infinite;
          }

          .animate-logo-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* =====================================================
          SECTION 3: INTRO
      ====================================================== */}

      <section className="bg-[#f4f4f4] px-6 py-28 md:px-12">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-[31px] font-medium leading-[1.18] tracking-[-0.04em] text-black md:text-[36px]">
              Antalya For Recruiting Manpower LLC helps employers build reliable
              hiring pipelines and workforce supply models.
            </h2>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#employer-enquiry"
                className="inline-flex items-center gap-3 rounded-full bg-[#0658d4] px-8 py-4 text-[17px] font-black text-white transition hover:bg-[#0547aa]"
              >
                Get in touch
                <Send size={18} />
              </a>

              <a
                href="#employer-enquiry"
                className="inline-flex items-center gap-3 rounded-full border-2 border-[#c9c9c9] px-8 py-4 text-[17px] font-medium text-[#444444] transition hover:border-[#0658d4] hover:text-[#0658d4]"
              >
                Open live chat
              </a>
            </div>
          </div>

          <div className="space-y-6 text-[19px] font-medium leading-[1.62] text-[#4b4b4b]">
            <p>
              We specialise in connecting employers with suitable candidates for
              healthcare, hospitality, education, IT, engineering, logistics,
              facility management and skilled manpower requirements.
            </p>

            <p>
              Whether you need strategic consultancy, full-cycle recruitment
              support, bulk manpower sourcing, or high-visibility vacancy
              advertising, our services are designed to support your hiring
              goals with speed, clarity and structure.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 4: OUR SERVICES IMAGE CARDS
      ====================================================== */}

      <section className="bg-[#f4f4f4] px-6 py-28 md:px-12">
        <div className="mx-auto grid max-w-[1540px] grid-cols-1 gap-16 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-5 text-[15px] font-black uppercase tracking-[0.28em] text-[#0658d4]">
              How we help
            </p>

            <h2 className="text-[60px] font-black leading-[0.95] tracking-[-0.07em] text-black md:text-[82px]">
              Our Services
            </h2>

            <p className="mt-8 max-w-[560px] text-[19px] font-medium leading-[1.55] text-[#444444]">
              Every hiring challenge is different — that’s why we offer a range
              of ways to support you, overcome challenges, and exceed your
              hiring targets.
            </p>

            <p className="mt-5 max-w-[560px] text-[19px] font-medium leading-[1.55] text-[#444444]">
              Whether you need targeted exposure or end-to-end delivery, our
              flexible services are designed to fit into your recruitment
              process exactly where you need them.
            </p>

            <a
              href="#which-service"
              className="mt-10 inline-flex items-center gap-3 rounded-full border-2 border-[#c7c7c7] px-8 py-4 text-[17px] font-medium text-[#4a4a4a] transition hover:border-[#0658d4] hover:text-[#0658d4]"
            >
              Learn more
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="space-y-16">
            {services.map((service) => (
              <a
                key={service.title}
                href={service.url}
                className="group relative block h-[390px] overflow-hidden rounded-[28px] bg-black text-white shadow-sm md:h-[430px]"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/74 via-black/35 to-black/20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0658d4]/35 via-transparent to-transparent"></div>

                <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10">
                  <h3 className="max-w-[760px] text-[44px] font-black leading-[1.02] tracking-[-0.055em] text-white md:text-[60px]">
                    {service.title}
                  </h3>

                  <p className="mt-5 max-w-[720px] text-[16px] font-black leading-[1.45] text-white">
                    {service.text}
                  </p>
                </div>

                <div className="absolute bottom-10 right-10 flex h-16 w-16 items-center justify-center rounded-full border-[7px] border-white text-white">
                  <Search size={34} strokeWidth={2.3} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 5: WHICH SERVICE ACCORDION
      ====================================================== */}

      <section
        id="which-service"
        className="bg-[#f4f4f4] px-6 py-28 md:px-12"
      >
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-[52px] font-black leading-none tracking-[-0.06em] text-black md:text-[78px]">
            Which service is right for me?
          </h2>

          <p className="mt-8 max-w-[1180px] text-[19px] font-medium leading-[1.6] text-[#4b4b4b]">
            Our recruitment services are designed for employers looking to hire
            exceptional candidates for permanent, contract, graduate, technical,
            skilled and bulk manpower roles. Select the model that best fits
            your hiring stage, urgency and internal HR capacity.
          </p>

          <div className="mt-14 border-t border-[#c9c9c9]">
            {serviceFaq.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.title} className="border-b border-[#c9c9c9]">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-8 py-8 text-left"
                  >
                    <span className="text-[28px] font-medium tracking-[-0.035em] text-[#3d3d3d] md:text-[34px]">
                      {item.title}
                    </span>

                    <span className="text-[#333333]">
                      {isOpen ? (
                        <Minus size={26} strokeWidth={2.4} />
                      ) : (
                        <Plus size={26} strokeWidth={2.4} />
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
                      <p className="max-w-[980px] pb-8 text-[18px] font-medium leading-[1.65] text-[#555555]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 6: RECRUITER RESOURCES
      ====================================================== */}

      <section className="bg-[#f4f4f4] px-6 py-28 md:px-12">
        <div className="mx-auto max-w-[1560px]">
          <div className="mb-20 text-center">
            <h2 className="text-[54px] font-black leading-none tracking-[-0.06em] text-black md:text-[82px]">
              Recruiter Resources
            </h2>

            <p className="mx-auto mt-5 max-w-[860px] text-[25px] font-medium leading-[1.25] tracking-[-0.03em] text-[#454545]">
              Access expert hiring insights, recruitment strategies, and market
              intelligence to help you hire smarter, faster, and more
              effectively.
            </p>
          </div>

          <div className="relative">
            <button
              type="button"
              className="absolute -left-9 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-[#cfcfcf] lg:flex"
            >
              <ChevronRight size={34} className="rotate-180" />
            </button>

            <button
              type="button"
              className="absolute -right-9 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-[#cfcfcf] lg:flex"
            >
              <ChevronRight size={34} />
            </button>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {resources.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  className="group flex min-h-[520px] flex-col overflow-hidden rounded-[14px] border border-[#dedede] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="h-[250px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <span className="inline-flex w-max items-center gap-2 rounded-full bg-[#eeeeee] px-4 py-2 text-xs font-black text-[#30313b]">
                      <Tag size={14} />
                      {item.category}
                    </span>

                    <h3 className="mt-7 text-[27px] font-black leading-tight tracking-[-0.04em] text-black">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-[16px] font-medium leading-[1.6] text-[#454545]">
                      {item.text}... learn more
                    </p>

                    <div className="mt-auto flex justify-end pt-8 text-[#53606d]">
                      <ArrowRight
                        size={25}
                        strokeWidth={1.7}
                        className="transition group-hover:translate-x-1 group-hover:text-[#0658d4]"
                      />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 7: CONTACT FORM
      ====================================================== */}

      <section id="employer-enquiry" className="bg-white px-6 py-28 md:px-12">
        <div className="mx-auto grid max-w-[1420px] grid-cols-1 gap-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-[58px] font-black leading-none tracking-[-0.06em] text-black md:text-[82px]">
              Let’s talk!
            </h2>

            <h3 className="mt-8 text-[34px] font-black tracking-[-0.04em] text-[#555555]">
              We would love to hear from you.
            </h3>

            <p className="mt-6 max-w-[660px] text-[18px] font-medium leading-[1.55] text-[#202533]">
              If you’re an employer looking to learn more about our services or
              recruitment support, we would love to have a chat. We’re here
              Sunday to Thursday from 9:00–18:00.
            </p>

            <div className="mt-10 space-y-5">
              {contactMethods.map((method) => {
                const Icon = method.icon;

                return (
                  <a
                    key={method.title}
                    href={method.href}
                    className="group flex items-center gap-5"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-[#3c3c3c] text-[#303030] transition group-hover:border-[#0658d4] group-hover:text-[#0658d4]">
                      <Icon size={22} />
                    </span>

                    <span className="text-[24px] font-medium text-[#202533] transition group-hover:text-[#0658d4]">
                      {method.title}
                    </span>
                  </a>
                );
              })}

              <div className="group flex items-center gap-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-[#3c3c3c] text-[#303030]">
                  <MapPin size={22} />
                </span>

                <span className="text-[24px] font-medium text-[#202533]">
                  Ali Tower, Kuwait City, Kuwait
                </span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <h2 className="mb-8 text-[34px] font-black tracking-[-0.04em] text-[#202533]">
              Or drop us a message...
            </h2>

            <div className="mb-10 flex items-center gap-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0658d4] text-sm font-black text-white">
                1
              </span>
              <div className="h-px flex-1 bg-[#bfc6cc]"></div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#333333] text-sm font-medium">
                2
              </span>
              <div className="h-px flex-1 bg-[#bfc6cc]"></div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#333333] text-sm font-medium">
                3
              </span>
            </div>

            <div className="grid grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-2">
              <Field
                label="First name"
                value={formData.firstName}
                onChange={(value) =>
                  setFormData({ ...formData, firstName: value })
                }
              />

              <Field
                label="Last name"
                value={formData.lastName}
                onChange={(value) =>
                  setFormData({ ...formData, lastName: value })
                }
              />

              <Field
                label="Email"
                type="email"
                value={formData.email}
                onChange={(value) => setFormData({ ...formData, email: value })}
              />

              <Field
                label="Phone"
                value={formData.phone}
                onChange={(value) => setFormData({ ...formData, phone: value })}
              />

              <div className="md:col-span-2">
                <Field
                  label="Company"
                  value={formData.company}
                  onChange={(value) =>
                    setFormData({ ...formData, company: value })
                  }
                />
              </div>

              <div className="md:col-span-2">
                <Field
                  label="Job title"
                  value={formData.jobTitle}
                  onChange={(value) =>
                    setFormData({ ...formData, jobTitle: value })
                  }
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-[17px] font-medium text-[#202533]">
                  Recruitment requirement
                </label>

                <textarea
                  rows="5"
                  value={formData.requirement}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      requirement: event.target.value
                    })
                  }
                  className="w-full resize-none rounded-[8px] border border-[#bdcbd8] bg-white p-4 outline-none transition focus:border-[#0658d4]"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 flex h-[62px] w-full items-center justify-center rounded-full bg-[#0658d4] text-[19px] font-black text-white transition hover:bg-[#0547aa]"
            >
              Next
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

function Field({ label, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="mb-2 block text-[17px] font-medium text-[#202533]">
        {label}
      </label>

      <input
        type={type}
        value={value}
        required
        onChange={(event) => onChange(event.target.value)}
        className="h-[54px] w-full rounded-[8px] border border-[#bdcbd8] bg-white px-4 outline-none transition focus:border-[#0658d4]"
      />
    </div>
  );
}