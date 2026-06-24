import React from "react";
import {
  MapPin,
  Briefcase,
  Calendar,
  Clock3,
  ChevronRight,
  ExternalLink,
  Circle,
  Heart,
  Shield,
  GraduationCap,
  Coffee,
  Code,
  Stethoscope,
  Building2,
  Users,
  Award,
  Globe,
  Building,
  Mail,
  Phone
} from "lucide-react";

const relatedJobs = [
  {
    title: "Registered Nurse - Critical Care",
    company: "Capital Health Medical Center",
    location: "Kuwait City",
    salary: "Competitive + Benefits",
    type: "Healthcare",
    icon: <Heart size={20} />,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Cybersecurity Analyst",
    company: "SecureTech Solutions",
    location: "Kuwait City",
    salary: "KWD 1,800 - 2,500",
    type: "IT & Security",
    icon: <Shield size={20} />,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Secondary School Teacher - Science",
    company: "Global Education Group",
    location: "Salmiya, Kuwait",
    salary: "KWD 1,200 - 1,600",
    type: "Education",
    icon: <GraduationCap size={20} />,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Hospitality Manager - 5-Star Hotel",
    company: "Elite Hospitality Group",
    location: "Kuwait City",
    salary: "KWD 1,500 - 2,200",
    type: "Hospitality",
    icon: <Coffee size={20} />,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Full Stack Developer - Fintech",
    company: "Kuwait Tech Solutions",
    location: "Mirqab, Kuwait City",
    salary: "KWD 1,600 - 2,400",
    type: "IT & Security",
    icon: <Code size={20} />,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Physiotherapist - Sports Medicine",
    company: "Gulf Medical Center",
    location: "Hawally, Kuwait",
    salary: "KWD 1,200 - 1,800",
    type: "Healthcare",
    icon: <Stethoscope size={20} />,
    image: "https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=600&auto=format&fit=crop"
  }
];

const jobDetails = {
  title: "Senior Recruitment Consultant — Kuwait City",
  company: "Antalya For Recruiting Manpower LLC",
  location: "Mirqab-Block 1, Kuwait City",
  type: "Full-Time",
  salary: "KWD 1,200 - 1,800 + Commission",
  closing: "July 30, 2026",
  startDate: "August 15, 2026",
  jobId: "ANT-2026-001",
  companyImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
  description: [
    "Antalya For Recruiting Manpower LLC is seeking an experienced Senior Recruitment Consultant to join our growing team in Kuwait City. This role offers an exciting opportunity to work with leading multinational clients across Healthcare, IT, Education, and Hospitality sectors.",
    "You will be responsible for managing end-to-end recruitment processes, building strong client relationships, and identifying top-tier talent across the GCC region."
  ],
  responsibilities: [
    "Manage full-cycle recruitment for clients across Healthcare, IT, Education, and Hospitality sectors",
    "Build and maintain strong relationships with key clients and candidates",
    "Source, screen, and interview candidates using various channels",
    "Coordinate and manage the recruitment process from job briefing to offer stage",
    "Achieve monthly placement targets and KPIs",
    "Provide market insights and salary benchmarking to clients",
    "Maintain accurate records in the applicant tracking system"
  ],
  requirements: [
    "3+ years of recruitment experience, preferably in the GCC region",
    "Strong understanding of Kuwaiti labor laws and compliance standards",
    "Excellent communication and interpersonal skills",
    "Proven track record of successful placements",
    "Bachelor's degree in HR, Business, or related field",
    "Experience with recruitment software and ATS platforms",
    "Fluency in English (Arabic is a plus)"
  ],
  benefits: [
    "Competitive base salary + uncapped commission structure",
    "Private health insurance",
    "Annual performance bonus",
    "Professional development opportunities",
    "Visa sponsorship and support",
    "Modern office in Mirqab-Block 1, Kuwait City"
  ]
};

