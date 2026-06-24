import React from "react";
import { ArrowRight, BookOpen, TrendingUp} from "lucide-react";

const articles = [
  {
    title: "Navigating Healthcare Recruitment in Kuwait: A 2026 Guide",
    description: "The medical landscape in Kuwait and the GCC is evolving rapidly. Understanding the licensing requirements, demand for specialized nursing, and compliance with Kuwaiti healthcare regulations is crucial for successful placement.",
    tag: "Healthcare, Licensing, Kuwait",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    readTime: "5 min read",
  },
  {
    title: "Cybersecurity Trends: What Middle East Employers Look For in 2026",
    description: "With the rapid digital transformation in Kuwait City and across the GCC, IT professionals need to pivot toward cloud security, threat intelligence, and compliance frameworks to stay competitive.",
    tag: "IT & Security, GCC",
    image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "4 min read",
  },
  {
    title: "Optimizing Your Technical CV for GCC Markets",
    description: "International recruitment standards differ significantly. Highlighting project scales, regional certifications, and cultural adaptability can dramatically increase your chances of securing top roles in Kuwait.",
    tag: "Career Advice, CV Tips",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "6 min read",
  },
  {
    title: "The Future of Vocational Training in Education",
    description: "Staffing in Kuwait's education sector is shifting toward specialized vocational trainers. Explore how Antalya is bridging the gap between academic qualifications and industry demands.",
    tag: "Education, Training",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "4 min read",
  },
  {
    title: "Mastering the Cross-Border Interview Process for GCC Roles",
    description: "Virtual interviews are now the standard for international placement. Our recruitment experts share 7 essential tips on handling technical assessments, cultural nuances, and remote hiring success.",
    tag: "Interviews, Career Tips",
    image: "https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "5 min read",
  },
  {
    title: "Kuwait Labor Law Updates: What Employers Need to Know",
    description: "Stay compliant with the latest Kuwaiti labor regulations. This guide covers key changes in employment contracts, worker rights, and recruitment compliance for 2026.",
    tag: "Legal, Compliance",
    image: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "7 min read",
  },
  {
    title: "Building a Diverse Workforce in Kuwait's Tech Sector",
    description: "Diversity and inclusion are becoming priorities for Kuwaiti employers. Learn strategies for attracting and retaining diverse talent in the competitive IT and cybersecurity landscape.",
    tag: "Diversity, IT",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "5 min read",
  }
];

export default function ArticleHub() {
  const featuredArticle = articles[0];
  const remainingArticles = articles.slice(1);

  return (
    <section className="bg-[#fcfcfc] py-24 font-sans">
      {/* 1. HEADER SECTION */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center mb-16">
        <span className="text-[#0658d4] font-semibold text-xs uppercase tracking-[0.3em] mb-4 block">
          Knowledge Hub
        </span>
        <h2 className="text-4xl md:text-6xl font-semibold text-slate-800 tracking-tight mb-6">
          Industry Insights & <span className="text-[#0658d4]">Expert Advice</span>
        </h2>
        <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8 font-normal">
          Expert recruitment analysis, market trends, and career guidance to empower professionals and employers across Kuwait and the GCC.
        </p>
        <button className="inline-flex items-center gap-2 border border-gray-200 px-6 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all bg-white shadow-sm hover:shadow-md">
          View All Articles <BookOpen size={14} className="text-[#0658d4]" />
        </button>
      </div>

      {/* 2. GRID CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          {/* FEATURED LARGE CARD */}
          <div className="lg:col-span-8 group cursor-pointer overflow-hidden rounded-[2rem] bg-white shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row h-full lg:h-[450px] border border-gray-100">
            <div className="w-full md:w-1/2 overflow-hidden">
              <img 
                src={featuredArticle.image} 
                alt="Healthcare recruitment insights for Kuwait market"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 bg-[#0658d4] p-8 md:p-10 flex flex-col justify-center text-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider">
                  {featuredArticle.tag}
                </span>
                <span className="text-white/50 text-[10px] font-light">
                  {featuredArticle.readTime}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight mb-4">
                {featuredArticle.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4 font-light">
                {featuredArticle.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-white/50 text-xs font-light">Antalya Insights</span>
                <div className="opacity-50 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* SECOND CARD */}
          <div className="lg:col-span-4 group cursor-pointer flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
            <div className="h-48 overflow-hidden">
              <img src={remainingArticles[0].image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Cybersecurity trends for Middle East employers" />
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-gray-100 text-gray-400 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider">
                  {remainingArticles[0].tag}
                </span>
                <span className="text-gray-300 text-[10px] font-light">
                  {remainingArticles[0].readTime}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-800 leading-snug mb-3 group-hover:text-[#0658d4] transition-colors">
                {remainingArticles[0].title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4 font-normal line-clamp-3">
                {remainingArticles[0].description}
              </p>
              <div className="mt-auto flex justify-between items-center">
                <span className="text-gray-300 text-[9px] font-light">Antalya Insights</span>
                <div className="opacity-30 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingArticles.slice(1).map((article, index) => (
            <div key={index} className="group cursor-pointer flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img src={article.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={article.title} />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gray-100 text-gray-400 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider">
                    {article.tag}
                  </span>
                  <span className="text-gray-300 text-[10px] font-light">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-800 leading-snug mb-3 group-hover:text-[#0658d4] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4 font-normal line-clamp-3">
                  {article.description}
                </p>
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-gray-300 text-[9px] font-light">Antalya Insights</span>
                  <div className="opacity-30 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#0658d4] to-[#3d7699] rounded-3xl p-10 md:p-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Ahead with Antalya Insights
            </h3>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-6">
              Subscribe to our newsletter for the latest recruitment trends, market analysis, and career tips for Kuwait and the GCC.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-[#0658d4] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl flex items-center gap-2">
                Subscribe Now <TrendingUp className="w-4 h-4" />
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                Browse All Articles <BookOpen className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}