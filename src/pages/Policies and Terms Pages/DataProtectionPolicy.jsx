import React from "react";
import PageTemplate from "../PageTemplate";

export default function DataProtectionPolicy() {
  return (
    <PageTemplate
      title="Data protection policy"
      subtitle="This policy explains how Antalya Manpower protects candidate, employer and partner information during recruitment operations."
      primaryCta="Contact data team"
      primaryUrl="/contact-us"
      secondaryCta="Privacy policy"
      secondaryUrl="/privacy-policy"
      sections={[
        {
          heading: "Data security",
          text: "We apply reasonable administrative, technical and organisational safeguards to protect recruitment and business information."
        },
        {
          heading: "Access control",
          text: "Access to personal data, CVs, documents and employer records is limited to authorised personnel for legitimate recruitment purposes."
        },
        {
          heading: "Retention and disposal",
          text: "Data is retained only for recruitment, compliance, communication and service purposes, then archived or deleted according to business need."
        }
      ]}
    />
  );
}