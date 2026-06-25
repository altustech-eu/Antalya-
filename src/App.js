import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Homepage from "./pages/Main Pages/Homepage/Homepage";
import Searchpage from "./pages/Searchpage";
import Jdpage from "./pages/JDpage";
import Footer from "./pages/Footer";
import Floating from "./pages/floatingSM";
import Nav from "./pages/Main Pages/Homepage/Navigation";

/* CAREER ADVICE PAGES */
import CareerAdviceHub from "./pages/Career Advice Pages/CareerAdviceHub";
import ConstructionInterviewQuestions from "./pages/Career Advice Pages/ConstructionInterviewQuestions";
import FollowingUpGraduateJobApplications from "./pages/Career Advice Pages/FollowingUpGraduateJobApplications";
import GraduateAssessmentCentres from "./pages/Career Advice Pages/GraduateAssessmentCentres";
import GraduateCoverLetter from "./pages/Career Advice Pages/GraduateCoverLetter";
import GraduateCVTemplatesGuide from "./pages/Career Advice Pages/GraduateCVTemplatesGuide";
import GraduateInterviewQuestions from "./pages/Career Advice Pages/GraduateInterviewQuestions";
import GraduateJobApplications from "./pages/Career Advice Pages/GraduateJobApplications";
import GraduatePhoneInterviews from "./pages/Career Advice Pages/GraduatePhoneInterviews";
import GraduateRecruitmentAgencies from "./pages/Career Advice Pages/GraduateRecruitmentAgencies";
import GraduateRecruitmentSchemes from "./pages/Career Advice Pages/GraduateRecruitmentSchemes";
import StudentJobInterviews from "./pages/Career Advice Pages/StudentJobInterviews";
import WhenToApplyForGraduateJobs from "./pages/Career Advice Pages/WhenToApplyForGraduateJobs";

/* COMPANY PAGES */
import CompanyAboutUs from "./pages/Company/AboutUs";
import CompanyContactUs from "./pages/Company/ContactUs";
import HelpFAQ from "./pages/Company/HelpFAQ";
import CompanyPoliciesTerms from "./pages/Company/PoliciesTerms";
import TestimonialsPage from "./pages/Company/Testimonials";

/* JOB CATEGORY PAGES */
import AllJobs from "./pages/Job Category Pages/AllJobs";
import Apprenticeships from "./pages/Job Category Pages/Apprenticeships";
import ExperiencedGraduateJobs from "./pages/Job Category Pages/ExperiencedGraduateJobs";
import GraduateJobs from "./pages/Job Category Pages/GraduateJobs";
import Internships from "./pages/Job Category Pages/Internships";
import StudentJobs from "./pages/Job Category Pages/StudentJobs";

/* JOB DETAIL PAGES */
import GraduateJobDetail from "./pages/Job Detail Pages/GraduateJobDetail";
import StudentJobDetail from "./pages/Job Detail Pages/StudentJobDetail";

/* POLICIES AND TERMS PAGES */
import ComplaintsProcedure from "./pages/Policies and Terms Pages/ComplaintsProcedure";
import DataProtectionPolicy from "./pages/Policies and Terms Pages/DataProtectionPolicy";
import GDPRPrivacyNotice from "./pages/Policies and Terms Pages/GDPRPrivacyNotice";
import PoliciesTerms from "./pages/Policies and Terms Pages/PoliciesTerms";
import PrivacyPolicy from "./pages/Policies and Terms Pages/PrivacyPolicy";
import TermsAndConditions from "./pages/Policies and Terms Pages/TermsAndConditions";
import WebsiteUsageCookiePolicy from "./pages/Policies and Terms Pages/WebsiteUsageCookiePolicy";

/* RECRUITER RESOURCE PAGES */
import BenefitsOfHiringGraduates from "./pages/Recruiter Resource Pages/BenefitsOfHiringGraduates";
import CandidatePsychometricTesting from "./pages/Recruiter Resource Pages/CandidatePsychometricTesting";
import CompetencyBasedRecruitment from "./pages/Recruiter Resource Pages/CompetencyBasedRecruitment";
import GraduateRecruitersNetwork from "./pages/Recruiter Resource Pages/GraduateRecruitersNetwork";
import RecruiterResourcesHub from "./pages/Recruiter Resource Pages/RecruiterResourcesHub";
import RecruitmentFramework from "./pages/Recruiter Resource Pages/RecruitmentFramework";
import RecruitmentProcess from "./pages/Recruiter Resource Pages/RecruitmentProcess";
import RunningGraduateRecruitmentCampaign from "./pages/Recruiter Resource Pages/RunningGraduateRecruitmentCampaign";
import SelectionMethods from "./pages/Recruiter Resource Pages/SelectionMethods";
import WhyJobOffersCanGetRejected from "./pages/Recruiter Resource Pages/WhyJobOffersCanGetRejected";

