import React from "react";
import PageTemplate from "../PageTemplate";

export default function TermsAndConditions() {
  return (
    <PageTemplate
      title="Terms and conditions"
      subtitle="These terms explain the conditions for using Antalya Manpower’s website, services and recruitment support."
      primaryCta="Contact us"
      primaryUrl="/contact-us"
      secondaryCta="View policies"
      secondaryUrl="/policies-and-terms"
      sections={[
        {
          heading: "Service use",
          text: "Users should provide accurate information and use our platform only for legitimate job search, recruitment or partnership purposes."
        },
        {
          heading: "No guarantee",
          text: "Submitting a profile, CV or employer requirement does not guarantee selection, employment, recruitment fulfilment or placement."
        },
        {
          heading: "Policy updates",
          text: "Terms may be updated when services, legal requirements, operating processes or business conditions change."
        }
      ]}
    />
  );
}