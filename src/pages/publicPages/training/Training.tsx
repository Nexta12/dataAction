import PublicPageContainer from "@components/container/PublicPageContainer";
import TeamSection from "../aboutUs/components/TeamSection";
import Testimonials from "../homePage/components/Testimonials";
import CoursesGallery from "./components/CoursesGallery";
import { CTA, CTARequestScholarship } from "./components/CTA";
import Faqs from "./components/Faqs";
import HowItWorksSection from "./components/HowItWorksSection";
import TrainingFeeSection from "./components/TrainingFeeSection";
import TrainingHero from "./components/TrainingHero";

const Training = () => {
  return (
    <>
      <TrainingHero />
      <HowItWorksSection />
      <PublicPageContainer>
        <CoursesGallery />
      </PublicPageContainer>

      {/* <TrainingFeeSection /> */}
      {/* <CTA /> */}
      <TeamSection />
      <PublicPageContainer>
        <CTARequestScholarship />
      </PublicPageContainer>
      <Faqs />
      <PublicPageContainer>
        <Testimonials />
      </PublicPageContainer>
    </>
  );
};

export default Training;
