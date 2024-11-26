import PublicPageContainer from "@components/container/PublicPageContainer"
import Heading from "@components/heading/Heading"
import { ArticleCard } from "@components/imageCard/ImageCard"
import { BiArrowBack } from "react-icons/bi"


const HowItWorksSection = () => {
  return (
    <PublicPageContainer gradientDirection="60deg">
        <Heading className="xmd:text-[35px] text-xlg xmd:text-left text-center">How It Works</Heading>

         <div className="flex flex-col md:flex-row items-center md:items-start gap-4">

            <ArticleCard image="/slides/slide1.png" imageClass="h-40 hidden lg:block w-full" title="Enrollment" text="Search for desired training - Register for training - Make payment." textClass="text-sm font-light text-center" clasName="w-full" />

             <BiArrowBack className="-rotate-90 md:rotate-180 mt-[55px] text-center lg:block font-bold"/>

            <ArticleCard image="/assets/lady.png" imageClass="h-40 hidden lg:block w-full" title="Onboarding" text="Receive email with course details and instructions." textClass="text-sm font-light text-center" clasName="w-full" />

            <BiArrowBack className="-rotate-90 md:rotate-180 mt-[55px] text-center lg:block font-bold"/>

            <ArticleCard image="/slides/slide1.png" imageClass="h-40 hidden lg:block w-full" title="Course Completion" text="Complete the course - Work on projects to build portfolio." textClass="text-sm font-light text-center" clasName="w-full" />

            <BiArrowBack className="-rotate-90 md:rotate-180 mt-[55px] text-center lg:block font-bold"/>

            <ArticleCard image="/slides/slide1.png" imageClass="h-40 hidden lg:block w-full" title="Post training support" text="Get certified - Access post training placement opportunities." textClass="text-sm font-light text-center" clasName="w-full" />
            
         </div>
    </PublicPageContainer>
  )
}

export default HowItWorksSection