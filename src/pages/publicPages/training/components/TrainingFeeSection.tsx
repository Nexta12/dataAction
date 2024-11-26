import BulletPointDot from "@components/bulletPointDot/BulletPointDot";
import PublicPageContainer from "@components/container/PublicPageContainer";
import Heading from "@components/heading/Heading";
import WhyUsBoxes from "@pages/publicPages/homePage/components/WhyUsBoxes";

const TrainingFeeSection = () => {
  return (
    <PublicPageContainer gradientDirection="45deg">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex-1 grid grid-cols-2 gap-4 w-full mx-auto">
          <WhyUsBoxes className="font-bold" text="Hands-on Learning" />
          <WhyUsBoxes className="font-bold" text="Industry Relevant Skills" />
          <WhyUsBoxes className="font-bold" text="Networking Opportunities" />
          <WhyUsBoxes className="font-bold" text="Expert Instructors" />
        </div>
        <div className="flex-1">
          <div className=" block">
            <Heading className="text-md xmd:text-[35px] text-xlg xmd:text-left text-center">
              Each training comes with free:
            </Heading>
            <div className="flex flex-col mb-[15px] gap-1">
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
