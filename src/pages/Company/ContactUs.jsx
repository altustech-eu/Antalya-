import React, { useState } from "react";
import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  Mail,
  MapPin,
  MessageCircle,
  Mic2,
  Minus,
  Phone,
  Plus,
  Send,
  UserRound,
  UsersRound
} from "lucide-react";

/* =========================================================
   COMPANY LOCATION
========================================================= */

const companyAddress =
  "Ali Tower, Mubarak Al-Kabeer Street, Kuwait City, Kuwait";

const googleMapDirectionUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Ali%20Tower%2C%20Mubarak%20Al-Kabeer%20Street%2C%20Kuwait%20City%2C%20Kuwait";

const googleMapEmbedUrl =
  "https://maps.google.com/maps?q=Ali%20Tower%2C%20Mubarak%20Al-Kabeer%20Street%2C%20Kuwait%20City%2C%20Kuwait&t=&z=16&ie=UTF8&iwloc=&output=embed";

/* =========================================================
   FAQ CONTENT
========================================================= */

const faqData = {
  Employers: [
    {
      question: "What recruitment services does Antalya offer employers?",
      answer:
        "Antalya supports employers with recruitment consultancy, vacancy advertising, candidate sourcing, CV screening, shortlisting, interview coordination, bulk manpower hiring, documentation support and workforce mobilisation."
    },
    {
      question: "How does Antalya’s Recruitment Process Outsourcing model work?",
      answer:
        "Our RPO service can support part or all of your recruitment process. We can manage sourcing, candidate screening, interview coordination, reporting, documentation tracking and joining support based on your internal HR requirements."
    },
    {
      question: "What industries and job sectors does Antalya specialise in?",
      answer:
        "We support healthcare, education, hospitality, IT and cybersecurity, skilled labour, engineering, logistics, facility management, administration, finance, sales, marketing and customer service recruitment."
    },
    {
      question: "What makes Antalya different from other recruitment agencies?",
      answer:
        "We combine employer requirement analysis, candidate readiness, structured screening, partner sourcing and mobilisation support within one coordinated recruitment process."
    },
    {
      question: "Can Antalya support high-volume or seasonal recruitment?",
      answer:
        "Yes. We can support high-volume workforce requirements through batch sourcing, screening, interview scheduling, candidate documentation and phased mobilisation plans."
    },
    {
      question: "Can we use Antalya only for attraction or screening services?",
      answer:
        "Yes. Employers can select individual services such as advertising, sourcing, CV screening, assessment coordination or documentation checks without outsourcing the complete recruitment process."
    },
    {
      question: "Do you support assessment design and facilitation?",
      answer:
        "Yes. We can help structure screening criteria, interview scorecards, practical assessments, candidate evaluation forms and selection workflows."
    },
    {
      question: "Can Antalya support employer branding campaigns?",
      answer:
        "Yes. We can support employer profile content, recruitment campaign pages, role promotion, candidate communications and targeted digital attraction."
    },
    {
      question: "How do you manage candidate data and privacy?",
      answer:
        "Candidate information should be collected and processed only for legitimate recruitment purposes, with appropriate access controls, consent, retention rules and privacy notices."
    }
  ],

  "Job Seekers": [
    {
      question: "How can I apply for jobs through Antalya?",
      answer:
        "Create a candidate profile, upload your CV and search available jobs. You can then apply to suitable roles and receive updates from the recruitment team."
    },
    {
      question: "Is candidate registration free?",
      answer:
        "Candidate profile registration and job applications are free unless a specific optional service is clearly communicated separately."
    },
    {
      question: "Which documents should I prepare?",
      answer:
        "Depending on the role, you may need a passport copy, CV, educational certificates, employment certificates, professional licences, photographs and other employer-requested documents."
    },
    {
      question: "Can Antalya help improve my CV?",
      answer:
        "Yes. Our career guidance resources cover CV preparation, cover letters, interviews, assessments and application follow-up."
    },
    {
      question: "How will I know whether I have been shortlisted?",
      answer:
        "Shortlisted candidates may receive updates by phone, email or through their candidate account, depending on the recruitment workflow."
    },
    {
      question: "Does registration guarantee a job?",
      answer:
        "No. Registration allows your profile to be considered for suitable opportunities, but selection depends on employer requirements, eligibility, experience and interview performance."
    }
  ],

  Partners: [
    {
      question: "Who can become an Antalya recruitment partner?",
      answer:
        "Recruitment agencies, manpower suppliers, training providers, institutions, career centres, sourcing specialists and authorised business partners may apply."
    },
    {
      question: "What partnership models are available?",
      answer:
        "Potential models include candidate sourcing, manpower supply, institutional partnership, training partnership, employer referral and recruitment campaign collaboration."
    },
    {
      question: "How are partner responsibilities defined?",
      answer:
        "Responsibilities, territories, candidate ownership, documentation requirements, communication rules and commercial terms should be documented before activation."
    },
    {
      question: "Can institutions collaborate with Antalya?",
      answer:
        "Yes. Colleges, universities, training centres and career offices may collaborate for candidate awareness, sourcing, employability preparation and recruitment activities."
    },
    {
      question: "How do I submit a partnership enquiry?",
      answer:
        "Select partnership enquiry in the contact form and provide details about your organisation, market, candidate access and proposed collaboration."
    }
  ]
};

