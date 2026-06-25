import React from "react";
import PageTemplate from "../PageTemplate";

export default function StudentJobDetail() {
  return (
    <PageTemplate
      title="Student job detail"
      subtitle="Review student job information including role duties, timing, eligibility, benefits and application steps."
      primaryCta="Apply now"
      primaryUrl="/contact-us"
      sections={[
        {
          heading: "Student-friendly role",
          text: "Understand working hours, role expectations, flexibility, learning value and suitability for students or freshers."
        },
        {
          heading: "Basic requirements",
          text: "Review education status, communication skills, availability, documents and employer expectations."
        },
        {
          heading: "Next steps",
          text: "Apply with your profile, complete screening and receive recruiter support for interview preparation."
        }
      ]}
    />
  );
}