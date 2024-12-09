import PublicPageContainer from "@components/container/PublicPageContainer";
import Heading from "@components/heading/Heading";
import Paragraph from "@components/paragraph/Paragraph";

const Header = () => {
  return (
    <PublicPageContainer
      className=""
      gradientDirection="45deg"
      gradientColors={["#c7e8f2", "#EDE7F4", "#EDE7F4"]}
      // gradientPositions={['0%', '60%', '100%']}
    >
      <div className="flex flex-col xmd:flex-row items-center gap-[40px] sm:gap-[50px] lg:gap-[110px]">
        <div className="flex-[1] order-1 xmd:order-2">
          <img src="/images/aboutPage/header.png" alt="about data action" />
        </div>

        <div className="flex-1 order-2 md:order-1">
          <Heading
            className="xmd:text-left text-center"
            text="About DataAction"
          />

          <Paragraph
            className="xmd:text-left text-center xmd:mb-[35px] mb-[24px]"
            text="Your Partner in Tech Success"
          />

          <Paragraph
            className="xmd:text-left text-center lg:w-[80%] xmd:w-[85%] w-full"
            text="DataActions provides tech training and consultation for individuals and companies,
            equipping them with skills for real-world success. Our courses cover in-demand areas to
            help individuals land their dream jobs, while our consulting services support you in
            leveraging data-driven solutions. With a focus on practical expertise and career
            readiness, we empower growth at every level."
          />
        </div>
      </div>
    </PublicPageContainer>
  );
};

export default Header;
