import React from "react";
import PageTemplate from "../PageTemplate";

export default function StudentJobInterviews() {
  return (
    <PageTemplate
      title="Student job interviews"
      subtitle="Prepare for part-time, internship, trainee and student-friendly job interviews with practical guidance."
      primaryCta="Prepare interview"
      sections={[
        {
          heading: "Availability questions",
          text: "Be ready to explain your schedule, study commitments, preferred working hours and joining availability."
        },
        {
          heading: "Basic skills",
          text: "Show communication, punctuality, teamwork, willingness to learn and customer handling skills."
        },
        {
          heading: "First impression",
          text: "Dress professionally, arrive on time, research the employer and answer clearly."
        }
      ]}
    />
  );
}