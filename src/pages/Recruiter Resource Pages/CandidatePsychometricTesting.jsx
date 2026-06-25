import React from "react";
import PageTemplate from "../PageTemplate";

export default function CandidatePsychometricTesting() {
  return (
    <PageTemplate
      title="Candidate psychometric testing"
      subtitle="Use psychometric assessments to understand candidate behaviour, aptitude, role fit and development potential."
      primaryCta="Discuss assessments"
      primaryUrl="/contact-us"
      secondaryCta="Recruitment process"
      secondaryUrl="/recruitment-process"
      sections={[
        {
          heading: "Aptitude assessment",
          text: "Assess numerical, verbal, logical or role-specific reasoning to support objective candidate evaluation."
        },
        {
          heading: "Behavioural insight",
          text: "Understand communication style, teamwork, motivation, resilience, leadership potential and work preferences."
        },
        {
          heading: "Decision support",
          text: "Psychometric testing should support, not replace, structured interviews, practical evaluation and reference checks."
        }
      ]}
    />
  );
}