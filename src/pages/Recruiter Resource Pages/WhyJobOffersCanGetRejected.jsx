import React from "react";
import PageTemplate from "../PageTemplate";

export default function WhyJobOffersCanGetRejected() {
  return (
    <PageTemplate
      title="Why job offers can get rejected"
      subtitle="Understand why candidates reject offers and how employers can reduce dropouts before joining."
      primaryCta="Reduce offer rejection"
      primaryUrl="/employer-services"
      secondaryCta="Contact us"
      secondaryUrl="/contact-us"
      sections={[
        {
          heading: "Salary mismatch",
          text: "Candidates may reject offers when salary, benefits, accommodation, transport or contract terms are unclear or below expectations."
        },
        {
          heading: "Delayed communication",
          text: "Slow feedback, unclear timelines and poor communication increase candidate uncertainty and competing offer risk."
        },
        {
          heading: "Role expectation gap",
          text: "Offer rejection can happen when job responsibilities, location, shift conditions or employer expectations are not clearly explained."
        }
      ]}
    />
  );
}