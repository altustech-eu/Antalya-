import React from 'react';
import { ArrowRight } from 'lucide-react';

const EmployerServices = () => {
  return (
    <section className="relative overflow-hidden bg-[#f4f4f4] font-['Inter',sans-serif]">

      {/* LARGE FADED BACKGROUND TEXT */}
      <div className="pointer-events-none absolute left-0 top-16 z-0 w-full overflow-hidden whitespace-nowrap">
        <div className="animate-marquee-slow text-[72px] font-black leading-none tracking-[-0.06em] text-[#d3d4d8] md:text-[92px] lg:text-[118px]">
          Trusted by the world’s leading employers for supplying first-class talent &nbsp; Trusted by the world’s leading employers for supplying first-class talent &nbsp;
        </div>
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1800px] grid-cols-1 pt-[280px] lg:grid-cols-[56%_44%] lg:pt-[360px]">

        {/* LEFT IMAGE AREA */}
        <div className="relative min-h-[620px] overflow-hidden lg:min-h-[760px]">

          {/* BLUE IMAGE BLOCK */}
          <div className="absolute left-0 top-0 h-full w-[60%] overflow-hidden bg-[#0658d4]">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"
              alt="Employer recruitment meeting"
              className="h-full w-full object-cover grayscale mix-blend-multiply opacity-90"
            />

            <div className="absolute inset-0 bg-[#0658d4]/75"></div>

            {/* BLUE ANGLE DECOR */}
            <div className="absolute left-[8%] top-[5%] h-[115%] w-[70px] rotate-[27deg] bg-[#096cff] opacity-95"></div>

            {/* GRAIN */}
            <div className="absolute inset-0 opacity-[0.22] mix-blend-overlay grain-layer"></div>

            {/* VERTICAL TEXT */}
            <div className="absolute bottom-16 right-7 z-20 origin-bottom-right -rotate-90 text-3xl font-black tracking-[-0.04em] text-white">
              Hiring early talent
            </div>
          </div>

          {/* BLACK & WHITE IMAGE BLOCK */}
          <div className="absolute right-0 top-0 h-full w-[52%] overflow-hidden rounded-tr-[90px] rounded-br-[90px] bg-white">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
              alt="Professional employer services"
              className="h-full w-full object-cover grayscale"
            />

            <div className="absolute inset-0 bg-white/5"></div>

            {/* WHITE DECORATIVE SHAPE */}
            <div className="absolute bottom-24 right-20 h-[220px] w-[220px] rounded-br-[100px] rounded-tl-[100px] bg-[#f4f4f4]"></div>
          </div>
        </div>

        {/* RIGHT CONTENT AREA */}
        <div className="relative flex min-h-[620px] items-center bg-[#f4f4f4] px-8 py-20 md:px-16 lg:min-h-[760px] lg:px-20">

          <div className="max-w-[720px]">

            <span className="mb-6 block text-[13px] font-bold uppercase tracking-[0.42em] text-[#0658d4]">
              Make a Hire
            </span>

            <h2 className="mb-8 text-[48px] font-black leading-[0.95] tracking-[-0.055em] text-black md:text-[68px] lg:text-[78px]">
              Employer Services
            </h2>

            {/* QUOTE */}
            <div className="relative mb-9">
              <span className="absolute -left-8 -top-7 text-[100px] font-black leading-none text-[#d8d8d8]">
                “
              </span>

              <p className="relative max-w-[680px] text-[26px] font-normal italic leading-[1.18] tracking-[-0.02em] text-[#20232a] md:text-[32px]">
                The best workforce strategy is not just hiring people, but building capability with the right talent at the right time.
              </p>

              <p className="mt-5 text-base font-medium text-[#20232a]">
                - Antalya For Recruiting Manpower LLC
              </p>
            </div>

            <p className="mb-10 max-w-[720px] text-[18px] font-normal leading-[1.65] text-[#20232a] md:text-[20px]">
              Antalya For Recruiting Manpower LLC is a trusted staffing and recruitment
              solutions partner registered in Ali Tower, Kuwait City. We support employers
              with specialized recruitment and placement of Healthcare, Education,
              Hospitality, IT and Cybersecurity professionals across Kuwait and the GCC.
            </p>

            <button className="group flex w-fit items-center gap-3 rounded-full bg-[#0658d4] px-9 py-5 text-lg font-bold text-white transition-all hover:bg-[#0547aa] hover:shadow-xl">
              Employer services
              <ArrowRight
                size={22}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-slow {
          0% {
            transform: translateX(-10%);
          }
          100% {
            transform: translateX(-55%);
          }
        }

        .animate-marquee-slow {
          animation: marquee-slow 34s linear infinite;
        }

        .grain-layer {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.55'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 180px 180px;
        }
      `}</style>
    </section>
  );
};

export default EmployerServices;