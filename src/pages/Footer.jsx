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
  Clock,
  Youtube,
  Facebook,
  Twitter
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sitemapLinks = [
    { label: 'Home', url: '/' },
    { label: 'Healthcare Recruitment', url: '/healthcare' },
    { label: 'IT & Cybersecurity', url: '/it-cybersecurity' },
    { label: 'Education Staffing', url: '/education' },
    { label: 'Hospitality Recruitment', url: '/hospitality' },
    { label: 'For Employers', url: '/employers' },
    { label: 'For Job Seekers', url: '/job-seekers' },
    { label: 'Insights & Blog', url: '/blog' },
    { label: 'Contact Us', url: '/contact' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', url: '/privacy' },
    { label: 'Data Protection', url: '/data-protection' },
    { label: 'Kuwait Labor Compliance', url: '/labor-compliance' },
    { label: 'Terms & Conditions', url: '/terms' },
    { label: 'Cookie Policy', url: '/cookies' },
    { label: 'Candidate Protection', url: '/candidate-protection' },
    { label: 'Ethical Recruitment Policy', url: '/ethical-recruitment' }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://instagram.com/antalyamanpower',
      label: 'Instagram'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/antalya-manpower-llc/',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: '/',
      label: 'X'
    },
    {
      icon: Youtube,
      href: '/',
      label: 'YouTube'
    },
    {
      icon: Facebook,
      href: '/',
      label: 'Facebook'
    }
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-[#1e1b24] font-['Inter',sans-serif] text-white">

      {/* TOP REGISTER CTA SECTION */}
      <section className="w-full bg-[#0658d4] px-8 py-12 md:px-16 lg:py-14">
        <div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <h2 className="max-w-[850px] text-[38px] font-black leading-[1.08] tracking-[-0.045em] text-white md:text-[54px] lg:text-[58px]">
            Register your free account now 
            <br className="hidden md:block" />
            see your matching jobs.
          </h2>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="/register"
              className="flex items-center gap-2 rounded-full border-2 border-white px-9 py-4 text-[17px] font-bold text-white transition-all hover:bg-white hover:text-[#0658d4]"
            >
              <UserPlus size={20} />
              Register
            </a>

            <a
              href="/login"
              className="flex items-center gap-2 px-4 py-4 text-[17px] font-bold text-white transition-all hover:opacity-75"
            >
              <LogIn size={20} />
              Login
            </a>
          </div>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <div className="relative mx-auto max-w-[1500px] px-8 py-12 md:px-16 lg:py-16">

        {/* DECORATIVE SHAPE */}
        <div className="pointer-events-none absolute bottom-3 right-8 hidden h-[210px] w-[210px] opacity-[0.06] lg:block">
          <div className="h-full w-full rounded-tl-[110px] rounded-bl-[110px] bg-white"></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-12">

          {/* LEFT BRAND BLOCK */}
          <div className="lg:col-span-6">
            <a href="/" className="mb-7 inline-flex flex-col leading-none">
              <span className="text-[40px] font-black tracking-[-0.08em] text-white md:text-[50px]">
                Antalya.
              </span>

              <span className="mt-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/55">
                For Recruiting Manpower LLC
              </span>
            </a>

            <p className="max-w-[560px] text-[16px] font-light leading-[1.5] text-white/45 md:text-[18px]">
              Registered in Ali Tower, Kuwait City, Antalya For Recruiting Manpower LLC is a
              premier staffing provider specializing in Healthcare, Education, Hospitality,
              IT and Cybersecurity recruitment across Kuwait and the GCC.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-6 space-y-2 text-[14px] font-medium text-white/70">
              <div className="flex items-center gap-3">
                <MapPin size={17} className="text-[#0658d4]" />
                <span>Ali Tower, Abdullah Al-Salem Street, Mirqab-Block 1, Kuwait City</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={17} className="text-[#0658d4]" />
                <span>+965 69039059</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={17} className="text-[#0658d4]" />
                <span>info@antalyamanpower.com.kw</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock size={17} className="text-[#0658d4]" />
                <span>Sun-Thu: 9:00 AM - 6:00 PM</span>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="mt-7 flex flex-wrap items-center gap-7">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-white transition-all hover:-translate-y-1 hover:text-[#0658d4]"
                  >
                    <Icon size={27} strokeWidth={2.3} />
                  </a>
                );
              })}
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-7 flex flex-wrap gap-4">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-3 rounded-full bg-[#0658d4] px-8 py-4 text-[16px] font-bold text-white transition-all hover:bg-[#0547aa]"
              >
                <ArrowUpCircle size={21} />
                Back to top
              </button>
            </div>
          </div>

          {/* SITEMAP */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 text-[23px] font-black tracking-[-0.03em] text-white">
              Sitemap
            </h3>

            <ul className="space-y-3">
              {sitemapLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.url}
                    className="group flex items-center gap-3 text-[15px] font-semibold text-white transition-all hover:text-[#0658d4]"
                  >
                    <ChevronRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 text-[23px] font-black tracking-[-0.03em] text-white">
              Legal
            </h3>

            <ul className="space-y-3">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.url}
                    className="group flex items-center gap-3 text-[15px] font-semibold text-white transition-all hover:text-[#0658d4]"
                  >
                    <ChevronRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* TRUST BADGES */}
            <div className="mt-7 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-white/70">
                <Shield size={15} className="text-[#0658d4]" />
                100% Compliant
              </div>

              <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-white/70">
                <Award size={15} className="text-[#f29100]" />
                4.9/5 Rating
              </div>

              <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-white/70">
                <Heart size={15} className="text-[#0658d4]" />
                120k+ Placed
              </div>
            </div>

            {/* NEWSLETTER */}
            <div className="mt-7 rounded-2xl border border-white/8 bg-white/5 p-4">
              <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-white/70">
                <Send size={15} className="text-[#f29100]" />
                Subscribe to manpower insights
              </p>

              <div className="flex overflow-hidden rounded-full bg-white/10">
                <input
                  type="email"
                  placeholder="Your email"
                  aria-label="Email for newsletter"
                  className="w-full bg-transparent px-5 py-3 text-sm text-white outline-none placeholder:text-white/35"
                />

                <button className="bg-[#0658d4] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[#0547aa]">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BLUE COPYRIGHT BAR */}
      <div className="bg-[#0658d4] px-6 py-3 text-center">
        <p className="text-[16px] font-semibold text-white">
          © {currentYear} Antalya For Recruiting Manpower LLC
        </p>
      </div>
    </footer>
  );
}