export default function JobDescriptionPage() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen text-[#101828] font-['Inter',sans-serif] pt-20 md:pt-24">
      {/* HERO */}
      <section className="bg-[#0658d4] rounded-b-[90px] overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
          {/* Company Logo/Badge */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <Building className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="uppercase tracking-[0.25em] text-white/70 text-xs font-semibold">
                Antalya For Recruiting Manpower LLC
              </p>
              <div className="flex items-center gap-3 mt-1">
                <span className="flex items-center gap-1 text-white/50 text-xs">
                  <Award size={12} className="text-[#f29100]" />
                  4.9/5 Rating
                </span>
                <span className="w-1 h-1 rounded-full bg-white/30"></span>
                <span className="text-white/50 text-xs">120k+ Placements</span>
              </div>
            </div>
          </div>

          <h1 className="text-white text-5xl lg:text-7xl font-extrabold leading-[1.05] max-w-5xl">
            {jobDetails.title}
          </h1>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin size={16} className="text-white/50" />
              <span>{jobDetails.location}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Briefcase size={16} className="text-white/50" />
              <span>{jobDetails.type}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock3 size={16} className="text-white/50" />
              <span>{jobDetails.salary}</span>
            </div>
          </div>

          <div className="mt-8 text-sm text-white/70 flex items-center gap-2">
            <span className="hover:text-white transition-colors cursor-pointer">Home</span>
            <span>›</span>
            <span className="hover:text-white transition-colors cursor-pointer">Careers</span>
            <span>›</span>
            <span className="text-white font-semibold">{jobDetails.title}</span>
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
                  <p className="text-sm text-gray-400 mb-5 font-medium">
                    Updated: June 24, 2026
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <Tag text={jobDetails.type} />
                    <Tag text={jobDetails.type === "Full-Time" ? "Permanent" : "Contract"} />
                    <Tag text="Kuwait City" />
                    <Tag text={jobDetails.salary.split('+')[0].trim()} />
                  </div>
                </div>

                <button className="text-[#0658d4] text-sm font-semibold hover:underline flex items-center gap-1">
                  Back to job search <ChevronRight size={14} />
                </button>
              </div>

              {/* Company Image Banner */}
              <div className="mt-8 rounded-2xl overflow-hidden h-48 relative">
                <img 
                  src={jobDetails.companyImage}
                  alt="Antalya For Recruiting Manpower LLC Office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0658d4]/20 to-transparent"></div>
                <div className="absolute bottom-4 left-6 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-white text-sm font-semibold flex items-center gap-2">
                    <Building2 size={16} />
                    {jobDetails.company}
                  </p>
                </div>
              </div>

              {/* TITLE */}
              <div className="mt-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0658d4]/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-[#0658d4]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{jobDetails.company}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Award size={12} className="text-[#f29100]" />
                      <span>4.9/5 Rating • 120k+ Placements</span>
                    </div>
                  </div>
                </div>

                <h2 className="text-4xl font-extrabold leading-tight mb-10">
                  {jobDetails.title}
                </h2>

                {/* ARTICLE */}
                <div className="space-y-10 text-[17px] leading-8 text-gray-700 font-medium">
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-5">
                      About the Role
                    </h3>

                    {jobDetails.description.map((para, index) => (
                      <p key={index} className="mb-4">{para}</p>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-black mb-5">
                      Key Responsibilities
                    </h3>

                    <ul className="mt-6 space-y-4">
                      {jobDetails.responsibilities.map((item, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <Circle size={8} className="fill-[#0658d4] text-[#0658d4] mt-3 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* REQUIREMENTS */}
                  <div className="bg-[#F0F7FF] border border-[#0658d4]/20 rounded-[28px] p-8">
                    <h3 className="text-2xl font-bold text-[#0658d4] mb-6">
                      Requirements
                    </h3>

                    <ul className="space-y-5">
                      {jobDetails.requirements.map((item, index) => (
                        <li key={index} className="flex items-start gap-4 text-gray-700">
                          <div className="w-2 h-2 rounded-full bg-[#0658d4] mt-3 shrink-0" />
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
                      {jobDetails.benefits.map((item, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <div className="w-2 h-2 rounded-full bg-[#0658d4] mt-3 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* APPLY */}
                  <div className="pt-4 flex flex-wrap gap-4">
                    <button className="bg-[#0658d4] hover:bg-[#0547a8] transition text-white rounded-full px-10 py-5 text-lg font-bold flex items-center gap-3 shadow-lg shadow-blue-100">
                      Apply Now
                      <ExternalLink size={20} />
                    </button>
                    <button className="border-2 border-gray-200 hover:border-[#0658d4] transition text-gray-700 hover:text-[#0658d4] rounded-full px-10 py-5 text-lg font-bold flex items-center gap-3">
                      <Heart size={20} />
                      Save Job
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="xl:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* RECRUITER */}
              <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-5 mb-7">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300"
                    alt="Recruiter profile"
                    className="w-20 h-20 rounded-full object-cover border-2 border-[#0658d4]/20"
                  />

                  <div>
                    <h4 className="text-xl font-bold text-gray-800">Kirk Pitters</h4>
                    <p className="text-gray-500 mt-1 text-sm font-medium">Senior Recruitment Consultant</p>
                    <p className="text-[#0658d4] text-xs font-semibold hover:underline cursor-pointer mt-1 flex items-center gap-1">
                      View all jobs → 
                    </p>
                  </div>
                </div>

                <button className="w-full bg-[#0658d4] hover:bg-[#0547a8] transition text-white py-4 rounded-full font-bold text-lg shadow-lg shadow-blue-100">
                  Apply Now
                </button>

                <div className="mt-4 flex justify-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Mail size={12} /> Contact
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone size={12} /> +965 69039059
                  </span>
                </div>
              </div>

              {/* DETAILS */}
              <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="text-xl font-bold text-gray-800">Job Details</h4>
                  <span className="text-gray-300 text-2xl">⌃</span>
                </div>

                <div className="space-y-6">
                  <Detail icon={<Clock3 size={18} />} label="Job ID" value={jobDetails.jobId} />
                  <Detail icon={<Briefcase size={18} />} label="Type" value={jobDetails.type} />
                  <Detail icon={<MapPin size={18} />} label="Location" value={jobDetails.location} />
                  <Detail icon={<Calendar size={18} />} label="Closing Date" value={jobDetails.closing} />
                  <Detail icon={<Calendar size={18} />} label="Start Date" value={jobDetails.startDate} />
                  <Detail icon={<Users size={18} />} label="Department" value="Recruitment" />
                </div>
              </div>

              {/* INDUSTRY CARD */}
              <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
                <h4 className="text-xl font-bold text-gray-800 mb-6">
                  Relevant Industry Profiles
                </h4>

                <div className="relative overflow-hidden rounded-[24px] h-[200px]">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200"
                    alt="Recruitment industry"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
                  <div className="absolute bottom-6 left-6">
                    <h5 className="text-white text-2xl font-bold">Recruitment</h5>
                    <p className="text-white/70 text-sm font-medium">GCC Region</p>
                  </div>
                </div>

                <div className="flex justify-center gap-2 mt-5">
                  {[0, 1, 2].map((dot) => (
                    <div key={dot} className={`w-2 h-2 rounded-full ${dot === 0 ? 'bg-[#0658d4]' : 'bg-gray-300'}`} />
                  ))}
                </div>
              </div>

              {/* INTERVIEW */}
              <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
                <h4 className="text-xl font-bold text-gray-800 mb-6">
                  Interview Advice
                </h4>

                <div className="space-y-5">
                  {[
                    "Recruitment Consultant Interview Questions",
                    "Healthcare Recruitment Tips",
                    "IT & Cybersecurity Interview Guide",
                    "Education Sector Interview Prep",
                    "GCC Recruitment Best Practices"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 text-gray-700 hover:text-[#0658d4] transition cursor-pointer group">
                      <div className="w-4 h-4 border-2 border-gray-300 rounded-sm mt-1 group-hover:border-[#0658d4] transition" />
                      <span className="font-medium leading-6 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED JOBS */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Related <span className="text-[#0658d4]">Opportunities</span>
          </h2>

          <div className="space-y-14">
            {/* By Industry */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-600 flex items-center justify-center gap-2">
                <Globe size={20} className="text-[#0658d4]" />
                By Industry
              </h3>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {relatedJobs.map((job, index) => (
                  <RelatedJobCard key={index} {...job} />
                ))}
              </div>
            </div>

            {/* By Location */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-600 flex items-center justify-center gap-2">
                <MapPin size={20} className="text-[#0658d4]" />
                By Location
              </h3>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {relatedJobs.map((job, index) => (
                  <RelatedJobCard key={index + 6} {...job} />
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
    <div className="bg-[#EEF4FF] text-[#0658d4] px-4 py-2 rounded-full text-sm font-bold">
      {text}
    </div>
  );
}

function Detail({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-[#0658d4] mt-1">{icon}</div>
      <div>
        <p className="text-sm text-gray-400 font-medium mb-1">{label}</p>
        <p className="font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  );
}

function RelatedJobCard({ title, company, location, salary, type, icon, image }) {
  return (
    <div className="bg-white rounded-[28px] border border-gray-100 overflow-hidden hover:border-[#0658d4] hover:shadow-xl transition-all group cursor-pointer">
      <div className="h-36 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between gap-5">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EEF4FF] flex items-center justify-center text-[#0658d4] shrink-0 group-hover:bg-[#0658d4] group-hover:text-white transition-all">
              {icon}
            </div>

            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
                {type}
              </p>
              <h4 className="text-lg font-bold leading-snug mb-2 text-gray-800 group-hover:text-[#0658d4] transition-colors line-clamp-2">
                {title}
              </h4>

              <div className="flex flex-wrap gap-3 text-gray-500 text-xs font-medium">
                <div className="flex items-center gap-1">
                  <MapPin size={12} className="text-[#0658d4]" />
                  {location}
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase size={12} className="text-[#0658d4]" />
                  {salary}
                </div>
              </div>
            </div>
          </div>

          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#0658d4] transition-all shrink-0">
            <ChevronRight size={18} className="text-gray-400 group-hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
}