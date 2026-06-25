import React from "react";
import PageTemplate from "../PageTemplate";

export default function ConstructionInterviewQuestions() {
  return (
    <PageTemplate
      title="Construction interview questions"
      subtitle="Prepare for construction, site, engineering, safety and project coordination interviews with practical question guidance."
      primaryCta="Prepare interview"
      sections={[
        {
          heading: "Technical questions",
          text: "Prepare for questions on site safety, drawings, materials, project timelines, quality checks and construction processes."
        },
        {
          heading: "Behavioural questions",
          text: "Practice answers about teamwork, site pressure, reporting, problem-solving and communication with contractors."
        },
        {
          heading: "Role readiness",
          text: "Understand what employers expect from site engineers, supervisors, technicians and construction support staff."
        }
      ]}
    />
  );
}