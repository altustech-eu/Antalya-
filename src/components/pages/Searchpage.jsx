import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Briefcase,
  ChevronRight,
  SlidersHorizontal,
  Plus,
  Minus,
  ChevronDown,
  Heart,
  Shield,
  GraduationCap,
  Coffee,
  Code,
  Stethoscope,
  Building2,
  Users,
  Clock,
  Search,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  ArrowRight,
  BookOpen,
  FileText,
  MessageCircle,
  Scale,
  ClipboardCheck
} from "lucide-react";

const jobs = [
  {
    id: 1,
    company: "Capital Health Medical Center",
    title: "Registered Nurse - Critical Care",
    location: "Kuwait City",
    salary: "KWD 1,200 - 1,800",
    type: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=900&auto=format&fit=crop",
    icon: <Heart size={20} />,
    description:
      "Join our world-class critical care team. We are seeking dedicated nurses with ICU, CCU, or emergency care experience.",
    benefits: [
      "Tax-free salary",
      "Private health insurance",
      "Annual flight allowance",
      "Housing allowance",
      "Professional development"
    ],
    requirements: [
      "Bachelor's degree in Nursing",
      "Valid nursing license",
      "2+ years critical care experience",
      "BLS and ACLS certification"
    ]
  },
  {
    id: 2,
    company: "SecureTech Solutions",
    title: "Cybersecurity Analyst",
    location: "Kuwait City",
    salary: "KWD 1,800 - 2,500",
    type: "IT & Security",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=900&auto=format&fit=crop",
    icon: <Shield size={20} />,
    description:
      "Protect client infrastructure against cyber threats and support incident monitoring, response, and compliance reporting.",
    benefits: [
      "Competitive salary",
      "Performance bonuses",
      "Certification support",
      "Modern office",
      "Career growth"
    ],
    requirements: [
      "Computer Science degree",
      "3+ years cybersecurity experience",
      "SIEM knowledge",
      "CISSP, CEH, or equivalent preferred"
    ]
  },
  {
    id: 3,
    company: "Global Education Group",
    title: "Secondary School Teacher - Science",
    location: "Salmiya, Kuwait",
    salary: "KWD 1,200 - 1,600",
    type: "Education",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?q=80&w=900&auto=format&fit=crop",
    icon: <GraduationCap size={20} />,
    description:
      "Teach secondary science in a dynamic academic environment with strong curriculum support and professional development.",
    benefits: [
      "Tax-free salary",
      "Housing allowance",
      "Health insurance",
      "Annual tickets",
      "Training support"
    ],
    requirements: [
      "Science or Education degree",
      "Teaching qualification",
      "2+ years teaching experience",
      "Strong classroom management"
    ]
  },
  {
    id: 4,
    company: "Elite Hospitality Group",
    title: "Hospitality Manager - 5-Star Hotel",
    location: "Kuwait City",
    salary: "KWD 1,500 - 2,200",
    type: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=900&auto=format&fit=crop",
    icon: <Coffee size={20} />,
    description:
      "Lead hotel operations and guest service teams for a premium hospitality brand in Kuwait.",
    benefits: [
      "Accommodation allowance",
      "Health insurance",
      "Meal allowance",
      "Career advancement",
      "Bonus potential"
    ],
    requirements: [
      "Hospitality degree",
      "5+ years luxury hotel experience",
      "Leadership skills",
      "Guest service excellence"
    ]
  },
  {
    id: 5,
    company: "Kuwait Tech Solutions",
    title: "Full Stack Developer - Fintech",
    location: "Mirqab, Kuwait City",
    salary: "KWD 1,600 - 2,400",
    type: "IT & Security",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900&auto=format&fit=crop",
    icon: <Code size={20} />,
    description:
      "Build modern fintech applications using React, Node.js, APIs, and secure backend services.",
    benefits: [
      "Competitive salary",
      "Flexible hours",
      "Performance bonus",
      "Modern office",
      "Professional development"
    ],
    requirements: [
      "Computer Science degree",
      "React and Node.js experience",
      "Database knowledge",
      "3+ years development experience"
    ]
  },
  {
    id: 6,
    company: "Gulf Medical Center",
    title: "Physiotherapist - Sports Medicine",
    location: "Hawally, Kuwait",
    salary: "KWD 1,200 - 1,800",
    type: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=900&auto=format&fit=crop",
    icon: <Stethoscope size={20} />,
    description:
      "Support patient rehabilitation, sports injury recovery, therapy planning, and performance improvement.",
    benefits: [
      "Health insurance",
      "Modern facilities",
      "Professional development",
      "Sports clinic environment",
      "Tax-free salary"
    ],
    requirements: [
      "Physiotherapy degree",
      "Valid license",
      "2+ years experience",
      "Sports rehabilitation knowledge"
    ]
  },
  {
    id: 7,
    company: "Al Noor Hospital",
    title: "Medical Laboratory Technician",
    location: "Kuwait City",
    salary: "KWD 850 - 1,200",
    type: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1581093458791-9d42e6e5f0fb?q=80&w=900&auto=format&fit=crop",
    icon: <Stethoscope size={20} />,
    description:
      "Perform laboratory testing, sample handling, equipment maintenance, and diagnostic reporting support.",
    benefits: [
      "Health insurance",
      "Paid leave",
      "Transport allowance",
      "Training support",
      "Stable employment"
    ],
    requirements: [
      "MLT qualification",
      "Lab experience",
      "Attention to detail",
      "Valid professional documentation"
    ]
  },
  {
    id: 8,
    company: "Bright Future School",
    title: "Primary English Teacher",
    location: "Fahaheel, Kuwait",
    salary: "KWD 1,000 - 1,400",
    type: "Education",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=900&auto=format&fit=crop",
    icon: <GraduationCap size={20} />,
    description:
      "Deliver English curriculum to primary students in a supportive international school environment.",
    benefits: [
      "Housing allowance",
      "Annual leave",
      "Medical insurance",
      "Professional development",
      "Air ticket"
    ],
    requirements: [
      "English or Education degree",
      "Teaching certificate",
      "2+ years experience",
      "Strong communication skills"
    ]
  },
  {
    id: 9,
    company: "CyberShield GCC",
    title: "SOC Analyst - Level 1",
    location: "Kuwait City",
    salary: "KWD 1,100 - 1,700",
    type: "IT & Security",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=900&auto=format&fit=crop",
    icon: <Shield size={20} />,
    description:
      "Monitor security alerts, analyze incidents, escalate threats, and support SOC operations.",
    benefits: [
      "Shift allowance",
      "Certification support",
      "Career growth",
      "Health insurance",
      "Performance incentives"
    ],
    requirements: [
      "IT or cybersecurity degree",
      "SOC knowledge",
      "SIEM exposure",
      "Analytical mindset"
    ]
  },
  {
    id: 10,
    company: "Royal Gulf Hotel",
    title: "Front Office Executive",
    location: "Kuwait City",
    salary: "KWD 450 - 750",
    type: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=900&auto=format&fit=crop",
    icon: <Coffee size={20} />,
    description:
      "Handle guest check-ins, reservations, customer service, and front desk operations.",
    benefits: [
      "Accommodation",
      "Meals",
      "Uniform",
      "Service charge",
      "Medical insurance"
    ],
    requirements: [
      "Hospitality experience",
      "English communication",
      "Customer service skills",
      "Professional appearance"
    ]
  },
  {
    id: 11,
    company: "Kuwait Logistics Co.",
    title: "Warehouse Supervisor",
    location: "Shuwaikh, Kuwait",
    salary: "KWD 700 - 1,100",
    type: "Logistics",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop",
    icon: <Briefcase size={20} />,
    description:
      "Manage warehouse operations, inventory movement, dispatch coordination, and team supervision.",
    benefits: [
      "Transport allowance",
      "Overtime",
      "Health insurance",
      "Accommodation support",
      "Annual leave"
    ],
    requirements: [
      "Warehouse experience",
      "Team management",
      "Inventory knowledge",
      "Basic computer skills"
    ]
  },
  {
    id: 12,
    company: "Urban Build Kuwait",
    title: "Civil Site Engineer",
    location: "Ahmadi, Kuwait",
    salary: "KWD 1,000 - 1,600",
    type: "Engineering",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=900&auto=format&fit=crop",
    icon: <Briefcase size={20} />,
    description:
      "Supervise site execution, coordinate contractors, monitor quality, and maintain project documentation.",
    benefits: [
      "Project allowance",
      "Transport",
      "Medical insurance",
      "Career progression",
      "Annual leave"
    ],
    requirements: [
      "Civil Engineering degree",
      "Site experience",
      "AutoCAD knowledge",
      "GCC experience preferred"
    ]
  },
  {
    id: 13,
    company: "Kuwait Finance Hub",
    title: "Accountant",
    location: "Sharq, Kuwait",
    salary: "KWD 800 - 1,300",
    type: "Finance",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=900&auto=format&fit=crop",
    icon: <Briefcase size={20} />,
    description:
      "Manage accounts, reconciliations, invoice processing, reporting, and monthly financial documentation.",
    benefits: [
      "Health insurance",
      "Annual bonus",
      "Professional development",
      "Paid leave",
      "Stable role"
    ],
    requirements: [
      "Accounting degree",
      "ERP experience",
      "Excel skills",
      "2+ years accounting experience"
    ]
  },
  {
    id: 14,
    company: "MedCare Kuwait",
    title: "Radiology Technician",
    location: "Salmiya, Kuwait",
    salary: "KWD 900 - 1,400",
    type: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=900&auto=format&fit=crop",
    icon: <Stethoscope size={20} />,
    description:
      "Perform radiology procedures, prepare patients, maintain imaging equipment, and support diagnostic workflows.",
    benefits: [
      "Medical insurance",
      "Housing support",
      "Annual leave",
      "Training",
      "Tax-free salary"
    ],
    requirements: [
      "Radiology qualification",
      "Relevant license",
      "Imaging experience",
      "Patient care skills"
    ]
  },
  {
    id: 15,
    company: "Gulf Retail Group",
    title: "Sales Executive",
    location: "Avenues Mall, Kuwait",
    salary: "KWD 400 - 750 + Commission",
    type: "Sales",
    image:
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=900&auto=format&fit=crop",
    icon: <Users size={20} />,
    description:
      "Drive retail sales, customer engagement, product presentation, and store-level performance.",
    benefits: [
      "Commission",
      "Incentives",
      "Uniform",
      "Training",
      "Career growth"
    ],
    requirements: [
      "Retail sales experience",
      "Customer service",
      "English communication",
      "Target-driven mindset"
    ]
  },
  {
    id: 16,
    company: "CloudCore Technologies",
    title: "Cloud Support Engineer",
    location: "Kuwait City",
    salary: "KWD 1,400 - 2,100",
    type: "IT & Security",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900&auto=format&fit=crop",
    icon: <Code size={20} />,
    description:
      "Support cloud infrastructure, troubleshoot deployments, manage tickets, and assist enterprise clients.",
    benefits: [
      "Certification support",
      "Hybrid work",
      "Health insurance",
      "Bonus",
      "Career development"
    ],
    requirements: [
      "Cloud knowledge",
      "AWS/Azure basics",
      "Linux skills",
      "Customer support mindset"
    ]
  },
  {
    id: 17,
    company: "Premier Academy Kuwait",
    title: "Mathematics Teacher",
    location: "Hawally, Kuwait",
    salary: "KWD 1,100 - 1,500",
    type: "Education",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=900&auto=format&fit=crop",
    icon: <GraduationCap size={20} />,
    description:
      "Teach mathematics, prepare lesson plans, assess student progress, and support academic development.",
    benefits: [
      "Housing allowance",
      "Health insurance",
      "Annual tickets",
      "Paid leave",
      "Training"
    ],
    requirements: [
      "Mathematics degree",
      "Teaching certificate",
      "2+ years experience",
      "Curriculum knowledge"
    ]
  },
  {
    id: 18,
    company: "Kuwait Facility Services",
    title: "Maintenance Technician",
    location: "Farwaniya, Kuwait",
    salary: "KWD 350 - 600",
    type: "Skilled Labor",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=900&auto=format&fit=crop",
    icon: <Briefcase size={20} />,
    description:
      "Perform building maintenance, equipment checks, repair coordination, and facility support tasks.",
    benefits: [
      "Accommodation",
      "Transport",
      "Overtime",
      "Medical",
      "Annual leave"
    ],
    requirements: [
      "Maintenance experience",
      "Basic electrical/plumbing skills",
      "Safety awareness",
      "Teamwork"
    ]
  },
  {
    id: 19,
    company: "FoodWorks Kuwait",
    title: "Restaurant Supervisor",
    location: "Salmiya, Kuwait",
    salary: "KWD 500 - 850",
    type: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=900&auto=format&fit=crop",
    icon: <Coffee size={20} />,
    description:
      "Supervise restaurant operations, service quality, staff schedules, and customer satisfaction.",
    benefits: [
      "Meals",
      "Service charge",
      "Accommodation",
      "Medical insurance",
      "Growth opportunities"
    ],
    requirements: [
      "Restaurant experience",
      "Team supervision",
      "Customer service",
      "English communication"
    ]
  },
  {
    id: 20,
    company: "Digital Defense Kuwait",
    title: "Network Security Engineer",
    location: "Kuwait City",
    salary: "KWD 1,700 - 2,600",
    type: "IT & Security",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop",
    icon: <Shield size={20} />,
    description:
      "Design and manage network security controls, firewalls, vulnerability remediation, and secure connectivity.",
    benefits: [
      "High salary package",
      "Certifications",
      "Performance bonus",
      "Health insurance",
      "Career track"
    ],
    requirements: [
      "Network security experience",
      "Firewall knowledge",
      "CCNA/CCNP preferred",
      "Security operations exposure"
    ]
  },
  {
    id: 21,
    company: "Al Safat Business Services",
    title: "HR Coordinator",
    location: "Kuwait City",
    salary: "KWD 650 - 950",
    type: "Administration",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=900&auto=format&fit=crop",
    icon: <Building2 size={20} />,
    description:
      "Support recruitment coordination, onboarding, employee files, attendance, and HR administration.",
    benefits: [
      "Office role",
      "Health insurance",
      "Paid leave",
      "Professional growth",
      "Stable schedule"
    ],
    requirements: [
      "HR or business degree",
      "Admin experience",
      "Communication skills",
      "MS Office knowledge"
    ]
  },
  {
    id: 22,
    company: "Gulf Engineering Consultants",
    title: "Mechanical Engineer",
    location: "Fahaheel, Kuwait",
    salary: "KWD 1,100 - 1,700",
    type: "Engineering",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=900&auto=format&fit=crop",
    icon: <Briefcase size={20} />,
    description:
      "Support mechanical design, installation review, site coordination, and project quality documentation.",
    benefits: [
      "Project allowance",
      "Medical insurance",
      "Transport",
      "Annual leave",
      "Career growth"
    ],
    requirements: [
      "Mechanical Engineering degree",
      "Site/project experience",
      "Drawing review skills",
      "GCC experience preferred"
    ]
  },
  {
    id: 23,
    company: "Kuwait Customer Care Centre",
    title: "Customer Service Representative",
    location: "Kuwait City",
    salary: "KWD 350 - 600",
    type: "Customer Service",
    image:
      "https://images.unsplash.com/photo-1553484771-371a605b060b?q=80&w=900&auto=format&fit=crop",
    icon: <Users size={20} />,
    description:
      "Handle inbound customer queries, service requests, follow-ups, and customer satisfaction support.",
    benefits: [
      "Training",
      "Incentives",
      "Medical insurance",
      "Career progression",
      "Stable shifts"
    ],
    requirements: [
      "Good communication",
      "Customer handling skills",
      "Basic computer knowledge",
      "English required"
    ]
  },
  {
    id: 24,
    company: "Kuwait Petroleum Services",
    title: "HSE Officer",
    location: "Ahmadi, Kuwait",
    salary: "KWD 900 - 1,500",
    type: "Oil & Gas",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=900&auto=format&fit=crop",
    icon: <Shield size={20} />,
    description:
      "Monitor safety compliance, conduct inspections, report incidents, and support workplace safety programs.",
    benefits: [
      "Site allowance",
      "Transport",
      "Health insurance",
      "Annual leave",
      "Training"
    ],
    requirements: [
      "HSE certification",
      "NEBOSH preferred",
      "Site safety experience",
      "Strong reporting skills"
    ]
  }
];

