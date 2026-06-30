import React, { useMemo, useState } from "react";
import {
  Search,
  ChevronRight,
  ChevronDown,
  Star,
  Bookmark,
  ArrowLeftRight,
  X,
  Check,
  ShieldCheck
} from "lucide-react";

const providers = [
  {
    id: 1,
    name: "Antalya Manpower LLC",
    logo: "AM",
    category: "Healthcare recruitment",
    description:
      "End-to-end manpower recruitment, candidate screening, employer coordination, documentation, and deployment support for Kuwait and GCC healthcare employers.",
    rating: 4.9,
    reviews: 273,
    verified: true,
    tags: ["Nurses", "CV Screening", "Interview Coordination", "Open Vacancies"],
    country: "Kuwait",
    language: "English",
    companyType: "Hospitals & Clinics"
  },
  {
    id: 2,
    name: "Kuwait Healthcare Careers",
    logo: "KHC",
    category: "Healthcare recruitment",
    description:
      "Specialized hiring support for nurses, physiotherapists, radiology technicians, lab technicians, caregivers, and allied healthcare professionals.",
    rating: 4.8,
    reviews: 221,
    verified: true,
    tags: ["Physiotherapists", "Nurses", "Medical Processing", "Visa Documentation"],
    country: "Kuwait",
    language: "English",
    companyType: "Hospitals & Clinics"
  },
  {
    id: 3,
    name: "Gulf Hospitality Jobs",
    logo: "GHJ",
    category: "Hospitality & restaurant",
    description:
      "Recruitment support for hotels, restaurants, cafes, catering companies, baristas, chefs, waiters, kitchen helpers, and hospitality supervisors.",
    rating: 4.9,
    reviews: 198,
    verified: true,
    tags: ["Barista", "Kitchen Helper", "Restaurant Supervisor", "Employer Interview"],
    country: "Kuwait",
    language: "English",
    companyType: "Hotels & Restaurants"
  },
  {
    id: 4,
    name: "Restaurant Staffing Desk",
    logo: "RSD",
    category: "Hospitality & restaurant",
    description:
      "Candidate sourcing and screening for restaurants, cafes, cloud kitchens, hotel kitchens, food courts, and premium hospitality brands.",
    rating: 4.7,
    reviews: 164,
    verified: true,
    tags: ["Chef / Cook", "Waiter / Waitress", "Kitchen Helper", "Open Vacancies"],
    country: "Kuwait",
    language: "English",
    companyType: "Hotels & Restaurants"
  },
  {
    id: 5,
    name: "TechHire GCC",
    logo: "TH",
    category: "IT & digital jobs",
    description:
      "Technology hiring for web developers, full stack developers, cybersecurity analysts, cloud support engineers, and digital marketing teams.",
    rating: 4.8,
    reviews: 156,
    verified: true,
    tags: ["Web Developer", "Full Stack Developer", "Digital Marketing Executive"],
    country: "UAE",
    language: "English",
    companyType: "IT Companies"
  },
  {
    id: 6,
    name: "Digital Talent Kuwait",
    logo: "DTK",
    category: "IT & digital jobs",
    description:
      "Recruitment services for digital marketing, creative, social media, graphic design, web development, and IT support roles.",
    rating: 4.6,
    reviews: 119,
    verified: true,
    tags: ["Marketing Creative Head", "Social Media Executive", "Graphic Designer"],
    country: "Kuwait",
    language: "English",
    companyType: "IT Companies"
  },
  {
    id: 7,
    name: "GCC Skilled Workforce",
    logo: "GSW",
    category: "Skilled manpower",
    description:
      "Skilled workforce sourcing for electricians, plumbers, HVAC technicians, welders, drivers, warehouse staff, and maintenance technicians.",
    rating: 4.7,
    reviews: 142,
    verified: true,
    tags: ["Electricians", "Plumbers", "HVAC Technicians", "Drivers"],
    country: "Saudi Arabia",
    language: "English",
    companyType: "Construction Companies"
  },
  {
    id: 8,
    name: "Facility Workforce Kuwait",
    logo: "FWK",
    category: "Skilled manpower",
    description:
      "Deployment-ready workforce solutions for facility management, warehouse operations, civil works, maintenance, logistics, and support functions.",
    rating: 4.5,
    reviews: 108,
    verified: false,
    tags: ["Facility Management Staff", "Warehouse Staff", "Maintenance Technicians"],
    country: "Kuwait",
    language: "English",
    companyType: "Facility Management Companies"
  },
  {
    id: 9,
    name: "Education Careers Gulf",
    logo: "ECG",
    category: "Education & training",
    description:
      "Teacher recruitment and training coordination for schools, institutes, universities, and language training providers across GCC and Europe.",
    rating: 4.6,
    reviews: 97,
    verified: true,
    tags: ["English Teachers", "Science Teachers", "Mathematics Teachers"],
    country: "Qatar",
    language: "English",
    companyType: "Schools & Universities"
  },
  {
    id: 10,
    name: "Language Faculty Desk",
    logo: "LFD",
    category: "Education & training",
    description:
      "Faculty recruitment support for English, French, Spanish, German language trainers, academic coordinators, and training delivery teams.",
    rating: 4.8,
    reviews: 88,
    verified: true,
    tags: ["English Teachers", "French Teachers", "German Language Trainers"],
    country: "India",
    language: "English",
    companyType: "Schools & Universities"
  },
  {
    id: 11,
    name: "Salon Talent Kuwait",
    logo: "STK",
    category: "Salon & beauty",
    description:
      "Beauty and salon staffing for manicure specialists, pedicure specialists, hair stylists, spa therapists, beauticians, and salon assistants.",
    rating: 4.7,
    reviews: 74,
    verified: true,
    tags: ["Manicure Specialists", "Pedicure Specialists", "Beauticians"],
    country: "Kuwait",
    language: "English",
    companyType: "Salon & Beauty Centres"
  },
  {
    id: 12,
    name: "Beauty Workforce GCC",
    logo: "BWG",
    category: "Salon & beauty",
    description:
      "International beauty staff sourcing for premium salons, wellness centres, grooming studios, spa chains, and beauty service operators.",
    rating: 4.5,
    reviews: 61,
    verified: false,
    tags: ["Hair Stylists", "Spa Therapists", "Salon Assistants"],
    country: "UAE",
    language: "English",
    companyType: "Salon & Beauty Centres"
  },
  {
    id: 13,
    name: "WorkVisa Support Centre",
    logo: "WVS",
    category: "Candidate services",
    description:
      "Visa file preparation, documentation checklist, medical processing support, certificate coordination, travel readiness, and deployment tracking.",
    rating: 4.7,
    reviews: 134,
    verified: true,
    tags: ["Visa Documentation", "Document Collection", "Medical Processing"],
    country: "Kuwait",
    language: "English",
    companyType: "General Trading Companies"
  },
  {
    id: 14,
    name: "Document Attestation Desk",
    logo: "DAD",
    category: "Candidate services",
    description:
      "Candidate document collection, certificate attestation guidance, embassy coordination, medical file readiness, and employment file completion.",
    rating: 4.4,
    reviews: 52,
    verified: false,
    tags: ["Certificate Attestation", "Document Collection", "Pre-departure Briefing"],
    country: "India",
    language: "English",
    companyType: "General Trading Companies"
  },
  {
    id: 15,
    name: "Employer Interview Hub",
    logo: "EIH",
    category: "Recruitment stage",
    description:
      "Interview coordination hub for employers, candidates, recruitment teams, shortlisting pipelines, offer follow-ups, and selection tracking.",
    rating: 4.9,
    reviews: 116,
    verified: true,
    tags: ["Employer Interview", "CV Shortlisting", "Offer Letter Stage"],
    country: "Kuwait",
    language: "English",
    companyType: "Recruitment Partner"
  },
  {
    id: 16,
    name: "Deployment Readiness Centre",
    logo: "DRC",
    category: "Recruitment stage",
    description:
      "Candidate deployment readiness checks covering documentation, medical, visa, travel, employer reporting, onboarding, and joining coordination.",
    rating: 4.8,
    reviews: 102,
    verified: true,
    tags: ["Deployment Ready", "Visa Processing", "Travel Coordination"],
    country: "Kuwait",
    language: "English",
    companyType: "Recruitment Partner"
  },
  {
    id: 17,
    name: "Germany Ausbildung Desk",
    logo: "GAD",
    category: "Education & training",
    description:
      "Ausbildung pathway support with German language readiness, interview preparation, documentation, employer coordination, and mobility guidance.",
    rating: 4.8,
    reviews: 145,
    verified: true,
    tags: ["German Language Trainers", "Training Coordinators", "Visa Documentation"],
    country: "Germany",
    language: "German",
    companyType: "Schools & Universities"
  },
  {
    id: 18,
    name: "Gulf Employer Network",
    logo: "GEN",
    category: "Skilled manpower",
    description:
      "Employer network for high-demand manpower categories across Kuwait, UAE, Saudi Arabia, Qatar, Bahrain, Oman, and wider GCC markets.",
    rating: 4.6,
    reviews: 91,
    verified: true,
    tags: ["Open Vacancies", "Drivers", "Facility Management Staff"],
    country: "Oman",
    language: "Arabic",
    companyType: "General Trading Companies"
  }
];

