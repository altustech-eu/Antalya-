import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function PageTemplate({
  eyebrow = "Antalya For Recruiting Manpower LLC",
  title = "Page Title",
  subtitle = "Page subtitle goes here.",
  primaryCta = "Get started",
  primaryUrl = "/contact-us",
  secondaryCta = "Browse jobs",
  secondaryUrl = "/searchpage",
  sections = []
}) {
  return (
    <main className="min-h-screen bg-[#f4f4f4] pt-24 font-['Inter',sans-serif] text-[#202533]">
      {/* HERO SECTION */}
      <section className="border-l-[5px] border-[#0658d4] bg-white">
        <div className="mx-auto max-w-[1500px] px-6 py-16 md:px-12 lg:py-20">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-[#0658d4]">
            {eyebrow}
          </p>

          <h1 className="max-w-[1050px] text-[42px] font-black leading-[0.96] tracking-[-0.06em] text-black md:text-[66px] lg:text-[82px]">
            {title}
          </h1>

          <p className="mt-8 max-w-[820px] text-[20px] font-medium leading-[1.45] text-[#4b5563] md:text-[24px]">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={primaryUrl}
              className="inline-flex items-center gap-3 rounded-full bg-[#0658d4] px-8 py-4 text-base font-bold text-white transition hover:bg-[#0547aa]"
            >
              {primaryCta}
              <ArrowRight size={18} />
            </a>

            <a
              href={secondaryUrl}
              className="inline-flex items-center gap-3 rounded-full border-2 border-black px-8 py-4 text-base font-bold text-black transition hover:bg-black hover:text-white"
            >
              {secondaryCta}
              <CheckCircle2 size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* CONTENT CARDS */}
      <section className="mx-auto max-w-[1500px] px-6 py-16 md:px-12 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {sections.length > 0 ? (
            sections.map((section, index) => (
              <article
                key={index}
                className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#eef4ff] text-xl font-black text-[#0658d4]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h2 className="text-[28px] font-black leading-tight tracking-[-0.04em] text-black">
                  {section.heading}
                </h2>

                <p className="mt-4 text-[17px] leading-[1.65] text-[#4b5563]">
                  {section.text}
                </p>
              </article>
            ))
          ) : (
            <>
              <article className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#eef4ff] text-xl font-black text-[#0658d4]">
                  01
                </div>

                <h2 className="text-[28px] font-black leading-tight tracking-[-0.04em] text-black">
                  Overview
                </h2>

                <p className="mt-4 text-[17px] leading-[1.65] text-[#4b5563]">
                  This page is part of the Antalya recruitment platform.
                </p>
              </article>

              <article className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#eef4ff] text-xl font-black text-[#0658d4]">
                  02
                </div>

                <h2 className="text-[28px] font-black leading-tight tracking-[-0.04em] text-black">
                  Services
                </h2>

                <p className="mt-4 text-[17px] leading-[1.65] text-[#4b5563]">
                  Antalya supports candidates, employers and partners with structured recruitment services.
                </p>
              </article>

              <article className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#eef4ff] text-xl font-black text-[#0658d4]">
                  03
                </div>

                <h2 className="text-[28px] font-black leading-tight tracking-[-0.04em] text-black">
                  Next steps
                </h2>

                <p className="mt-4 text-[17px] leading-[1.65] text-[#4b5563]">
                  Use the contact form, job search page or registration page to continue.
                </p>
              </article>
            </>
          )}
        </div>
      </section>
    </main>
  );
}