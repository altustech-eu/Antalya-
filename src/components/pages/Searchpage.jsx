import React, { useState } from 'react';
import { 
   MapPin, Briefcase, ChevronRight, SlidersHorizontal, 
   Plus,
} from 'lucide-react';

const FullJobPortal = () => {
  const [selectedJobId, setSelectedJobId] = useState(1);

  const jobs = [
    { id: 1, title: "Graduate Software Engineer – BI Software", company: "The GRB Team", location: "Hertfordshire", salary: "£50,000" },
    { id: 2, title: "Graduate Software Engineer – Summer 2026", company: "The GRB Team", location: "Surrey", salary: "£43,000" },
    { id: 3, title: "Graduate SaaS Software Sales Associate", company: "The GRB Team", location: "Central London", salary: "£38,000 OTE" },
    { id: 4, title: "Graduate JavaScript Developer", company: "The GRB Team", location: "Somerset", salary: "£30,000" },
    { id: 5, title: "Graduate Electronics Engineering Consultant", company: "The GRB Team", location: "Nr Cambridge", salary: "£36,000" },
    { id: 6, title: "Graduate Technical Systems Manager", company: "The GRB Team", location: "London", salary: "£30,000" },
  ];

  return (
    <div className="bg-white font-sans text-slate-900">
  

      {/* 2. HERO / SEARCH HEADER */}
      <header className="max-w-[1400px] mx-auto px-6 pt-16 pb-10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Graduate jobs search</h1>
            <p className="text-gray-500">Search and discover exclusive graduate jobs tailored to your degree.</p>
          </div>
          <span className="text-xs text-gray-400">Home » Graduate Jobs</span>
        </div>
        
        <div className="flex items-center gap-4 py-4 border-t border-gray-100">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 text-sm">
            <SlidersHorizontal size={16} /> Filters
          </button>
          <span className="text-sm text-gray-400">{jobs.length * 4} job matches</span>
          <div className="ml-auto text-sm text-gray-500">Sort by <select className="font-bold text-slate-900 outline-none"><option>Newest</option></select></div>
        </div>
      </header>

      {/* 3. JOB EXPLORER SECTION */}
      <section className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-20">
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 h-fit">
          {jobs.map(job => (
            <div 
              key={job.id} 
              onClick={() => setSelectedJobId(job.id)}
              className={`bg-white p-6 rounded-xl border transition-all cursor-pointer flex justify-between ${selectedJobId === job.id ? 'border-blue-500 shadow-md' : 'border-gray-100 hover:border-gray-200'}`}
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-300">●</div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{job.company}</p>
                  <h3 className="text-sm font-bold mt-1">{job.title}</h3>
                  <div className="flex gap-4 mt-3 text-[11px] text-gray-400 font-medium">
                    <span className="flex items-center gap-1"><MapPin size={12}/> {job.location}</span>
                    <span className="flex items-center gap-1"><Briefcase size={12}/> {job.salary}</span>
                  </div>
                </div>
              </div>
              <ChevronRight size={16} className="text-gray-300" />
            </div>
          ))}
        </div>

        {/* STICKY DETAILS */}
        <div className="lg:col-span-5">
          <div className="sticky top-10 border border-gray-100 rounded-2xl p-8 bg-white shadow-sm">
            <div className="flex justify-between items-start mb-6">
               <div>
                  <h2 className="text-2xl font-bold">Graduate Software Engineer</h2>
                  <p className="text-blue-600 font-bold text-sm">The GRB Team</p>
               </div>
               <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-bold">Apply</button>
            </div>
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>Join a world-leading team... we are committed to your long-term evolution.</p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Mentorship from day one</li>
                <li>Continuous learning in AI</li>
                <li>Competitive salary progression</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Graduate Jobs FAQs</h2>
          <p className="text-gray-500 mb-12 italic">Find short answers to common questions about graduate jobs...</p>
          <div className="text-left space-y-px">
            {["What are your site fees?", "When should I start applying?", "Can I get a job with my degree?", "What types of jobs are available?"].map((q, i) => (
              <div key={i} className="bg-white border-b border-gray-100 p-5 flex justify-between items-center group cursor-pointer">
                <span className="font-bold text-sm text-slate-700">{q}</span>
                <Plus size={16} className="text-blue-600" />
              </div>
            ))}
          </div>
          <button className="mt-10 bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-bold">More FAQ's</button>
        </div>
      </section>

      {/* 5. INDUSTRY & CAREER PATHS */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Explore graduate jobs by industry</h2>
        <p className="text-gray-500 mb-12">Not sure what to consider next? Browse popular sectors.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {['Digital Marketing', 'Engineering', 'Finance'].map((title, i) => (
            <div key={i} className="h-64 rounded-3xl bg-blue-500 relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <span className="absolute bottom-6 left-6 text-white font-bold text-xl">{title}</span>
            </div>
          ))}
        </div>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-bold">All industry profiles</button>
      </section>


    </div>
  );
};

export default FullJobPortal;