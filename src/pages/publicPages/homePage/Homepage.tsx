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
import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { ErrorFormatter } from "@pages/errors/errorFormatter";
import { CoursesDetail } from "@customTypes/course";
import { AlertMessage, ErrorMessageProps } from "@pages/errors/errorMessage";
import { paths } from "@routes/paths";


const Homepage = () => {
  const [courses, setCourses] = useState<CoursesDetail[]>([]);
  const [message, setMessage] = useState<ErrorMessageProps>({
    errorMessage: null,
    successMessage: null,
  });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await apiClient.get(endpoints.getAllCourses);
        setCourses(response.data);
      } catch (error) {
        setMessage({
          errorMessage: ErrorFormatter(error),
          successMessage: null,
        });
      }
    };
    fetchCourses();
  }, []);
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
          className="p-2 text-center bg-dark text-white cursor-pointer"
          pauseOnHover
        >
          <Paragraph className="mx-6 text-sm">Free CV building & review</Paragraph>
          <Paragraph className="mx-6 text-sm">Interview Preparation</Paragraph>
          <Paragraph className="mx-6 text-sm">
            1 Month Post Training Placement
          </Paragraph>
          <Paragraph className="mx-6 text-sm">Job Referral</Paragraph>
          <Paragraph className="mx-6 text-sm">
            Up to 5 standard free project requests, review and feedbacks
          </Paragraph>
        </Marquee>
      )}
      <PublicPageContainer
        className="flex flex-col gap-14  !pt-8 overflow-x-hidden"
        gradientDirection="65deg"
      >
        <HeroSection />
        <div className="">
          <AlertMessage alert={message}/>
          <div className="flex flex-col md:flex-row items-center text-md justify-between my-3">
            <Heading>Featured Courses</Heading>
            <span></span>
          </div>
          <div className="productCards grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0,3).map((course)=>(
              <CourseCard course={course}  key={course._id} />
            ))}
            
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
          text="Not sure which course is right for you? Connect with our professionals for a Career Alignment Test"
          linkText="Career Alignment Test"
          link={paths.Contact}
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
