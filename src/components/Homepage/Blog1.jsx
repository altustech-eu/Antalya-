import React from "react";
import { ArrowRight, BookOpen } from "lucide-react";

const articles = [
  {
    title: "Navigating Healthcare Recruitment in Kuwait: A 2026 Guide",
    description: "The medical landscape in the GCC is evolving rapidly. Understanding the licensing requirements and the demand for specialized nursing is crucial for...",
    tag: "Healthcare, Licensing",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
  },
  {
    title: "Cybersecurity Trends: What Middle East Employers Look For",
    description: "With the rise of digital infrastructure in Kuwait City, IT professionals need to pivot toward cloud security and threat intelligence to stay...",
    tag: "IT & Security",
    image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Optimizing Your Technical CV for GCC Markets",
    description: "International recruitment standards differ. Highlighting specific project scales and regional certifications can significantly increase your...",
    tag: "Professional Advice",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "The Future of Vocational Training in Education",
    description: "Staffing in the education sector is shifting toward specialized vocational trainers. Explore how Antalya is bridging the gap between...",
    tag: "Education",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Mastering the Cross-Border Interview Process",
    description: "Virtual interviews are now the standard for international placement. Our experts share 7 tips on handling technical assessments and cultural...",
    tag: "Interviews",
    image: "https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=800",
  }
];

export default function ArticleHub() {
  return (
    <section className="bg-[#fcfcfc] py-24 font-sans">
      {/* 1. HEADER SECTION */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-semibold text-slate-800 tracking-tight mb-6">
          Industry Insights
        </h2>
        <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8 font-normal">
          Expert recruitment analysis and market trends to empower professionals and employers across Kuwait and the GCC.
        </p>
        <button className="inline-flex items-center gap-2 border border-gray-200 px-6 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all bg-white shadow-sm">
          Explore Archive <BookOpen size={14} className="text-[#0658d4]" />
        </button>
      </div>

      {/* 2. GRID CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          {/* FEATURED LARGE CARD */}
          <div className="lg:col-span-8 group cursor-pointer overflow-hidden rounded-[2rem] bg-white shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row h-full lg:h-[450px]">
            <div className="w-full md:w-1/2 overflow-hidden">
              <img 
                src={articles[0].image} 
                alt=""
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 bg-[#0658d4] p-10 flex flex-col justify-center text-white">
              <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold w-fit mb-4 flex items-center gap-2 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                {articles[0].tag}
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight mb-4">
                {articles[0].title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4 font-light">
                {articles[0].description} <span className="font-semibold opacity-100 hover:underline">read more</span>
              </p>
              <div className="mt-auto self-end opacity-50 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={20} />
              </div>
            </div>
          </div>

          {/* SECOND CARD */}
          <div className="lg:col-span-4 group cursor-pointer flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
            <div className="h-48 overflow-hidden">
              <img src={articles[1].image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="" />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <span className="bg-gray-100 text-gray-400 px-3 py-1 rounded-full text-[10px] font-semibold w-fit mb-4 uppercase tracking-wider">
                {articles[1].tag}
              </span>
              <h3 className="text-xl font-semibold text-slate-800 leading-snug mb-3 group-hover:text-[#0658d4] transition-colors">
                {articles[1].title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4 font-normal">
                {articles[1].description} <span className="font-semibold text-slate-600">read more</span>
              </p>
              <div className="mt-auto flex justify-end opacity-30 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(2).map((article, index) => (
            <div key={index} className="group cursor-pointer flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img src={article.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <span className="bg-gray-100 text-gray-400 px-3 py-1 rounded-full text-[10px] font-semibold w-fit mb-4 uppercase tracking-wider">
                  {article.tag}
                </span>
                <h3 className="text-xl font-semibold text-slate-800 leading-snug mb-3 group-hover:text-[#0658d4] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4 font-normal">
                  {article.description} <span className="font-semibold text-slate-600">read more</span>
                </p>
                <div className="mt-auto flex justify-end opacity-30 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}