import PublicPageContainer from "@components/container/PublicPageContainer";
import Partners from "../homePage/components/Partners";
import Header from "./components/Header";
import OurStories from "./components/OurStories";
import ServicesCardSession from "./components/ServicesCardSession";
import SocialImpact from "./components/SocialImpact";
import TeamSection from "./components/TeamSection";
import TestimonialSection from "./components/TestimonialSection";
import VisionAndMission from "./components/VisionAndMission";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <OurStories />
      <VisionAndMission />
      <ServicesCardSession />
      <TeamSection />
      <SocialImpact />
      <TestimonialSection />
      <PublicPageContainer className="py-[60px]">
        <Partners />
      </PublicPageContainer>
    </div>
  );
};

export default AboutUs;
