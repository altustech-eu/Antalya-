import React from "react";
import PageTemplate from "../PageTemplate";

export default function GraduateJobs() {
  return (
    <PageTemplate
      title="Graduate jobs"
      subtitle="Explore early-career and entry-level job opportunities for graduates across professional, technical and service sectors."
      primaryCta="View graduate jobs"
      primaryUrl="/searchpage"
      sections={[
        {
          heading: "Entry-level roles",
          text: "Find graduate jobs in administration, IT, healthcare support, education, hospitality, sales, finance and business operations."
        },
        {
          heading: "Graduate readiness",
          text: "Understand what employers expect from fresh graduates including communication, learning attitude, documentation and interview performance."
        },
        {
          heading: "Career start",
          text: "Use graduate roles to build practical experience, workplace discipline, industry exposure and long-term career direction."
        }
      ]}
    />
  );
}