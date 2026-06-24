import { useEffect, useState } from 'react';
import { Plus, Minus, MessageCircle, Phone, Mail, Clock } from 'lucide-react';

const faqs = [
  {
    question: 'How quickly can you deploy staff in Kuwait?',
    answer: 'Deployment timelines depend on the sector and local regulations. For candidates already within the GCC, placement typically takes 2-4 weeks. International recruitment requires 6-10 weeks for visa processing, credentialing, and compliance verification.'
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We focus on high-impact industries including Healthcare (Nursing, Allied Health, and Medical Professionals), IT & Cybersecurity, Education (Teachers and Administrators), Hospitality, and Specialized Engineering. We ensure all candidates meet industry-specific certifications and Kuwaiti regulatory requirements.'
  },
  {
    question: 'Are your recruitment processes fully compliant with Kuwaiti labor laws?',
    answer: 'Absolutely. We maintain 100% ethical compliance, adhering strictly to Kuwaiti labor laws and international recruitment standards. We handle all background checks, medical screenings, credential verifications, and document attestations to ensure complete regulatory compliance.'
  },
  {
    question: 'What post-placement support do you offer?',
    answer: 'We provide comprehensive onboarding support for the first 90 days to ensure a smooth transition for both employers and candidates. For large-scale manpower projects, we offer ongoing liaison services between the employer and the workforce, including performance monitoring and conflict resolution.'
  },
  {
    question: 'Where is Antalya For Recruiting Manpower LLC located?',
    answer: 'Antalya For Recruiting Manpower LLC is headquartered in Ali Tower, Kuwait City, specifically at Abdullah Al-Salem Street, Mirqab-Block 1, Capital Governorate. We operate as a fully registered Staffing Company solution provider with a growing presence across the GCC region.'
  },
  {
    question: 'How do you verify candidate credentials and qualifications?',
    answer: 'Our verification process includes multi-level technical assessments, primary source verification (PSV) for healthcare professionals, rigorous reference checks, and industry-specific certification validation. We ensure every candidate meets the highest quality standards before placement.'
  },
  {
    question: 'Do you recruit for temporary or project-based positions?',
    answer: 'Yes. We offer flexible staffing solutions including permanent placements, temporary staffing, and project-based recruitment. Our team works closely with employers to understand their specific needs and provide tailored workforce solutions.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative py-24 bg-[#fcfcfc] overflow-hidden font-sans">
      {/* Subtle Antalya Blue Glows */}
      <div
        className="absolute w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] pointer-events-none transition-transform duration-500 ease-out"
        style={{ transform: `translate(${cursorPos.x * 0.02}px, ${cursorPos.y * 0.02}px)`, top: '10%', left: '-10%' }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <span className="text-[#0658d4] font-semibold text-xs uppercase tracking-[0.3em] mb-6 block">
            FAQ
          </span>
          <h2 className="text-4xl md:text-7xl font-semibold text-slate-800 leading-[1.1] tracking-tight mb-8">
            Frequently Asked <br className="hidden md:block" />
            <span className="text-[#0658d4]">Questions</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl font-normal leading-relaxed">
            Everything you need to know about our recruitment process, deployment timelines, compliance standards, and how we empower your workforce in Kuwait and the GCC.
          </p>
        </div>

        {/* FAQ List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`group border-b border-gray-100 transition-all duration-300 ${
                  openIndex === idx ? 'bg-white shadow-xl shadow-blue-900/5 rounded-2xl border-none p-2' : 'bg-transparent'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-6 md:py-8 flex items-center justify-between text-left"
                >
                  <span className={`text-lg md:text-2xl font-semibold tracking-tight transition-colors duration-300 ${
                    openIndex === idx ? 'text-[#0658d4]' : 'text-slate-800'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === idx ? 'bg-[#0658d4] rotate-180' : 'bg-gray-100 group-hover:bg-gray-200'
                  }`}>
                    {openIndex === idx ? (
                      <Minus className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 md:w-5 md:h-5 text-slate-600" />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-8 md:pb-10 text-gray-500 text-base md:text-lg leading-relaxed max-w-3xl font-normal">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Side Contact Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-12 text-white relative overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-[#0658d4] blur-[60px] opacity-30" />
                <MessageCircle className="w-10 h-10 md:w-12 md:h-12 text-[#0658d4] mb-8" />
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Need More Help?</h3>
                <p className="text-gray-400 text-base md:text-lg mb-6 leading-relaxed font-normal">
                    Can't find the answer you're looking for? Our recruitment consultants in Kuwait City are ready to assist you.
                </p>
                
                {/* Contact Details */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <Phone className="w-4 h-4 text-[#0658d4]" />
                    <span>+965 69039059</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <Mail className="w-4 h-4 text-[#0658d4]" />
                    <span>info@antalyamanpower.com.kw</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <Clock className="w-4 h-4 text-[#0658d4]" />
                    <span>Sun-Thu: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
                
                <button 
                    className="w-full py-4 md:py-5 bg-[#0658d4] text-white rounded-full font-bold text-lg hover:bg-[#0547a8] transition-all shadow-lg flex items-center justify-center gap-2"
                >
                    Contact Our Team <MessageCircle className="w-4 h-4" />
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}