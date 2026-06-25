import React from "react";
import PageTemplate from "../PageTemplate";

export default function WebsiteUsageCookiePolicy() {
  return (
    <PageTemplate
      title="Website usage and cookie policy"
      subtitle="This policy explains acceptable website use and how cookies may support analytics, preferences and site performance."
      primaryCta="Contact support"
      primaryUrl="/contact-us"
      secondaryCta="Privacy policy"
      secondaryUrl="/privacy-policy"
      sections={[
        {
          heading: "Website usage",
          text: "Users must not misuse, attack, copy, disrupt, scrape or unlawfully access website content, systems or user information."
        },
        {
          heading: "Cookies",
          text: "Cookies may be used for analytics, performance, preferences, forms, website improvement and user experience optimisation."
        },
        {
          heading: "Third-party tools",
          text: "The website may use external tools such as maps, forms, analytics, communication widgets or embedded media services."
        }
      ]}
    />
  );
}