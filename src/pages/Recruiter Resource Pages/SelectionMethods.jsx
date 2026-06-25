import React from "react";
import PageTemplate from "../PageTemplate";

export default function SelectionMethods() {
  return (
    <PageTemplate
      title="Selection methods"
      subtitle="Choose the right selection methods to assess candidate suitability, technical ability, behaviour and role readiness."
      primaryCta="Improve selection"
      primaryUrl="/employer-services"
      secondaryCta="Psychometric testing"
      secondaryUrl="/candidate-psychometric-testing"
      sections={[
        {
          heading: "CV and profile screening",
          text: "Review qualifications, experience, skills, documents, salary expectations and availability against role requirements."
        },
        {
          heading: "Interview methods",
          text: "Use HR interviews, technical interviews, competency interviews, panel discussions and practical tests where relevant."
        },
        {
          heading: "Assessment tools",
          text: "Apply aptitude tests, psychometric tools, work samples, case studies and reference checks to strengthen hiring decisions."
        }
      ]}
    />
  );
}