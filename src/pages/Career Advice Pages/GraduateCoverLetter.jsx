import React from "react";
import PageTemplate from "../PageTemplate";

export default function GraduateCoverLetter() {
  return (
    <PageTemplate
      title="Graduate cover letter"
      subtitle="Create a clear graduate cover letter that explains your motivation, fit, skills and value to the employer."
      primaryCta="Create cover letter"
      sections={[
        {
          heading: "Opening paragraph",
          text: "Introduce the role, your interest and why the opportunity is relevant to your career direction."
        },
        {
          heading: "Skills and evidence",
          text: "Connect your education, projects, internships, achievements and transferable skills to the employer’s requirements."
        },
        {
          heading: "Professional closing",
          text: "Close with confidence, availability and a clear request for interview consideration."
        }
      ]}
    />
  );
}