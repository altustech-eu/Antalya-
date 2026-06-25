import React from "react";
import PageTemplate from "../PageTemplate";

export default function StudentJobs() {
  return (
    <PageTemplate
      title="Student jobs"
      subtitle="Explore student-friendly jobs, part-time roles, internships and entry-level opportunities suitable for early-career candidates."
      primaryCta="View student jobs"
      primaryUrl="/searchpage"
      sections={[
        {
          heading: "Flexible opportunities",
          text: "Find roles suitable for students, freshers and candidates looking for practical work exposure."
        },
        {
          heading: "Employability building",
          text: "Develop communication, teamwork, punctuality, customer handling and workplace discipline through student jobs."
        },
        {
          heading: "First career step",
          text: "Use student jobs as a starting point for internships, graduate roles and long-term career planning."
        }
      ]}
    />
  );
}