import React from 'react';
import { BookOpen, ArrowRight} from 'lucide-react';

const CareerAdvice = () => {
  return (
    <section className="bg-white py-12 md:py-24 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* --- HEADER SECTION --- */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-[75px] font-semibold text-slate-900 leading-[1.1] tracking-tight mb-8 md:mb-16 max-w-5xl">
            Empowering your career journey with expert guidance.
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 border-t border-gray-200 pt-8 md:pt-12">
            <div className="lg:col-span-4">
              <p className="text-xl md:text-2xl font-bold text-slate-800 leading-[1.2] tracking-tight">
                Master the art of global job applications with Antalya's recruitment expertise.
              </p>
              <button className="mt-6 md:mt-10 w-full md:w-auto bg-[#0658d4] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-[#0547a8] transition-all shadow-xl">
                Access Resource Hub <BookOpen size={20} />
              </button>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-gray-500 text-base md:text-xl leading-relaxed">
              <p>
                Beyond placement, Antalya For Recruiting Manpower LLC provides a comprehensive suite of resources to help you navigate Kuwait's competitive job market and high-demand sectors like Healthcare, IT, and Education.
              </p>
              <p>
                Access our specialized guides on cross-border interview etiquette, industry-specific CV optimization for the GCC, and professional certifications that bridge the gap between your skills and global employer expectations.
              </p>
            </div>
          </div>
        </div>

        {/* --- BENTO GRID SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 md:auto-rows-[280px]">
          
          {/* 1. Large Professional Profile Card */}
          <div className="md:col-span-7 md:row-span-2 min-h-[350px] md:min-h-0 relative rounded-2xl md:rounded-tl-[80px] md:rounded-br-[2rem] md:rounded-tr-[2rem] md:rounded-bl-[2rem] overflow-hidden group cursor-pointer shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?auto=format&fit=crop&q=80&w=1000" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.3]" 
              alt="Professional career consultant at Antalya Kuwait" 
            />
            <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 md:p-12 text-white">
              <span className="italic font-serif text-sm md:text-lg mb-2 opacity-90">Crafting your</span>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 uppercase">Expert Profile</h3>
              <p className="text-sm md:text-lg opacity-80 max-w-sm mb-6 md:mb-8 leading-snug">
                Stand out in Kuwait's competitive market with a CV tailored for technical excellence and GCC standards.
              </p>
              <button className="border-2 border-white px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-xs md:text-base flex items-center gap-2 hover:bg-white hover:text-slate-900 transition-all">
                Get the Guide <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* 2. Professionalism Image - Consultant */}
          <div className="hidden md:block md:col-span-2 md:row-span-2 relative rounded-[2rem] overflow-hidden shadow-lg group">
             <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Recruitment consultant at Antalya Kuwait City" />
          </div>

          {/* 3. Global Interviews (Dark Blue) */}
          <div className="md:col-span-3 md:row-span-1 bg-slate-900 rounded-2xl md:rounded-[2rem] p-8 md:p-10 flex flex-col justify-center text-white cursor-pointer hover:bg-slate-800 transition-all group">
            <span className="italic font-serif text-gray-400 text-xs md:text-sm mb-1">Sector specific</span>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tighter leading-none mb-3 text-[#0658d4]">Global <br className="hidden md:block" /> Interview Prep</h3>
            <p className="text-xs text-gray-400 mb-3 leading-relaxed hidden md:block">
              Master cross-border interviews
            </p>
            <span className="text-[10px] md:text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform uppercase tracking-widest">
                Learn more <ArrowRight size={12}/>
            </span>
          </div>

          {/* 4. Technical Skills Image - Teamwork */}
          <div className="hidden md:block md:col-span-3 md:row-span-1 rounded-[2rem] overflow-hidden shadow-lg group border border-gray-100">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Team collaboration in Kuwait workplace" />
          </div>

          {/* 5. Strategy Workspace Image */}
          <div className="md:col-span-4 md:row-span-1 md:row-span-2 relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg group min-h-[200px] md:min-h-0">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Strategic workforce planning at Antalya Manpower" />
          </div>

          {/* 6. Market Insights (Dark Blue) */}
          <div className="md:col-span-4 md:row-span-1 bg-slate-900 rounded-2xl md:rounded-[2rem] p-6 md:p-8 flex flex-col justify-center text-white cursor-pointer hover:bg-slate-800 transition-all group">
              <span className="italic font-serif text-gray-400 text-xs md:text-sm mb-1">Data driven</span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tighter leading-none mb-3 text-[#f29100]">Kuwait Market Insights</h3>
              <p className="text-xs text-gray-400 mb-3 leading-relaxed hidden md:block">
                GCC hiring trends & salary benchmarks
              </p>
              <span className="text-[10px] md:text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform uppercase tracking-widest">
                Explore Trends <ArrowRight size={12}/>
              </span>
          </div>

          {/* 7. Connectivity Image */}
          <div className="hidden md:block md:col-span-4 md:row-span-1 relative rounded-[2rem] overflow-hidden shadow-lg group">
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Global networking and recruitment connections" />
          </div>

          {/* 8. Corporate Culture Image */}
          <div className="md:col-span-5 md:row-span-1 relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg group min-h-[200px] md:min-h-0">
             <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Corporate culture in Kuwaiti organizations" />
          </div>

          {/* 9. Resource Hub (Brand Blue) */}
          <div className="md:col-span-3 md:row-span-1 bg-[#0658d4] rounded-2xl md:rounded-tl-[2rem] md:rounded-bl-[2rem] md:rounded-tr-[2rem] md:rounded-br-[80px] p-8 md:p-10 flex flex-col justify-end text-white cursor-pointer hover:bg-[#0547a8] transition-all group shadow-xl">
              <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] opacity-80 mb-2">Access Hub</span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tighter leading-none mb-4">Career Resources</h3>
              <p className="text-xs text-white/70 mb-3 leading-relaxed hidden md:block">
                CV templates • Interview guides • Certifications
              </p>
              <span className="text-[10px] md:text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform uppercase tracking-widest">
                View all insights <ArrowRight size={12}/>
              </span>
          </div>

        </div>

        {/* --- BOTTOM CTA SECTION --- */}
        <div className="mt-16 md:mt-24 border-t border-gray-200 pt-12 md:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <h3 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight tracking-tight">
                Ready to advance your career in <span className="text-[#0658d4]">Kuwait</span>?
              </h3>
              <p className="text-gray-500 text-lg mt-2 max-w-2xl">
                Explore thousands of job opportunities across Healthcare, IT, Education, and more.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-wrap gap-4">
              <button className="bg-[#0658d4] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-[#0547a8] transition-all shadow-xl shadow-blue-100">
                Browse Jobs <ArrowRight size={18} />
              </button>
              <button className="border-2 border-gray-300 text-slate-700 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CareerAdvice;