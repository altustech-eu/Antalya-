import React from "react";
import PageTemplate from "../PageTemplate";

export default function RunningGraduateRecruitmentCampaign() {
  return (
    <PageTemplate
      title="Running a graduate recruitment campaign"
      subtitle="Plan and execute graduate recruitment campaigns with clear timelines, channels, selection stages and communication workflows."
      primaryCta="Plan campaign"
      primaryUrl="/employer-services"
      secondaryCta="Join network"
      secondaryUrl="/graduate-recruiters-network"
      sections={[
        {
          heading: "Campaign planning",
          text: "Define campaign goals, target profiles, hiring numbers, timelines, employer brand messaging and application channels."
        },
        {
          heading: "Candidate attraction",
          text: "Use job posts, events, social media, referrals, institutions and recruitment partners to reach suitable graduates."
        },
        {
          heading: "Screening and selection",
          text: "Use structured screening, interviews, assessments and consistent communication to move candidates through the funnel."
        }
      ]}
    />
  );
}