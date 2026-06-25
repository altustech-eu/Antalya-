import React from "react";
import PageTemplate from "../PageTemplate";

export default function AllJobs() {
  return (
    <PageTemplate
      title="All jobs"
      subtitle="Browse all available jobs across industries, employers, locations and experience levels through Antalya Manpower."
      primaryCta="Search all jobs"
      primaryUrl="/searchpage"
      sections={[
        {
          heading: "All industries",
          text: "Explore jobs across healthcare, education, hospitality, IT, cybersecurity, logistics, finance, sales, administration and skilled labour."
        },
        {
          heading: "All experience levels",
          text: "Find opportunities for freshers, graduates, interns, trainees, apprentices and experienced professionals."
        },
        {
          heading: "Application support",
          text: "Get support with CV review, job matching, interview preparation and employer communication."
        }
      ]}
    />
  );
}