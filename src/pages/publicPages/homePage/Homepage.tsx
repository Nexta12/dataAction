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
import Paragraph from "@components/paragraph/Paragraph";
import Heading from "@components/heading/Heading";
import Modal from "./components/Modal";

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
          <Paragraph className="mx-6">Free CV building & review</Paragraph>
          <Paragraph className="mx-6">Interview Preparation</Paragraph>
          <Paragraph className="mx-6">
            1 Month Post Training Placement
          </Paragraph>
          <Paragraph className="mx-6">Job Referral</Paragraph>
          <Paragraph className="mx-6">
            Up to 5 standard free project requests, review and feedbacks
          </Paragraph>
        </Marquee>
      )}
      <PublicPageContainer
        className="flex flex-col gap-14 lg:gap-36 overflow-x-hidden"
        gradientDirection="65deg"
      >
        <HeroSection />
        <div className="">
          <div className="flex flex-col md:flex-row items-center text-md justify-between my-3">
            <Heading>Top Trending Courses</Heading>
            <span></span>
          </div>
          <div className="productCards grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
          <div className="flex items-center text-md justify-between my-3">
            <span></span>
            <Link to="/training" className="text-blue-600">
              View More
            </Link>
          </div>
        </div>
        <Modal />
        <CallToAction
          text="Unsure which course suits you? Connect with our professionals for a Career Alignment Test and get personalized guidance on the best path for your goals"
          linkText="Take A step Further"
          link="/contact"
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
