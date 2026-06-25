import React from "react";
import PageTemplate from "../PageTemplate";

export default function RecruitmentFramework() {
  return (
    <PageTemplate
      title="The recruitment framework"
      subtitle="A structured framework helps employers define hiring needs, attract candidates, evaluate suitability and complete mobilisation."
      primaryCta="Build framework"
      primaryUrl="/employer-services"
      secondaryCta="Recruitment process"
      secondaryUrl="/recruitment-process"
      sections={[
        {
          heading: "Workforce requirement",
          text: "Start with clear job roles, headcount, salary range, experience level, documentation needs and joining timelines."
        },
        {
          heading: "Selection model",
          text: "Define screening steps, interview stages, assessment methods, decision criteria and approval workflows."
        },
        {
          heading: "Onboarding readiness",
          text: "Prepare offer letters, compliance checks, joining documents, induction plans and workforce mobilisation steps."
        }
      ]}
    />
  );
}