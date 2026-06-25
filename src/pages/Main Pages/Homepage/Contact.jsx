import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Recruitment Inquiry:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-white overflow-hidden font-sans"
    >
      {/* Subtle Brand Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#0658d4]/10 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#f29100]/10 rounded-full blur-[100px] animate-float-delayed"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-20 border-l-4 border-[#0658d4] pl-8">
          <div className="inline-block px-4 py-1 bg-[#0658d4]/10 rounded-full border border-[#0658d4]/20 mb-6">
            <span className="text-[#0658d4] text-xs font-bold uppercase tracking-widest">Connect with our team</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold text-slate-800 mb-6 tracking-tight">
            Partner with <br />
            <span className="text-[#0658d4]">Global Excellence</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl font-normal leading-relaxed">
            Ready to empower your workforce or secure your next professional role? Our recruitment consultants are available to assist with your inquiries.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Form - 7 Columns */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-2xl shadow-slate-200/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 focus:outline-none focus:border-[#0658d4] transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Official Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 focus:outline-none focus:border-[#0658d4] transition-all"
                    placeholder="email@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                  Organization / Hospital Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 focus:outline-none focus:border-[#0658d4] transition-all"
                  placeholder="Organization Name"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                  Area of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 focus:outline-none focus:border-[#0658d4] transition-all"
                >
                  <option value="">Select an inquiry type</option>
                  <option value="healthcare">Healthcare Staffing</option>
                  <option value="it">IT & Cybersecurity Talent</option>
                  <option value="education">Educational Manpower</option>
                  <option value="technical">Specialized Engineering</option>
                  <option value="candidate">Candidate Registration</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Requirement Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 focus:outline-none focus:border-[#0658d4] transition-all resize-none"
                  placeholder="Tell us about your staffing needs or career goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#0658d4] text-white rounded-xl font-bold text-lg transition-all duration-300 hover:bg-[#3d7699] hover:shadow-lg flex items-center justify-center gap-3"
              >
                Send Inquiry
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Info - 5 Columns */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-900 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0658d4] blur-[80px] opacity-20" />
              
              <h3 className="text-2xl font-semibold mb-8 border-b border-white/10 pb-4">Our Headquarters</h3>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                    <MapPin className="w-6 h-6 text-[#0658d4]" />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Visit Us</h4>
                    <p className="text-white font-medium">Ali Tower, Kuwait City</p>
                    <p className="text-gray-400 text-sm">Capital Governorate, Kuwait</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                    <Mail className="w-6 h-6 text-[#f29100]" />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Email Us</h4>
                    <p className="text-white font-medium">info@antalyamanpower.com.kw</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                    <Phone className="w-6 h-6 text-[#0658d4]" />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Call Us</h4>
                    <p className="text-white font-medium">+965 [Phone Number]</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-[#0658d4]" />
                <h3 className="text-lg font-semibold text-slate-800">Operational Hours</h3>
              </div>
              <div className="space-y-3 text-sm font-medium text-gray-500 uppercase tracking-wide">
                <div className="flex justify-between">
                  <span>Sunday - Thursday</span>
                  <span className="text-slate-800">08:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-slate-800">09:00 - 14:00</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-3">
                  <span>Friday</span>
                  <span className="text-red-500">Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-[#f29100]/5 rounded-3xl p-8 border border-[#f29100]/10">
              <h3 className="text-sm font-bold text-[#f29100] uppercase tracking-widest mb-2">Priority Response</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We prioritize urgent manpower requests. Corporate inquiries are typically addressed within 4–6 business hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float 10s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}