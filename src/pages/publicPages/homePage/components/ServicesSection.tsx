import ServiceCards from "@components/cards/serviceCards";
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
        >
          We are dedicated to helping you achieve your goals through top-tier
          training programs and expert consulting services.
        </ServiceCards>

        <ServiceCards
          title="Consultation"
          url={paths.Consultation}
          linkText="Learn More"
        >
          Visualize your success. Our experts create interactive dashboards that
          offer real-time insights, allowing you to monitor key metrics & make
          data-driven decisions at a glance
        </ServiceCards>

        <ServiceCards
          title="Dashboard Marketplace"
          url={paths.Marketplace}
          linkText="Learn More"
        >
          Unlock the power of data storytelling with Power BI. Learn how to
          create interactive dashboards and insightful reports that drive
          business decisions.
        </ServiceCards>
      </div>
    </div>
  );
};

export default ServicesSection;
