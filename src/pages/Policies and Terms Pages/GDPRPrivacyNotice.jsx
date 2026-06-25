import React from "react";
import PageTemplate from "../PageTemplate";

export default function GDPRPrivacyNotice() {
  return (
    <PageTemplate
      title="GDPR privacy notice"
      subtitle="This notice explains GDPR-related privacy information for candidates, employers and individuals whose data may be processed."
      primaryCta="Ask GDPR question"
      primaryUrl="/contact-us"
      secondaryCta="Data protection"
      secondaryUrl="/data-protection-policy"
      sections={[
        {
          heading: "Lawful basis",
          text: "Personal data may be processed for recruitment services, candidate consent, employer communication, legitimate interest or legal obligation."
        },
        {
          heading: "Data sharing",
          text: "Relevant candidate information may be shared with employers, recruitment partners or authorised service providers for placement-related purposes."
        },
        {
          heading: "Individual rights",
          text: "Eligible individuals may request access, correction, deletion, restriction, portability or objection where applicable by law."
        }
      ]}
    />
  );
}