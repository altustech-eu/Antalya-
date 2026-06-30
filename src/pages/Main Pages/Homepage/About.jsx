import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Users,
  GraduationCap,
  Upload,
  
  Code,
  Microscope,
  BarChart3,
  Presentation,

  Shield,
  Coffee,
 
  Stethoscope,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Globe2,
  Hotel,
  ShieldCheck,
  BriefcaseBusiness
} from 'lucide-react';

const CareerSection = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const specialisms = [
    {
      title: 'Software Development',
      subtitle: 'Full Stack • Mobile • Cloud',
      icon: <Code />,
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
      type: 'image',
      span: 'md:col-span-2'
    },
    {
      title: 'Healthcare',
      subtitle: 'Nursing • Allied Health',
      icon: <Stethoscope />,
      img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
      type: 'image-dark',
      span: 'md:col-span-1'
    },
    {
      title: 'Education',
      subtitle: 'Teachers • Administrators',
      icon: <BookOpen />,
      img: 'https://images.unsplash.com/photo-1523050854058-8df90110c7f1?q=80&w=1200&auto=format&fit=crop',
      type: 'image-dark',
      span: 'md:col-span-1'
    },
    {
      title: 'Data Analytics',
      subtitle: 'Business Intelligence • AI',
      icon: <BarChart3 />,
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      type: 'image',
      span: 'md:col-span-2'
    },
    {
      title: 'Life Sciences',
      subtitle: 'Research • Pharmaceuticals',
      icon: <Microscope />,
      img: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=1200&auto=format&fit=crop',
      type: 'image-purple',
      span: 'md:col-span-3'
    },
    {
      title: 'Sales & Business Development',
      subtitle: 'B2B • Enterprise',
      icon: <Users />,
      img: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1200&auto=format&fit=crop',
      type: 'image',
      span: 'md:col-span-2'
    },
    {
      title: 'Cybersecurity',
      subtitle: 'Network Security • Compliance',
      icon: <Shield />,
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
      type: 'image-dark',
      span: 'md:col-span-1'
    },
    {
      title: 'Hospitality',
      subtitle: 'Hotel • Restaurant Management',
      icon: <Coffee />,
      img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
      type: 'image-dark',
      span: 'md:col-span-1'
    },
    {
      title: 'Conference & Event Production',
      subtitle: 'Planning • Logistics',
      icon: <Presentation />,
      img: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=1200&auto=format&fit=crop',
      type: 'image',
      span: 'md:col-span-2'
    }
  ];

  const courseCards = [
    {
      title: 'Healthcare',
      icon: <Stethoscope size={72} strokeWidth={1.8} />,
      image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop',
      overlay: 'bg-[#0658d4]/65'
    },
    {
      title: 'Education',
      icon: <GraduationCap size={76} strokeWidth={1.8} />,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
      overlay: 'bg-black/35'
    },
    {
      title: 'IT & Cybersecurity',
      icon: <ShieldCheck size={72} strokeWidth={1.8} />,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
      overlay: 'bg-black/45'
    },
    {
      title: 'Hospitality',
      icon: <Hotel size={72} strokeWidth={1.8} />,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
      overlay: 'bg-black/35'
    },
    {
      title: 'Skilled Labor',
      icon: <BriefcaseBusiness size={72} strokeWidth={1.8} />,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
      overlay: 'bg-black/40'
    },
    {
      title: 'Administration',
      icon: <Globe2 size={72} strokeWidth={1.8} />,
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop',
      overlay: 'bg-[#0658d4]/55'
    }
  ];

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -520,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 520,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-[#f5f5f5] font-['Inter',sans-serif]">

      {/* TOP INTRO SECTION */}
      <section className="max-w-[1700px] mx-auto px-8 md:px-16 py-24">
        <h2 className="text-5xl md:text-6xl font-bold text-[#222] mb-12 tracking-tight text-left">
          Antalya For Recruiting Manpower LLC
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-gray-100 pt-16">
          <div className="lg:col-span-5">
            <p className="text-2xl md:text-3xl font-semibold text-slate-800 leading-[1.2] tracking-tight mb-10 text-left">
              Your trusted recruitment partner in{' '}
              <span className="text-[#0658d4]">Kuwait City</span>, delivering
              excellence across Healthcare, IT, Education, and specialized sectors.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#0658d4] text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-[#0547a8] transition-all shadow-xl shadow-blue-100">
                Submit Your CV <Upload size={18} />
              </button>

              
  <button
    type="button"
    onClick={() => navigate("/")}
    className="bg-[#ffffff] text-black px-10 py-4 rounded-full font-bold transition-all shadow-2xl shadow-blue-50 flex items-center gap-3"
  >
    Request Staffing Solutions <ArrowRight size={20} />
  </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-500 text-lg leading-relaxed text-left">
            <p>
              Based in <span className="font-semibold text-gray-700">Mirqab-Block 1, Kuwait City</span>,
              our sector-specialized teams connect leading multinational firms and local enterprises
              with exceptional talent across the GCC region.
            </p>

            <p>
              We go beyond placement — our recruitment experts analyze your requirements with
              precision, ensuring every hire aligns with both technical expertise and organizational
              culture for sustainable success.
            </p>
          </div>
        </div>
      </section>

      {/* CAREER SPECIALISMS SECTION */}
      <section className="max-w-[1700px] mx-auto px-8 md:px-16 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">

       {/* LEFT STICKY BOX */}
<div className="lg:col-span-4 lg:sticky lg:top-24 self-start z-10 bg-[#f5f5f5] py-4">
  <span className="text-[#f29100] font-bold text-xs uppercase tracking-[0.4em] mb-6 block text-left">
    Career Specialisms
  </span>

  <h2 className="text-6xl md:text-[60px] font-bold text-slate-900 leading-[0.9] tracking-tighter mb-8 text-left">
    The workforce <br />of tomorrow.
  </h2>

  <p className="text-gray-500 text-xl leading-relaxed max-w-sm mb-12 text-left">
    Explore high-impact career opportunities across Kuwait's fastest-growing industries —
    from Healthcare and IT to Education and Hospitality.
  </p>

  <button
    type="button"
    onClick={() => navigate("/")}
    className="bg-[#0658d4] text-white px-10 py-4 rounded-full font-bold hover:bg-[#0547a8] transition-all shadow-2xl shadow-blue-50 flex items-center gap-3"
  >
    View All Roles <ArrowRight size={20} />
  </button>
</div>

          {/* RIGHT BENTO GRID */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4 pb-20">

            <div className="md:col-span-3 bg-[#0658d4] rounded-[1.5rem] p-10 h-[220px] flex flex-col justify-center group cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              </div>

              <h3 className="text-3xl md:text-5xl font-bold text-white max-w-xl relative z-10 tracking-tighter leading-[1.1] text-left">
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
                {card.img && (
                  <>
                    <img
                      src={card.img}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                      alt={card.title}
                    />

                    <div
                      className={`absolute inset-0 transition-colors duration-700 ${
                        card.type === 'image-dark'
                          ? 'bg-black/60 group-hover:bg-black/40'
                          : card.type === 'image-purple'
                          ? 'bg-[#150a33]/70 group-hover:bg-[#150a33]/50'
                          : 'bg-black/30 group-hover:bg-black/10'
                      }`}
                    />
                  </>
                )}

                <div className="relative z-10 text-left w-full">
                  {card.icon && (
                    <div
                      className={`mb-4 transition-all duration-300 group-hover:scale-110 ${
                        card.img ? 'text-white' : 'text-[#0658d4]'
                      }`}
                    >
                      {React.cloneElement(card.icon, { size: 32, strokeWidth: 1.5 })}
                    </div>
                  )}

                  <h4
                    className={`text-xl font-bold tracking-tight mb-1 ${
                      card.img ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {card.title}
                  </h4>

                  {card.subtitle && (
                    <p className={`text-sm font-medium ${card.img ? 'text-white/80' : 'text-gray-500'}`}>
                      {card.subtitle}
                    </p>
                  )}

                  {card.type === 'image-dark' || card.type === 'image-purple' ? (
                    <p className="text-[11px] font-bold text-white underline decoration-[#0658d4] underline-offset-4 mt-2">
                      Learn more
                    </p>
                  ) : (
                    card.img && (
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/80 flex items-center gap-1 mt-2">
                        View live jobs <ArrowRight size={12} />
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}

            <div className="md:col-span-3 bg-gradient-to-r from-[#0658d4] to-[#3d7699] rounded-[1.5rem] p-10 h-[180px] flex items-end justify-end group cursor-pointer">
              <div className="flex items-center text-white font-bold text-xl gap-2 group-hover:translate-x-2 transition-transform">
                Browse all specialisms <ArrowRight size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM UI: BROWSE JOBS BY COURSE */}
      <section className="relative overflow-hidden border-t border-gray-100 bg-[#f4f4f4] py-20 md:py-24">

        <div className="mx-auto mb-16 max-w-5xl px-6 text-center md:px-10">
          <h2 className="text-5xl font-black leading-tight tracking-[-0.055em] text-black md:text-6xl lg:text-[76px]">
            Browse jobs by course
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-[24px] font-normal leading-[1.15] tracking-[-0.02em] text-[#202533] md:text-[30px]">
            Discover the perfect opportunity by browsing jobs that are hiring
            people from your course discipline.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-md transition-all hover:bg-[#0658d4] md:left-8"
            aria-label="Previous"
          >
            <ChevronLeft size={36} strokeWidth={3} />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-md transition-all hover:bg-[#0658d4] md:right-8"
            aria-label="Next"
          >
            <ChevronRight size={36} strokeWidth={3} />
          </button>

          <div
            ref={sliderRef}
            className="scrollbar-hide flex gap-24 overflow-x-auto scroll-smooth px-[9vw] pb-6"
          >
            {courseCards.map((item) => (
              <article
                key={item.title}
                className="group relative h-[500px] min-w-[360px] overflow-hidden rounded-[26px] bg-gray-200 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:min-w-[460px] lg:min-w-[500px]"
              >
                <img
                  src={item.image}
                  alt={`${item.title} jobs`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className={`absolute inset-0 ${item.overlay}`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"></div>

                <div className="absolute bottom-10 left-8 right-8 text-white">
                  <div className="mb-5 text-white">
                    {item.icon}
                  </div>

                  <h3 className="text-[34px] font-black leading-[0.95] tracking-[-0.04em] md:text-[38px]">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
};

export default CareerSection;