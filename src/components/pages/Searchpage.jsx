import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Briefcase,
  ChevronRight,
  SlidersHorizontal,
  Plus,
  ChevronDown,
  Heart,
  Shield,
  GraduationCap,
  Coffee,
  Code,
  Stethoscope,
  Building2,
  Users,  
  Globe,
  Clock,
  DollarSign,
  Search
} from "lucide-react";

const jobs = [
  {
    id: 1,
    company: "Capital Health Medical Center",
    title: "Registered Nurse - Critical Care",
    location: "Kuwait City",
    salary: "KWD 1,200 - 1,800",
    type: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
    icon: <Heart size={20} />,
    description: "Join our world-class critical care team at Capital Health Medical Center. We are seeking dedicated nurses with experience in ICU, CCU, or emergency care to provide exceptional patient care in a state-of-the-art facility.",
    benefits: [
      "Competitive tax-free salary",
      "Private health insurance",
      "Annual flight allowance",
      "Housing allowance",
      "Professional development opportunities"
    ],
    requirements: [
      "Bachelor's degree in Nursing",
      "Valid nursing license",
      "2+ years of critical care experience",
      "BLS and ACLS certification",
      "Excellent communication skills"
    ]
  },
  {
    id: 2,
    company: "SecureTech Solutions",
    title: "Cybersecurity Analyst",
    location: "Kuwait City",
    salary: "KWD 1,800 - 2,500",
    type: "IT & Security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop",
    icon: <Shield size={20} />,
    description: "SecureTech Solutions is looking for a talented Cybersecurity Analyst to join our growing team in Kuwait City. You will be responsible for protecting our clients' digital infrastructure against evolving cyber threats.",
    benefits: [
      "Competitive salary package",
      "Performance bonuses",
      "Professional certification support",
      "Modern office environment",
      "Career growth opportunities"
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of cybersecurity experience",
      "Certifications (CISSP, CEH, or equivalent)",
      "Knowledge of SIEM tools and threat intelligence",
      "Strong analytical skills"
    ]
  },
  {
    id: 3,
    company: "Global Education Group",
    title: "Secondary School Teacher - Science",
    location: "Salmiya, Kuwait",
    salary: "KWD 1,200 - 1,600",
    type: "Education",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?q=80&w=600&auto=format&fit=crop",
    icon: <GraduationCap size={20} />,
    description: "Global Education Group is seeking passionate and qualified Science teachers for our secondary school in Salmiya. Join a dynamic educational environment that fosters academic excellence and student growth.",
    benefits: [
      "Tax-free salary",
      "Housing allowance",
      "Health insurance",
      "Annual flight tickets",
      "Professional development"
    ],
    requirements: [
      "Bachelor's degree in Science or Education",
      "Teaching certification (PGCE or equivalent)",
      "2+ years of teaching experience",
      "Experience with British or American curriculum",
      "Strong classroom management skills"
    ]
  },
  {
    id: 4,
    company: "Elite Hospitality Group",
    title: "Hospitality Manager - 5-Star Hotel",
    location: "Kuwait City",
    salary: "KWD 1,500 - 2,200",
    type: "Hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
    icon: <Coffee size={20} />,
    description: "Elite Hospitality Group is looking for an experienced Hospitality Manager to oversee operations at our premier 5-star hotel in Kuwait City. Lead a team of professionals dedicated to delivering exceptional guest experiences.",
    benefits: [
      "Competitive salary",
      "Accommodation allowance",
      "Health insurance",
      "Meal allowance",
      "Career advancement"
    ],
    requirements: [
      "Bachelor's degree in Hospitality Management",
      "5+ years of experience in luxury hospitality",
      "Proven leadership skills",
      "Excellent communication and interpersonal skills",
      "Arabic language skills preferred"
    ]
  },
  {
    id: 5,
    company: "Kuwait Tech Solutions",
    title: "Full Stack Developer - Fintech",
    location: "Mirqab, Kuwait City",
    salary: "KWD 1,600 - 2,400",
    type: "IT & Security",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
    icon: <Code size={20} />,
    description: "Kuwait Tech Solutions is seeking a talented Full Stack Developer to join our fintech team. Work on cutting-edge financial technology solutions that are transforming the banking and finance sector in Kuwait.",
    benefits: [
      "Competitive salary",
      "Performance bonuses",
      "Flexible working hours",
      "Professional development",
      "Modern office with amenities"
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of full stack development experience",
      "Proficiency in JavaScript, React, Node.js",
      "Experience with databases (MongoDB, PostgreSQL)",
      "Knowledge of financial systems is a plus"
    ]
  },
  {
    id: 6,
    company: "Gulf Medical Center",
    title: "Physiotherapist - Sports Medicine",
    location: "Hawally, Kuwait",
    salary: "KWD 1,200 - 1,800",
    type: "Healthcare",
    image: "https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=600&auto=format&fit=crop",
    icon: <Stethoscope size={20} />,
    description: "Gulf Medical Center is seeking a skilled Physiotherapist specializing in sports medicine to join our rehabilitation team. Help athletes and patients recover from injuries and achieve optimal physical performance.",
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Professional development",
      "Modern facilities",
      "Sports clinic environment"
    ],
    requirements: [
      "Bachelor's degree in Physiotherapy",
      "Valid license to practice",
      "2+ years of experience in sports rehabilitation",
      "Knowledge of manual therapy and exercise prescription",
      "Passion for sports and fitness"
    ]
  }
];

