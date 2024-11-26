import ExpertsSection from "../homePage/components/ExpertsSection";
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
      <TrainingFeeSection />
      <CTA />
      <CoursesGallery />
      <ExpertsSection />
      <CTARequestScholarship/>
      <Faqs/>
      <Testimonials/>
    </>
  );
};

export default Training;
