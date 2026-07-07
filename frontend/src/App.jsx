import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ApproachPage from "./pages/ApproachPage";
import AboutDoctorPage from "./pages/AboutDoctorPage";
import AboutManovaidyaPage from "./pages/AboutManovaidyaPage";
import Home from "./pages/Home";
import MindBodyWellbeingPage from "./pages/MindBodyWellbeingPage";
import MindBodyStressTensionSupportPage from "./mindbodyconcerns/MindBodyStressTensionSupportPage";
import StressIBSSupportPage from "./mindbodyconcerns/StressIBSSupportPage";
import StressAcidityIndiaPage from "./mindbodyconcerns/StressAcidityIndiaPage";
import StressDigestiveHealthIndiaPage from "./mindbodyconcerns/StressDigestiveHealthIndiaPage";
import StressMigraineIndiaPage from "./mindbodyconcerns/StressMigraineIndiaPage";
import StressHeadachesIndiaPage from "./mindbodyconcerns/StressHeadachesIndiaPage";
import StressFatigueIndiaPage from "./mindbodyconcerns/StressFatigueIndiaPage";
import StressThyroidIndiaPage from "./mindbodyconcerns/StressThyroidIndiaPage";
import StressHighBloodPressureIndiaPage from "./mindbodyconcerns/StressHighBloodPressureIndiaPage";
import SeniorMindCarePage from "./pages/SeniorMindCarePage";
import SeniorMentalHealthCareIndiaPage from "./seniormindcare/SeniorMentalHealthCareIndiaPage";
import MemoryLossForgetfulnessSupportPage from "./seniormindcare/MemoryLossForgetfulnessSupportPage";
import ConfusionDisorientationSupportPage from "./seniormindcare/ConfusionDisorientationSupportPage";
import MildCognitiveImpairmentSupportPage from "./seniormindcare/MildCognitiveImpairmentSupportPage";
import DementiaAlzheimersCareSupportPage from "./seniormindcare/DementiaAlzheimersCareSupportPage";
import SeniorDepressionSupportPage from "./seniormindcare/SeniorDepressionSupportPage";
import SeniorSleepDisordersSupportPage from "./seniormindcare/SeniorSleepDisordersSupportPage";
import WomenHealthCarePage from "./pages/WomenHealthCarePage";
import WomenStressManagementMindBodyBalancePage from "./womenhealthcare/WomenStressManagementMindBodyBalancePage";
import WomenDepressionLowMoodSupportPage from "./womenhealthcare/WomenDepressionLowMoodSupportPage";
import WomenHormonalPmsPmddSupportPage from "./womenhealthcare/WomenHormonalPmsPmddSupportPage";
import WomenSelfEsteemBodyImageSupportPage from "./womenhealthcare/WomenSelfEsteemBodyImageSupportPage";
import WomenRelationshipEmotionalWellbeingSupportPage from "./womenhealthcare/WomenRelationshipEmotionalWellbeingSupportPage";
import WomenPregnancyPostpartumMotherhoodMentalHealthSupportPage from "./womenhealthcare/WomenPregnancyPostpartumMotherhoodMentalHealthSupportPage";
import WomenLifeTransitionsCareerPressureSupportPage from "./womenhealthcare/WomenLifeTransitionsCareerPressureSupportPage";
import AdultMentalWellnessPage from "./pages/AdultMentalWellnessPage";
import AdultMentalHealthCareIndiaPage from "./adult/AdultMentalHealthCareIndiaPage";
import AdultAnxietySupportIndiaPage from "./adult/AdultAnxietySupportIndiaPage";
import AdultDepressionSupportIndiaPage from "./adult/AdultDepressionSupportIndiaPage";
import StressBurnoutSupportPage from "./adult/StressBurnoutSupportPage";
import AdultSleepDisordersSupportIndiaPage from "./adult/AdultSleepDisordersSupportIndiaPage";
import AdultSelfEsteemConfidenceSupportIndiaPage from "./adult/AdultSelfEsteemConfidenceSupportIndiaPage";
import AdultRelationshipChallengesSupportIndiaPage from "./adult/AdultRelationshipChallengesSupportIndiaPage";
import AdultAddictionUnhealthyHabitsSupportIndiaPage from "./adult/AdultAddictionUnhealthyHabitsSupportIndiaPage";
import TeenMentalWellnessPage from "./pages/TeenMentalWellnessPage";
import TeenStressAnxietyIndiaPage from "./teenmental/TeenStressAnxietyIndiaPage";
import TeenDepressionLowMoodIndiaPage from "./teenmental/TeenDepressionLowMoodIndiaPage";
import ExamPerformancePressureIndiaPage from "./teenmental/ExamPerformancePressureIndiaPage";
import TeenConfidenceEmotionalWellbeingPage from "./teenmental/TeenConfidenceEmotionalWellbeingPage";
import TeenScreenAddictionSupportIndiaPage from "./teenmental/TeenScreenAddictionSupportIndiaPage";
import ParentTeenRelationshipSupportPage from "./teenmental/ParentTeenRelationshipSupportPage";
import TeenMentalHealthCareIndiaPage from "./teenmental/TeenMentalHealthCareIndiaPage";
import ChildHealthCarePage from "./pages/ChildHealthCarePage";
import ADHDChildArticlePage from "./childhealthcare/ADHDChildArticlePage";
import AutismTreatmentIndiaPage from "./childhealthcare/AutismTreatmentIndiaPage";
import SpeechDelaySupportIndiaPage from "./childhealthcare/SpeechDelaySupportIndiaPage";
import LearningAttentionDifficultiesIndiaPage from "./childhealthcare/LearningAttentionDifficultiesIndiaPage";
import BehaviouralConcernsChildrenIndiaPage from "./childhealthcare/BehaviouralConcernsChildrenIndiaPage";
import ChildDevelopmentSupportIndiaPage from "./childhealthcare/ChildDevelopmentSupportIndiaPage";
import ChildDevelopmentCareIndiaPage from "./childhealthcare/ChildDevelopmentCareIndiaPage";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import SuccessStoryVideosPage from "./pages/SuccessStoryVideosPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import CaseStudyDetails from "./pages/CaseStudyDetails";
import MediaPRPage from "./pages/MediaPRPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  React.useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutDoctorPage />} />
          <Route path="/about/doctor" element={<AboutDoctorPage />} />
          <Route path="/about/manovaidya" element={<AboutManovaidyaPage />} />
          <Route path="/about/approach" element={<ApproachPage />} />
          <Route path="/mind-body-wellbeing" element={<MindBodyWellbeingPage />} />
          <Route path="/mind-body-health-care-india" element={<MindBodyStressTensionSupportPage />} />
          <Route path="/mind-body-health-care-india/" element={<MindBodyStressTensionSupportPage />} />
          <Route path="/stress-ibs-support-india" element={<StressIBSSupportPage />} />
          <Route path="/stress-ibs-support-india/" element={<StressIBSSupportPage />} />
          <Route path="/stress-and-acidity" element={<StressAcidityIndiaPage />} />
          <Route path="/stress-and-acidity/" element={<StressAcidityIndiaPage />} />
          <Route path="/stress-and-digestive-health" element={<StressDigestiveHealthIndiaPage />} />
          <Route path="/stress-and-digestive-health/" element={<StressDigestiveHealthIndiaPage />} />
          <Route path="/stress-and-migraine" element={<StressMigraineIndiaPage />} />
          <Route path="/stress-and-migraine/" element={<StressMigraineIndiaPage />} />
          <Route path="/stress-and-headaches" element={<StressHeadachesIndiaPage />} />
          <Route path="/stress-and-headaches/" element={<StressHeadachesIndiaPage />} />
          <Route path="/stress-and-fatigue" element={<StressFatigueIndiaPage />} />
          <Route path="/stress-and-fatigue/" element={<StressFatigueIndiaPage />} />
          <Route path="/stress-and-thyroid" element={<StressThyroidIndiaPage />} />
          <Route path="/stress-and-thyroid/" element={<StressThyroidIndiaPage />} />
          <Route path="/stress-and-high-blood-pressure" element={<StressHighBloodPressureIndiaPage />} />
          <Route path="/stress-and-high-blood-pressure/" element={<StressHighBloodPressureIndiaPage />} />
          <Route path="/senior-mind-memory-care" element={<SeniorMindCarePage />} />
          <Route path="/senior-mental-health-care-india" element={<SeniorMentalHealthCareIndiaPage />} />
          <Route path="/senior-mental-health-care-india/" element={<SeniorMentalHealthCareIndiaPage />} />
          <Route path="/senior-mental-health-care" element={<SeniorMentalHealthCareIndiaPage />} />
          <Route path="/senior-mental-health-care/" element={<SeniorMentalHealthCareIndiaPage />} />
          <Route path="/memory-loss-forgetfulness-support-seniors-india" element={<MemoryLossForgetfulnessSupportPage />} />
          <Route path="/memory-loss-forgetfulness-support-seniors-india/" element={<MemoryLossForgetfulnessSupportPage />} />
          <Route path="/confusion-disorientation-support-seniors-india" element={<ConfusionDisorientationSupportPage />} />
          <Route path="/confusion-disorientation-support-seniors-india/" element={<ConfusionDisorientationSupportPage />} />
          <Route path="/mild-cognitive-impairment-mci-support-seniors-india" element={<MildCognitiveImpairmentSupportPage />} />
          <Route path="/mild-cognitive-impairment-mci-support-seniors-india/" element={<MildCognitiveImpairmentSupportPage />} />
          <Route path="/dementia-alzheimers-care-support-seniors-india" element={<DementiaAlzheimersCareSupportPage />} />
          <Route path="/dementia-alzheimers-care-support-seniors-india/" element={<DementiaAlzheimersCareSupportPage />} />
          <Route path="/senior-depression-support-india" element={<SeniorDepressionSupportPage />} />
          <Route path="/senior-depression-support-india/" element={<SeniorDepressionSupportPage />} />
          <Route path="/sleep-disorders-seniors-support-india" element={<SeniorSleepDisordersSupportPage />} />
          <Route path="/sleep-disorders-seniors-support-india/" element={<SeniorSleepDisordersSupportPage />} />
          <Route path="/women-health-care" element={<WomenHealthCarePage />} />
          <Route path="/women-stress-management-mind-body-balance-india" element={<WomenStressManagementMindBodyBalancePage />} />
          <Route path="/women-stress-management-mind-body-balance-india/" element={<WomenStressManagementMindBodyBalancePage />} />
          <Route path="/women-depression-low-mood-support-india" element={<WomenDepressionLowMoodSupportPage />} />
          <Route path="/women-depression-low-mood-support-india/" element={<WomenDepressionLowMoodSupportPage />} />
          <Route path="/women-hormonal-pms-pmdd-support-india" element={<WomenHormonalPmsPmddSupportPage />} />
          <Route path="/women-hormonal-pms-pmdd-support-india/" element={<WomenHormonalPmsPmddSupportPage />} />
          <Route path="/women-self-esteem-body-image-support-india" element={<WomenSelfEsteemBodyImageSupportPage />} />
          <Route path="/women-self-esteem-body-image-support-india/" element={<WomenSelfEsteemBodyImageSupportPage />} />
          <Route path="/women-relationship-emotional-wellbeing-support-india" element={<WomenRelationshipEmotionalWellbeingSupportPage />} />
          <Route path="/women-relationship-emotional-wellbeing-support-india/" element={<WomenRelationshipEmotionalWellbeingSupportPage />} />
          <Route path="/women-pregnancy-postpartum-motherhood-mental-health-india" element={<WomenPregnancyPostpartumMotherhoodMentalHealthSupportPage />} />
          <Route path="/women-pregnancy-postpartum-motherhood-mental-health-india/" element={<WomenPregnancyPostpartumMotherhoodMentalHealthSupportPage />} />
          <Route path="/women-life-transitions-career-pressure-support-india" element={<WomenLifeTransitionsCareerPressureSupportPage />} />
          <Route path="/women-life-transitions-career-pressure-support-india/" element={<WomenLifeTransitionsCareerPressureSupportPage />} />
          <Route path="/adult-mental-wellness" element={<AdultMentalWellnessPage />} />
          <Route path="/adult-mental-health-care-india" element={<AdultMentalHealthCareIndiaPage />} />
          <Route path="/adult-mental-health-care-india/" element={<AdultMentalHealthCareIndiaPage />} />
          <Route path="/adult-emotional-wellbeing-support-india" element={<AdultMentalHealthCareIndiaPage />} />
          <Route path="/adult-emotional-wellbeing-support-india/" element={<AdultMentalHealthCareIndiaPage />} />
          <Route path="/adult-mental-health-care" element={<AdultMentalHealthCareIndiaPage />} />
          <Route path="/adult-mental-health-care/" element={<AdultMentalHealthCareIndiaPage />} />
          <Route path="/anxiety-support-india" element={<AdultAnxietySupportIndiaPage />} />
          <Route path="/anxiety-support-india/" element={<AdultAnxietySupportIndiaPage />} />
          <Route path="/anxiety-treatment-india" element={<AdultAnxietySupportIndiaPage />} />
          <Route path="/anxiety-treatment-india/" element={<AdultAnxietySupportIndiaPage />} />
          <Route path="/adult-depression-support" element={<AdultDepressionSupportIndiaPage />} />
          <Route path="/adult-depression-support/" element={<AdultDepressionSupportIndiaPage />} />
          <Route path="/depression-treatment-india" element={<AdultDepressionSupportIndiaPage />} />
          <Route path="/depression-treatment-india/" element={<AdultDepressionSupportIndiaPage />} />
          <Route path="/stress-burnout-support-india" element={<StressBurnoutSupportPage />} />
          <Route path="/stress-burnout-support-india/" element={<StressBurnoutSupportPage />} />
          <Route path="/sleep-disorders-insomnia-support-india" element={<AdultSleepDisordersSupportIndiaPage />} />
          <Route path="/sleep-disorders-insomnia-support-india/" element={<AdultSleepDisordersSupportIndiaPage />} />
          <Route path="/low-self-esteem-confidence-support-india" element={<AdultSelfEsteemConfidenceSupportIndiaPage />} />
          <Route path="/low-self-esteem-confidence-support-india/" element={<AdultSelfEsteemConfidenceSupportIndiaPage />} />
          <Route path="/relationship-challenges-support-india" element={<AdultRelationshipChallengesSupportIndiaPage />} />
          <Route path="/relationship-challenges-support-india/" element={<AdultRelationshipChallengesSupportIndiaPage />} />
          <Route path="/addiction-unhealthy-habits-support-india" element={<AdultAddictionUnhealthyHabitsSupportIndiaPage />} />
          <Route path="/addiction-unhealthy-habits-support-india/" element={<AdultAddictionUnhealthyHabitsSupportIndiaPage />} />
          <Route path="/teen-mental-wellness" element={<TeenMentalWellnessPage />} />
          <Route path="/teen-mental-wellness-india" element={<TeenMentalWellnessPage />} />
          <Route path="/teen-mental-wellness-india/" element={<TeenMentalWellnessPage />} />
          <Route path="/teen-mental-health-care-india" element={<TeenMentalHealthCareIndiaPage />} />
          <Route path="/teen-mental-health-care-india/" element={<TeenMentalHealthCareIndiaPage />} />
          <Route path="/teen-emotional-wellbeing-support-india" element={<TeenMentalHealthCareIndiaPage />} />
          <Route path="/teen-emotional-wellbeing-support-india/" element={<TeenMentalHealthCareIndiaPage />} />
          <Route path="/teen-stress-anxiety-support" element={<TeenStressAnxietyIndiaPage />} />
          <Route path="/teen-stress-anxiety-support/" element={<TeenStressAnxietyIndiaPage />} />
          <Route path="/teen-depression-support" element={<TeenDepressionLowMoodIndiaPage />} />
          <Route path="/teen-depression-support/" element={<TeenDepressionLowMoodIndiaPage />} />
          <Route path="/exam-performance-pressure" element={<ExamPerformancePressureIndiaPage />} />
          <Route path="/exam-performance-pressure/" element={<ExamPerformancePressureIndiaPage />} />
          <Route path="/teen-confidence-emotional-wellbeing" element={<TeenConfidenceEmotionalWellbeingPage />} />
          <Route path="/teen-confidence-emotional-wellbeing/" element={<TeenConfidenceEmotionalWellbeingPage />} />
          <Route path="/teen-screen-addiction-support" element={<TeenScreenAddictionSupportIndiaPage />} />
          <Route path="/teen-screen-addiction-support/" element={<TeenScreenAddictionSupportIndiaPage />} />
          <Route path="/parent-teen-relationship-support" element={<ParentTeenRelationshipSupportPage />} />
          <Route path="/parent-teen-relationship-support/" element={<ParentTeenRelationshipSupportPage />} />
          <Route path="/child-health-care" element={<ChildHealthCarePage />} />
          <Route path="/child-development-care-india" element={<ChildDevelopmentCareIndiaPage />} />
          <Route path="/child-development-care-india/" element={<ChildDevelopmentCareIndiaPage />} />
          <Route path="/child-health-care/adhd-child" element={<ADHDChildArticlePage />} />
          <Route path="/autism-treatment-india" element={<AutismTreatmentIndiaPage />} />
          <Route path="/autism-treatment-india/" element={<AutismTreatmentIndiaPage />} />
          <Route path="/speech-delay-support-india" element={<SpeechDelaySupportIndiaPage />} />
          <Route path="/speech-delay-support-india/" element={<SpeechDelaySupportIndiaPage />} />
          <Route path="/learning-attention-difficulties-india" element={<LearningAttentionDifficultiesIndiaPage />} />
          <Route path="/learning-attention-difficulties-india/" element={<LearningAttentionDifficultiesIndiaPage />} />
          <Route path="/behavioural-concerns-children-india" element={<BehaviouralConcernsChildrenIndiaPage />} />
          <Route path="/behavioural-concerns-children-india/" element={<BehaviouralConcernsChildrenIndiaPage />} />
          <Route path="/child-development-support-india" element={<ChildDevelopmentSupportIndiaPage />} />
          <Route path="/child-development-support-india/" element={<ChildDevelopmentSupportIndiaPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/success-story-videos" element={<SuccessStoryVideosPage />} />
          <Route path="/success-story-videos/" element={<SuccessStoryVideosPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetails />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/media-coverage" element={<MediaPRPage />} />
          <Route path="/media-coverage/" element={<MediaPRPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
