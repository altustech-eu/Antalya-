import React, { useState, useEffect } from 'react';
import { MessageCircle, Linkedin, Instagram} from 'lucide-react';

const SocialSidebar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Social media links from the LinkedIn page and company website
  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: <MessageCircle size={22} />,
      url: 'https://wa.me/96550168877', // Phone number from LinkedIn posts
      color: 'bg-[#25D366] hover:bg-[#1da851]',
      shadow: 'shadow-green-500/20',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={22} />,
      url: 'https://www.linkedin.com/company/antalya-manpower-llc/',
      color: 'bg-[#0A66C2] hover:bg-[#004182]',
      shadow: 'shadow-blue-600/20',
    },
    {
      name: 'Instagram',
      icon: <Instagram size={22} />,
      url: 'https://www.instagram.com/antalyamanpower/', // Assumed Instagram handle
      color: 'bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90',
      shadow: 'shadow-pink-500/20',
    }
  ];

  // Show sidebar after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed right-4 bottom-24 z-40 flex flex-col items-center gap-3 transition-all duration-500 transform ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Vertical Line / Connector */}
      <div className={`w-0.5 h-12 bg-gradient-to-b from-[#0658d4] to-transparent transition-all duration-300 ${
        isHovered ? 'h-16' : 'h-12'
      }`}></div>

      {/* Social Icons */}
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Connect with us on ${social.name}`}
          className={`group relative flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg ${social.color} ${social.shadow} transition-all duration-300 hover:scale-110 hover:shadow-2xl`}
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        >
          {/* Tooltip */}
          <span className="absolute right-full mr-4 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
            {social.name}
            <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 border-4 border-transparent border-l-slate-900"></span>
          </span>

          {/* Icon */}
          {social.icon}

          {/* Ripple effect on hover */}
          <span className="absolute inset-0 rounded-full animate-ping bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
        </a>
      ))}

      {/* Bottom decorative dot */}
      <div className="w-2 h-2 rounded-full bg-[#0658d4] animate-pulse"></div>
    </div>
  );
};

export default SocialSidebar;