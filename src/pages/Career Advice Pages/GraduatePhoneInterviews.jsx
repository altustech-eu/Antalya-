import React from "react";
import PageTemplate from "../PageTemplate";

export default function GraduatePhoneInterviews() {
  return (
    <PageTemplate
      title="Graduate phone interviews"
      subtitle="Prepare for recruiter screening calls and employer phone interviews with confidence and clarity."
      primaryCta="Prepare phone interview"
      sections={[
        {
          heading: "Before the call",
          text: "Review the job description, employer profile, your CV, availability and expected questions."
        },
        {
          heading: "During the call",
          text: "Speak clearly, keep answers structured, show interest and ask practical next-step questions."
        },
        {
          heading: "After the call",
          text: "Send a professional follow-up and prepare for the next interview or assessment stage."
        }
      ]}
    />
  );
}