import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Clock3,
  Tag,
  ChevronRight
} from "lucide-react";

const categories = [
  "All",
  "Assessment Centres",
  "Careers advice",
  "Careers fairs",
  "Employability",
  "Graduate jobs",
  "Internships",
  "Interviews",
  "Placement Year",
  "Students",
  "University"
];

const heroArticles = [
  {
    title: "How to Get a Placement Year: A Complete Guide for University Students",
    category: "Placement Year, University",
    readTime: "6 mins read",
    description:
      "A placement year, or year in industry, can be one of the most useful parts of your university journey.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1800&auto=format&fit=crop",
    url: "/article/placement-year-guide"
  },
  {
    title: "Graduate Career Advice: 5 First-Year Mistakes to Avoid",
    category: "Employability, University",
    readTime: "5 mins read",
    description:
      "Starting your first graduate job is exciting, but it can also feel like a big adjustment.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1800&auto=format&fit=crop",
    url: "/article/graduate-career-advice"
  },
  {
    title: "University to Workplace: Soft Skills That Make a Difference",
    category: "Employability, University",
    readTime: "7 mins read",
    description:
      "What really makes the difference when applying for graduate jobs and internships.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1800&auto=format&fit=crop",
    url: "/article/university-to-workplace"
  }
];

const articles = [
  {
    title: "Graduate Career Advice: 5 First-Year Mistakes to Avoid",
    category: "Employability, University",
    excerpt:
      "Starting your first graduate job is exciting, but it can also feel like a big adjustment. The good news is that your first year is not about being perfect. It is about learning fast...",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
    url: "/article/graduate-career-advice",
    featured: true
  },
  {
    title: "University to Workplace: Soft Skills That Make a Difference",
    category: "Employability, University",
    excerpt:
      "When you are thinking about applications, it is easy to focus on your degree, modules and grades. But what really makes the difference when you apply...",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop",
    url: "/article/soft-skills-workplace"
  },
  {
    title: "Launching a Successful Graduate Career in Sales: A Guide",
    category: "Careers advice",
    excerpt:
      "Why is sales a great career for graduates? There is a high earning potential and strong progression routes in many industries...",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
    url: "/article/graduate-sales-career"
  },
  {
    title: "5 Top Tips to Combat Graduate Nerves in an Interview",
    category: "Internships",
    excerpt:
      "Going through graduate job applications is one thing, but being able to handle your nerves on interview day is just as important...",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    url: "/article/interview-nerves"
  },
  {
    title: "What to Do If You Get a 2.2",
    category: "Careers advice",
    excerpt:
      "But what if it does not quite go to plan? A lower grade does not have to stop you from building a strong graduate career...",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    url: "/article/what-to-do-if-you-get-22"
  },
  {
    title: "What Is Work Shadowing? A Guide for University Students",
    category: "Employability, Students",
    excerpt:
      "Choosing a career path can be challenging, especially when it is difficult to understand what different jobs are really like. Work shadowing allows students...",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
    url: "/article/work-shadowing-guide"
  },
  {
    title: "How To Bounce Back After Job Rejection as a Graduate",
    category: "Careers advice",
    excerpt:
      "Few feelings hit harder than a rejection email after putting real effort into an application. But the truth is simple: rejection is part of the process...",
    image:
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=1200&auto=format&fit=crop",
    url: "/article/bounce-back-after-rejection"
  },
  {
    title: "5 Graduate CV Mistakes and How to Fix Them",
    category: "Careers advice",
    excerpt:
      "As a recent graduate, your CV plays a huge role in opening the door to your first professional role. Small mistakes can reduce your chances...",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
    url: "/article/graduate-cv-mistakes"
  },
  {
    title: "How to Prepare for an Assessment Centre",
    category: "Assessment Centres",
    excerpt:
      "Assessment centres can feel intense, but they are easier to manage when you understand the exercises, scoring criteria and employer expectations...",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
    url: "/article/assessment-centre-preparation"
  },
  {
    title: "How to Write a Strong Graduate Cover Letter",
    category: "Careers advice",
    excerpt:
      "A good cover letter explains why you are suitable for the role, why the employer matters to you and what value you can bring...",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
    url: "/article/graduate-cover-letter"
  },
  {
    title: "How to Use Data to Choose Your First Career Path",
    category: "Graduate jobs",
    excerpt:
      "Salary, progression, demand and skills fit can all help you make better early-career decisions instead of relying only on guesswork...",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    url: "/article/data-career-path"
  }
];

