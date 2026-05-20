import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';

const CareerAdvice = () => {
  return (
    <section className="bg-white py-12 md:py-24 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* --- HEADER SECTION --- */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-[75px] font-semibold text-slate-900 leading-[1.1] tracking-tight mb-8 md:mb-16 max-w-5xl">
            Empowering your professional journey with global insights.
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 border-t border-gray-200 pt-8 md:pt-12">
            <div className="lg:col-span-4">
              <p className="text-xl md:text-2xl font-bold text-slate-800 leading-[1.2] tracking-tight">
                Master the art of global applications with our recruitment expertise.
              </p>
              <button className="mt-6 md:mt-10 w-full md:w-auto bg-[#0658d4] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-[#3d7699] transition-all shadow-xl">
                Resource Center <BookOpen size={20} />
              </button>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-gray-500 text-base md:text-xl leading-relaxed">
              <p>
                Beyond placement, Antalya provides a comprehensive suite of resources designed to help you navigate international markets and high-demand sectors like Healthcare and IT.
              </p>
              <p>
                Access our specialized guides on cross-border interview etiquette, industry-specific CV optimization, and professional certifications that bridge the gap between your skills and global demand.
              </p>
            </div>
          </div>
        </div>

        {/* --- BENTO GRID SECTION --- */}
        {/* auto-rows adjusted for mobile; md:grid-cols-12 for desktop layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 md:auto-rows-[280px]">
          
          {/* 1. Large Professional Profile Card */}
          <div className="md:col-span-7 md:row-span-2 min-h-[350px] md:min-h-0 relative rounded-2xl md:rounded-tl-[80px] md:rounded-br-[2rem] md:rounded-tr-[2rem] md:rounded-bl-[2rem] overflow-hidden group cursor-pointer shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?auto=format&fit=crop&q=80&w=1000" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.3]" 
              alt="HR Professional" 
            />
            <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 md:p-12 text-white">
              <span className="italic font-serif text-sm md:text-lg mb-2 opacity-90">Crafting your</span>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 uppercase">Expert Profile</h3>
              <p className="text-sm md:text-lg opacity-80 max-w-sm mb-6 md:mb-8 leading-snug">
                Stand out in the global market with a CV tailored for technical excellence.
              </p>
              <button className="border-2 border-white px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-xs md:text-base flex items-center gap-2 hover:bg-white hover:text-slate-900 transition-all">
                Get the Guide <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* 2. Professionalism Image - Consultant */}
          <div className="hidden md:block md:col-span-2 md:row-span-2 relative rounded-[2rem] overflow-hidden shadow-lg group">
             <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Consultant" />
          </div>

          {/* 3. Global Interviews (Dark Blue) */}
          <div className="md:col-span-3 md:row-span-1 bg-slate-900 rounded-2xl md:rounded-[2rem] p-8 md:p-10 flex flex-col justify-center text-white cursor-pointer hover:bg-slate-800 transition-all group">
            <span className="italic font-serif text-gray-400 text-xs md:text-sm mb-1">Sector specific</span>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tighter leading-none mb-3 text-[#0658d4]">Global <br className="hidden md:block" /> Interviews</h3>
            <span className="text-[10px] md:text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform uppercase tracking-widest">
                Learn more <ArrowRight size={12}/>
            </span>
          </div>

          {/* 4. Technical Skills Image - Teamwork */}
          <div className="hidden md:block md:col-span-3 md:row-span-1 rounded-[2rem] overflow-hidden shadow-lg group border border-gray-100">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Teamwork" />
          </div>

          {/* 5. Strategy Workspace Image */}
          <div className="md:col-span-4 md:row-span-1 md:row-span-2 relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg group min-h-[200px] md:min-h-0">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Strategy" />
          </div>

          {/* 6. Market Insights (Dark Blue) */}
          <div className="md:col-span-4 md:row-span-1 bg-slate-900 rounded-2xl md:rounded-[2rem] p-6 md:p-8 flex flex-col justify-center text-white cursor-pointer hover:bg-slate-800 transition-all group">
              <span className="italic font-serif text-gray-400 text-xs md:text-sm mb-1">Data driven</span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tighter leading-none mb-3 text-[#f29100]">Market Insights</h3>
              <span className="text-[10px] md:text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform uppercase tracking-widest">
                Explore Trends <ArrowRight size={12}/>
              </span>
          </div>

          {/* 7. Connectivity Image */}
          <div className="hidden md:block md:col-span-4 md:row-span-1 relative rounded-[2rem] overflow-hidden shadow-lg group">
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Connectivity" />
          </div>

          {/* 8. Corporate Culture Image */}
          <div className="md:col-span-5 md:row-span-1 relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg group min-h-[200px] md:min-h-0">
             <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Corporate" />
          </div>

          {/* 9. Resource Hub (Brand Blue) */}
          <div className="md:col-span-3 md:row-span-1 bg-[#0658d4] rounded-2xl md:rounded-tl-[2rem] md:rounded-bl-[2rem] md:rounded-tr-[2rem] md:rounded-br-[80px] p-8 md:p-10 flex flex-col justify-end text-white cursor-pointer hover:bg-[#3d7699] transition-all group shadow-xl">
              <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] opacity-80 mb-2">Access Hub</span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tighter leading-none mb-4">All Career Insights</h3>
              <span className="text-[10px] md:text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform uppercase tracking-widest">
                Learn more <ArrowRight size={12}/>
              </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CareerAdvice;