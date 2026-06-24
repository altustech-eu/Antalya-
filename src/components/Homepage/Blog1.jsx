import React from "react";
import { ArrowRight, BookOpen, Tag } from "lucide-react";

const articles = [
  {
    title: "How to Build a Reliable Healthcare Recruitment Pipeline in Kuwait",
    description:
      "Healthcare employers in Kuwait need qualified, compliant, and deployment-ready professionals. This guide explains how structured sourcing, credential checks, and sector-specific screening improve hiring outcomes.",
    tag: "Healthcare, Kuwait",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=900",
    featured: true,
  },
  {
    title: "Cybersecurity Hiring in the GCC: Skills Employers Need in 2026",
    description:
      "As digital transformation accelerates across the GCC, employers are looking for cloud security, compliance, threat intelligence, and infrastructure protection skills... read more",
    tag: "IT & Cybersecurity",
    image:
      "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    title: "Education Recruitment: Finding Qualified Teachers for Kuwait",
    description:
      "Schools and institutions need educators with strong academic credentials, classroom experience, communication skills, and cultural adaptability... read more",
    tag: "Education, University",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    title: "Hospitality Staffing: Soft Skills That Make a Difference",
    description:
      "For hotels, restaurants, and service businesses, hiring is not only about experience. Communication, presentation, discipline, and service attitude matter... read more",
    tag: "Hospitality, Careers",
    image:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    title: "How Employers Can Reduce Hiring Risk in Manpower Recruitment",
    description:
      "A strong recruitment process includes document verification, interview validation, compliance checks, replacement planning, and transparent communication... read more",
    tag: "Employer Advice",
    image:
      "https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

function TagPill({ children, blue = false }) {
  return (
    <span
      className={`inline-flex w-fit items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold ${
        blue
          ? "border border-white bg-white/10 text-white"
          : "bg-[#eeeeee] text-[#1d1d1f]"
      }`}
    >
      <Tag size={13} className={blue ? "text-white" : "text-[#1d1d1f]"} />
      {children}
    </span>
  );
}

function ArticleCard({ article }) {
  return (
    <article className="group flex min-h-[420px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="h-[210px] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col px-7 py-7">
        <TagPill>{article.tag}</TagPill>

        <h3 className="mt-7 text-[25px] font-semibold leading-[1.15] tracking-[-0.03em] text-black">
          {article.title}
        </h3>

        <p className="mt-5 text-[16px] leading-[1.55] text-[#1f2933]">
          {article.description}
        </p>

        <div className="mt-auto flex justify-end pt-7">
          <ArrowRight
            size={23}
            className="text-[#5c6470] transition-transform group-hover:translate-x-1 group-hover:text-[#0658d4]"
          />
        </div>
      </div>
    </article>
  );
}

export default function ArticleHub() {
  const featuredArticle = articles[0];
  const sideArticle = articles[1];
  const bottomArticles = articles.slice(2);

  return (
    <section className="bg-[#f4f4f4] px-6 py-20 font-['Inter',sans-serif] md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1680px]">

        {/* HEADER */}
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <h2 className="text-5xl font-black leading-tight tracking-[-0.055em] text-black md:text-6xl lg:text-[72px]">
            Article Hub
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-[24px] font-normal leading-[1.15] tracking-[-0.02em] text-[#202533] md:text-[30px]">
            Get expert recruitment insights, hiring advice and career guidance to
            boost your confidence and business success in Kuwait.
          </p>

          <button className="mt-9 inline-flex items-center gap-2 rounded-full border-2 border-[#cfcfcf] bg-transparent px-8 py-4 text-base font-medium text-black transition-all hover:border-[#0658d4] hover:bg-[#0658d4] hover:text-white">
            View all articles
            <BookOpen size={16} />
          </button>
        </div>

        {/* TOP GRID */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">

          {/* FEATURED ARTICLE */}
          <article className="group grid min-h-[520px] overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:shadow-xl md:grid-cols-2">
            <div className="min-h-[320px] overflow-hidden">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col justify-center bg-[#0658d4] px-10 py-12 text-white md:px-12">
              <TagPill blue>{featuredArticle.tag}</TagPill>

              <h3 className="mt-10 text-[34px] font-bold leading-[1.02] tracking-[-0.04em] md:text-[40px]">
                {featuredArticle.title}
              </h3>

              <p className="mt-7 text-[19px] font-medium leading-[1.45] text-white">
                {featuredArticle.description}... read more
              </p>

              <div className="mt-auto flex justify-end pt-10">
                <ArrowRight
                  size={25}
                  className="text-white transition-transform group-hover:translate-x-1"
                />
              </div>
            </div>
          </article>

          {/* SIDE CARD */}
          <ArticleCard article={sideArticle} />
        </div>

        {/* BOTTOM GRID */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {bottomArticles.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}