const faqs = [
  "What types of jobs does Antalya Manpower offer in Kuwait?",
  "How do I apply for a job through Antalya Manpower?",
  "What are the requirements for working in Kuwait?",
  "Do you offer visa sponsorship for international candidates?",
  "What industries do you specialize in?",
  "How long does the recruitment process typically take?",
  "What benefits can I expect in a Kuwaiti job?",
  "Do you provide accommodation for employees?"
];

const industries = [
  {
    name: "Healthcare",
    icon: <Heart size={32} />,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    color: "from-blue-500 to-blue-700"
  },
  {
    name: "IT & Cybersecurity",
    icon: <Shield size={32} />,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    color: "from-purple-500 to-purple-700"
  },
  {
    name: "Education",
    icon: <GraduationCap size={32} />,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?q=80&w=800&auto=format&fit=crop",
    color: "from-green-500 to-green-700"
  },
  {
    name: "Hospitality",
    icon: <Coffee size={32} />,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    color: "from-orange-500 to-orange-700"
  },
  {
    name: "Skilled Labor",
    icon: <Users size={32} />,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    color: "from-red-500 to-red-700"
  },
  {
    name: "Administration",
    icon: <Building2 size={32} />,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
    color: "from-teal-500 to-teal-700"
  }
];

export default function GraduateJobsPage() {
  const [selectedJob, setSelectedJob] = useState(jobs[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewJob = () => {
    navigate("/job-description", { state: { job: selectedJob } });
  };

  return (
    <div className="bg-[#f5f5f5] min-h-screen text-[#111827] font-['Inter',sans-serif] pt-20 md:pt-24">
      {/* HERO */}
      <section className="border-b border-gray-200 bg-[#0658d4] text-white">
        <div className="max-w-[1600px] mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-white/70 tracking-wider uppercase">
                  Antalya For Recruiting Manpower LLC
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-3">
                Job Opportunities in <span className="text-[#f29100]">Kuwait</span>
              </h1>
              <p className="text-white/80 text-lg max-w-2xl">
                Discover exclusive career opportunities across Healthcare, IT, Education, and Hospitality sectors in Kuwait and the GCC.
              </p>
            </div>

            <div className="text-sm text-white/60">
              Home <span className="mx-2">›</span> Careers <span className="mx-2">›</span> Job Search
            </div>
          </div>

          {/* FILTER BAR */}
          <div className="mt-10 flex flex-col lg:flex-row lg:items-center gap-5">
            <div className="flex items-center gap-4">
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition text-white rounded-full px-7 py-4 font-semibold flex items-center gap-3 border border-white/20">
                <SlidersHorizontal size={18} />
                Filters
              </button>

              <div className="text-white/80 text-lg">
                <span className="font-semibold text-white">{filteredJobs.length}</span> job matches
              </div>

              <button className="bg-white/5 text-white/60 hover:bg-white/10 transition px-4 py-2 rounded-xl text-sm border border-white/10">
                Reset
              </button>
            </div>

            <div className="lg:ml-auto flex items-center gap-4 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-64">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input 
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-11 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition"
                />
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 flex items-center gap-3 min-w-[160px] justify-between cursor-pointer hover:bg-white/20 transition">
                <span className="text-sm text-white/70">Sort by</span>
                <ChevronDown size={16} className="text-white/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOBS */}
      <section className="max-w-[1600px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          {/* LEFT JOB GRID */}
          <div className="xl:col-span-6 grid md:grid-cols-2 gap-5">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className={`bg-white rounded-2xl border overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    selectedJob.id === job.id
                      ? "border-[#0658d4] shadow-md ring-2 ring-[#0658d4]/20"
                      : "border-gray-200"
                  }`}
                >
                  <div className="h-32 overflow-hidden">
                    <img 
                      src={job.image} 
                      alt={job.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between gap-4">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#EEF4FF] flex items-center justify-center text-[#0658d4] shrink-0">
                          {job.icon}
                        </div>

                        <div>
                          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">
                            {job.company}
                          </p>
                          <h3 className="font-bold text-lg leading-tight max-w-[220px] line-clamp-2">
                            {job.title}
                          </h3>
                        </div>
                      </div>

                      <div className="text-[#0658d4] mt-1">
                        <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>

                    <div className="border-t border-gray-100 mt-4 pt-4 flex flex-wrap gap-4 text-gray-600 text-sm">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-[#0658d4]" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase size={14} className="text-[#0658d4]" />
                        {job.salary}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0658d4]"></div>
                        {job.type}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="md:col-span-2 text-center py-12 bg-white rounded-2xl border border-gray-200">
                <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600">No jobs found</h3>
                <p className="text-gray-400">Try adjusting your search criteria</p>
              </div>
            )}
          </div>

          {/* RIGHT DETAIL PANEL */}
          <div className="xl:col-span-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 sticky top-24 h-[900px] overflow-y-auto">
              {/* Selected Job Image */}
              <div className="rounded-xl overflow-hidden h-48 mb-6">
                <img 
                  src={selectedJob.image} 
                  alt={selectedJob.title}
                  className="w-full h-full object-cover"
                />
                <div className="relative -mt-12 ml-4">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-[#0658d4] border border-gray-100">
                    {selectedJob.icon}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#0658d4] text-xs font-bold uppercase tracking-wider bg-[#EEF4FF] px-3 py-1 rounded-full">
                    {selectedJob.type}
                  </span>
                  <span className="text-gray-400 text-xs flex items-center gap-1">
                    <Clock size={12} />
                    Active
                  </span>
                </div>

                <h2 className="text-3xl font-extrabold leading-tight mb-3">
                  {selectedJob.title}
                </h2>

                <div className="flex flex-wrap gap-4 text-gray-500 text-sm">
                  <span className="flex items-center gap-2">
                    <Building2 size={14} className="text-[#0658d4]" />
                    {selectedJob.company}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#0658d4]" />
                    {selectedJob.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <DollarSign size={14} className="text-[#f29100]" />
                    {selectedJob.salary}
                  </span>
                </div>
              </div>

              <div className="space-y-7 text-[16px] text-gray-700 leading-8 border-t border-gray-100 pt-6">
                <div>
                  <h3 className="font-bold text-xl mb-3 text-gray-800">About the Role</h3>
                  <p>{selectedJob.description}</p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3 text-gray-800">Benefits</h3>
                  <ul className="space-y-2">
                    {selectedJob.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0658d4] mt-2.5 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3 text-gray-800">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#f29100] mt-2.5 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <button 
                    onClick={handleViewJob}
                    className="bg-[#0658d4] hover:bg-[#0547a8] transition text-white px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2 shadow-lg shadow-blue-100"
                  >
                    View Job Details
                    <ChevronRight size={18} />
                  </button>
                  <button className="border-2 border-gray-200 hover:border-[#0658d4] transition text-gray-700 hover:text-[#0658d4] px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2">
                    <Heart size={18} />
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EEF4FF] flex items-center justify-center text-[#0658d4]">
              <Users size={24} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Frequently Asked <span className="text-[#0658d4]">Questions</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-16">
            Find clear answers to common questions about working in Kuwait and the recruitment process.
          </p>

          <div className="bg-[#f8f9fa] rounded-2xl overflow-hidden border border-gray-100">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-gray-100 hover:bg-white transition cursor-pointer group"
              >
                <span className="font-medium text-left text-gray-700 group-hover:text-[#0658d4] transition">
                  {faq}
                </span>
                <Plus size={18} className="text-gray-400 group-hover:text-[#0658d4] transition" />
              </div>
            ))}
          </div>

          <button className="mt-10 bg-[#0658d4] hover:bg-[#0547a8] transition text-white rounded-full px-10 py-4 font-bold shadow-lg shadow-blue-100">
            Register Free
          </button>
        </div>
      </section>

      {/* INDUSTRY */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-[1500px] mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Globe className="w-8 h-8 text-[#0658d4]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Explore Jobs by <span className="text-[#0658d4]">Industry</span>
          </h2>
          <p className="text-gray-500 mb-16 text-lg max-w-2xl mx-auto">
            Browse popular sectors to discover matching career opportunities in Kuwait and the GCC.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="h-[280px] rounded-3xl overflow-hidden relative group cursor-pointer"
              >
                <img 
                  src={industry.image} 
                  alt={industry.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-80 group-hover:opacity-90 transition`} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                <div className="absolute bottom-8 left-8 text-left text-white">
                  <div className="mb-3 p-3 bg-white/10 backdrop-blur-sm rounded-2xl w-fit border border-white/20">
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{industry.name}</h3>
                  <p className="text-white/70 text-sm mt-1">View opportunities →</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-12 bg-[#0658d4] hover:bg-[#0547a8] transition text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-blue-100">
            All Industries
          </button>
        </div>
      </section>
    </div>
  );
}