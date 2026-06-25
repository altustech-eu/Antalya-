import React from "react";
import PageTemplate from "../PageTemplate";

export default function GraduateInterviewQuestions() {
  return (
    <PageTemplate
      title="Graduate interview questions"
      subtitle="Prepare for common graduate interview questions with structured answers and employer-focused examples."
      primaryCta="Practice questions"
      sections={[
        {
          heading: "Personal motivation",
          text: "Prepare answers for why you want the role, why this employer and how the opportunity fits your goals."
        },
        {
          heading: "Competency questions",
          text: "Use examples for teamwork, leadership, problem solving, communication, adaptability and responsibility."
        },
        {
          heading: "Role-specific answers",
          text: "Connect your degree, projects, internships and skills to the actual responsibilities of the role."
        }
      ]}
    />
  );
}