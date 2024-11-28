import BulletPointDot from "@components/bulletPointDot/BulletPointDot";
import ButtonLink from "@components/button/ButtonLink";
import PublicPageContainer from "@components/container/PublicPageContainer";
import Heading from "@components/heading/Heading";
import Paragraph from "@components/paragraph/Paragraph";
import SubHeading from "@components/subHeading/SubHeading";
import { CTARequestScholarship } from "../training/components/CTA";

const SingleCourseDetail = () => {
  return (
    <PublicPageContainer>
      <div className="imgContainer w-full lg:w-[90%] xl:w-[80%] mx-auto ">
        <img src="/assets/dash1.png" alt="dashboard" />
      </div>

      <div className="flex-1 order-2 md:order-1">
        <Heading
          className="xmd:text-[35px] text-xlg xmd:text-left text-center my-6"
          text="Data Analytics & BI"
        />

        <Paragraph
          className="mb-[12px] lg:w-[80%] xmd:w-[85%] xmd:text-left text-center"
          text={`Master the art of data analysis with in-depth training in Power BI and SQL, designed to equip you with a versatile skill set that goes beyond just technical proficiency. This course provides hands-on experience in data visualization, empowering you to transform raw data into actionable insights that drive business decisions. You’ll also build essential skills in requirement gathering and stakeholder management, ensuring you understand and meet client needs effectively. Additionally, the course emphasizes clear, impactful presentation techniques, enabling you to confidently share your insights with stakeholders. Whether you're a beginner or a seasoned professional looking to enhance your analytical capabilities, this program is structured to support your growth and success.`}
        />
      </div>

      <div className="flex items-center justify-between mb-2">
        <span className="text-md text-light font-bold text-LightBlue">
          $200
        </span>
        <span className="text-2xs text-light">
          Payable in up to 2 installments
        </span>
      </div>

      <div className="text-sm text-light">56 Students enrolled</div>
      <ButtonLink to="/register" label="Buy Now" className="text-sm my-3" />

      <div className="bg-transparentWhite p-4 grid grid-cols-2 lg:grid-cols-4 gap-4 my-10">
        <div className="flex flex-col gap-2">
          <SubHeading>4 modules</SubHeading>
          <Paragraph>
            Master the gain practical skills for real-world application.
          </Paragraph>
        </div>
        <div className="flex flex-col gap-2">
          <SubHeading>Beginners Level</SubHeading>
          <Paragraph>Recommended experience</Paragraph>
        </div>
        <div className="flex flex-col gap-2">
          <SubHeading>12 weeks to complete</SubHeading>
          <Paragraph>
            Master the gain practical skills for real-world application.
          </Paragraph>
        </div>
        <div className="flex flex-col gap-2">
          <SubHeading>Flexible Schedule</SubHeading>
          <Paragraph>Learn at your own pace</Paragraph>
        </div>
      </div>

      <div className="my-10">
        <Heading
          className="xmd:text-[35px] text-xlg xmd:text-left text-center my-6"
          text="What you’ll Learn"
        />
        <div className="flex flex-col md:flex-row text-xs md:text-sm justify-between gap-4">
          <div className="left">
            <div className="flex items-center gap-[10px]">
              <BulletPointDot />
              <p>Data cleaning and preparation techniques</p>
            </div>

            <div className="flex items-center gap-[10px]  ">
              <BulletPointDot />
              <p>Data cleaning and preparation techniques</p>
            </div>

            <div className="flex items-center gap-[10px]">
              <BulletPointDot />
              <p>Building interactive dashboards with Power BI</p>
            </div>

            <div className="flex items-center gap-[10px]  ">
              <BulletPointDot />
              <p>Building interactive dashboards with Power BI</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <BulletPointDot />
              <p>Advanced SQL queries for data extraction and manipulation</p>
            </div>
          </div>

          <div className="right">
            <div className="flex items-center gap-[10px]">
              <BulletPointDot />
              <p>Data visualization principles for effective storytelling</p>
            </div>

            <div className="flex items-center gap-[10px]  ">
              <BulletPointDot />
              <p>Data visualization principles for effective storytelling</p>
            </div>

            <div className="flex items-center gap-[10px]">
              <BulletPointDot />
              <p>Requirement gathering for data-driven projects</p>
            </div>

            <div className="flex items-center gap-[10px]">
              <BulletPointDot />
              <p>Requirement gathering for data-driven projects</p>
            </div>

            <div className="flex items-center gap-[10px]  ">
              <BulletPointDot />
              <p>Advanced SQL queries for data extraction and manipulation</p>
            </div>
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
