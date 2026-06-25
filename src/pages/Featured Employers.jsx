import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Search,
  Tag,
  Plane,
  UsersRound,
  Lightbulb,
  BriefcaseBusiness,
  GraduationCap,
  Factory,
  Activity,
  ChartNoAxesCombined,
  Landmark,
  ShieldCheck,
  Building2,
  HeartPulse,
  Globe2
} from "lucide-react";

const filterGroups = [
  {
    title: "Industries",
    options: [
      "Healthcare",
      "Education and Teaching",
      "Hospitality",
      "Travel and Tourism",
      "Energy and Utilities",
      "Engineering",
      "Finance",
      "Operations",
      "FMCG",
      "Insurance"
    ]
  },
  {
    title: "Courses",
    options: [
      "Business",
      "Engineering",
      "Healthcare",
      "Hospitality",
      "IT",
      "Marketing",
      "Finance",
      "Education"
    ]
  },
  {
    title: "Locations",
    options: [
      "Kuwait",
      "Dubai",
      "Abu Dhabi",
      "Saudi Arabia",
      "Qatar",
      "Oman",
      "Bahrain",
      "India"
    ]
  },
  {
    title: "Types",
    options: [
      "Graduate Employer",
      "Internship Provider",
      "Apprenticeship Employer",
      "Bulk Hiring Employer",
      "Hospitality Employer",
      "Healthcare Employer"
    ]
  }
];

const employers = [
  {
    name: "Hunt & Palmer",
    industry: "Travel and Tourism",
    description:
      "Premier aviation and travel support group helping organisations manage specialist transport, charter operations and global workforce movement.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    logo: "H&P",
    icon: Plane,
    url: "/featured-employers/hunt-palmer"
  },
  {
    name: "Ark Teacher Training",
    industry: "Education and Teaching",
    description:
      "A specialist education and teacher training organisation supporting schools with talented, committed and well-prepared teaching professionals.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    logo: "Ark",
    icon: UsersRound,
    url: "/featured-employers/ark-teacher-training"
  },
  {
    name: "Pathways to Planning",
    industry: "Energy and Utilities",
    description:
      "A graduate pathway for the next generation of built environment professionals, fast-tracking talented individuals into meaningful careers.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    logo: "PTP",
    icon: Lightbulb,
    url: "/featured-employers/pathways-to-planning"
  },
  {
    name: "Finsbury Food Group",
    industry: "FMCG",
    description:
      "A leading food production and manufacturing group supplying high-quality products across major retail, wholesale and hospitality channels.",
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1200&auto=format&fit=crop",
    logo: "F",
    icon: Factory,
    url: "/featured-employers/finsbury-food-group"
  },
  {
    name: "HAE Group",
    industry: "Management, Operations, Travel and Tourism",
    description:
      "Commercial aviation representation and cargo support group helping airlines grow revenue and strengthen their international market presence.",
    image:
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1200&auto=format&fit=crop",
    logo: "HAE",
    icon: UsersRound,
    url: "/featured-employers/hae-group"
  },
  {
    name: "British Horseracing Authority",
    industry: "Sports and Leisure",
    description:
      "A recognised development programme supporting future professionals across racing, sports operations and specialist leisure industry roles.",
    image:
      "https://images.unsplash.com/photo-1534773728080-33d31da27ae5?q=80&w=1200&auto=format&fit=crop",
    logo: "BHA",
    icon: Activity,
    url: "/featured-employers/british-horseracing-authority"
  },
  {
    name: "BMY Hospitality Investments",
    industry: "Hospitality",
    description:
      "Hospitality investment and operations company redefining guest experience, food service, hotel operations and premium customer delivery.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    logo: "BMY",
    icon: BriefcaseBusiness,
    url: "/featured-employers/bmy-hospitality"
  },
  {
    name: "Augusta & Co",
    industry: "Energy and Utilities",
    description:
      "Specialist advisory company focused on energy, infrastructure and investment projects across growing renewable and strategic sectors.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop",
    logo: "A&C",
    icon: Globe2,
    url: "/featured-employers/augusta-and-co"
  },
  {
    name: "Elis",
    industry: "Facility Management, Operations",
    description:
      "International business services group supporting textile, hygiene, facility operations and managed workplace service requirements.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop",
    logo: "Elis",
    icon: Building2,
    url: "/featured-employers/elis"
  },
  {
    name: "Renishaw",
    industry: "Engineering",
    description:
      "Global engineering technology company creating high precision systems, healthcare solutions and advanced manufacturing technologies.",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop",
    logo: "R",
    icon: ShieldCheck,
    url: "/featured-employers/renishaw"
  },
  {
    name: "Fospha",
    industry: "Analytical, Marketing, Operations",
    description:
      "Data, analytics and marketing intelligence company helping online businesses understand performance and improve digital growth.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    logo: "Fospha",
    icon: ChartNoAxesCombined,
    url: "/featured-employers/fospha"
  },
  {
    name: "Capital Group",
    industry: "Finance, Investment Banking, Operations",
    description:
      "Long-established investment organisation focused on building lasting client relationships through financial expertise and disciplined operations.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
    logo: "CG",
    icon: Landmark,
    url: "/featured-employers/capital-group"
  },
  {
    name: "Kinly",
    industry: "Technology, Customer Service",
    description:
      "Technology services company delivering communication, workplace collaboration and managed support solutions for enterprise clients.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
    logo: "Kinly",
    icon: Building2,
    url: "/featured-employers/kinly"
  },
  {
    name: "Impact.",
    industry: "Marketing, Operations",
    description:
      "Modern growth and partnership platform supporting companies with marketing performance, operations and commercial ecosystem building.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    logo: "Impact.",
    icon: ChartNoAxesCombined,
    url: "/featured-employers/impact"
  },
  {
    name: "Bupa",
    industry: "Healthcare, Customer Service",
    description:
      "Healthcare and insurance organisation supporting patients, customers and employers with health services, care pathways and support teams.",
    image:
      "https://images.unsplash.com/photo-1581093458791-9d15482442f6?q=80&w=1200&auto=format&fit=crop",
    logo: "Bupa",
    icon: HeartPulse,
    url: "/featured-employers/bupa"
  },
  {
    name: "English 1",
    industry: "Education and Teaching",
    description:
      "Education organisation empowering students through learning programmes, teacher development and international academic support.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    logo: "E1",
    icon: GraduationCap,
    url: "/featured-employers/english-1"
  },
  {
    name: "Brit Insurance",
    industry: "Insurance and Actuarial",
    description:
      "Commercial insurance and reinsurance company supporting specialist markets, underwriting, risk analysis and actuarial career pathways.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    logo: "BRIT",
    icon: ShieldCheck,
    url: "/featured-employers/brit-insurance"
  }
];

