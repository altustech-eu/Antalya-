import React from "react";
import PageTemplate from "../PageTemplate";

export default function HelpFAQ() {
  return (
    <PageTemplate
      title="Help and FAQ"
      subtitle="Find answers to common questions about jobs, applications, documents, employers, recruitment stages and partnerships."
      primaryCta="Contact helpdesk"
      sections={[
        {
          heading: "For candidates",
          text: "Learn how to apply, upload documents, track status and prepare for interviews."
        },
        {
          heading: "For employers",
          text: "Understand how to submit manpower requirements, review candidates and coordinate hiring."
        },
        {
          heading: "For partners",
          text: "Find guidance on collaboration models, referrals, training support and manpower partnership opportunities."
        }
      ]}
    />
  );
}