/* =========================================================
   CONTACT CHANNELS
========================================================= */

const contactChannels = [
  {
    icon: MessageCircle,
    title: "Open our live chat",
    text: "Chat with our recruitment support team.",
    href: "#general-enquiry"
  },
  {
    icon: CalendarDays,
    title: "Book a discovery call",
    text: "Discuss employer, candidate or partnership requirements.",
    href: "#general-enquiry"
  },
  {
    icon: Phone,
    title: "Call us: +965 69039059",
    text: "Speak directly with the Antalya team.",
    href: "tel:+96569039059"
  },
  {
    icon: Mail,
    title: "Email: info@antalyamanpower.com.kw",
    text: "Send your general recruitment enquiry.",
    href: "mailto:info@antalyamanpower.com.kw"
  },
  {
    icon: MapPin,
    title: "Get map directions",
    text: companyAddress,
    href: googleMapDirectionUrl
  },
  {
    icon: Mic2,
    title: "Press and media enquiries",
    text: "Contact us for interviews, features and media requests.",
    href: "mailto:info@antalyamanpower.com.kw"
  }
];

export default function ContactUs() {
  const [activeFaqTab, setActiveFaqTab] = useState("Employers");
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    enquiryType: "",
    message: "",
    consent: false
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Thank you, ${formData.firstName}. Your enquiry has been submitted.`);
  };

  return (
    <main className="min-h-screen bg-white font-['Inter',sans-serif] text-[#25252d]">
      {/* =====================================================
          PAGE HEADER
      ====================================================== */}

      <section className="relative border-l-[7px] border-[#0658d4] bg-[#f4f4f4] px-6 pb-10 pt-32 md:px-12 lg:px-14">
        <div className="mx-auto max-w-[1500px]">
          <h1 className="text-[54px] font-black leading-none tracking-[-0.06em] text-black md:text-[76px] lg:-ml-36">
            Contact Us
          </h1>

          <nav
            aria-label="Breadcrumb"
            className="mt-12 flex flex-wrap items-center gap-1 text-[14px] lg:-ml-32"
          >
            <a href="/" className="font-bold text-[#0658d4]">
              Home
            </a>

            <span>»</span>

            <a href="/about-us" className="font-bold text-[#0658d4]">
              About Us
            </a>

            <span>»</span>

            <span className="text-[#333333]">Contact Us</span>
          </nav>
        </div>
      </section>

      {/* =====================================================
          MAP
      ====================================================== */}

      <section className="relative h-[430px] w-full overflow-hidden bg-[#e8e8e8] md:h-[500px]">
        <iframe
          title="Antalya Manpower location"
          src={googleMapEmbedUrl}
          className="h-full w-full border-0 grayscale"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* MAP DIRECTION CARD */}
        <div className="absolute bottom-6 left-6 z-10 max-w-[420px] rounded-[18px] bg-white p-6 shadow-2xl md:left-10">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0658d4] text-white">
              <MapPin size={22} />
            </div>

            <div>
              <h3 className="text-[20px] font-black tracking-[-0.03em] text-black">
                Visit Antalya Manpower
              </h3>

              <p className="mt-2 text-[15px] font-medium leading-6 text-[#444444]">
                {companyAddress}
              </p>

              <a
                href={googleMapDirectionUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0658d4] px-6 py-3 text-[14px] font-black text-white transition hover:bg-[#0547aa]"
              >
                Get Directions
                <ChevronRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION AND CONTACT PERSON
      ====================================================== */}

      <section className="bg-[#f4f4f4] px-6 py-20 md:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1220px] grid-cols-1 gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <h2 className="text-[34px] font-black leading-tight tracking-[-0.04em] text-[#292a34] md:text-[42px]">
              We would love to hear from you.
            </h2>

            <p className="mt-6 max-w-[650px] text-[18px] font-medium leading-[1.55] text-[#343641]">
              Whether you are an employer looking for reliable manpower, a job
              seeker with an application question, an institution exploring
              collaboration, or a recruitment partner proposing a new project,
              our team is here to help.
            </p>

            <p className="mt-4 max-w-[650px] text-[18px] font-medium leading-[1.55] text-[#343641]">
              Contact us about recruitment services, job opportunities,
              candidate documentation, manpower projects, institutional
              partnerships or business cooperation.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact-directory"
                className="inline-flex items-center gap-2 rounded-full bg-[#0658d4] px-8 py-4 text-[16px] font-black text-white transition hover:bg-[#0547aa]"
              >
                Directory
                <UsersRound size={19} />
              </a>

              <a
                href="#service-faq"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#c9c9c9] px-8 py-4 text-[16px] font-semibold text-[#4a4a4a] transition hover:border-[#0658d4] hover:text-[#0658d4]"
              >
                Service FAQ
                <HelpCircle size={19} />
              </a>
            </div>
          </div>

          {/* CONTACT TEAM CARD */}
          <article className="rounded-[18px] border border-[#dedede] bg-white p-7 shadow-sm md:p-9">
            <div className="grid grid-cols-1 items-center gap-7 sm:grid-cols-[180px_1fr]">
              <div className="mx-auto flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-full bg-[#dedede]">
                <UserRound
                  size={94}
                  strokeWidth={1.1}
                  className="text-[#757575]"
                />
              </div>

              <div>
                <h3 className="text-[26px] font-medium text-[#30313b]">
                  Antalya Support Team
                </h3>

                <p className="mt-1 text-[15px] font-medium text-[#0658d4]">
                  Recruitment and Employer Support
                </p>

                <p className="mt-4 text-[16px] font-medium leading-[1.55] text-[#343641]">
                  Get in touch with our team to learn more about candidate
                  recruitment, manpower supply, job applications and
                  partnerships.
                </p>

                <div className="mt-5 space-y-3 text-[15px] font-medium text-[#0658d4]">
                  <a
                    href="tel:+96569039059"
                    className="flex items-center gap-3 hover:underline"
                  >
                    <Phone size={20} />
                    +965 69039059
                  </a>

                  <a
                    href="mailto:info@antalyamanpower.com.kw"
                    className="flex items-center gap-3 break-all hover:underline"
                  >
                    <Mail size={20} />
                    info@antalyamanpower.com.kw
                  </a>

                  <a
                    href={googleMapDirectionUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-3 text-[#333333] transition hover:text-[#0658d4]"
                  >
                    <MapPin size={20} className="mt-0.5 text-[#0658d4]" />

                    <span>
                      {companyAddress}
                      <span className="mt-1 block text-[13px] font-black text-[#0658d4]">
                        Get map directions →
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          CONTACT METHODS AND ENQUIRY FORM
      ====================================================== */}

      <section
        id="general-enquiry"
        className="scroll-mt-28 bg-white px-6 py-24 md:px-12 lg:py-28"
      >
        <div className="mx-auto grid max-w-[1220px] grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT DIRECTORY */}
          <div id="contact-directory" className="scroll-mt-28">
            <div className="space-y-5">
              {contactChannels.map((channel) => {
                const Icon = channel.icon;
                const external = channel.href.startsWith("http");

                return (
                  <a
                    key={channel.title}
                    href={channel.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="group flex items-center gap-5"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[3px] border-[#3c3c3c] text-[#303030] transition group-hover:border-[#0658d4] group-hover:text-[#0658d4]">
                      <Icon size={22} />
                    </span>

                    <span>
                      <span className="block text-[21px] font-medium text-[#24252d] transition group-hover:text-[#0658d4]">
                        {channel.title}
                      </span>

                      <span className="mt-1 hidden text-sm text-gray-500 md:block">
                        {channel.text}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-14 space-y-7 text-[16px] leading-[1.6] text-[#292a34]">
              <div>
                <h3 className="font-black">Head Office:</h3>

                <p>
                  Antalya For Recruiting Manpower LLC
                  <br />
                  Ali Tower, Mubarak Al-Kabeer Street
                  <br />
                  Kuwait City, Kuwait
                </p>

                <a
                  href={googleMapDirectionUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0658d4] px-6 py-3 text-[14px] font-black text-white transition hover:bg-[#0547aa]"
                >
                  Get map directions
                  <ChevronRight size={17} />
                </a>
              </div>

              <div>
                <h3 className="font-black">Normal hours of business:</h3>
                <p>
                  Sunday to Thursday: 9:00 AM – 6:00 PM
                  <br />
                  Friday and Saturday: By appointment
                </p>
              </div>

              <div>
                <h3 className="font-black">Candidate applications:</h3>
                <p>
                  Submit CVs and job applications through the candidate
                  registration or relevant vacancy page.
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div>
            <h2 className="text-[34px] font-black tracking-[-0.04em] text-[#292a34] md:text-[42px]">
              Send a general enquiry
            </h2>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-[16px] font-medium"
                  >
                    First name
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="h-[52px] w-full rounded-[8px] border border-[#bdcbd8] bg-white px-4 outline-none transition focus:border-[#0658d4] focus:ring-2 focus:ring-[#0658d4]/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-[16px] font-medium"
                  >
                    Last name
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="h-[52px] w-full rounded-[8px] border border-[#bdcbd8] bg-white px-4 outline-none transition focus:border-[#0658d4] focus:ring-2 focus:ring-[#0658d4]/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[16px] font-medium"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="h-[52px] w-full rounded-[8px] border border-[#bdcbd8] bg-white px-4 outline-none transition focus:border-[#0658d4] focus:ring-2 focus:ring-[#0658d4]/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-[16px] font-medium"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-[52px] w-full rounded-[8px] border border-[#bdcbd8] bg-white px-4 outline-none transition focus:border-[#0658d4] focus:ring-2 focus:ring-[#0658d4]/15"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-[16px] font-medium"
                >
                  Company or organisation
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="h-[52px] w-full rounded-[8px] border border-[#bdcbd8] bg-white px-4 outline-none transition focus:border-[#0658d4] focus:ring-2 focus:ring-[#0658d4]/15"
                />
              </div>

              <div>
                <label
                  htmlFor="enquiryType"
                  className="mb-2 block text-[16px] font-medium"
                >
                  Enquiry type
                </label>

                <select
                  id="enquiryType"
                  name="enquiryType"
                  required
                  value={formData.enquiryType}
                  onChange={handleChange}
                  className="h-[52px] w-full rounded-[8px] border border-[#bdcbd8] bg-white px-4 outline-none transition focus:border-[#0658d4] focus:ring-2 focus:ring-[#0658d4]/15"
                >
                  <option value="">Select enquiry type</option>
                  <option value="employer">Employer recruitment</option>
                  <option value="candidate">Candidate or job application</option>
                  <option value="bulk-manpower">
                    Bulk manpower requirement
                  </option>
                  <option value="partnership">Partnership opportunity</option>
                  <option value="institution">Institution collaboration</option>
                  <option value="media">Press and media</option>
                  <option value="general">General enquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-[16px] font-medium"
                >
                  Your message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows="7"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-[8px] border border-[#bdcbd8] bg-white p-4 outline-none transition focus:border-[#0658d4] focus:ring-2 focus:ring-[#0658d4]/15"
                />
              </div>

              <label className="flex items-start gap-3 text-[14px] leading-6 text-[#555555]">
                <input
                  name="consent"
                  type="checkbox"
                  required
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4"
                />

                <span>
                  I agree that Antalya may use the information provided to
                  respond to this enquiry in accordance with the{" "}
                  <a
                    href="/privacy-policy"
                    className="font-bold text-[#0658d4]"
                  >
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>

              <div className="flex h-[58px] w-[250px] items-center justify-between border border-[#cacaca] bg-[#f4f4f4] px-4 text-xs text-[#555555]">
                <span>Protected form verification</span>
                <CheckCircle2 size={27} className="text-[#0658d4]" />
              </div>

              <button
                type="submit"
                className="flex h-[58px] w-full items-center justify-center gap-3 rounded-full bg-[#0658d4] text-[17px] font-black text-white transition hover:bg-[#0547aa]"
              >
                Send
                <Send size={19} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE FAQ
      ====================================================== */}

      <section
        id="service-faq"
        className="scroll-mt-28 bg-[#f4f4f4] px-6 py-24 md:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-[1240px]">
          <h2 className="text-center text-[54px] font-black leading-none tracking-[-0.055em] text-black md:text-[76px]">
            Service FAQ
          </h2>

          {/* FAQ TABS */}
          <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              {
                name: "Employers",
                icon: BriefcaseBusiness
              },
              {
                name: "Job Seekers",
                icon: UserRound
              },
              {
                name: "Partners",
                icon: Building2
              }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeFaqTab === tab.name;

              return (
                <button
                  key={tab.name}
                  type="button"
                  onClick={() => {
                    setActiveFaqTab(tab.name);
                    setOpenFaqIndex(null);
                  }}
                  className={`flex min-h-[150px] flex-col items-center justify-center rounded-[12px] transition ${
                    isActive
                      ? "bg-[#0658d4] text-white shadow-lg"
                      : "bg-transparent text-[#555555] hover:bg-white"
                  }`}
                >
                  <Icon size={34} strokeWidth={1.8} />

                  <span className="mt-4 text-[20px] font-semibold">
                    {tab.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* FAQ ITEMS */}
          <div className="mt-12 border-t border-[#c5c5c5]">
            {faqData[activeFaqTab].map((item, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div key={item.question} className="border-b border-[#c5c5c5]">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="group flex w-full items-center justify-between gap-8 py-7 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[20px] font-medium leading-[1.35] tracking-[-0.025em] text-[#30313a] transition group-hover:text-[#0658d4] md:text-[25px]">
                      {item.question}
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center text-[#282828]">
                      {isOpen ? (
                        <Minus size={20} strokeWidth={2.5} />
                      ) : (
                        <Plus size={20} strokeWidth={2.5} />
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
                      <div className="max-w-[920px] pb-8 pr-10">
                        <p className="text-[16px] font-medium leading-[1.7] text-[#666666] md:text-[18px]">
                          {item.answer}
                        </p>

                        <a
                          href="#general-enquiry"
                          className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#0658d4]"
                        >
                          Contact our team
                          <ChevronRight size={17} />
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
    </main>
  );
}