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
import CallToAction from "@components/callToAction/callToAction";


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
      <CallToAction text="Unsure which course suits you? Connect with our professionals for a Career Alignment Test and get personalized guidance on the best path for your goals" linkText="Take A step Further" className="font-bold" />
      <VideoSection />
      <ArticlesSection />
      <ExpertsSection />
      <Testimonials />
      <Partners />
    </PublicPageContainer>
  );
};

export default Homepage;
