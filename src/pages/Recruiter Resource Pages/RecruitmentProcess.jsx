import React from "react";
import PageTemplate from "../PageTemplate";

export default function RecruitmentProcess() {
  return (
    <PageTemplate
      title="The recruitment process"
      subtitle="Understand the step-by-step recruitment workflow from requirement intake to candidate joining and post-placement support."
      primaryCta="Start hiring"
      primaryUrl="/employer-services"
      secondaryCta="Contact us"
      secondaryUrl="/contact-us"
      sections={[
        {
          heading: "Requirement intake",
          text: "Collect role details, job description, salary, benefits, eligibility, documents, contract terms and workforce quantity."
        },
        {
          heading: "Sourcing and screening",
          text: "Identify candidates, verify basic eligibility, review CVs, conduct screening calls and prepare shortlists."
        },
        {
          heading: "Selection and joining",
          text: "Coordinate interviews, employer feedback, offer confirmation, documentation and candidate joining readiness."
        }
      ]}
    />
  );
}