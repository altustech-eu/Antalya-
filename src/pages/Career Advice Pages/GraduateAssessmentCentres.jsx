import React from "react";
import PageTemplate from "../PageTemplate";

export default function FollowingUpGraduateJobApplications() {
  return (
    <PageTemplate
      title="Following up graduate job applications"
      subtitle="Learn how to follow up professionally after applying for a graduate job without sounding pushy or unprepared."
      primaryCta="Learn follow-up steps"
      sections={[
        {
          heading: "When to follow up",
          text: "Understand the right timing to contact recruiters after submitting an application or attending an interview."
        },
        {
          heading: "What to write",
          text: "Use clear and professional follow-up messages that confirm interest, availability and readiness."
        },
        {
          heading: "What to avoid",
          text: "Avoid excessive messages, informal language, incomplete information and pressure-based communication."
        }
      ]}
    />
  );
}