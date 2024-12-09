import PublicPageContainer from "@components/container/PublicPageContainer";
import Heading from "@components/heading/Heading";
import Paragraph from "@components/paragraph/Paragraph";

const SocialImpact = () => {
  return (
    <PublicPageContainer
      className="py-[60px]"
      gradientDirection="-45deg"
      gradientColors={["#c7e8f2", "#EDE7F4", "#EDE7F4"]}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <img
            src="/assets/impact.png"
            alt="social"
            className=" w-full xl:w-[70%] h-[50%]"
          />
        </div>
        <div className="flex-1">
          <Heading
            className=" xmd:text-left text-center"
            text="Social Impact"
          />
          <Paragraph
            className=" xmd:text-left text-center xmd:mb-[35px] mb-[24px]"
            text="At DataActions, we’re committed to fostering a strong sense of community and driving positive change. We believe in the transformative power of education and are dedicated to giving back through impactful initiatives aimed at underrepresented groups, especially within the tech industry."
          />
          <Paragraph
            className=" xmd:text-left text-center xmd:mb-[35px] mb-[24px]"
            text="   Our social impact efforts focus on creating opportunities through accessible training and valuable resources that open doors to meaningful careers. We aim to empower individuals, equipping them with the skills and confidence needed to thrive in a technology-driven world."
          />
          <Paragraph
            className=" xmd:text-left text-center xmd:mb-[35px] mb-[24px]"
            text="   By partnering with organizations, we’re helping to bridge the skills gap and build an inclusive, supportive environment in tech. Together, we’re creating pathways that connect individuals to rewarding roles and contribute to a more diverse and innovative workforce."
          />
        </div>
      </div>
    </PublicPageContainer>
  );
};

export default SocialImpact;
