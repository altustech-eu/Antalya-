import React from "react";
import PageTemplate from "../PageTemplate";

export default function GraduateJobDetail() {
  return (
    <PageTemplate
      title="Graduate job detail"
      subtitle="Review complete graduate job information including responsibilities, requirements, benefits, employer expectations and application steps."
      primaryCta="Apply now"
      primaryUrl="/contact-us"
      sections={[
        {
          heading: "Role overview",
          text: "Understand the job title, department, work environment, reporting structure and main responsibilities before applying."
        },
        {
          heading: "Eligibility requirements",
          text: "Review education, skills, experience, certificates, documents and employer-specific selection requirements."
        },
        {
          heading: "Application process",
          text: "Submit your CV, complete screening, attend interviews and follow recruiter guidance for the next steps."
        }
      ]}
    />
  );
}