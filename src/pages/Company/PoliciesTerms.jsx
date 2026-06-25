import React from "react";
import PageTemplate from "../PageTemplate";

export default function PoliciesTerms() {
  return (
    <PageTemplate
      title="Policies and terms"
      subtitle="Review Antalya Manpower policies covering privacy, data protection, website usage, complaints and service terms."
      primaryCta="Contact support"
      sections={[
        {
          heading: "Privacy and data",
          text: "Understand how candidate, employer and partner information is collected, used and protected."
        },
        {
          heading: "Website usage",
          text: "Review acceptable use, cookies, content terms and website access conditions."
        },
        {
          heading: "Complaints and support",
          text: "Learn how to raise concerns, complaints, corrections or service requests."
        }
      ]}
    />
  );
}