const faqs = [
  {
    q: "What types of jobs does Antalya Manpower offer in Kuwait?",
    a: "Antalya supports recruitment across Healthcare, Education, Hospitality, IT & Cybersecurity, Skilled Labor, Administration, and related professional sectors."
  },
  {
    q: "How do I apply for a job through Antalya Manpower?",
    a: "You can apply by submitting your CV, selecting a matching role, and completing the screening process with our recruitment team."
  },
  {
    q: "What are the requirements for working in Kuwait?",
    a: "Requirements depend on the role, but usually include education certificates, experience documents, passport, medical clearance, and employer-specific eligibility."
  },
  {
    q: "Do you offer visa sponsorship for international candidates?",
    a: "Visa sponsorship depends on the employer and role. Our team will guide shortlisted candidates through employer confirmation, documentation, and mobility steps."
  },
  {
    q: "What industries do you specialize in?",
    a: "Our core sectors include Healthcare, Education, Hospitality, IT & Cybersecurity, Skilled Labor, Facility Management, and Administration."
  },
  {
    q: "How long does the recruitment process typically take?",
    a: "Timelines vary by employer, sector, document readiness, and visa process. Shortlisted candidates are guided stage by stage."
  },
  {
    q: "What benefits can I expect in a Kuwaiti job?",
    a: "Benefits can include salary, accommodation or housing allowance, medical insurance, annual leave, travel benefits, and employer-specific perks."
  }
];

