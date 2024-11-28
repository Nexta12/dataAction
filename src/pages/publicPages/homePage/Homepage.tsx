import PublicPageContainer from "@components/container/PublicPageContainer";
import ArticlesSection from "./components/ArticlesSection";
import ExpertsSection from "./components/ExpertsSection";
import HeroSection from "./components/Hero";
import Partners from "./components/Partners";
import ServicesSection from "./components/ServicesSection";
import Testimonials from "./components/Testimonials";
import UpcommingEvents from "./components/UpcommingEvents";
import VideoSection from "./components/VideoSection";
import WhyUsSection from "./components/whyUs";

const Homepage = () => {
  return (
    <PublicPageContainer
      className="flex flex-col gap-14 lg:gap-36"
      gradientDirection="65deg"
    >
      <HeroSection />
      <UpcommingEvents />
      <ServicesSection />
      <WhyUsSection />
      <VideoSection />
      <ArticlesSection />
      <ExpertsSection />
      <Testimonials />
      <Partners />
    </PublicPageContainer>
  );
};

export default Homepage;
