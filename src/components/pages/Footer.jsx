import React from 'react';
import { 
  Instagram, 
  Linkedin, 
  Twitter,
  Facebook, 
  ChevronRight, 
  ArrowUpCircle,
  LogIn,
  UserPlus,
  Send
} from 'lucide-react';


export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full font-sans">
      
      {/* 1. BRANDED REGISTRATION CTA BAR */}
      <div className="bg-[#0052D9] py-10 md:py-14">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight max-w-2xl text-center md:text-left">
            Join our global talent pool today and find your next professional milestone.
          </h2>
          
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 bg-white text-[#4a90bc] px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg">
              <UserPlus size={20} />
              Register Now
            </button>
            <button className="flex items-center gap-2 text-white font-semibold hover:opacity-80 transition-opacity">
              <LogIn size={20} />
              Client Login
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN DARK FOOTER */}
      <div className="bg-[#1a1b1e] text-white pt-20 pb-10 relative overflow-hidden">
        
        {/* Decorative Brand Accent (Bottom Right) */}
        <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none select-none translate-x-1/4 translate-y-1/4">
           <div className="w-[400px] h-[400px] bg-[#4a90bc] rounded-tl-[200px]"></div>
        </div>

        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
            
            {/* Logo & About Column */}
            <div className="md:col-span-5">
              <div className="mb-8">
                {/* Branding Text if logo is missing, or use inverted image */}
                <div className="flex flex-col leading-none">
                  <span className="text-2xl font-bold uppercase tracking-wider text-white">Antalya</span>
                  <span className="text-[10px] font-bold text-[#f29100] uppercase tracking-tighter">Recruiting Manpower LLC</span>
                </div>
              </div>
              <p className="text-gray-400 text-base leading-relaxed max-w-md mb-10 font-normal">
                Registered in Ali Tower, Kuwait City, Antalya Recruiting Manpower LLC is a leading staffing provider specializing in Healthcare, Education, and IT sectors across the GCC.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-5 mb-10">
                {[
                  { icon: Instagram, href: '/' },
                  { icon: Linkedin, href: '/' },
                  { icon: Twitter, href: '/' },
                  { icon: Facebook, href: '/' }
                ].map((social, i) => (
                  <a key={i} href={social.href} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#4a90bc] hover:text-white transition-all border border-white/10">
                    <social.icon size={18} />
                  </a>
                ))}
              </div>

              <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-semibold group"
              >
                <ArrowUpCircle size={20} className="group-hover:-translate-y-1 transition-transform" />
                Back to top
              </button>
            </div>

            {/* Sitemap Column */}
            <div className="md:col-span-3">
              <h4 className="text-lg font-semibold mb-8 tracking-tight text-[#4a90bc]">Sitemap</h4>
              <ul className="space-y-4">
                {['Home', 'Healthcare Recruitment', 'IT & Tech Roles', 'Education Staffing', 'Employer Solutions', 'About Our Group', 'Resource Hub', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <a href="/" className="text-gray-400 hover:text-white flex items-center gap-2 text-sm transition-colors group font-normal">
                      <ChevronRight size={14} className="text-[#4a90bc] opacity-50 group-hover:opacity-100 transition-opacity" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Compliance Column */}
            <div className="md:col-span-4">
              <h4 className="text-lg font-semibold mb-8 tracking-tight text-[#4a90bc]">Compliance</h4>
              <ul className="space-y-4">
                {['Privacy Policy', 'Data Protection (GDPR)', 'Labor Compliance', 'Terms of Service', 'Cookie Settings', 'Candidate Protection'].map((item) => (
                  <li key={item}>
                    <a href="/" className="text-gray-400 hover:text-white flex items-center gap-2 text-sm transition-colors group font-normal">
                      <ChevronRight size={14} className="text-[#4a90bc] opacity-50 group-hover:opacity-100 transition-opacity" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 p-5 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-xs text-gray-400 flex items-center gap-2">
                  <Send size={14} className="text-[#f29100]" />
                  Subscribe to manpower insights
                </p>
                <div className="mt-3 flex">
                  <input type="text" placeholder="Your email" className="bg-white/10 border-none rounded-l-lg px-4 py-2 text-xs w-full focus:ring-1 focus:ring-[#4a90bc]" />
                  <button className="bg-[#4a90bc] px-4 py-2 rounded-r-lg text-xs font-bold">Go</button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs font-medium">
              © {currentYear} Antalya For Recruiting Manpower LLC. Registered in Kuwait City.
            </p>
            <div className="flex gap-6 text-[10px] uppercase tracking-widest text-gray-600 font-bold">
              <span>All Rights Reserved</span>
              <span>•</span>
              <span>100% Ethical Recruitment</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}