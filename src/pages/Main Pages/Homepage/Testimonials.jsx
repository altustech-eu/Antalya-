import React from 'react';
import { Star, Heart } from 'lucide-react';

const testimonials = [
  {
    name: 'Maia H.',
    initials: 'MH',
    color: 'bg-[#fbbc05]',
    date: 'Jun 22, 2026',
    content:
      'I had an amazing experience with Antalya. The team was supportive from the beginning to the end of my recruitment process; they called me before and after interviews and showed genuine interest in my job search.'
  },
  {
    name: 'Gabriel P.',
    initials: 'GP',
    color: 'bg-[#f44336]',
    date: 'Jun 21, 2026',
    content:
      'Very helpful, supported me through the whole recruitment process and made my life a lot easier. The team gave clear guidance and helped me prepare professionally.'
  },
  {
    name: 'Nifemi F.',
    initials: 'NF',
    color: 'bg-[#08b4c7]',
    date: 'Jun 18, 2026',
    content:
      'My experience with Antalya has been absolutely brilliant. As a jobseeker, navigating applications can be draining, but the guidance and feedback were consistent and practical.'
  },
  {
    name: 'Ben L.',
    initials: 'BL',
    color: 'bg-[#fbbc05]',
    date: 'Jun 18, 2026',
    content:
      'Antalya helped me find roles best suited for me. The team provided guidance for every step of the application process and was always easy to contact whenever I had queries.'
  },
  {
    name: 'Aditi B.',
    initials: 'AB',
    color: 'bg-[#08b4c7]',
    date: 'May 21, 2026',
    content:
      'The members at Antalya were extremely helpful. As a candidate, the whole job process can be overwhelming, but I was guided and supported throughout each stage.'
  },
  {
    name: 'Ella S.',
    initials: 'ES',
    color: 'bg-[#08b4c7]',
    date: 'May 19, 2026',
    content:
      'I couldn’t recommend Antalya enough. The team was helpful and informative throughout every aspect of the process, from applying to securing interviews and preparing for the role.'
  }
];

function GoogleIcon() {
  return (
    <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-white text-[22px] font-black shadow-sm">
      <span className="text-[#4285f4]">G</span>
      <span className="absolute right-[2px] top-[5px] h-[6px] w-[6px] rounded-full bg-[#ea4335]"></span>
      <span className="absolute bottom-[4px] right-[3px] h-[6px] w-[7px] rounded-full bg-[#34a853]"></span>
      <span className="absolute bottom-[4px] left-[3px] h-[6px] w-[7px] rounded-full bg-[#fbbc05]"></span>
    </div>
  );
}

function ReviewCard({ item }) {
  return (
    <div className="relative min-h-[235px] rounded-2xl border border-gray-200 bg-white px-8 py-8 transition-all duration-300 ">
      <div className="absolute right-5 top-4">
        <GoogleIcon />
      </div>

      <div className="flex items-start gap-4">
        <div
          className={`flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full ${item.color} text-2xl font-medium text-white`}
        >
          {item.initials}
        </div>

        <div>
          <h3 className="text-lg font-extrabold leading-tight text-[#2b2b2b]">
            {item.name}
          </h3>

          <div className="mt-1 flex items-center gap-[2px] text-[#ff9900]">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={18}
                className="fill-current"
                strokeWidth={0}
              />
            ))}
          </div>

          <p className="mt-1 text-sm font-medium text-gray-400">
            {item.date}
          </p>
        </div>
      </div>

      <p className="mt-5 text-[15px] font-normal leading-relaxed text-[#565b6d]">
        {item.content}
      </p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white px-6 py-20 font-['Inter',sans-serif] md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1320px]">

        {/* SECTION HEADER */}
        <div className="mx-auto mb-24 max-w-4xl text-center">
          <h2 className="text-5xl font-black leading-tight tracking-[-0.05em] text-black md:text-6xl lg:text-[72px]">
            Loved by our community
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl font-normal leading-snug text-[#202533] md:text-2xl">
            Hear from the people who have experienced our career matching
            services and professional guidance first hand.
          </p>
        </div>

        {/* OVERALL RATING */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2 text-center text-xl text-[#565b6d] md:text-2xl">
          <span>Overall rating</span>

          <span className="font-black text-[#4d5063]">4.9</span>

          <Star
            size={30}
            className="fill-[#ff9900] text-[#ff9900]"
            strokeWidth={0}
          />

          <span>based on</span>

          <span className="font-black text-[#4d5063]">1,332</span>

          <span>reviews</span>
        </div>

        {/* REVIEW GRID */}
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.slice(0, 3).map((item) => (
            <ReviewCard key={item.name} item={item} />
          ))}
        </div>

        <div className="mx-auto mt-8 grid max-w-[1100px] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.slice(3, 6).map((item) => (
            <ReviewCard key={item.name} item={item} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
          <button className="flex items-center gap-2 rounded-full bg-[#0658d4] px-9 py-5 text-lg font-bold text-white transition-all ">
            Read testimonials
            <Heart size={20} strokeWidth={2.4} />
          </button>
        </div>
      </div>
    </section>
  );
}