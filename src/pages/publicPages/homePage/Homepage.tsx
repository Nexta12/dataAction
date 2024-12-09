import PublicPageContainer from "@components/container/PublicPageContainer";
import ArticlesSection from "./components/ArticlesSection";
import ExpertsSection from "./components/ExpertsSection";
import HeroSection from "./components/Hero";
import Partners from "./components/Partners";
import ServicesSection from "./components/ServicesSection";
import Testimonials from "./components/Testimonials";
import WhyUsSection from "./components/whyUs";
import CallToAction from "@components/callToAction/callToAction";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import CourseCard from "../training/components/CourseCard";
import { Link } from "react-router-dom";
import SubHeading from "@components/subHeading/SubHeading";

const Homepage = () => {
  const [showMarquee, setShowMarquee] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMarquee(false);
    }, 40000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showMarquee && (
        <Marquee
          className="p-3 text-center bg-dark text-white cursor-pointer"
          pauseOnHover
        >
          <span className="mx-6">Free CV building & review</span>
          <span className="mx-6">Interview Preparation</span>
          <span className="mx-6">1 Month Post Training Placement</span>
          <span className="mx-6">Job Referral</span>
          <span className="mx-6">
            Up to 5 standard free project requests, review and feedbacks
          </span>
        </Marquee>
      )}
      <PublicPageContainer
        className="flex flex-col gap-14 lg:gap-36"
        gradientDirection="65deg"
      >
        <HeroSection />
         <div className="">
        <div className="flex items-center text-md justify-between my-3">
          <SubHeading>Top Trending Courses</SubHeading>
          <Link to="/training">View All</Link>
        </div>
        <div className="productCards grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
        </div>

        <CallToAction
          text="Unsure which course suits you? Connect with our professionals for a Career Alignment Test and get personalized guidance on the best path for your goals"
          linkText="Take A step Further"
          className="font-bold"
        />

        {/* <UpcommingEvents /> */}
        <ServicesSection />
        <WhyUsSection />
       
        {/* <VideoSection /> */}
        <ArticlesSection />
        <ExpertsSection />
        <Testimonials />
        <Partners />
      </PublicPageContainer>
    </>
  );
};

export default Homepage;
