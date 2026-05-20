import React from 'react';
import { ArrowRight, Users, Monitor, BookOpen, GraduationCap, Upload, HardHat,  Code, Microscope, BarChart3, Presentation } from 'lucide-react';

const CareerSection = () => {
  // Updated with span properties to match the layout logic of your image
  const specialisms = [
    { title: "Software Dev", icon: <Code />, img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000", type: "image", span: "md:col-span-2" },
    { title: "Industry profile", subtitle: "Learn more", type: "dark", span: "md:col-span-1" },
    { title: "Industry profile", subtitle: "Learn more", type: "dark", span: "md:col-span-1" },
    { title: "Analytical", icon: <BarChart3 />, img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000", type: "image", span: "md:col-span-2" },
    { title: "Science", icon: <Microscope />, type: "dark-purple", span: "md:col-span-3" },
    { title: "Sales", icon: <Users />, img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000", type: "image", span: "md:col-span-2" },
    { title: "Industry profile", subtitle: "Learn more", type: "dark", span: "md:col-span-1" },
    { title: "Industry profile", subtitle: "Learn more", type: "dark", span: "md:col-span-1" },
    { title: "Conference Production", icon: <Presentation />, img: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=1000", type: "image", span: "md:col-span-2" },
  ];

  const categories = [
    { name: "Hospitality", icon: <Users />, img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600" },
    { name: "Skilled Labor", icon: <HardHat />, img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600" },
    { name: "Administration", icon: <BookOpen />, img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=600" },
    { name: "Technical IT", icon: <Monitor />, img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600" },
  ];

  const marqueeItems = [...categories, ...categories, ...categories];

  return (
    <div className="bg-[#f5f5f5] font-sans">
      
      {/* --- TOP INTRO SECTOR --- */}
      <section className="max-w-[1700px] mx-auto px-8 md:px-16 py-24">
        <h2 className="text-5xl md:text-6xl font-bold text-[#222] mb-12 tracking-tight text-left">
          Antalya Manpower LLC
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-gray-100 pt-16">
          <div className="lg:col-span-5">
            <p className="text-2xl md:text-3xl font-semibold text-slate-800 leading-[1.2] tracking-tight mb-10 text-left">
              A premier partner in global staffing, delivering excellence across Healthcare, IT, and specialized labor sectors.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#0658d4] text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-[#3d7699] transition-all shadow-xl shadow-blue-100">
                Submit CV <Upload size={18} />
              </button>
              <button className="bg-white text-slate-700 border-2 border-gray-100 px-10 py-4 rounded-full font-bold hover:bg-gray-50 transition-all text-left">
                Request Staff
              </button>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-500 text-lg leading-relaxed text-left">
            <p>Operating from Kuwait City, our sector-specific teams connect leading multinational firms and local enterprises with highly skilled professionals. We specialize in identifying talent that drives organizational growth.</p>
            <p>Our recruitment experts analyze your requirements with precision, ensuring that every placement aligns with both technical skill sets and corporate culture for long-term success.</p>
          </div>
        </div>
      </section>

      {/* --- SECTION 1: STICKY TEXT & SCROLLING GRID --- */}
      <section className="max-w-[1700px] mx-auto px-8 md:px-16 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          
          {/* LEFT: STICKY BOX */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 self-start z-10 bg-[#f5f5f5] py-4">
            <span className="text-[#f29100] font-bold text-xs uppercase tracking-[0.4em] mb-6 block text-left">
              Expert Specialisms
            </span>
            <h2 className="text-6xl md:text-[72px] font-bold text-slate-900 leading-[0.9] tracking-tighter mb-8 text-left">
              The workforce <br />of tomorrow.
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed max-w-sm mb-12 text-left">
              Discover professional opportunities across industries poised for global expansion and technical innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#0658d4] text-white px-10 py-4 rounded-full font-bold hover:bg-[#3d7699] transition-all shadow-2xl shadow-blue-50 flex items-center gap-3">
                Browse All Roles <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* RIGHT: UPDATED BENTO GRID */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4 pb-20">
            
            {/* Header Span Card */}
            <div className="md:col-span-3 bg-[#0658d4] rounded-[1.5rem] p-10 h-[220px] flex flex-col justify-center group cursor-pointer relative overflow-hidden">
              <h3 className="text-3xl md:text-5xl font-bold text-white max-w-xl relative z-10 tracking-tighter leading-[1.1] text-left">
                Explore our featured career specialisms.
              </h3>
            </div>

            {specialisms.map((card, i) => (
              <div 
                key={i} 
                className={`relative group rounded-[1.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl flex flex-col justify-end p-8 min-h-[260px]
                ${card.span}
                ${card.type === 'dark' ? 'bg-[#0a1631] items-start' : ''}
                ${card.type === 'dark-purple' ? 'bg-[#150a33] min-h-[320px]' : 'bg-white border border-gray-100'}`}
              >
                {card.img && (
                  <>
                    <img src={card.img} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={card.title} />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                  </>
                )}

                <div className="relative z-10 text-left w-full">
                  {card.icon && (
                    <div className="mb-4 text-white">
                      {React.cloneElement(card.icon, { size: 32, strokeWidth: 1.5 })}
                    </div>
                  )}
                  
                  <h4 className={`text-xl font-bold tracking-tight mb-1 ${card.img || card.type.includes('dark') ? 'text-white' : 'text-slate-900'}`}>
                    {card.title}
                  </h4>

                  {card.type === 'dark' ? (
                    <p className="text-[11px] font-bold text-white underline decoration-blue-500 underline-offset-4">
                      {card.subtitle}
                    </p>
                  ) : (
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/80 flex items-center gap-1">
                      View live jobs <ArrowRight size={12} />
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Bottom Span Card */}
            <div className="md:col-span-3 bg-[#0658d4] rounded-[1.5rem] p-10 h-[180px] flex items-end justify-end group cursor-pointer">
              <div className="flex items-center text-white font-bold text-xl gap-2 group-hover:translate-x-2 transition-transform">
                View all industries <ArrowRight size={24} />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 2: BROWSE BY CATEGORY --- */}
      <section className="pt-24 border-t border-gray-100 pb-32 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter mb-6">
            Industries We Served
          </h2>
          <p className="text-gray-500 text-xl max-w-3xl mx-auto px-6">
            Connecting expertise with opportunity through our specialized manpower divisions.
          </p>
        </div>

        <div className="relative w-full overflow-hidden flex py-8 group/marquee">
          <div className="flex animate-marquee group-hover/marquee:[animation-play-state:paused] whitespace-nowrap">
            {marqueeItems.map((category, i) => (
              <div key={i} className="flex-shrink-0 w-[420px] h-[600px] relative rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl mx-5 group/card">
                <img src={category.img} className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] transition-transform duration-1000 group-hover/card:scale-110 group-hover/card:grayscale-0" alt={category.name} />
                <div className="absolute inset-0 bg-[#0658d4]/30 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 text-white text-left">
                  <div className="text-4xl mb-5 p-4 bg-white/10 backdrop-blur-3xl rounded-[1.5rem] w-fit border border-white/10">
                    {category.icon ? React.cloneElement(category.icon, { size: 32 }) : <GraduationCap size={32} />}
                  </div>
                  <h3 className="text-2xl font-bold leading-none tracking-tighter uppercase">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-[#0658d4] text-white px-16 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-blue-100">
            View All Sectors
          </button>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
          display: flex;
          width: fit-content;
        }
      `}</style>
    </div>
  );
};

export default CareerSection;