import React from "react";
import PageTemplate from "../PageTemplate";

export default function GraduateRecruitersNetwork() {
  return (
    <PageTemplate
      title="Join the graduate recruiters network"
      subtitle="Connect with Antalya Manpower to build graduate hiring pipelines, early-career talent pools and recruitment partnerships."
      primaryCta="Join network"
      primaryUrl="/contact-us"
      secondaryCta="Employer services"
      secondaryUrl="/employer-services"
      sections={[
        {
          heading: "Employer community",
          text: "Join a network of employers interested in hiring, training and developing graduate and early-career talent."
        },
        {
          heading: "Talent access",
          text: "Access candidate pipelines across education, business, IT, healthcare support, hospitality and professional sectors."
        },
        {
          heading: "Partnership model",
          text: "Collaborate on campaigns, screening events, recruitment drives, assessment processes and sector-specific talent programmes."
        }
      ]}
    />
  );
}