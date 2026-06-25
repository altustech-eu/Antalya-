import React from "react";
import PageTemplate from "../PageTemplate";

export default function RecruiterResourcesHub() {
  return (
    <PageTemplate
      title="Recruiter resources hub"
      subtitle="Practical resources for employers and recruiters covering graduate hiring, selection methods, recruitment campaigns and offer management."
      primaryCta="Explore resources"
      primaryUrl="/employer-services"
      secondaryCta="Hire talent"
      secondaryUrl="/contact-us"
      sections={[
        {
          heading: "Hiring strategy",
          text: "Plan recruitment campaigns, define roles, identify target profiles and build a structured hiring timeline."
        },
        {
          heading: "Candidate selection",
          text: "Use screening, competency interviews, assessments, psychometric testing and reference checks to improve hiring quality."
        },
        {
          heading: "Offer success",
          text: "Reduce offer rejection by improving communication, salary clarity, role expectations and onboarding readiness."
        }
      ]}
    />
  );
}