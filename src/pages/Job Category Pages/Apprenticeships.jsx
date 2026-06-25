import React from "react";
import PageTemplate from "../PageTemplate";

export default function Apprenticeships() {
  return (
    <PageTemplate
      title="Apprenticeships"
      subtitle="Explore work-based learning pathways where candidates can build practical skills while gaining structured employment exposure."
      primaryCta="Explore apprenticeships"
      primaryUrl="/searchpage"
      sections={[
        {
          heading: "Learn while working",
          text: "Apprenticeships help candidates gain practical workplace skills through supervised training and employer-led learning."
        },
        {
          heading: "Career pathway",
          text: "Understand available sectors, eligibility requirements, training duration, employer expectations and long-term career growth."
        },
        {
          heading: "Application readiness",
          text: "Prepare your CV, certificates, interview answers and documents before applying for apprenticeship opportunities."
        }
      ]}
    />
  );
}