export default function FeaturedEmployers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeIndustry, setActiveIndustry] = useState("All");
  const [openFilter, setOpenFilter] = useState(null);
  const [page, setPage] = useState(1);

  const perPage = 12;

  const filteredEmployers = useMemo(() => {
    return employers.filter((employer) => {
      const searchMatch =
        employer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employer.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employer.description.toLowerCase().includes(searchTerm.toLowerCase());

      const industryMatch =
        activeIndustry === "All" ||
        employer.industry.toLowerCase().includes(activeIndustry.toLowerCase());

      return searchMatch && industryMatch;
    });
  }, [searchTerm, activeIndustry]);

  const totalPages = Math.ceil(filteredEmployers.length / perPage);

  const paginatedEmployers = filteredEmployers.slice(
    (page - 1) * perPage,
    page * perPage
  );

  const handleIndustrySelect = (value) => {
    setActiveIndustry(value);
    setPage(1);
    setOpenFilter(null);
  };

  return (
    <main className="min-h-screen bg-[#f4f4f4] font-['Inter',sans-serif] text-[#202533]">
      {/* PAGE HEADER */}
      <section className="relative border-l-[7px] border-[#0658d4] bg-[#f4f4f4] px-6 pb-16 pt-32 md:px-12">
        <div className="mx-auto max-w-[1760px]">
          <h1 className="text-[54px] font-black leading-none tracking-[-0.06em] text-black md:text-[82px]">
            Featured Employers
          </h1>

          <p className="mt-5 max-w-[1080px] text-[17px] font-medium leading-[1.55] text-[#30313b] md:text-[19px]">
            Explore leading employers shaping careers with rewarding
            opportunities, clear development paths and inspiring missions.
          </p>

          <nav className="mt-12 flex flex-wrap items-center gap-1 text-[14px]">
            <a href="/" className="font-bold text-[#0658d4]">
              Home
            </a>
            <span>»</span>
            <span className="text-[#333333]">Featured Employers</span>
          </nav>
        </div>
      </section>

      {/* EMPLOYER LISTING */}
      <section className="px-6 pb-28 pt-12 md:px-12">
        <div className="mx-auto grid max-w-[1660px] grid-cols-1 gap-10 lg:grid-cols-[300px_1fr]">
          {/* FILTER SIDEBAR */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-[14px] border border-[#dedede] bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-[#dedede] px-6 py-5">
                <h2 className="text-[20px] font-medium text-[#25252d]">
                  Filters
                </h2>

                <span className="text-[22px] font-black text-[#555555]">
                  -
                </span>
              </div>

              {/* SEARCH */}
              <div className="border-b border-[#eeeeee] px-6 py-5">
                <label className="sr-only" htmlFor="employer-search">
                  Enter keywords
                </label>

                <div className="flex items-center gap-3">
                  <input
                    id="employer-search"
                    type="text"
                    value={searchTerm}
                    onChange={(event) => {
                      setSearchTerm(event.target.value);
                      setPage(1);
                    }}
                    placeholder="Enter keywords"
                    className="w-full border-0 bg-transparent text-[16px] font-medium outline-none placeholder:text-[#1f2937]"
                  />

                  <Search size={23} className="text-[#8b8b8b]" />
                </div>
              </div>

              {/* FILTER GROUPS */}
              <div className="divide-y divide-[#eeeeee]">
                {filterGroups.map((group) => {
                  const isOpen = openFilter === group.title;

                  return (
                    <div key={group.title}>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenFilter(isOpen ? null : group.title)
                        }
                        className="flex w-full items-center justify-between px-6 py-5 text-left text-[16px] font-medium text-[#25252d]"
                      >
                        {group.title}
                        <ChevronDown
                          size={18}
                          className={`transition ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="space-y-1 px-5 pb-5">
                          {group.title === "Industries" && (
                            <button
                              type="button"
                              onClick={() => handleIndustrySelect("All")}
                              className={`block w-full rounded-full px-4 py-2 text-left text-sm font-medium transition ${
                                activeIndustry === "All"
                                  ? "bg-[#0658d4] text-white"
                                  : "hover:bg-[#eeeeee]"
                              }`}
                            >
                              All
                            </button>
                          )}

                          {group.options.map((option) => (
                            <button
                              type="button"
                              key={option}
                              onClick={() =>
                                group.title === "Industries"
                                  ? handleIndustrySelect(option)
                                  : setOpenFilter(null)
                              }
                              className={`block w-full rounded-full px-4 py-2 text-left text-sm font-medium transition ${
                                activeIndustry === option
                                  ? "bg-[#0658d4] text-white"
                                  : "hover:bg-[#eeeeee]"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* EMPLOYER CARDS */}
          <div>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-[16px] font-medium text-[#555555]">
                Showing{" "}
                <span className="font-black text-black">
                  {paginatedEmployers.length}
                </span>{" "}
                of{" "}
                <span className="font-black text-black">
                  {filteredEmployers.length}
                </span>{" "}
                employers
              </p>

              {activeIndustry !== "All" && (
                <button
                  type="button"
                  onClick={() => {
                    setActiveIndustry("All");
                    setSearchTerm("");
                    setPage(1);
                  }}
                  className="rounded-full bg-white px-5 py-2 text-sm font-black text-[#0658d4] shadow-sm"
                >
                  Clear filters
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {paginatedEmployers.map((employer) => (
                <EmployerCard key={employer.name} employer={employer} />
              ))}
            </div>

            {paginatedEmployers.length === 0 && (
              <div className="rounded-[16px] bg-white p-10 text-center text-[18px] font-medium text-[#555555]">
                No employers found for your current filters.
              </div>
            )}

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="mt-16 flex items-center justify-center gap-5">
                {Array.from({ length: totalPages }).map((_, index) => {
                  const pageNumber = index + 1;

                  return (
                    <button
                      key={pageNumber}
                      type="button"
                      onClick={() => setPage(pageNumber)}
                      className={`text-[18px] font-black ${
                        page === pageNumber
                          ? "text-[#0658d4]"
                          : "text-black hover:text-[#0658d4]"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}

                {page < totalPages && (
                  <button
                    type="button"
                    onClick={() => setPage((current) => current + 1)}
                    className="text-[18px] font-black text-black hover:text-[#0658d4]"
                  >
                    Next »
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function EmployerCard({ employer }) {
  const Icon = employer.icon;

  return (
    <a
      href={employer.url}
      className="group flex min-h-[520px] flex-col overflow-hidden rounded-[14px] border border-[#dedede] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* IMAGE TOP */}
      <div className="relative h-[230px] overflow-hidden bg-[#111827]">
        <img
          src={employer.image}
          alt={employer.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/78 via-[#111827]/18 to-transparent"></div>

        {/* LOGO CIRCLE */}
        <div className="absolute left-1/2 top-[48%] flex h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-center text-[17px] font-black leading-none text-[#0658d4] shadow-md">
          {employer.logo}
        </div>

        <h3 className="absolute bottom-6 left-6 right-6 text-center text-[24px] font-black leading-tight tracking-[-0.04em] text-white">
          {employer.name}
        </h3>
      </div>

      {/* BODY */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-5">
          <span className="inline-flex max-w-[260px] items-center gap-2 rounded-full bg-[#eeeeee] px-4 py-2 text-xs font-black text-[#30313b]">
            <Tag size={14} />
            {employer.industry}
          </span>

          <Icon size={37} strokeWidth={1.5} className="shrink-0 text-[#8a8a8a]" />
        </div>

        <p className="mt-9 text-[16px] font-medium leading-[1.6] text-[#30313b]">
          {employer.description}...{" "}
          <span className="font-medium text-black">learn more</span>
        </p>

        <div className="mt-auto flex justify-end pt-10 text-[#53606d]">
          <ArrowRight
            size={25}
            strokeWidth={1.7}
            className="transition group-hover:translate-x-1 group-hover:text-[#0658d4]"
          />
        </div>
      </div>
    </a>
  );
}