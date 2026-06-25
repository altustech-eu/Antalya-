import React from "react";
import PageTemplate from "../PageTemplate";

export default function WhenToApplyForGraduateJobs() {
  return (
    <PageTemplate
      title="When to apply for graduate jobs"
      subtitle="Understand application timelines, employer hiring cycles and how early preparation improves your chances."
      primaryCta="Plan applications"
      sections={[
        {
          heading: "Application timeline",
          text: "Many graduate opportunities open months before joining dates, so early preparation is important."
        },
        {
          heading: "Document readiness",
          text: "Keep your CV, certificates, references and portfolio ready before job openings become active."
        },
        {
          heading: "Consistent applications",
          text: "Apply steadily, track responses and follow up professionally instead of waiting for one result."
        }
      ]}
    />
  );
}