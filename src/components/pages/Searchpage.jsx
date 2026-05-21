import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Added for navigation
import {
  MapPin,
  Briefcase,
  ChevronRight,
  SlidersHorizontal,
  Plus,
  ChevronDown,
} from "lucide-react";

const jobs = [
  {
    id: 1,
    company: "The GRB Team",
    title: "Graduate Software Engineer – BI Software",
    location: "Hertfordshire",
    salary: "£50,000",
  },
  {
    id: 2,
    company: "The GRB Team",
    title: "Graduate Software Engineer – Summer 2026",
    location: "Surrey",
    salary: "£43,000",
  },
  {
    id: 3,
    company: "The GRB Team",
    title: "Graduate SaaS Software Sales Associate",
    location: "Central London",
    salary: "£38,000 OTE",
  },
  {
    id: 4,
    company: "The GRB Team",
    title: "Graduate JavaScript Developer",
    location: "Somerset",
    salary: "£30,000",
  },
  {
    id: 5,
    company: "The GRB Team",
    title: "Graduate Electronics Engineering Consultant",
    location: "Nr Cambridge",
    salary: "£36,000",
  },
  {
    id: 6,
    company: "The GRB Team",
    title: "Graduate Technical Systems Manager",
    location: "London",
    salary: "£30,000",
  },
  {
    id: 7,
    company: "Sigma Labs",
    title: "Graduate Technical Consultant",
    location: "London",
    salary: "£30,000",
  },
  {
    id: 8,
    company: "The GRB Team",
    title: "Graduate Data Analyst",
    location: "Soho, Piccadilly",
    salary: "£35,000",
  },
];

const faqs = [
  "What are graduate jobs?",
  "When should I start applying for graduate jobs?",
  "Can I get a graduate job with no experience?",
  "What types of graduate jobs are available in the UK?",
  "How does GRB help me find a graduate job?",
  "What salary can I expect in a graduate job?",
];