const filterGroups = [
  {
    key: "tags",
    title: "Healthcare recruitment",
    options: [
      { label: "Nurses", count: 56 },
      { label: "Physiotherapists", count: 28 },
      { label: "Radiology Technicians", count: 18 },
      { label: "Medical Laboratory Technicians", count: 22 },
      { label: "Dental Assistants", count: 12 },
      { label: "Caregivers", count: 40 },
      { label: "Hospital Support Staff", count: 31 }
    ]
  },
  {
    key: "tags",
    title: "Hospitality & restaurant",
    options: [
      { label: "Barista", count: 35 },
      { label: "Kitchen Helper", count: 42 },
      { label: "Chef / Cook", count: 26 },
      { label: "Waiter / Waitress", count: 38 },
      { label: "Restaurant Supervisor", count: 14 },
      { label: "Front Office Executive", count: 11 },
      { label: "Housekeeping Staff", count: 30 },
      { label: "Hotel Operations Staff", count: 19 }
    ]
  },
  {
    key: "tags",
    title: "IT & digital jobs",
    options: [
      { label: "Web Developer", count: 18 },
      { label: "Full Stack Developer", count: 12 },
      { label: "Digital Marketing Executive", count: 24 },
      { label: "Marketing Creative Head", count: 9 },
      { label: "Cybersecurity Analyst", count: 7 },
      { label: "Cloud Support Engineer", count: 6 },
      { label: "IT Support Technician", count: 20 },
      { label: "Graphic Designer", count: 16 },
      { label: "Social Media Executive", count: 21 }
    ]
  },
  {
    key: "tags",
    title: "Skilled manpower",
    options: [
      { label: "Electricians", count: 44 },
      { label: "Plumbers", count: 37 },
      { label: "HVAC Technicians", count: 29 },
      { label: "Welders", count: 33 },
      { label: "Civil Workers", count: 48 },
      { label: "Maintenance Technicians", count: 25 },
      { label: "Drivers", count: 52 },
      { label: "Warehouse Staff", count: 31 },
      { label: "Facility Management Staff", count: 27 }
    ]
  },
  {
    key: "tags",
    title: "Education & training",
    options: [
      { label: "English Teachers", count: 15 },
      { label: "French Teachers", count: 6 },
      { label: "Spanish Teachers", count: 5 },
      { label: "German Language Trainers", count: 11 },
      { label: "Primary Teachers", count: 18 },
      { label: "Science Teachers", count: 9 },
      { label: "Mathematics Teachers", count: 12 },
      { label: "Training Coordinators", count: 7 }
    ]
  },
  {
    key: "tags",
    title: "Salon & beauty",
    options: [
      { label: "Manicure Specialists", count: 16 },
      { label: "Pedicure Specialists", count: 16 },
      { label: "Hair Stylists", count: 11 },
      { label: "Beauticians", count: 20 },
      { label: "Spa Therapists", count: 8 },
      { label: "Salon Assistants", count: 13 }
    ]
  },
  {
    key: "country",
    title: "Destination country",
    options: [
      { label: "Kuwait", count: 76 },
      { label: "UAE", count: 42 },
      { label: "Saudi Arabia", count: 38 },
      { label: "Qatar", count: 24 },
      { label: "Bahrain", count: 11 },
      { label: "Oman", count: 19 },
      { label: "Germany", count: 35 },
      { label: "Europe", count: 29 }
    ]
  },
  {
    key: "companyType",
    title: "Employer type",
    options: [
      { label: "Hospitals & Clinics", count: 22 },
      { label: "Hotels & Restaurants", count: 31 },
      { label: "General Trading Companies", count: 18 },
      { label: "Construction Companies", count: 27 },
      { label: "Facility Management Companies", count: 21 },
      { label: "IT Companies", count: 13 },
      { label: "Schools & Universities", count: 15 },
      { label: "Salon & Beauty Centres", count: 9 },
      { label: "Recruitment Partner", count: 12 }
    ]
  },
  {
    key: "tags",
    title: "Candidate services",
    options: [
      { label: "CV Screening", count: 56 },
      { label: "Interview Coordination", count: 48 },
      { label: "Document Collection", count: 52 },
      { label: "Certificate Attestation", count: 33 },
      { label: "Medical Processing", count: 29 },
      { label: "Visa Documentation", count: 46 },
      { label: "Travel Coordination", count: 21 },
      { label: "Pre-departure Briefing", count: 18 }
    ]
  },
  {
    key: "tags",
    title: "Recruitment stage",
    options: [
      { label: "Open Vacancies", count: 86 },
      { label: "CV Shortlisting", count: 54 },
      { label: "Employer Interview", count: 42 },
      { label: "Offer Letter Stage", count: 28 },
      { label: "Documentation Stage", count: 36 },
      { label: "Visa Processing", count: 31 },
      { label: "Deployment Ready", count: 19 },
      { label: "Closed Positions", count: 12 }
    ]
  },
  {
    key: "language",
    title: "Preferred language",
    options: [
      { label: "English", count: 88 },
      { label: "Hindi", count: 42 },
      { label: "Tamil", count: 35 },
      { label: "Malayalam", count: 28 },
      { label: "Arabic", count: 17 },
      { label: "German", count: 12 }
    ]
  }
];

