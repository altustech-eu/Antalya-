import React from "react";
import PageTemplate from "../PageTemplate";

export default function PoliciesTerms() {
  return (
    <PageTemplate
      title="Policies and terms"
      subtitle="Review Antalya Manpower policies covering privacy, data protection, website use, complaints, cookies and service terms."
      primaryCta="Contact support"
      primaryUrl="/contact-us"
      secondaryCta="Privacy policy"
      secondaryUrl="/privacy-policy"
      sections={[
        {
          heading: "Privacy and data",
          text: "Understand how candidate, employer and partner information is collected, used, protected and retained."
        },
        {
          heading: "Website usage",
          text: "Review acceptable website use, cookie practices, content conditions and access responsibilities."
        },
        {
          heading: "Complaints and support",
          text: "Learn how to raise a complaint, request clarification or contact our team for policy-related support."
        }
      ]}
    />
  );
}