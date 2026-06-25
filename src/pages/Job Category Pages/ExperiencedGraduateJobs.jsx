import React from "react";
import PageTemplate from "../PageTemplate";

export default function ExperiencedGraduateJobs() {
  return (
    <PageTemplate
      title="Experienced graduate jobs"
      subtitle="Find professional roles for graduates who already have work experience and are ready for higher-responsibility opportunities."
      primaryCta="View experienced roles"
      primaryUrl="/searchpage"
      sections={[
        {
          heading: "Professional progression",
          text: "Move from entry-level roles into specialist, supervisory, technical or client-facing professional positions."
        },
        {
          heading: "Profile positioning",
          text: "Present your education, experience, projects, achievements and certifications in a stronger employer-ready format."
        },
        {
          heading: "Recruiter guidance",
          text: "Receive support for salary expectations, interview readiness, role matching and employer communication."
        }
      ]}
    />
  );
}