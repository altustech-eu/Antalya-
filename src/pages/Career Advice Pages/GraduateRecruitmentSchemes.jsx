import React from "react";
import PageTemplate from "../PageTemplate";

export default function GraduateRecruitmentSchemes() {
  return (
    <PageTemplate
      title="Graduate recruitment schemes"
      subtitle="Understand structured graduate schemes, selection stages, timelines and career development routes."
      primaryCta="Explore schemes"
      sections={[
        {
          heading: "Scheme structure",
          text: "Graduate schemes may include rotations, training, mentorship, assessments and progression milestones."
        },
        {
          heading: "Selection process",
          text: "Common stages include application, tests, phone screening, interviews and assessment centres."
        },
        {
          heading: "Career value",
          text: "Schemes can provide structured learning, exposure to multiple departments and faster career development."
        }
      ]}
    />
  );
}