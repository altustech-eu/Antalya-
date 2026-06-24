import React from 'react';
import { 
  ArrowRight, Users, GraduationCap, Upload, HardHat, Code, 
  Microscope, BarChart3, Presentation, Heart, Shield, Coffee, 
  Wrench, Briefcase, Database,Stethoscope, 
  BookOpen
} from 'lucide-react';

const CareerSection = () => {
  // Updated specialisms with high-quality images for all cards
  const specialisms = [
    { 
      title: "Software Development", 
      subtitle: "Full Stack • Mobile • Cloud",
      icon: <Code />, 
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop", 
      type: "image", 
      span: "md:col-span-2" 
    },
    { 
      title: "Healthcare", 
      subtitle: "Nursing • Allied Health",
      icon: <Stethoscope />,
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
      type: "image-dark", 
      span: "md:col-span-1" 
    },
    { 
      title: "Education", 
      subtitle: "Teachers • Administrators",
      icon: <BookOpen />,
      img: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?q=80&w=1200&auto=format&fit=crop",
      type: "image-dark", 
      span: "md:col-span-1" 
    },
    { 
      title: "Data Analytics", 
      subtitle: "Business Intelligence • AI",
      icon: <BarChart3 />, 
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop", 
      type: "image", 
      span: "md:col-span-2" 
    },
    { 
      title: "Life Sciences", 
      subtitle: "Research • Pharmaceuticals",
      icon: <Microscope />,
      img: "https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=1200&auto=format&fit=crop",
      type: "image-purple", 
      span: "md:col-span-3" 
    },
    { 
      title: "Sales & Business Development", 
      subtitle: "B2B • Enterprise",
      icon: <Users />, 
      img: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1200&auto=format&fit=crop", 
      type: "image", 
      span: "md:col-span-2" 
    },
    { 
      title: "Cybersecurity", 
      subtitle: "Network Security • Compliance",
      icon: <Shield />,
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
      type: "image-dark", 
      span: "md:col-span-1" 
    },
    { 
      title: "Hospitality", 
      subtitle: "Hotel • Restaurant Management",
      icon: <Coffee />,
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      type: "image-dark", 
      span: "md:col-span-1" 
    },
    { 
      title: "Conference & Event Production", 
      subtitle: "Planning • Logistics",
      icon: <Presentation />, 
      img: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=1200&auto=format&fit=crop", 
      type: "image", 
      span: "md:col-span-2" 
    },
  ];

  // Updated categories with high-quality images
  const categories = [
    { name: "Healthcare", icon: <Heart />, img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop" },
    { name: "IT & Cybersecurity", icon: <Shield />, img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" },
    { name: "Education", icon: <GraduationCap />, img: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?q=80&w=800&auto=format&fit=crop" },
    { name: "Hospitality", icon: <Coffee />, img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop" },
    { name: "Skilled Labor", icon: <HardHat />, img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop" },
    { name: "Administration", icon: <Briefcase />, img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop" },
    { name: "Engineering", icon: <Wrench />, img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" },
    { name: "Finance", icon: <Database />, img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop" },
  ];

  const marqueeItems = [...categories, ...categories, ...categories];

  return (
    <div className="bg-[#f5f5f5] font-['Inter',sans-serif]">
      
      {/* --- TOP INTRO SECTOR --- */}
      <section className="max-w-[1700px] mx-auto px-8 md:px-16 py-24">
        <h2 className="text-5xl md:text-6xl font-bold text-[#222] mb-12 tracking-tight text-left font-['Inter',sans-serif]">
          Antalya For Recruiting Manpower LLC
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-gray-100 pt-16">
          <div className="lg:col-span-5">
            <p className="text-2xl md:text-3xl font-semibold text-slate-800 leading-[1.2] tracking-tight mb-10 text-left font-['Inter',sans-serif]">
              Your trusted recruitment partner in <span className="text-[#0658d4]">Kuwait City</span>, delivering excellence across Healthcare, IT, Education, and specialized sectors.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#0658d4] text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-[#0547a8] transition-all shadow-xl shadow-blue-100 font-['Inter',sans-serif]">
                Submit Your CV <Upload size={18} />
              </button>
              <button className="bg-white text-slate-700 border-2 border-gray-200 px-10 py-4 rounded-full font-bold hover:bg-gray-50 transition-all text-left font-['Inter',sans-serif]">
                Request Staffing Solutions
              </button>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-500 text-lg leading-relaxed text-left font-['Inter',sans-serif]">
            <p>
              Based in <span className="font-semibold text-gray-700">Mirqab-Block 1, Kuwait City</span>, our sector-specialized teams connect leading multinational firms and local enterprises with exceptional talent across the GCC region.
            </p>
            <p>
              We go beyond placement — our recruitment experts analyze your requirements with precision, ensuring every hire aligns with both technical expertise and organizational culture for sustainable success.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 1: STICKY TEXT & SCROLLING GRID --- */}
      <section className="max-w-[1700px] mx-auto px-8 md:px-16 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          
          {/* LEFT: STICKY BOX */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 self-start z-10 bg-[#f5f5f5] py-4">
            <span className="text-[#f29100] font-bold text-xs uppercase tracking-[0.4em] mb-6 block text-left font-['Inter',sans-serif]">
              Career Specialisms
            </span>
            <h2 className="text-6xl md:text-[60px] font-bold text-slate-900 leading-[0.9] tracking-tighter mb-8 text-left font-['Inter',sans-serif]">
              The workforce <br />of tomorrow.
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed max-w-sm mb-12 text-left font-['Inter',sans-serif]">
              Explore high-impact career opportunities across Kuwait's fastest-growing industries — from Healthcare and IT to Education and Hospitality.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#0658d4] text-white px-10 py-4 rounded-full font-bold hover:bg-[#0547a8] transition-all shadow-2xl shadow-blue-50 flex items-center gap-3 font-['Inter',sans-serif]">
                View All Roles <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* RIGHT: UPDATED BENTO GRID */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4 pb-20">
            
            {/* Header Span Card */}
            <div className="md:col-span-3 bg-[#0658d4] rounded-[1.5rem] p-10 h-[220px] flex flex-col justify-center group cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-white max-w-xl relative z-10 tracking-tighter leading-[1.1] text-left font-['Inter',sans-serif]">
                Explore our featured <br />career specialisms.
              </h3>
            </div>

            {specialisms.map((card, i) => (
              <div 
                key={i} 
                className={`relative group rounded-[1.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl flex flex-col justify-end p-8 min-h-[360px]
                ${card.span}
                ${card.type === 'image-dark' ? 'bg-[#0a1631] items-start' : ''}
                ${card.type === 'image-purple' ? 'bg-[#150a33] min-h-[320px]' : 'bg-white border border-gray-100'}`}
              >
                {/* Background Image for all cards */}
                {card.img && (
                  <>
                    <img 
                      src={card.img} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700" 
                      alt={card.title} 
                    />
                    <div className={`absolute inset-0 transition-colors duration-700 ${
                      card.type === 'image-dark' ? 'bg-black/60 group-hover:bg-black/40' :
                      card.type === 'image-purple' ? 'bg-[#150a33]/70 group-hover:bg-[#150a33]/50' :
                      'bg-black/30 group-hover:bg-black/10'
                    }`} />
                  </>
                )}

                <div className="relative z-10 text-left w-full">
                  {card.icon && (
                    <div className={`mb-4 transition-all duration-300 group-hover:scale-110 ${
                      card.img ? 'text-white' : 'text-[#0658d4]'
                    }`}>
                      {React.cloneElement(card.icon, { size: 32, strokeWidth: 1.5 })}
                    </div>
                  )}
                  
                  <h4 className={`text-xl font-bold tracking-tight mb-1 font-['Inter',sans-serif] ${
                    card.img ? 'text-white' : 'text-slate-900'
                  }`}>
                    {card.title}
                  </h4>

                  {card.subtitle && (
                    <p className={`text-sm font-medium ${
                      card.img ? 'text-white/80' : 'text-gray-500'
                    } font-['Inter',sans-serif]`}>
                      {card.subtitle}
                    </p>
                  )}

                  {card.type === 'image-dark' || card.type === 'image-purple' ? (
                    <p className="text-[11px] font-bold text-white underline decoration-[#0658d4] underline-offset-4 mt-2 font-['Inter',sans-serif]">
                      Learn more
                    </p>
                  ) : (
                    card.img && (
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/80 flex items-center gap-1 mt-2 font-['Inter',sans-serif]">
                        View live jobs <ArrowRight size={12} />
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}

            {/* Bottom Span Card */}
            <div className="md:col-span-3 bg-gradient-to-r from-[#0658d4] to-[#3d7699] rounded-[1.5rem] p-10 h-[180px] flex items-end justify-end group cursor-pointer">
              <div className="flex items-center text-white font-bold text-xl gap-2 group-hover:translate-x-2 transition-transform font-['Inter',sans-serif]">
                Browse all industries <ArrowRight size={24} />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 2: BROWSE BY CATEGORY --- */}
      <section className="pt-24 border-t border-gray-100 pb-32 overflow-hidden">
        <div className="text-center mb-16">
          <span className="text-[#f29100] font-bold text-xs uppercase tracking-[0.4em] mb-4 block font-['Inter',sans-serif]">
            Our Expertise
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter mb-6 font-['Inter',sans-serif]">
            Industries <span className="text-[#0658d4]">We Serve</span>
          </h2>
          <p className="text-gray-500 text-xl max-w-3xl mx-auto px-6 font-['Inter',sans-serif]">
            Connecting exceptional talent with opportunity through our specialized recruitment divisions across Kuwait and the GCC.
          </p>
        </div>

        <div className="relative w-full overflow-hidden flex py-8 group/marquee">
          <div className="flex animate-marquee group-hover/marquee:[animation-play-state:paused] whitespace-nowrap">
            {marqueeItems.map((category, i) => (
              <div key={i} className="flex-shrink-0 w-[420px] h-[600px] relative rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl mx-5 group/card">
                <img 
                  src={category.img} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110" 
                  alt={category.name} 
                />
                <div className="absolute inset-0 bg-[#0658d4]/30 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white text-left">
                  <div className="text-4xl mb-5 p-4 bg-white/10 backdrop-blur-3xl rounded-[1.5rem] w-fit border border-white/10 group-hover/card:bg-white/20 transition-all duration-300">
                    {category.icon ? React.cloneElement(category.icon, { size: 32, strokeWidth: 1.5 }) : <GraduationCap size={32} />}
                  </div>
                  <h3 className="text-2xl font-bold leading-none tracking-tighter uppercase font-['Inter',sans-serif]">
                    {category.name}
                  </h3>
                  <p className="text-sm text-white/60 mt-2 font-light font-['Inter',sans-serif]">
                    View opportunities
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-[#0658d4] text-white px-16 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-blue-100 font-['Inter',sans-serif]">
            Explore All Sectors
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