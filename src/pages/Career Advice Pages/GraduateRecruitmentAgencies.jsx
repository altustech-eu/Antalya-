import React from "react";
import PageTemplate from "../PageTemplate";

export default function GraduateRecruitmentAgencies() {
  return (
    <PageTemplate
      title="Graduate recruitment agencies"
      subtitle="Learn how recruitment agencies support graduates with job matching, employer introductions and application guidance."
      primaryCta="Work with recruiter"
      sections={[
        {
          heading: "Agency role",
          text: "Recruitment agencies connect candidates with employers and help manage screening, interviews and job matching."
        },
        {
          heading: "Candidate preparation",
          text: "A complete CV, clear preferences and honest availability help recruiters represent you better."
        },
        {
          heading: "Employer matching",
          text: "Recruiters compare your profile with employer expectations, role requirements and salary ranges."
        }
      ]}
    />
  );
}