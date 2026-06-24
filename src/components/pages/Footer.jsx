import React from 'react';
import { 
  Instagram, 
  Linkedin, 
  ChevronRight, 
  ArrowUpCircle,
  LogIn,
  UserPlus,
  Send,
  Heart,
  Shield,
  Award,
  MapPin,
  Phone,
  Mail,
  Clock
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full font-sans">
      
      {/* 1. BRANDED REGISTRATION CTA BAR */}
      <div className="bg-[#0658d4] py-10 md:py-14">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight max-w-2xl text-center md:text-left">
            Join Kuwait's premier talent network and find your next professional milestone.
          </h2>
          
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <button className="flex items-center gap-2 bg-white text-[#0658d4] px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg">
              <UserPlus size={20} />
              Register Now
            </button>
            <button className="flex items-center gap-2 text-white font-semibold hover:opacity-80 transition-opacity border border-white/20 px-6 py-3 rounded-full">
              <LogIn size={20} />
              Employer Login
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN DARK FOOTER */}
      <div className="bg-[#0a1631] text-white pt-20 pb-10 relative overflow-hidden">
        
        {/* Decorative Brand Accent */}
        <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none select-none translate-x-1/4 translate-y-1/4">
           <div className="w-[400px] h-[400px] bg-[#0658d4] rounded-tl-[200px]"></div>
        </div>

        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
            
            {/* Logo & About Column */}
            <div className="md:col-span-5">
              <div className="mb-8">
                <div className="flex flex-col leading-none">
                  <span className="text-2xl font-bold uppercase tracking-wider text-white">Antalya</span>
                  <span className="text-[10px] font-bold text-[#f29100] uppercase tracking-tighter">For Recruiting Manpower LLC</span>
                </div>
              </div>
              <p className="text-gray-400 text-base leading-relaxed max-w-md mb-6 font-normal">
                Registered in <span className="text-white/70 font-semibold">Ali Tower, Kuwait City</span>, Antalya For Recruiting Manpower LLC is a premier staffing provider specializing in <span className="text-white/70">Healthcare, Education, IT, and Cybersecurity</span> sectors across Kuwait and the GCC.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 mb-8 text-sm text-gray-400">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-[#0658d4] flex-shrink-0" />
                  <span>Abdullah Al-Salem Street, Mirqab-Block 1, Kuwait City</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#0658d4] flex-shrink-0" />
                  <span>+965 69039059</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#0658d4] flex-shrink-0" />
                  <span>info@antalyamanpower.com.kw</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-[#0658d4] flex-shrink-0" />
                  <span>Sun-Thu: 9:00 AM - 6:00 PM (AST)</span>
                </div>
              </div>
              
              {/* Social Icons */}
              <div className="flex gap-4 mb-8">
                {[
                  { icon: Linkedin, href: 'https://www.linkedin.com/company/antalya-manpower-llc/', label: 'LinkedIn' },
                  { icon: Instagram, href: 'https://instagram.com/antalyamanpower', label: 'Instagram' },
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#0658d4] hover:text-white transition-all border border-white/10 hover:border-[#0658d4]"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>

              <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-semibold group"
              >
                <ArrowUpCircle size={20} className="group-hover:-translate-y-1 transition-transform text-[#0658d4]" />
                Back to top
              </button>
            </div>

            {/* Sitemap Column */}
            <div className="md:col-span-3">
              <h4 className="text-lg font-semibold mb-8 tracking-tight text-[#0658d4]">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Home', url: '/' },
                  { label: 'Healthcare Recruitment', url: '/healthcare' },
                  { label: 'IT & Cybersecurity', url: '/it-cybersecurity' },
                  { label: 'Education Staffing', url: '/education' },
                  { label: 'Hospitality Recruitment', url: '/hospitality' },
                  { label: 'For Employers', url: '/employers' },
                  { label: 'For Job Seekers', url: '/job-seekers' },
                  { label: 'Insights & Blog', url: '/blog' },
                  { label: 'Contact Us', url: '/contact' }
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.url} className="text-gray-400 hover:text-white flex items-center gap-2 text-sm transition-colors group font-normal">
                      <ChevronRight size={14} className="text-[#0658d4] opacity-50 group-hover:opacity-100 transition-opacity" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Compliance Column */}
            <div className="md:col-span-4">
              <h4 className="text-lg font-semibold mb-8 tracking-tight text-[#0658d4]">Compliance & Support</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Privacy Policy', url: '/privacy' },
                  { label: 'Data Protection (GDPR)', url: '/data-protection' },
                  { label: 'Kuwait Labor Compliance', url: '/labor-compliance' },
                  { label: 'Terms of Service', url: '/terms' },
                  { label: 'Cookie Settings', url: '/cookies' },
                  { label: 'Candidate Protection', url: '/candidate-protection' },
                  { label: 'Ethical Recruitment Policy', url: '/ethical-recruitment' }
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.url} className="text-gray-400 hover:text-white flex items-center gap-2 text-sm transition-colors group font-normal">
                      <ChevronRight size={14} className="text-[#0658d4] opacity-50 group-hover:opacity-100 transition-opacity" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/5">
                  <Shield size={14} className="text-[#0658d4]" />
                  <span className="text-[10px] text-gray-400 font-medium">100% Compliant</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/5">
                  <Award size={14} className="text-[#f29100]" />
                  <span className="text-[10px] text-gray-400 font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/5">
                  <Heart size={14} className="text-[#0658d4]" />
                  <span className="text-[10px] text-gray-400 font-medium">120k+ Placed</span>
                </div>
              </div>

              {/* Newsletter */}
              <div className="mt-8 p-5 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-xs text-gray-400 flex items-center gap-2 mb-3">
                  <Send size={14} className="text-[#f29100]" />
                  Subscribe to manpower insights
                </p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="bg-white/10 border-none rounded-l-lg px-4 py-2.5 text-xs w-full focus:ring-1 focus:ring-[#0658d4] text-white placeholder-gray-500"
                    aria-label="Email for newsletter"
                  />
                  <button className="bg-[#0658d4] px-5 py-2.5 rounded-r-lg text-xs font-bold hover:bg-[#0547a8] transition-all whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs font-medium">
              © {currentYear} <span className="text-white/70">Antalya For Recruiting Manpower LLC</span>. Registered in Kuwait City. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-widest text-gray-600 font-bold">
              <span>100% Ethical Recruitment</span>
              <span className="hidden sm:inline">•</span>
              <span>ISO Compliant</span>
              <span className="hidden sm:inline">•</span>
              <span>Kuwait Labor Law</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}