import PublicPageContainer from "@components/container/PublicPageContainer";
import Heading from "@components/heading/Heading";
import { ArticleCard } from "@components/imageCard/ImageCard";
import { BiArrowBack } from "react-icons/bi";

const HowItWorksSection = () => {
  return (
    <PublicPageContainer gradientDirection="60deg">
      <Heading className="xmd:text-[35px] text-xlg xmd:text-left text-center">
        How It Works
      </Heading>

      <div className="flex flex-col lg:flex-row items-center gap-4">
        <ArticleCard
          image="/slides/slide1.png"
          imageClass="h-[140px] hidden lg:block w-full"
          title="Enrollment"
          text="Search for desired training - Register for training - Make payment."
          textClass="text-sm font-semibold text-center"
          clasName="w-full"
        />

        <BiArrowBack className="text-[25px] -rotate-90 lg:hidden " />

        <ArticleCard
          image="/assets/lady.png"
          imageClass="h-[140px] hidden lg:block w-full"
          title="Onboarding"
          text="Receive email with course details and instructions."
          textClass="text-sm font-semibold text-center"
          clasName="w-full"
        />

        <BiArrowBack className="text-[25px] -rotate-90 lg:hidden " />

        <ArticleCard
          image="/slides/slide1.png"
          imageClass="h-[140px] hidden lg:block w-full"
          title="Course Completion"
          text="Complete the course - Work on projects to build portfolio."
          textClass="text-sm font-semibold text-center"
          clasName="w-full"
        />
        <BiArrowBack className="text-[25px] -rotate-90 lg:hidden  " />

        <ArticleCard
          image="/slides/slide1.png"
          imageClass="h-[140px] hidden lg:block w-full"
          title="Post training support"
          text="Get certified - Access post training placement opportunities."
          textClass="text-sm font-semibold text-center"
          clasName="w-full"
        />
      </div>
    </PublicPageContainer>
  );
};

export default HowItWorksSection;
