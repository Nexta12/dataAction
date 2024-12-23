import ServiceCards from "@components/cards/serviceCards";
import { scrollUP } from "@components/footer/Footer";
import Heading from "@components/heading/Heading";
import Paragraph from "@components/paragraph/Paragraph";
import SmallTitle from "@components/smallTitle/SmallTitle";
import { paths } from "@routes/paths";

const ServicesSection = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center md:flex-row md:items-end gap-4 justify-center mb-4">
        <div className="flex-1">
          <Heading>Our Services</Heading>
        </div>
        <div className="flex-1">
          <SmallTitle>Featured Services</SmallTitle>
          <Paragraph>
            Looking to enhance your skills or seek career guidance, we provide
            tailored solutions to suit your unique needs
          </Paragraph>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-between">
        <ServiceCards
          title="Training"
          url={paths.Training}
          linkText="Learn More"
          onClick={()=>scrollUP}
        >
          Elevate your career with our tailored training programs. Develop essential workplace skills that align with your goals, and unlock your full potential.
        </ServiceCards>

        <ServiceCards
          title="Consultation"
          url={paths.Consultation}
          linkText="Learn More"
        >
          Our consultants can help with CV building, interview prep, dashboards, web apps, and mobile apps. Partner with us for tailored solutions to drive your success.
        </ServiceCards>

        <ServiceCards
          title="Data Projects"
          url={paths.Marketplace}
          linkText="Learn More"
          onClick={scrollUP}
        >
       You can address a business problem by requesting a business requirement and dataset. This allows you to work on data projects and enhance your portfolio.
        </ServiceCards>
      </div>
    </div>
  );
};

export default ServicesSection;