const industries = [
  {
    name: "Healthcare",
    icon: <Stethoscope size={68} strokeWidth={1.7} />,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    overlay: "bg-[#0658d4]/65"
  },
  {
    name: "IT & Cybersecurity",
    icon: <Shield size={68} strokeWidth={1.7} />,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    overlay: "bg-black/45"
  },
  {
    name: "Education",
    icon: <GraduationCap size={72} strokeWidth={1.7} />,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    overlay: "bg-black/35"
  },
  {
    name: "Hospitality",
    icon: <Coffee size={70} strokeWidth={1.7} />,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    overlay: "bg-black/35"
  },
  {
    name: "Skilled Labor",
    icon: <Users size={70} strokeWidth={1.7} />,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    overlay: "bg-black/45"
  },
  {
    name: "Administration",
    icon: <Building2 size={70} strokeWidth={1.7} />,
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
    overlay: "bg-[#0658d4]/55"
  },
  {
    name: "Sales",
    icon: <Briefcase size={70} strokeWidth={1.7} />,
    image:
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=1200&auto=format&fit=crop",
    overlay: "bg-[#0658d4]/55"
  }
];

const adviceLinks = [
  {
    title: "CV Templates",
    desc: "Create a stronger CV using practical recruiter-backed guidance.",
    icon: <FileText size={28} />
  },
  {
    title: "Interview Questions",
    desc: "Prepare for employer interviews with role-specific practice questions.",
    icon: <MessageCircle size={28} />
  },
  {
    title: "Assessment Centres",
    desc: "Understand screening, selection rounds, and employer evaluation methods.",
    icon: <ClipboardCheck size={28} />
  },
  {
    title: "Industry Profiles",
    desc: "Browse detailed sector profiles tailored to your career pathway.",
    icon: <Briefcase size={28} />
  },
  {
    title: "How To Find a Job",
    desc: "Discover smart strategies to navigate the Kuwait and GCC job market.",
    icon: <Search size={28} />
  },
  {
    title: "Employment Rights",
    desc: "Know the basics of contracts, pay, benefits, and worker protections.",
    icon: <Scale size={28} />
  }
];

