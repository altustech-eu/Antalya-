import React from "react";
import PageTemplate from "../PageTemplate";

export default function GraduateCVTemplatesGuide() {
  return (
    <PageTemplate
      title="Graduate CV templates and guide"
      subtitle="Build a recruiter-friendly graduate CV with the right structure, keywords, achievements and presentation."
      primaryCta="Build your CV"
      sections={[
        {
          heading: "CV structure",
          text: "Use a clear layout covering profile summary, education, skills, projects, internships, experience and achievements."
        },
        {
          heading: "Graduate positioning",
          text: "Show potential, employability, academic strengths, transferable skills and practical exposure."
        },
        {
          heading: "Common mistakes",
          text: "Avoid generic summaries, weak formatting, irrelevant content, spelling errors and missing evidence."
        }
      ]}
    />
  );
}