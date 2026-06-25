import React from "react";
import PageTemplate from "../PageTemplate";

export default function BenefitsOfHiringGraduates() {
  return (
    <PageTemplate
      title="7 benefits of hiring graduates"
      subtitle="Understand how graduate hiring can support workforce growth, innovation, succession planning and long-term talent development."
      primaryCta="Hire graduates"
      primaryUrl="/employer-services"
      secondaryCta="Recruiter resources"
      secondaryUrl="/recruiter-resources"
      sections={[
        {
          heading: "Fresh talent pipeline",
          text: "Graduates bring learning agility, adaptability and long-term potential into structured workforce development plans."
        },
        {
          heading: "Cost-effective hiring",
          text: "Graduate hiring can be a strategic way to build talent early before moving candidates into specialist or supervisory roles."
        },
        {
          heading: "Future leadership",
          text: "With the right onboarding and training, graduates can become future managers, specialists and internal culture carriers."
        }
      ]}
    />
  );
}