function JobCard({ job, selectedJob, setSelectedJob }) {
  return (
    <div
      onClick={() => setSelectedJob(job)}
      className={`group cursor-pointer rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-xl ${
        selectedJob.id === job.id
          ? "border-[#0658d4] ring-2 ring-[#0658d4]/15"
          : "border-gray-200"
      }`}
    >
      <div className="flex min-h-[110px] gap-5">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-tl-full rounded-bl-full bg-gray-100 text-[#d9d9d9]">
          {job.icon}
        </div>

        <div>
          <p className="mb-2 text-base font-medium text-[#202533]">
            {job.company}
          </p>

          <h3 className="line-clamp-2 text-[22px] font-medium leading-[1.15] tracking-[-0.02em] text-[#202533]">
            {job.title}
          </h3>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-200 pt-5">
        <div className="flex items-center justify-between gap-3 text-sm font-medium text-[#48515f]">
          <div className="flex flex-wrap gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin size={15} className="text-[#5b6877]" />
              {job.location}
            </span>

            <span className="flex items-center gap-1.5">
              <Briefcase size={15} className="text-[#5b6877]" />
              {job.salary}
            </span>
          </div>

          <ChevronRight size={22} className="shrink-0 text-[#5b6877] transition-transform group-hover:translate-x-1 group-hover:text-[#0658d4]" />
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[#f4f4f4] px-6 py-24 font-['Inter',sans-serif] md:py-32">
      <div className="mx-auto max-w-[980px] text-center">
        <h2 className="text-5xl font-black leading-tight tracking-[-0.055em] text-black md:text-6xl lg:text-[72px]">
          Graduate jobs FAQs
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-[24px] leading-[1.2] tracking-[-0.02em] text-[#202533] md:text-[30px]">
          Find clear answers to common questions about jobs in Kuwait and how
          Antalya can support your job search.
        </p>

        <div className="mt-20 text-left">
          {faqs.map((item, index) => (
            <div key={item.q} className="border-b border-gray-300">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-6 py-8 text-left"
              >
                <span className="text-[24px] font-normal tracking-[-0.02em] text-[#202533] md:text-[30px]">
                  {item.q}
                </span>

                {openIndex === index ? (
                  <Minus size={24} className="shrink-0 text-[#202533]" />
                ) : (
                  <Plus size={24} className="shrink-0 text-[#202533]" />
                )}
              </button>

              {openIndex === index && (
                <p className="max-w-3xl pb-8 text-[18px] leading-[1.6] text-[#48515f]">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14">
          <p className="mb-6 text-[22px] font-medium text-[#202533]">
            Ready to take the next step?
          </p>

          <button className="rounded-full bg-[#0658d4] px-10 py-5 text-lg font-bold text-white transition-all hover:bg-[#0547aa]">
            Register free
          </button>
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ industry }) {
  return (
    <article className="group relative h-[430px] min-w-[390px] cursor-pointer overflow-hidden rounded-[26px] bg-gray-200 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:min-w-[520px]">
      <img
        src={industry.image}
        alt={industry.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className={`absolute inset-0 ${industry.overlay}`}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

      <div className="absolute bottom-10 left-8 right-8 text-white">
        <div className="mb-4 text-white">{industry.icon}</div>

        <h3 className="text-[34px] font-black leading-[0.95] tracking-[-0.04em] md:text-[38px]">
          {industry.name}
        </h3>
      </div>
    </article>
  );
}

function IndustryCarousel() {
  const industryRef = useRef(null);

  useEffect(() => {
    const slider = industryRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      if (slider.scrollLeft >= maxScroll - 10) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: 520, behavior: "smooth" });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    industryRef.current?.scrollBy({ left: -560, behavior: "smooth" });
  };

  const scrollRight = () => {
    industryRef.current?.scrollBy({ left: 560, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[#f4f4f4] px-6 py-24 font-['Inter',sans-serif] md:py-32">
      <div className="mx-auto mb-16 max-w-5xl text-center">
        <h2 className="text-5xl font-black leading-tight tracking-[-0.055em] text-black md:text-6xl lg:text-[64px]">
          Explore graduate jobs by industry
        </h2>

        <p className="mx-auto mt-5 max-w-4xl text-[24px] font-normal leading-[1.18] tracking-[-0.02em] text-[#202533] md:text-[30px]">
          Not sure what to search for next? Browse popular job sectors to
          discover roles that match your interests and background.
        </p>
      </div>

      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-3 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-md transition-all hover:bg-[#0658d4]"
          aria-label="Previous industry"
        >
          <ChevronLeft size={36} strokeWidth={3} />
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-3 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-md transition-all hover:bg-[#0658d4]"
          aria-label="Next industry"
        >
          <ChevronRightIcon size={36} strokeWidth={3} />
        </button>

        <div
          ref={industryRef}
          className="scrollbar-hide flex gap-24 overflow-x-auto scroll-smooth px-[8vw] pb-6"
        >
          {industries.map((industry) => (
            <IndustryCard key={industry.name} industry={industry} />
          ))}
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <button className="group flex items-center gap-2 rounded-full bg-[#0658d4] px-10 py-5 text-lg font-bold text-white transition-all hover:bg-[#0547aa]">
          All industries
          <ArrowRight
            size={20}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>
    </section>
  );
}

function CareerAdviceSection() {
  return (
    <section className="bg-white px-6 py-24 font-['Inter',sans-serif] md:py-32">
      <div className="mx-auto max-w-[1320px]">
        <h2 className="text-5xl font-black leading-tight tracking-[-0.055em] text-black md:text-6xl lg:text-[62px]">
          Expert career advice for job seekers
        </h2>

        <div className="mt-9 border-t-2 border-black pt-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_2fr]">
            <div>
              <p className="max-w-[420px] text-[24px] font-medium leading-[1.25] tracking-[-0.02em] text-black md:text-[28px]">
                Practical guidance to help you write stronger CVs, prepare for
                interviews, and confidently apply for jobs in Kuwait.
              </p>

              <button className="mt-8 flex items-center gap-2 rounded-full bg-[#0658d4] px-9 py-4 text-lg font-bold text-white transition-all hover:bg-[#0547aa]">
                All career advice
                <BookOpen size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
              {adviceLinks.map((item) => (
                <a
                  key={item.title}
                  href="/career-advice"
                  className="group grid grid-cols-[1fr_auto] gap-6"
                >
                  <div>
                    <h3 className="text-[26px] font-medium tracking-[-0.03em] text-black">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-[360px] text-[16px] leading-[1.45] text-[#202533]">
                      {item.desc}
                    </p>
                  </div>

                  <ArrowRight
                    size={44}
                    strokeWidth={2.5}
                    className="mt-1 text-[#0658d4] transition-transform group-hover:translate-x-2"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function GraduateJobsPage() {
  const [selectedJob, setSelectedJob] = useState(jobs[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewJob = () => {
    const safeJobData = {
      id: selectedJob.id,
      company: selectedJob.company,
      title: selectedJob.title,
      location: selectedJob.location,
      salary: selectedJob.salary,
      type: selectedJob.type,
      image: selectedJob.image,
      description: selectedJob.description,
      benefits: selectedJob.benefits,
      requirements: selectedJob.requirements
    };

    navigate("/jdpage", {
      state: {
        job: safeJobData
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4] pt-20 font-['Inter',sans-serif] text-[#202533] md:pt-24">
      {/* SECTION 1: HEADER */}
      <section className="border-l-[4px] border-[#0658d4] bg-white">
        <div className="mx-auto max-w-[1800px] px-6 py-5">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
            <div>
              <h1 className="text-[32px] font-black leading-tight tracking-[-0.04em] text-black md:text-[42px]">
                Graduate jobs search
              </h1>

              <p className="mt-2 text-[17px] leading-snug text-[#202533]">
                Search and discover exclusive jobs tailored to your career goals.
              </p>

              <button className="mt-2 flex items-center gap-1 text-[16px] font-medium text-[#202533]">
                Learn more
                <ChevronDown size={17} />
              </button>
            </div>

            <div className="text-sm font-medium text-[#202533]">
              <span className="font-bold text-[#0658d4]">Home</span>
              <span className="mx-1">»</span>
              Graduate Jobs
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FILTER BAR */}
      <section className="border-l-[4px] border-[#0658d4] bg-white">
        <div className="mx-auto flex max-w-[1800px] flex-col gap-5 border-t border-gray-100 px-6 py-7 lg:flex-row lg:items-center">
          <div className="flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-3 rounded-full bg-[#0658d4] px-8 py-4 text-[18px] font-bold text-white">
              Filters
              <SlidersHorizontal size={18} />
            </button>

            <span className="text-[18px] font-medium text-[#202533]">
              {filteredJobs.length} job matches
            </span>

            <button
              onClick={() => setSearchTerm("")}
              className="rounded-xl bg-gray-200 px-4 py-2 text-sm font-medium text-[#202533]"
            >
              Reset
            </button>
          </div>

          <div className="flex flex-col gap-4 lg:ml-auto lg:flex-row lg:items-center">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-full border border-gray-300 bg-white px-11 py-3 text-[16px] outline-none transition focus:border-[#0658d4] lg:w-[280px]"
              />
            </div>

            <button className="flex min-w-[230px] items-center justify-between rounded-full border border-gray-300 bg-white px-6 py-3 text-[16px] font-medium">
              Sort by
              <ChevronDown size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: JOB SEARCH BODY */}
      <section className="mx-auto max-w-[1800px] px-6 py-8">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1fr_1.05fr]">
          {/* LEFT SIDE - SCROLLABLE JOB LIST */}
          <div className="max-h-[calc(100vh-150px)] overflow-y-auto pr-2 scrollbar-hide">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    selectedJob={selectedJob}
                    setSelectedJob={setSelectedJob}
                  />
                ))
              ) : (
                <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center md:col-span-2">
                  <Briefcase className="mx-auto mb-4 h-12 w-12 text-gray-300" />
                  <h3 className="text-xl font-semibold text-gray-600">
                    No jobs found
                  </h3>
                  <p className="text-gray-400">Try adjusting your search criteria</p>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDE - FIXED DETAIL PANEL */}
          <div className="xl:sticky xl:top-28 xl:h-[calc(100vh-130px)]">
            <div className="h-full overflow-y-auto rounded-2xl border border-gray-200 bg-white p-8 scrollbar-hide">
              <div className="flex items-start justify-between gap-6 border-b border-gray-200 pb-8">
                <div className="flex items-start gap-5">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-tl-full rounded-bl-full bg-gray-100 text-[#d9d9d9]">
                    {selectedJob.icon}
                  </div>

                  <div>
                    <h3 className="text-[26px] font-medium tracking-[-0.02em] text-[#202533]">
                      {selectedJob.company}
                    </h3>

                    <p className="mt-1 text-sm text-[#48515f]">
                      Updated: March 16, 2026
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleViewJob}
                  className="hidden rounded-full bg-[#0658d4] px-7 py-4 text-base font-bold text-white transition hover:bg-[#0547aa] md:flex"
                >
                  View job ↗
                </button>
              </div>

              <div className="py-9">
                <h2 className="text-[32px] font-black leading-tight tracking-[-0.04em] text-[#202533] md:text-[40px]">
                  {selectedJob.title}
                </h2>

                <div className="mt-5 flex items-center gap-3 text-sm font-black uppercase tracking-[0.22em] text-[#202533]">
                  <Clock size={16} />
                  22 days left to apply
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full bg-[#003b72] px-5 py-3 text-sm font-bold text-white">
                    Graduate
                  </span>

                  <span className="rounded-full bg-[#4f3c96] px-5 py-3 text-sm font-bold text-white">
                    {selectedJob.type}
                  </span>

                  <span className="rounded-full bg-[#77b77a] px-5 py-3 text-sm font-bold text-white">
                    {selectedJob.location}
                  </span>

                  <span className="rounded-full bg-[#c5aa57] px-5 py-3 text-sm font-bold text-white">
                    {selectedJob.salary}
                  </span>
                </div>

                <div className="mt-8 space-y-7 text-[20px] leading-[1.45] text-[#202533]">
                  <p>{selectedJob.description}</p>

                  <p>
                    Working with committed employers, you will gain early
                    responsibility and broad experience across the full employment
                    lifecycle. Antalya supports candidates with structured guidance
                    from role discovery to employer engagement.
                  </p>

                  <div>
                    <h3 className="mb-4 text-[20px] font-black">Benefits:</h3>

                    <ul className="list-disc space-y-3 pl-6">
                      {selectedJob.benefits.map((benefit) => (
                        <li key={benefit}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-4 text-[20px] font-black">
                      Requirements:
                    </h3>

                    <ul className="list-disc space-y-2 pl-6">
                      {selectedJob.requirements.map((req) => (
                        <li key={req}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-4 text-[20px] font-black">How to Apply</h3>

                    <p>
                      If you are interested in this opportunity, submit your CV and
                      our recruitment team will guide you through the next steps.
                      Apply today to move your career forward.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleViewJob}
                  className="mt-12 rounded-full bg-[#0658d4] px-20 py-5 text-lg font-bold text-white transition hover:bg-[#0547aa]"
                >
                  View job ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <IndustryCarousel />
      <CareerAdviceSection />

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}