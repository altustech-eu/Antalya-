import React from "react";
import PageTemplate from "../PageTemplate";

export default function PrivacyPolicy() {
  return (
    <PageTemplate
      title="Privacy policy"
      subtitle="This privacy policy explains how Antalya Manpower collects, uses and protects personal information."
      primaryCta="Contact privacy team"
      primaryUrl="/contact-us"
      secondaryCta="Data protection"
      secondaryUrl="/data-protection-policy"
      sections={[
        {
          heading: "Information collected",
          text: "We may collect names, contact details, CVs, work history, documents, preferences, employer requirements and enquiry records."
        },
        {
          heading: "Purpose of use",
          text: "Information is used for recruitment, screening, employer matching, communication, compliance and service improvement."
        },
        {
          heading: "Candidate rights",
          text: "Candidates may request access, correction or clarification regarding their personal data by contacting our support team."
        }
      ]}
    />
  );
}