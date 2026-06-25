import React from "react";
import PageTemplate from "../PageTemplate";

export default function CareerAdviceHub() {
  return (
    <PageTemplate
      title="Career advice hub"
      subtitle="Practical guidance for CVs, cover letters, interviews, assessments, job applications and graduate career planning."
      primaryCta="Explore advice"
      primaryUrl="/career-advice"
      sections={[
        {
          heading: "Graduate career guidance",
          text: "Access structured advice for job search planning, application preparation, interview readiness and employer communication."
        },
        {
          heading: "Application resources",
          text: "Use CV guides, cover letter formats, application tips and follow-up guidance to improve your success rate."
        },
        {
          heading: "Interview preparation",
          text: "Prepare for phone interviews, competency questions, assessment centres and role-specific employer interviews."
        }
      ]}
    />
  );
}