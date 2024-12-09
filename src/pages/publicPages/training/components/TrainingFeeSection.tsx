import BulletPointDot from "@components/bulletPointDot/BulletPointDot";
import PublicPageContainer from "@components/container/PublicPageContainer";
import Heading from "@components/heading/Heading";
import WhyUsBoxes from "@pages/publicPages/homePage/components/WhyUsBoxes";

const TrainingFeeSection = () => {
  return (
    <PublicPageContainer gradientDirection="45deg">
      <div className="flex flex-col md:flex-row  items-start justify-between gap-6 md:gap-20 lg:gap-60 xl:gap-80">
        <div className="flex-1 grid grid-cols-2 gap-4 w-full mx-auto">
          <WhyUsBoxes textClassName="text-lg" text="Hands-on Learning" />
          <WhyUsBoxes textClassName="text-lg" text="Industry Relevant Skills" />
          <WhyUsBoxes textClassName="text-lg" text="Networking Opportunities" />
          <WhyUsBoxes textClassName="text-lg" text="Expert Instructors" />
        </div>

        <div className="flex-1">
          <div className=" block">
            <Heading className=" text-xlg xmd:text-left text-center">
              Each training comes with free:
            </Heading>
            <div className="flex flex-col mb-[15px] gap-6">
              <div className="flex items-center gap-[10px]">
                <BulletPointDot />
                <p>Up to 5 free project requests, with reviews and feedback.</p>
              </div>
              <div className="flex items-center gap-[10px]">
                <BulletPointDot />
                <p>1 Month Post Training Placement</p>
              </div>
              <div className="flex items-center gap-[10px]">
                <BulletPointDot />
                <p>Interview Preparation</p>
              </div>
              <div className="flex items-center gap-[10px]">
                <BulletPointDot />
                <p>CV building & review</p>
              </div>
              <div className="flex items-center gap-[10px]">
                <BulletPointDot />
                <p>Job Referrals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicPageContainer>
  );
};

export default TrainingFeeSection;