export default function ArticleHub() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeHero, setActiveHero] = useState(0);

  const filteredArticles = useMemo(() => {
    if (activeCategory === "All") return articles;

    return articles.filter((article) =>
      article.category.toLowerCase().includes(activeCategory.toLowerCase())
    );
  }, [activeCategory]);

  const nextHero = () => {
    setActiveHero((current) =>
      current === heroArticles.length - 1 ? 0 : current + 1
    );
  };

  const previousHero = () => {
    setActiveHero((current) =>
      current === 0 ? heroArticles.length - 1 : current - 1
    );
  };

  const currentHero = heroArticles[activeHero];

  return (
    <main className="min-h-screen bg-[#f4f4f4] font-['Inter',sans-serif] text-[#202533]">
      {/* HERO SLIDER */}
      <section className="relative overflow-hidden bg-[#f4f4f4] px-4 pb-16 pt-28 md:px-8">
        <div className="relative mx-auto max-w-[1760px]">
          <button
            onClick={previousHero}
            type="button"
            className="absolute left-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur transition hover:bg-[#0658d4] md:-left-5"
            aria-label="Previous article"
          >
            <ArrowLeft size={25} />
          </button>

          <button
            onClick={nextHero}
            type="button"
            className="absolute right-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur transition hover:bg-[#0658d4] md:-right-5"
            aria-label="Next article"
          >
            <ArrowRight size={25} />
          </button>

          <article className="relative min-h-[620px] overflow-hidden rounded-[28px] bg-[#111827] md:min-h-[680px]">
            <img
              src={currentHero.image}
              alt={currentHero.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/34 to-black/10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#161823]/80 via-transparent to-transparent"></div>

            <div className="relative z-10 flex min-h-[620px] max-w-[1100px] flex-col justify-end px-8 pb-12 md:min-h-[680px] md:px-12 lg:px-14">
              <div className="mb-8 inline-flex w-max items-center gap-2 rounded-full bg-[#0658d4] px-5 py-3 text-xs font-black text-white">
                <Tag size={15} />
                {currentHero.category}
              </div>

              <h1 className="max-w-[940px] text-[44px] font-black leading-[1.02] tracking-[-0.06em] text-white md:text-[68px] lg:text-[82px]">
                {currentHero.title}
              </h1>

              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-white">
                <Clock3 size={18} />
                {currentHero.readTime}
              </div>

              <p className="mt-6 max-w-[760px] text-[18px] font-bold leading-[1.5] text-white/92">
                {currentHero.description}
              </p>

              <div className="mt-7 flex items-center gap-2">
                {heroArticles.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveHero(index)}
                    className={`h-3 w-3 rounded-full transition ${
                      activeHero === index ? "bg-white" : "bg-white/35"
                    }`}
                    aria-label={`Go to article ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>

            <div className="absolute bottom-12 right-12 hidden text-[210px] font-black leading-none text-white/15 lg:block">
              ”
            </div>
          </article>
        </div>
      </section>

      {/* ARTICLE HUB */}
      <section className="bg-[#f4f4f4] px-6 pb-28 md:px-12">
        <div className="mx-auto max-w-[1760px]">
          <div className="mb-14">
            <h2 className="text-[48px] font-black leading-none tracking-[-0.055em] text-black md:text-[72px]">
              Article Hub
            </h2>

            <p className="mt-7 max-w-[1150px] text-[20px] font-medium leading-[1.5] text-[#202533] md:text-[24px]">
              Stay informed and inspired with expert advice, industry insights,
              recruitment updates, and career tips from the Antalya team.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-[260px_1fr]">
            {/* CATEGORY FILTER */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[14px] border border-[#dedede] bg-white p-4 shadow-sm">
                <div className="flex flex-wrap gap-1 lg:flex-col">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`w-max rounded-full px-4 py-2 text-left text-[16px] font-medium transition lg:w-full lg:rounded-[10px] ${
                        activeCategory === category
                          ? "bg-[#0658d4] text-white"
                          : "text-[#1f2937] hover:bg-[#eeeeee]"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* ARTICLES */}
            <div>
              {/* FEATURE ROW */}
              {activeCategory === "All" && (
                <div className="mb-8 grid grid-cols-1 gap-7 xl:grid-cols-[1.65fr_0.95fr]">
                  <a
                    href={articles[0].url}
                    className="group grid min-h-[570px] overflow-hidden rounded-[16px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:grid-cols-[0.9fr_1fr]"
                  >
                    <div className="relative min-h-[360px] overflow-hidden">
                      <img
                        src={articles[0].image}
                        alt={articles[0].title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="relative flex flex-col justify-between bg-[#0658d4] p-8 text-white md:p-10">
                      <div>
                        <span className="inline-flex items-center gap-2 rounded-full border-2 border-white px-5 py-3 text-xs font-black">
                          <Tag size={15} />
                          {articles[0].category}
                        </span>

                        <h3 className="mt-10 text-[34px] font-black leading-[1.05] tracking-[-0.05em] md:text-[44px]">
                          {articles[0].title}
                        </h3>

                        <p className="mt-8 text-[20px] font-bold leading-[1.55] text-white/95">
                          {articles[0].excerpt} read more
                        </p>
                      </div>

                      <ArrowRight
                        size={34}
                        className="ml-auto transition group-hover:translate-x-2"
                      />
                    </div>
                  </a>

                  <ArticleCard article={articles[1]} large />
                </div>
              )}

              <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
                {(activeCategory === "All"
                  ? filteredArticles.slice(2)
                  : filteredArticles
                ).map((article) => (
                  <ArticleCard key={article.title} article={article} />
                ))}
              </div>

              {filteredArticles.length === 0 && (
                <div className="rounded-[16px] bg-white p-10 text-center text-[18px] font-medium text-[#555555]">
                  No articles found for this category.
                </div>
              )}

              {/* LOAD MORE */}
              <div className="mt-16 flex justify-center">
                <a
                  href="/career-advice-hub"
                  className="inline-flex items-center gap-3 rounded-full bg-[#0658d4] px-9 py-4 text-[17px] font-black text-white transition hover:bg-[#0547aa]"
                >
                  View all articles
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ArticleCard({ article, large = false }) {
  return (
    <a
      href={article.url}
      className={`group flex overflow-hidden rounded-[16px] border border-[#dedede] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
        large ? "min-h-[570px] flex-col" : "min-h-[460px] flex-col"
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          large ? "h-[255px]" : "h-[250px]"
        }`}
      >
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-7">
        <span className="inline-flex w-max items-center gap-2 rounded-full bg-[#eeeeee] px-4 py-2 text-xs font-black text-[#2f333b]">
          <Tag size={14} />
          {article.category}
        </span>

        <h3 className="mt-7 text-[25px] font-black leading-[1.16] tracking-[-0.045em] text-black md:text-[29px]">
          {article.title}
        </h3>

        <p className="mt-5 text-[16px] font-medium leading-[1.6] text-[#30313b]">
          {article.excerpt} read more
        </p>

        <div className="mt-auto flex justify-end pt-8 text-[#53606d]">
          <ChevronRight
            size={31}
            strokeWidth={1.7}
            className="transition group-hover:translate-x-1 group-hover:text-[#0658d4]"
          />
        </div>
      </div>
    </a>
  );
}