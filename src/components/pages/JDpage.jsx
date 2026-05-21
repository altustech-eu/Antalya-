import React from "react";
import {
  MapPin,
  Briefcase,
  Calendar,
  Clock3,
  ChevronRight,
  ExternalLink,
  Circle,
} from "lucide-react";

const relatedJobs = [
  {
    title: "Level 3 Marketing Apprentice",
    company: "Softcat Plc",
    location: "Marlow",
    salary: "£18,000",
  },
  {
    title: "Graduate Sales Engineer",
    company: "The GRB Team",
    location: "Kent",
    salary: "£35,000",
  },
  {
    title: "Graduate Support Analyst",
    company: "The GRB Team",
    location: "Southampton",
    salary: "£27,000",
  },
];

export default function JobDescriptionPage() {
  return (
    <div className="bg-[#f3f3f3] min-h-screen text-[#101828] font-sans">
      {/* HERO */}
      <section className="bg-[#0052D9] rounded-b-[90px] overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <p className="uppercase tracking-[0.25em] text-white/70 text-xs font-semibold mb-8">
            The GRB Team
          </p>

          <h1 className="text-white text-5xl lg:text-7xl font-bold leading-[1.05] max-w-5xl">
            Graduate Software Engineer —
            <br />
            Summer 2026
          </h1>

          <div className="mt-10 text-sm text-white/70 flex items-center gap-2">
            <span>Home</span>
            <span>›</span>
            <span>Graduate Jobs</span>
            <span>›</span>
            <span className="text-white">
              Graduate Software Engineer — Summer 2026
            </span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-[1500px] mx-auto px-6 lg:px-12 -mt-10 pb-28">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          {/* LEFT CONTENT */}
          <div className="xl:col-span-8">
            <div className="bg-white rounded-[32px] p-8 lg:p-12 shadow-sm border border-gray-100">
              {/* TOP BAR */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 pb-8 border-b border-gray-100">
                <div>
                  <p className="text-sm text-gray-400 mb-5">
                    Updated: March 20, 2026
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <Tag text="Graduate" />
                    <Tag text="Defence, Engineering, IT" />
                    <Tag text="Surrey" />
                    <Tag text="£43,000" />
                  </div>
                </div>

                <button className="text-[#0052D9] text-sm font-semibold hover:underline">
                  Back to job search
                </button>
              </div>

              {/* TITLE */}
              <div className="mt-10">
                <h2 className="text-4xl font-bold leading-tight mb-10">
                  Graduate Software Engineer — Summer 2026
                </h2>

                {/* ARTICLE */}
                <div className="space-y-10 text-[17px] leading-8 text-gray-700">
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-5">
                      The Company
                    </h3>

                    <p>
                      Based in Surrey, this privately owned technical
                      consultancy delivers advanced solutions for defense and
                      national security sectors. Collaboration is central to how
                      teams operate, with graduates working closely alongside
                      experienced engineers and subject matter experts.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-black mb-5">
                      The Role
                    </h3>

                    <p>
                      As a Graduate Software Engineer joining in Summer or
                      Autumn 2026, you will contribute to cutting-edge cyber
                      security and data driven systems used in highly secure
                      environments.
                    </p>

                    <ul className="mt-6 space-y-4">
                      {[
                        "Develop software for advanced cyber security systems",
                        "Build secure signal and data processing applications",
                        "Use modern C, C++ and Python technologies",
                        "Support deployment and testing workflows",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-4"
                        >
                          <Circle
                            size={8}
                            className="fill-[#0052D9] text-[#0052D9] mt-3 shrink-0"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* REQUIREMENTS */}
                  <div className="bg-[#F5F9FF] border border-[#D9E7FF] rounded-[28px] p-8">
                    <h3 className="text-2xl font-bold text-[#0052D9] mb-6">
                      Requirements
                    </h3>

                    <ul className="space-y-5">
                      {[
                        "A 2:1 degree (or predicted) in Computer Science, Engineering, Mathematics or Physics",
                        "Strong programming ability in C and C++",
                        "Excellent communication and analytical thinking",
                        "Eligible for UK Government DV security clearance",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-4 text-gray-700"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#0052D9] mt-3 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* BENEFITS */}
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-5">
                      Benefits and Perks
                    </h3>

                    <ul className="space-y-4">
                      {[
                        "£43,000 starting salary",
                        "Performance bonus scheme",
                        "Private healthcare",
                        "Structured mentoring and technical development",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-4"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#0052D9] mt-3 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* APPLY */}
                  <div className="pt-4">
                    <button className="bg-[#0052D9] hover:bg-blue-700 transition text-white rounded-full px-10 py-5 text-lg font-semibold flex items-center gap-3 shadow-lg shadow-blue-100">
                      Apply now
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="xl:col-span-4">
            <div className="sticky top-6 space-y-6">
              {/* RECRUITER */}
              <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-5 mb-7">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300"
                    alt=""
                    className="w-20 h-20 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="text-xl font-bold">Kirk Pitters</h4>

                    <p className="text-gray-500 mt-1 text-sm">
                      View all my jobs →
                    </p>
                  </div>
                </div>

                <button className="w-full bg-[#0052D9] hover:bg-blue-700 transition text-white py-4 rounded-full font-semibold text-lg">
                  Apply now
                </button>
              </div>

              {/* DETAILS */}
              <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="text-xl font-bold">Job details</h4>

                  <span className="text-gray-300">⌃</span>
                </div>

                <div className="space-y-6">
                  <Detail
                    icon={<Clock3 size={18} />}
                    label="Job ID"
                    value="37337"
                  />

                  <Detail
                    icon={<Briefcase size={18} />}
                    label="Type"
                    value="Graduate"
                  />

                  <Detail
                    icon={<MapPin size={18} />}
                    label="Location"
                    value="Surrey"
                  />

                  <Detail
                    icon={<Calendar size={18} />}
                    label="Closing"
                    value="May 19, 2026"
                  />

                  <Detail
                    icon={<Calendar size={18} />}
                    label="Start date"
                    value="August 3, 2026"
                  />
                </div>
              </div>

              {/* INDUSTRY CARD */}
              <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
                <h4 className="text-xl font-bold mb-6">
                  Relevant industry profiles
                </h4>

                <div className="relative overflow-hidden rounded-[24px] h-[220px]">
                  <img
                    src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />

                  <div className="absolute bottom-6 left-6">
                    <h5 className="text-white text-3xl font-bold">
                      Engineering
                    </h5>
                  </div>
                </div>

                <div className="flex justify-center gap-2 mt-5">
                  <div className="w-2 h-2 rounded-full bg-[#0052D9]" />
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                </div>
              </div>

              {/* INTERVIEW */}
              <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
                <h4 className="text-xl font-bold mb-6">
                  Interview advice
                </h4>

                <div className="space-y-5">
                  {[
                    "Graduate Defence Interview Questions",
                    "Graduate Engineering Interview Questions",
                    "Graduate IT Interview Questions",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 text-gray-700 hover:text-[#0052D9] transition cursor-pointer"
                    >
                      <div className="w-4 h-4 border border-gray-300 rounded-sm mt-1" />

                      <span className="font-medium leading-6">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED JOBS */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center mb-16">
            Related jobs
          </h2>

          <div className="space-y-14">
            {/* INDUSTRY */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center">
                By industry:
              </h3>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {relatedJobs.map((job, index) => (
                  <RelatedJobCard key={index} {...job} />
                ))}
              </div>
            </div>

            {/* COURSE */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center">
                By course:
              </h3>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {relatedJobs.map((job, index) => (
                  <RelatedJobCard key={index} {...job} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Tag({ text }) {
  return (
    <div className="bg-[#EEF4FF] text-[#0052D9] px-4 py-2 rounded-full text-sm font-semibold">
      {text}
    </div>
  );
}

function Detail({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-[#0052D9] mt-1">{icon}</div>

      <div>
        <p className="text-sm text-gray-400 mb-1">{label}</p>

        <p className="font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  );
}

function RelatedJobCard({ title, company, location, salary }) {
  return (
    <div className="bg-white rounded-[28px] border border-gray-100 p-7 hover:border-blue-200 transition-all group cursor-pointer">
      <div className="flex justify-between gap-5">
        <div className="flex gap-5">
          <div className="w-16 h-16 rounded-full bg-gray-100 shrink-0" />

          <div>
            <p className="text-xs text-gray-400 font-semibold mb-2">
              {company}
            </p>

            <h4 className="text-2xl font-bold leading-tight mb-6">
              {title}
            </h4>

            <div className="flex flex-wrap gap-5 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                {location}
              </div>

              <div className="flex items-center gap-2">
                <Briefcase size={14} />
                {salary}
              </div>
            </div>
          </div>
        </div>

        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#EEF4FF] transition">
          <ChevronRight
            size={20}
            className="text-gray-400 group-hover:text-[#0052D9]"
          />
        </div>
      </div>
    </div>
  );
}