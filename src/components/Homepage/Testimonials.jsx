import React from 'react';
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Arshad Khan",
    company: "Capital Health Medical Center",
    role: "HR Director",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "Antalya Manpower provided us with exceptionally qualified nursing staff within a very tight deadline. Their recruitment process for healthcare is truly world-class.",
    rating: 5,
  },
  {
    name: "Fatima Al-Rashid",
    company: "Global Education Group",
    role: "Operations Manager",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "We've sourced over 50 educators through Antalya. Their ability to find native speakers and certified professionals is unmatched in the Kuwaiti market.",
    rating: 5,
  },
  {
    name: "James Wilson",
    company: "SecureTech Solutions",
    role: "CTO",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "Finding specialized Cybersecurity talent in the GCC is a challenge, but Antalya delivered local and international experts who integrated seamlessly into our team.",
    rating: 5,
  },
  {
    name: "Mariam Yousuf",
    company: "Elite Hospitality",
    role: "General Manager",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "The hospitality staff provided by Antalya are professional, well-trained, and possess excellent communication skills. They have become our go-to recruitment partner.",
    rating: 5,
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <div className="group relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-100 hover:border-[#0658d4]/30 shadow-sm hover:shadow-2xl transition-all duration-500 w-full max-w-md mx-auto">
      <div className="absolute top-4 right-4 md:top-6 md:right-6 text-slate-100 group-hover:text-[#0658d4]/10 transition-colors">
        <Quote className="w-12 h-12 md:w-16 md:h-16 fill-current" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center mb-4 md:mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#f29100] fill-current mr-1" />
          ))}
        </div>

        <p className="text-slate-500 mb-6 md:mb-8 text-base md:text-lg leading-relaxed italic">
          "{testimonial.content}"
        </p>

        <div className="flex items-center border-t border-gray-50 pt-5 md:pt-6">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl object-cover mr-3 md:mr-4 grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div>
            <h4 className="text-slate-800 font-semibold text-sm md:text-lg">{testimonial.name}</h4>
            <p className="text-[10px] md:text-sm font-bold text-[#0658d4] uppercase tracking-wider">
              {testimonial.role} <span className="hidden sm:inline text-gray-300 mx-1">|</span> <br className="sm:hidden" /> {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-[#fcfcfc] relative overflow-hidden font-sans">
      {/* Top Accent Bar in Antalya Orange */}
      <div className="absolute top-0 left-0 right-0 h-1 md:h-1.5 bg-[#f29100]"></div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <span className="text-[#0658d4] font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] mb-4 block">
            Partner Success Stories
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-[72px] font-bold text-slate-800 leading-[1.1] tracking-tight mb-6 md:mb-8">
            What our <br />
            <span className="text-[#0658d4]">clients say</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed">
            Reliable recruitment is the backbone of successful industry leaders. Hear from the businesses we empower across the GCC.
          </p>
        </div>

        {/* Scroll Container */}
        <div className="relative h-[500px] md:h-[700px] overflow-hidden">
          {/* Faders */}
          <div className="absolute top-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-b from-[#fcfcfc] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-t from-[#fcfcfc] to-transparent z-20 pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 h-full">
            {/* Column 1 */}
            <div className="relative overflow-hidden h-full">
              <div className="absolute w-full flex flex-col gap-6 md:gap-8 animate-scroll-up hover:[animation-play-state:paused]">
                {[...testimonials, ...testimonials].map((t, i) => (
                  <TestimonialCard key={`col1-${i}`} testimonial={t} />
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="relative overflow-hidden h-full hidden md:block">
              <div className="absolute w-full flex flex-col gap-8 animate-scroll-down hover:[animation-play-state:paused]">
                {[...testimonials, ...testimonials].map((t, i) => (
                  <TestimonialCard key={`col2-${i}`} testimonial={t} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Stats */}
        <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-1 tracking-tight">4.9/5</div>
              <div className="text-[#0658d4] font-bold uppercase tracking-widest text-[10px] md:text-sm">Client Rating</div>
            </div>
            <div className="flex flex-col items-center border-y sm:border-y-0 sm:border-x border-gray-100 py-6 sm:py-0">
              <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-1 tracking-tight">120k+</div>
              <div className="text-[#0658d4] font-bold uppercase tracking-widest text-[10px] md:text-sm">Candidates Placed</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-1 tracking-tight">100%</div>
              <div className="text-[#0658d4] font-bold uppercase tracking-widest text-[10px] md:text-sm">Compliance Rate</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-scroll-up {
          animation: scroll-up 40s linear infinite;
        }
        .animate-scroll-down {
          animation: scroll-down 40s linear infinite;
        }
      `}</style>
    </section>
  );
}