function getProviderField(provider, key) {
  if (key === "tags") return provider.tags;
  return provider[key];
}

function matchesFilter(provider, selectedFilters) {
  return Object.entries(selectedFilters).every(([key, values]) => {
    if (!values.length) return true;

    const field = getProviderField(provider, key);

    if (Array.isArray(field)) {
      return values.some((value) => field.includes(value));
    }

    return values.includes(field);
  });
}

function ProviderCard({ provider, saved, compared, onSave, onCompare }) {
  return (
    <article className="flex min-h-[258px] flex-col justify-between rounded-[8px] border border-[#cfd4dc] bg-white px-6 py-7 transition hover:border-[#0065f2] hover:shadow-[0_3px_10px_rgba(16,24,40,0.08)]">
      <div>
        <div className="flex items-center gap-4">
          <div className="relative flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[3px] border border-[#cfd4dc] bg-white text-[10px] font-bold text-[#0065f2]">
            {provider.logo}

            {provider.verified && (
              <span className="absolute -right-2 -top-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#0065f2] text-white">
                <ShieldCheck size={12} />
              </span>
            )}
          </div>

          <h3 className="text-[16px] font-bold leading-tight text-[#101828]">
            {provider.name}
          </h3>
        </div>

        <p className="mt-7 line-clamp-3 min-h-[76px] text-[18px] leading-[1.32] text-[#273142]">
          {provider.description}
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-1 text-[17px] font-bold text-[#101828]">
          <Star size={18} className="fill-[#d6dc00] text-[#d6dc00]" />
          {provider.rating.toFixed(1)}
          <span className="font-semibold">({provider.reviews})</span>
        </div>

        <div className="flex items-center gap-6 text-[15px] font-bold text-[#101828]">
          <button
            type="button"
            onClick={() => onSave(provider.id)}
            className={`flex items-center gap-1 hover:text-[#0065f2] ${
              saved ? "text-[#0065f2]" : ""
            }`}
          >
            <Bookmark size={18} className={saved ? "fill-[#0065f2]" : ""} />
            Save
          </button>

          <button
            type="button"
            onClick={() => onCompare(provider.id)}
            className={compared ? "text-[#0065f2]" : "hover:text-[#0065f2]"}
            aria-label="Compare"
          >
            <ArrowLeftRight size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}

function FilterGroup({ group, selectedFilters, setSelectedFilters }) {
  const [open, setOpen] = useState(
    group.title === "Healthcare recruitment" ||
      group.title === "Hospitality & restaurant" ||
      group.title === "IT & digital jobs"
  );

  const selectedValues = selectedFilters[group.key] || [];

  const selectedInsideGroup = group.options.filter((option) =>
    selectedValues.includes(option.label)
  );

  const toggleOption = (optionLabel) => {
    setSelectedFilters((previous) => {
      const current = previous[group.key] || [];
      const exists = current.includes(optionLabel);

      return {
        ...previous,
        [group.key]: exists
          ? current.filter((item) => item !== optionLabel)
          : [...current, optionLabel]
      };
    });
  };

  const clearGroup = () => {
    setSelectedFilters((previous) => ({
      ...previous,
      [group.key]: previous[group.key].filter(
        (item) => !group.options.some((option) => option.label === item)
      )
    }));
  };

  return (
    <div className="border-b border-[#d4d8df] py-[22px]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-5 text-left"
      >
        <span>
          <span className="block text-[18px] font-bold leading-[1.2] text-[#101828]">
            {group.title}
          </span>

          <span className="mt-[5px] block text-[16px] leading-none text-[#344054]">
            {selectedInsideGroup.length
              ? `${selectedInsideGroup.length} selected`
              : "all"}
          </span>
        </span>

        <ChevronDown
          size={24}
          className={`shrink-0 text-[#0065f2] transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="mt-5 space-y-[14px]">
          <button
            type="button"
            onClick={clearGroup}
            className="text-[15px] text-[#8a94a6] underline underline-offset-2 hover:text-[#0065f2]"
          >
            Clear selection
          </button>

          {group.options.map((option) => {
            const checked = selectedValues.includes(option.label);

            return (
              <label
                key={option.label}
                className="flex cursor-pointer items-start gap-3 text-[17px] leading-[1.25] text-[#101828]"
              >
                <button
                  type="button"
                  onClick={() => toggleOption(option.label)}
                  className={`mt-[2px] flex h-[25px] w-[25px] shrink-0 items-center justify-center border ${
                    checked
                      ? "border-[#0057ff] bg-[#0057ff] text-white"
                      : option.count === 0
                      ? "border-[#aeb4bd] bg-white"
                      : "border-[#667085] bg-white"
                  }`}
                >
                  {checked && <Check size={17} />}
                </button>

                <span className={option.count === 0 ? "text-[#475467]" : ""}>
                  {option.label}{" "}
                  <span className="text-[#8a94a6]">({option.count})</span>
                </span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Searchpage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    tags: ["Nurses"],
    category: [],
    country: [],
    companyType: [],
    language: []
  });

  const [sortBy] = useState("reviews");
  const [page, setPage] = useState(1);
  const [savedProviders, setSavedProviders] = useState([]);
  const [comparedProviders, setComparedProviders] = useState([]);

  const pageSize = 12;

  const selectedFilterChips = useMemo(() => {
    return Object.entries(selectedFilters).flatMap(([key, values]) =>
      values.map((value) => ({ key, value }))
    );
  }, [selectedFilters]);

  const filteredProviders = useMemo(() => {
    const searched = providers.filter((provider) => {
      const searchText = `
        ${provider.name}
        ${provider.category}
        ${provider.description}
        ${provider.tags.join(" ")}
        ${provider.country}
        ${provider.language}
        ${provider.companyType}
      `.toLowerCase();

      return searchText.includes(searchTerm.toLowerCase());
    });

    const filtered = searched.filter((provider) =>
      matchesFilter(provider, selectedFilters)
    );

    return [...filtered].sort((a, b) => {
      if (sortBy === "reviews") return b.reviews - a.reviews;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });
  }, [searchTerm, selectedFilters, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredProviders.length / pageSize));

  const paginatedProviders = filteredProviders.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const clearAllFilters = () => {
    setSelectedFilters({
      tags: [],
      category: [],
      country: [],
      companyType: [],
      language: []
    });
    setSearchTerm("");
    setPage(1);
  };

  const removeChip = (chip) => {
    setSelectedFilters((previous) => ({
      ...previous,
      [chip.key]: previous[chip.key].filter((item) => item !== chip.value)
    }));
    setPage(1);
  };

  const toggleSave = (id) => {
    setSavedProviders((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const toggleCompare = (id) => {
    setComparedProviders((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif] text-[#101828] mt-32">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1365px] px-6 pt-8">
        <div className="flex items-center gap-2 text-[15px] font-bold text-[#0065f2]">
          <a href="/" className="underline underline-offset-2">
            Home
          </a>
          <ChevronRight size={17} />
          <span className="underline underline-offset-2">
            Service providers
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="mt-8 bg-[#f5f7fa]">
        <div className="mx-auto grid max-w-[1365px] grid-cols-1 gap-12 px-6 py-[52px] lg:grid-cols-[1fr_420px] lg:items-start">
          <div>
            <h1 className="text-[38px] font-normal leading-tight tracking-[-0.04em] text-[#0065f2]">
              Antalya Manpower Job Marketplace
            </h1>

            <p className="mt-5 max-w-[650px] text-[20px] leading-[1.35] text-[#101828] font-light">
              Explore manpower categories, employer requirements, candidate
              services, destination markets, and recruitment stages across
              Kuwait, GCC, Germany, and Europe.
            </p>
          </div>

          <div>
            <label className="mb-2 block text-[16px] font-bold text-[#101828]">
              Search
            </label>

            <div className="relative">
              <input
                value={searchTerm}
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                  setPage(1);
                }}
                placeholder="Search jobs, providers, countries, services..."
                className="h-[43px] w-full rounded-[3px] border border-[#101828] bg-white px-4 pr-12 text-[16px] outline-none focus:border-[#0065f2]"
              />

              <Search
                size={24}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#101828]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pills */}
      <section className="border-y border-[#d4d8df] bg-white">
        <div className="mx-auto flex max-w-[1365px] flex-wrap items-center gap-3 px-6 py-[16px]">
          <button
            type="button"
            className="rounded-full bg-[#0065f2] px-7 py-[11px] text-[16px] font-bold text-white"
          >
            Jobs & Providers {filteredProviders.length}
          </button>

          <button
            type="button"
            className="rounded-full bg-[#e8f1ff] px-7 py-[11px] text-[16px] font-bold text-[#0065f2]"
          >
            Packages 61
          </button>

          <div className="mx-2 hidden h-11 w-px bg-[#d4d8df] md:block" />

          {["Employer type", "Destination country", "Preferred language"].map(
            (pill) => (
              <button
                type="button"
                key={pill}
                className="flex items-center gap-2 rounded-full bg-[#e8f1ff] px-7 py-[11px] text-[16px] font-bold text-[#0065f2]"
              >
                {pill}
                <ChevronDown size={19} />
              </button>
            )
          )}

         
        </div>
      </section>

      {/* Body */}
      <main className="mx-auto grid max-w-[1365px] grid-cols-1 gap-[34px] px-6 py-[34px] lg:grid-cols-[320px_1fr]">
        {/* Filters */}
        <aside className="hidden lg:block">
          <div className="sticky top-4">
            <div className="mb-1 border-b border-[#d4d8df] pb-3 text-[15px] text-[#344054]">
              filters
            </div>

            {filterGroups.map((group, index) => (
              <FilterGroup
                key={`${group.title}-${index}`}
                group={group}
                selectedFilters={selectedFilters}
                setSelectedFilters={(value) => {
                  setSelectedFilters(value);
                  setPage(1);
                }}
              />
            ))}
          </div>
        </aside>

        {/* Results */}
        <section>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="text-[16px] text-[#101828]">
              {filteredProviders.length} results
            </span>

            {selectedFilterChips.map((chip) => (
              <span
                key={`${chip.key}-${chip.value}`}
                className="flex items-center gap-2 rounded-full bg-[#eef0f3] px-4 py-[7px] text-[14px] font-bold"
              >
                {chip.value}
                <button type="button" onClick={() => removeChip(chip)}>
                  <X size={16} />
                </button>
              </span>
            ))}

            {(selectedFilterChips.length > 0 || searchTerm) && (
              <button
                type="button"
                onClick={clearAllFilters}
                className="rounded-full bg-[#eef0f3] px-4 py-[7px] text-[14px] font-bold"
              >
                clear all filters
              </button>
            )}
          </div>

          {paginatedProviders.length > 0 ? (
            <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 xl:grid-cols-3">
              {paginatedProviders.map((provider) => (
                <ProviderCard
                  key={provider.id}
                  provider={provider}
                  saved={savedProviders.includes(provider.id)}
                  compared={comparedProviders.includes(provider.id)}
                  onSave={toggleSave}
                  onCompare={toggleCompare}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-[8px] border border-[#cfd4dc] bg-white p-12 text-center">
              <Search className="mx-auto mb-4 text-[#98a2b3]" size={42} />
              <h3 className="text-xl font-bold">No jobs or providers found</h3>
              <p className="mt-2 text-[#667085]">
                Try changing your keyword or clearing filters.
              </p>
            </div>
          )}

          {/* Pagination */}
          <div className="mx-auto mt-[72px] flex max-w-[920px] items-center justify-between mb-96">
            <button
              type="button"
              disabled={page === 1}
              onClick={() => setPage((previous) => Math.max(1, previous - 1))}
              className={`flex items-center gap-3 text-[17px] font-medium ${
                page === 1 ? "text-[#9aa3b2]" : "text-[#101828]"
              }`}
            >
              <ChevronRight className="rotate-180" size={26} />
              Previous
            </button>

            <div className="flex items-center gap-6 text-[18px]">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <button
                    type="button"
                    key={pageNumber}
                    onClick={() => setPage(pageNumber)}
                    className={`flex h-8 w-8 items-center justify-center ${
                      page === pageNumber
                        ? "bg-[#101828] font-bold text-white"
                        : "text-[#101828]"
                    }`}
                  >
                    {pageNumber}
                  </button>
                )
              )}
            </div>

            <button
              type="button"
              disabled={page === totalPages}
              onClick={() =>
                setPage((previous) => Math.min(totalPages, previous + 1))
              }
              className={`flex items-center gap-3 text-[17px] font-medium ${
                page === totalPages ? "text-[#9aa3b2]" : "text-[#101828]"
              }`}
            >
              Next
              <ChevronRight size={26} />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}