export default function GraduateJobsPage() {
  const [selectedJob, setSelectedJob] = useState(jobs[0]);
  const navigate = useNavigate(); // Initialized navigate hook

  // Function to handle redirection
  const handleViewJob = () => {
    // Navigates to the description page. 
    // You can also pass state if you want the next page to have the job data
    navigate("/jdpage", { state: { job: selectedJob } });
  };

  return (
    <div className="bg-[#f7f7f7] min-h-screen text-[#111827] font-sans">
      {/* HERO */}
      <section className="border-b border-gray-200 bg-[#f4f4f4]">
        <div className="max-w-[1600px] mx-auto px-6 py-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-5xl font-bold tracking-tight mb-3">
                Graduate jobs search
              </h1>

              <p className="text-gray-600 text-lg max-w-2xl">
                Search and discover exclusive graduate jobs tailored to your
                degree and career goals.
              </p>
            </div>

            <div className="text-sm text-gray-400">
              Home <span className="mx-2">›</span> Graduate Jobs
            </div>
          </div>

          {/* FILTER BAR */}
          <div className="mt-10 flex flex-col lg:flex-row lg:items-center gap-5">
            <div className="flex items-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 transition text-white rounded-full px-7 py-4 font-semibold flex items-center gap-3">
                <SlidersHorizontal size={18} />
                Filters
              </button>

              <div className="text-gray-600 text-lg">
                <span className="font-semibold">24</span> job matches
              </div>

              <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-xl text-sm">
                Reset
              </button>
            </div>

            <div className="lg:ml-auto">
              <div className="bg-white border border-gray-200 rounded-xl px-5 py-3 flex items-center gap-3 min-w-[220px] justify-between">
                <span className="text-sm text-gray-500">Sort by</span>
                <ChevronDown size={16} />
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
            {jobs.map((job) => (
              <div
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className={`bg-white rounded-2xl border p-7 cursor-pointer transition-all duration-200 hover:shadow-md ${
                  selectedJob.id === job.id
                    ? "border-blue-500 shadow-md"
                    : "border-gray-200"
                }`}
              >
                <div className="flex justify-between gap-4">
                  <div className="flex gap-5">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex-shrink-0" />

                    <div>
                      <p className="text-sm text-gray-500 mb-2">
                        {job.company}
                      </p>

                      <h3 className="font-semibold text-[26px] leading-tight max-w-[260px]">
                        {job.title}
                      </h3>
                    </div>
                  </div>

                  <ChevronRight className="text-gray-300 mt-2" size={22} />
                </div>

                <div className="border-t border-gray-100 mt-7 pt-5 flex gap-6 text-gray-600 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin size={15} />
                    {job.location}
                  </div>

                  <div className="flex items-center gap-2">
                    <Briefcase size={15} />
                    {job.salary}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT DETAIL PANEL */}
          <div className="xl:col-span-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-10 sticky top-6 h-[900px] overflow-y-auto">
              <div className="mb-8">
                <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-3">
                  26 days left to apply
                </p>

                <h2 className="text-4xl font-bold leading-tight mb-4">
                  {selectedJob.title}
                </h2>

                <div className="flex gap-6 text-gray-500 text-sm">
                  <span className="flex items-center gap-2">
                    <MapPin size={15} />
                    {selectedJob.location}
                  </span>

                  <span className="flex items-center gap-2">
                    <Briefcase size={15} />
                    {selectedJob.salary}
                  </span>
                </div>
              </div>

              <div className="space-y-7 text-[17px] text-gray-700 leading-8">
                <p>
                  A world leader in Business Intelligence and analytical
                  solutions, this company are currently seeking bright software
                  engineers to join their growing development team.
                </p>

                <p>
                  Working with highly talented and committed developers, you
                  will gain early responsibility and work on projects at the
                  forefront of applied AI and modern software engineering.
                </p>

                <div>
                  <h3 className="font-bold text-2xl mb-4">Benefits</h3>

                  <ul className="space-y-3 list-disc pl-6">
                    <li>
                      Mentorship from dedicated senior engineers from day one.
                    </li>
                    <li>
                      Continuous training in modern software development.
                    </li>
                    <li>
                      Salary progression with structured performance reviews.
                    </li>
                    <li>
                      Private healthcare and workplace pension scheme.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-2xl mb-4">Requirements</h3>

                  <ul className="space-y-3 list-disc pl-6">
                    <li>
                      A First or 2:1 degree in Computer Science or related
                      field.
                    </li>
                    <li>Strong A-level results.</li>
                    <li>
                      Passion for software engineering and problem solving.
                    </li>
                    <li>Interest in AI and analytics technologies.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-2xl mb-4">How to Apply</h3>

                  <p>
                    If you are interested in building world-leading software
                    solutions and accelerating your engineering career, apply
                    today.
                  </p>
                </div>

                <button 
                  onClick={handleViewJob} // Redirection added here
                  className="mt-8 bg-blue-600 hover:bg-blue-700 transition text-white px-10 py-4 rounded-full text-lg font-semibold"
                >
                  View job
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-5">Graduate jobs FAQs</h2>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-16">
            Find clear answers to common questions about graduate jobs and how
            to start your career journey.
          </p>

          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-8 py-6 border-b border-gray-100 hover:bg-gray-50 transition cursor-pointer"
              >
                <span className="font-medium text-left">{faq}</span>

                <Plus size={18} className="text-gray-500" />
              </div>
            ))}
          </div>

          <button className="mt-10 bg-blue-600 text-white rounded-full px-8 py-4 font-semibold">
            Register free
          </button>
        </div>
      </section>

      {/* INDUSTRY */}
      <section className="py-28 bg-[#f7f7f7]">
        <div className="max-w-[1500px] mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-4">
            Explore graduate jobs by industry
          </h2>

          <p className="text-gray-500 mb-16 text-lg">
            Browse popular graduate sectors to discover matching opportunities.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {["Digital Marketing", "Engineering", "Finance"].map(
              (item, index) => (
                <div
                  key={index}
                  className="h-[320px] rounded-[32px] overflow-hidden relative group cursor-pointer bg-gradient-to-br from-blue-500 to-blue-700"
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />

                  <div className="absolute bottom-8 left-8 text-left">
                    <h3 className="text-white text-3xl font-bold">{item}</h3>
                  </div>
                </div>
              )
            )}
          </div>

          <button className="mt-12 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold">
            All industries
          </button>
        </div>
      </section>
    </div>
  );
}