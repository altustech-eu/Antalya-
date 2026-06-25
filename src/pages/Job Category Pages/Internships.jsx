import React from "react";
import PageTemplate from "../PageTemplate";

export default function Internships() {
  return (
    <PageTemplate
      title="Internships"
      subtitle="Find internship opportunities designed to help candidates gain workplace exposure, practical skills and employer-ready experience."
      primaryCta="Find internships"
      primaryUrl="/searchpage"
      sections={[
        {
          heading: "Workplace exposure",
          text: "Internships help students and graduates understand real business environments, team workflows and professional expectations."
        },
        {
          heading: "Skill development",
          text: "Build communication, technical, administrative, customer service and problem-solving skills through practical assignments."
        },
        {
          heading: "Career conversion",
          text: "Strong internships can lead to trainee roles, graduate jobs, references or full-time employment opportunities."
        }
      ]}
    />
  );
}