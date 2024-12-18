import BulletPointDot from "@components/bulletPointDot/BulletPointDot";
import ButtonLink from "@components/button/ButtonLink";
import PublicPageContainer from "@components/container/PublicPageContainer";
import Heading from "@components/heading/Heading";
import Paragraph from "@components/paragraph/Paragraph";
import SubHeading from "@components/subHeading/SubHeading";
import { CTARequestScholarship } from "../training/components/CTA";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { FaPoundSign } from "react-icons/fa";
import { CoursesDetail } from "@customTypes/course";
import { paths } from "@routes/paths";
import Spinner from "@components/spinner/Spinner";

const SingleCourseDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [course, setCourse] = useState<CoursesDetail>({
    _id: "",
    title: "",
    slug: "",
    totalModules: "",
    experienceLevel: "",
    snippet: "",
    duration: "",
    description: "",
    images: [],
    courseOutline: [],
    whatYoudLearn: [],
    weeklyTimeRequirement: "",
    price: "",
    totalEnrolled: "",
  });

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await apiClient.get(
          `${endpoints.getOneCourseBySlug}/${slug}`,
        );

        setCourse(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchCourse();
  }, [slug]);

  useEffect(() => {
    if (!loading && (!course || !course.title)) {
      navigate(paths.Index);
    }
  }, [loading, course, navigate]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <PublicPageContainer>
      <div className="imgContainer w-full lg:w-[90%] xl:w-[80%] mx-auto ">
        <img
          src={course?.images[0]?.url || "/assets/dash1.png"}
          alt="dashboard"
        />
      </div>

      <div className="flex-1 order-2 md:order-1">
        <Heading
          className=" xmd:text-left text-center my-6"
          text={course?.title}
        />

        <Paragraph
          className="mb-[12px] lg:w-[80%] xmd:w-[85%] xmd:text-left text-center"
          text={course?.description}
        />
      </div>

      <div className="flex items-center justify-between mb-2">
        <span className="text-md text-light font-bold text-LightBlue flex items-center gap-0">
          <FaPoundSign /> {course?.price}
        </span>
        <span className="text-xs text-light">
          Payable in up to 2 installments
        </span>
      </div>

      <div className="text-sm text-light">
        {course?.totalEnrolled} Students enrolled
      </div>
      <ButtonLink to={`${paths.Register}/${course.slug}`} label="Buy Now" className="text-sm my-3" />

      <div className="bg-transparentWhite p-4 grid grid-cols-2 lg:grid-cols-4 gap-4 my-10">
        <div className="flex flex-col gap-2">
          <SubHeading> Total Modules Covered</SubHeading>
          <Paragraph>{course?.totalModules}</Paragraph>
        </div>
        <div className="flex flex-col gap-2">
          <SubHeading>Perfect For</SubHeading>
          <Paragraph>{course?.experienceLevel}</Paragraph>
        </div>
        <div className="flex flex-col gap-2">
          <SubHeading>Course Duration</SubHeading>
          <Paragraph>{course?.duration}</Paragraph>
        </div>
        <div className="flex flex-col gap-2">
          <SubHeading>Weekly Time Requirement</SubHeading>
          <Paragraph>{course?.weeklyTimeRequirement}</Paragraph>
        </div>
        <div className="flex flex-col gap-2">
          <SubHeading>Flexible Schedule</SubHeading>
          <Paragraph>Learn at your own pace</Paragraph>
        </div>
      </div>

      <div className="my-10">
        <Heading
          className=" xmd:text-left text-center my-6"
          text="What you’ll Learn"
        />
        <div className="flex flex-col md:flex-row text-xs md:text-sm justify-between gap-4">
          <div className="left">
            {course?.whatYoudLearn?.slice(0, 4).map((item, index) => (
              <div key={index} className="flex items-center gap-[10px] mb-5">
                <BulletPointDot />
                <Paragraph>{item.point}</Paragraph>
              </div>
            ))}
          </div>

          <div className="right">
            {course?.whatYoudLearn?.slice(4).map((item, index) => (
              <div key={index} className="flex items-center gap-[10px] mb-5">
                <BulletPointDot />
                <Paragraph>{item.point}</Paragraph>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-20">
        <CTARequestScholarship />
      </div>
    </PublicPageContainer>
  );
};

export default SingleCourseDetail;
