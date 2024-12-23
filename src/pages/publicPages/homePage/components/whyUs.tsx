import BulletPointDot from "@components/bulletPointDot/BulletPointDot";
import Heading from "@components/heading/Heading";
import SmallTitle from "@components/smallTitle/SmallTitle";
import WhyUsBoxes from "./WhyUsBoxes";

const WhyUsSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-20 xl:gap-64 ">
      <div className="flex-[1.5] grid grid-cols-2 gap-4 w-full mx-auto">
        <WhyUsBoxes
          textClassName="text-sm capitalize"
          count="8"
          text="Elevate your business"
        />
        <WhyUsBoxes
          textClassName="text-sm capitalize"
          count="40"
          text="Transform your Career"
        />
        <WhyUsBoxes
          textClassName="text-sm capitalize"
          count="38"
          text="Build Software Solutions"
        />
        <WhyUsBoxes
          textClassName="text-sm"
          count="21"
          text="Request Data Project"
        />
      </div>

      <div className="flex-[2.5]">
        <SmallTitle className="mt-[-1px] mx-auto md:ml-0">Why Us</SmallTitle>

        <div className=" block">
          <Heading>What sets us apart:</Heading>
          <div className="flex flex-col mb-[15px] gap-5">
            <div className="flex items-center gap-[10px]">
              <BulletPointDot />
              <p>
                We provide a straightforward and engaging learning experience
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <BulletPointDot />
              <p>We focus on essential workplace skills</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <BulletPointDot />
              <p>We align the training outcomes with your objectives</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <BulletPointDot />
              <p>
              We provide job referrals and references
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <BulletPointDot />
              <p>Flexible Payment Options & Scholarship programs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
