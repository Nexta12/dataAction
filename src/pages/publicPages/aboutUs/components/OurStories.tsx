import React from "react";
import PublicPageContainer from "@components/container/PublicPageContainer";
import Heading from "@components/heading/Heading";
import Paragraph from "@components/paragraph/Paragraph";

interface OurStoriesProps {
  title?: string;
  text1?: string;
  text2?: string;
  imageLink?: string;
}

const OurStories: React.FC<OurStoriesProps> = ({
  title = "Our Stories",
  text1 = `DataActions was founded in 2021 with a mission to help family and friends master data
    analytics through Power BI and SQL. What began as informal lessons grew rapidly as we
    saw the transformative impact on those closest to us. This success led us to expand our
    offerings to include CV drafting and interview preparation. Initially free, we
    introduced a small fee as demand rose, while keeping our passion for empowering others
    at the core.`,
  text2 = `Since then, we've supported over 30 individuals across Nigeria, the USA,
    Canada, and the UK in securing their dream jobs. Our vision is to equip people to thrive
    in the data-driven world, especially empowering Africans to enter the tech workforce. At
    DataActions, every success story fuels our commitment to uplift others, one skill at a
    time.`,
  imageLink = "/images/aboutPage/stories.png",
}) => {
  return (
    <PublicPageContainer
      className="py-[60px]"
      gradientDirection="340deg"
      gradientColors={["#c7e8f2", "#EDE7F4", "#c7e8f2"]}
    >
      <div className="flex flex-col xmd:flex-row items-center gap-[40px] sm:gap-[50px] lg:gap-[110px]">
        {/* Image Section */}
        <div className="flex-[1] order-1 xmd:order-2">
          <img src={imageLink} alt="Our Stories" className="w-full h-auto" />
        </div>

        {/* Text Section */}
        <div className="flex-1 order-2 md:order-1">
          {/* Title */}
          <Heading
            className="xmd:text-left text-center"
            text={title}
          />

          {/* Paragraph 1 */}
          <Paragraph
            className="mb-[12px] lg:w-[80%] xmd:w-[85%] xmd:text-left text-center"
            text={text1}
          />

          {/* Paragraph 2 */}
          <Paragraph
            className="lg:w-[80%] xmd:w-[85%] w-full xmd:text-left text-center"
            text={text2}
          />
        </div>
      </div>
    </PublicPageContainer>
  );
};

export default OurStories;
