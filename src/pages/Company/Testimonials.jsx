import React from "react";
import PageTemplate from "../PageTemplate";

export default function Testimonials() {
  return (
    <PageTemplate
      title="Testimonials"
      subtitle="Read feedback from candidates, employers and partners who have worked with Antalya Manpower."
      primaryCta="Share your story"
      sections={[
        {
          heading: "Candidate feedback",
          text: "Stories from job seekers who received guidance, interviews, shortlisting or employment support."
        },
        {
          heading: "Employer feedback",
          text: "Insights from companies supported with manpower planning, recruitment and candidate shortlisting."
        },
        {
          heading: "Partner feedback",
          text: "Experiences from institutions, recruiters, training partners and manpower collaborators."
        }
      ]}
    />
  );
}