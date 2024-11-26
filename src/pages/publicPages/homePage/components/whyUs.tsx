import BulletPointDot from "@components/bulletPointDot/BulletPointDot";
import PublicPageContainer from "@components/container/PublicPageContainer";
import Heading from "@components/heading/Heading";
import SmallTitle from "@components/smallTitle/SmallTitle";
import WhyUsBoxes from "./WhyUsBoxes";

const WhyUsSection = () => {
  return (
    <PublicPageContainer gradientDirection="45deg">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex-1 grid grid-cols-2 gap-4 w-full mx-auto">
           <WhyUsBoxes count="35+"text="Elevate ye business our courses" />
           <WhyUsBoxes count="987+" text="Elevate ye business our courses"/>
           <WhyUsBoxes count="890+" text="Elevate ye business our courses"/>
           <WhyUsBoxes count="77+" text="Elevate ye business our courses"/>
        </div>
        <div className="flex-1 block">
          <SmallTitle>Why Us</SmallTitle>

          <div className=" block">
            <Heading>What sets us apart:</Heading>
            <div className="flex flex-col mb-[15px] gap-1">
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
                  Job referral, Sponsorship job search strategy and references
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
    </PublicPageContainer>
  );
};

export default WhyUsSection;
