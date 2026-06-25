import React from "react";
import PageTemplate from "../PageTemplate";

export default function CompetencyBasedRecruitment() {
  return (
    <PageTemplate
      title="Competency based recruitment"
      subtitle="Design hiring processes around the competencies required for success in a specific role, team and business environment."
      primaryCta="Improve hiring process"
      primaryUrl="/employer-services"
      secondaryCta="Selection methods"
      secondaryUrl="/selection-methods"
      sections={[
        {
          heading: "Competency mapping",
          text: "Define the behaviours, skills, knowledge and attitudes required for successful role performance."
        },
        {
          heading: "Structured interviews",
          text: "Use evidence-based questions to evaluate past performance, problem solving, teamwork and accountability."
        },
        {
          heading: "Fair comparison",
          text: "Competency frameworks help compare candidates consistently and reduce subjective hiring decisions."
        }
      ]}
    />
  );
}