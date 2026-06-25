import React from "react";
import PageTemplate from "../PageTemplate";

export default function ComplaintsProcedure() {
  return (
    <PageTemplate
      title="Complaints procedure"
      subtitle="We aim to handle complaints fairly, professionally and transparently through a structured review and response process."
      primaryCta="Raise a complaint"
      primaryUrl="/contact-us"
      secondaryCta="View policies"
      secondaryUrl="/policies-and-terms"
      sections={[
        {
          heading: "Submit complaint",
          text: "Candidates, employers or partners can submit complaints with relevant details, supporting documents and contact information."
        },
        {
          heading: "Review process",
          text: "Our team reviews the matter, checks records, requests clarification where needed and identifies appropriate corrective action."
        },
        {
          heading: "Resolution",
          text: "We communicate the outcome clearly and aim to resolve complaints within a reasonable operational timeline."
        }
      ]}
    />
  );
}