/* MAIN EXTRA PAGES */
import Register from "./pages/Main Pages/Register";
import Login from "./pages/Main Pages/Login";
import EmployerServices from "./pages/Main Pages/Employer Services";
import ArticleHub from "./pages/Article Hub";
import FeaturedEmployers from "./pages/Featured Employers";

function AppLayout() {
  const location = useLocation();

  const hideLayoutRoutes = ["/register", "/login"];
  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Nav />}
      {!hideLayout && <Floating />}

      <Routes>
        {/* EXISTING MAIN ROUTES */}
        <Route path="/" element={<Homepage />} />
        <Route path="/searchpage" element={<Searchpage />} />
        <Route path="/jdpage" element={<Jdpage />} />
        <Route path="/employer-services" element={<EmployerServices />} />

        {/* LOGIN / REGISTER ROUTES */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* ARTICLE / FEATURED EMPLOYERS */}
        <Route path="/article-hub" element={<ArticleHub />} />
        <Route path="/featured-employers" element={<FeaturedEmployers />} />

        {/* CAREER ADVICE ROUTES */}
        <Route path="/career-advice-hub" element={<CareerAdviceHub />} />
        <Route
          path="/construction-interview-questions"
          element={<ConstructionInterviewQuestions />}
        />
        <Route
          path="/following-up-graduate-job-applications"
          element={<FollowingUpGraduateJobApplications />}
        />
        <Route
          path="/graduate-assessment-centres"
          element={<GraduateAssessmentCentres />}
        />
        <Route path="/graduate-cover-letter" element={<GraduateCoverLetter />} />
        <Route
          path="/graduate-cv-templates-guide"
          element={<GraduateCVTemplatesGuide />}
        />
        <Route
          path="/graduate-interview-questions"
          element={<GraduateInterviewQuestions />}
        />
        <Route
          path="/graduate-job-applications"
          element={<GraduateJobApplications />}
        />
        <Route
          path="/graduate-phone-interviews"
          element={<GraduatePhoneInterviews />}
        />
        <Route
          path="/graduate-recruitment-agencies"
          element={<GraduateRecruitmentAgencies />}
        />
        <Route
          path="/graduate-recruitment-schemes"
          element={<GraduateRecruitmentSchemes />}
        />
        <Route path="/student-job-interviews" element={<StudentJobInterviews />} />
        <Route
          path="/when-to-apply-for-graduate-jobs"
          element={<WhenToApplyForGraduateJobs />}
        />

        {/* COMPANY ROUTES */}
        <Route path="/about-us" element={<CompanyAboutUs />} />
        <Route path="/contact-us" element={<CompanyContactUs />} />
        <Route path="/help-faq" element={<HelpFAQ />} />
        <Route
          path="/company-policies-and-terms"
          element={<CompanyPoliciesTerms />}
        />
        <Route path="/testimonials" element={<TestimonialsPage />} />

        {/* JOB CATEGORY ROUTES */}
        <Route path="/jobs" element={<AllJobs />} />
        <Route path="/all-jobs" element={<AllJobs />} />
        <Route path="/apprenticeships" element={<Apprenticeships />} />
        <Route
          path="/experienced-graduate-jobs"
          element={<ExperiencedGraduateJobs />}
        />
        <Route path="/graduate-jobs" element={<GraduateJobs />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/student-jobs" element={<StudentJobs />} />

        {/* JOB DETAIL ROUTES */}
        <Route path="/graduate-job-detail" element={<GraduateJobDetail />} />
        <Route path="/student-job-detail" element={<StudentJobDetail />} />

        {/* POLICIES AND TERMS ROUTES */}
        <Route path="/complaints-procedure" element={<ComplaintsProcedure />} />
        <Route path="/data-protection-policy" element={<DataProtectionPolicy />} />
        <Route path="/gdpr-privacy-notice" element={<GDPRPrivacyNotice />} />
        <Route path="/policies-and-terms" element={<PoliciesTerms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route
          path="/website-usage-cookie-policy"
          element={<WebsiteUsageCookiePolicy />}
        />

        {/* RECRUITER RESOURCE ROUTES */}
        <Route
          path="/benefits-of-hiring-graduates"
          element={<BenefitsOfHiringGraduates />}
        />
        <Route
          path="/candidate-psychometric-testing"
          element={<CandidatePsychometricTesting />}
        />
        <Route
          path="/competency-based-recruitment"
          element={<CompetencyBasedRecruitment />}
        />
        <Route
          path="/graduate-recruiters-network"
          element={<GraduateRecruitersNetwork />}
        />
        <Route path="/recruiter-resources" element={<RecruiterResourcesHub />} />
        <Route path="/recruitment-framework" element={<RecruitmentFramework />} />
        <Route path="/recruitment-process" element={<RecruitmentProcess />} />
        <Route
          path="/running-graduate-recruitment-campaign"
          element={<RunningGraduateRecruitmentCampaign />}
        />
        <Route path="/selection-methods" element={<SelectionMethods />} />
        <Route
          path="/why-job-offers-can-get-rejected"
          element={<WhyJobOffersCanGetRejected />}
        />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;