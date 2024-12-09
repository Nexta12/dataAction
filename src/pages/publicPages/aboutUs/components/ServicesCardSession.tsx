import ServiceCards from "@components/cards/serviceCards";
import PublicPageContainer from "@components/container/PublicPageContainer";
import Heading from "@components/heading/Heading";
import Paragraph from "@components/paragraph/Paragraph";

const ServicesCardSession = () => {
  return (
    <PublicPageContainer
      className="py-[60px]"
      gradientDirection="-45deg"
      gradientColors={["#c7e8f2", "#EDE7F4", "#EDE7F4"]}
    >
      <Heading
        className=" xmd:text-left text-center"
        text="Services Overview"
      />
      <Paragraph
        className="xmd:text-left text-center xmd:mb-[35px] mb-[24px]"
        text="At DataActions, we offer a comprehensive range of training and consultancy services designed to empower individuals and organizations in the tech industry."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-between">
        <ServiceCards
          url="/"
          title="Training"
          text="Our training services equip both individuals and industry teams with in-demand skills across Data Analytics, Power Platform, and App Development. "
          image="/assets/s1.png"
          linkText="Explore Training Programs"
          btnClass="bg-LightBlue w-[60%] text-white rounded-lg py-2 px-3 text-xs mx-auto"
        />

        <ServiceCards
          url="/"
          title="Training"
          text="Our training services equip both individuals and industry teams with in-demand skills across Data Analytics, Power Platform, and App Development. "
          image="/assets/s1.png"
          linkText="Explore Training Programs"
          btnClass="bg-LightBlue w-[60%] text-white rounded-lg py-2 px-3 text-xs mx-auto"
        />

        <ServiceCards
          url="/"
          title="Training"
          text="Our training services equip both individuals and industry teams with in-demand skills across Data Analytics, Power Platform, and App Development. "
          image="/assets/s1.png"
          linkText="Explore Training Programs"
          btnClass="bg-LightBlue w-[60%] text-white rounded-lg py-2 px-3 text-xs mx-auto"
        />
      </div>
    </PublicPageContainer>
  );
};

export default ServicesCardSession;
