import React from "react";
import PageTemplate from "../PageTemplate";

export default function GraduateJobApplications() {
  return (
    <PageTemplate
      title="Graduate job applications"
      subtitle="Understand how to complete graduate job applications with strong answers, accurate documents and clear positioning."
      primaryCta="Start application"
      sections={[
        {
          heading: "Application form",
          text: "Complete personal details, education, experience, skills and eligibility information accurately."
        },
        {
          heading: "Supporting answers",
          text: "Write concise answers that show motivation, relevant skills and understanding of the employer."
        },
        {
          heading: "Submission checklist",
          text: "Review your CV, cover letter, certificates and contact details before submitting."
        }
      ]}
    />
  );
}