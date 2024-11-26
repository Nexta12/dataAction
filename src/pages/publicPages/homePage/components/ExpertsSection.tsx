import PublicPageContainer from "@components/container/PublicPageContainer";
import Heading from "@components/heading/Heading";
import { ExpertsCards } from "@components/imageCard/ImageCard";
import Paragraph from "@components/paragraph/Paragraph";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const ExpertsSection = () => {
  return (
    <PublicPageContainer gradientDirection="60deg">
      <div className="flex flex-col items-center md:flex-row md:items-end gap-4 justify-center mb-4">
        <div className="flex-1">
          <Heading>Meet Our Experts</Heading>
        </div>
        <div className="flex-1">
          <Paragraph>
            Our team of industry professionals and mentors are here to guide you
            every step of the way in your learning journey.
          </Paragraph>
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-4 items-center justify-between">
        <ExpertsCards
          image="/assets/p1.png"
          name="Arlyne Stefano"
          specialty="Power BI Specialist"
          text="Unlocking data insights for informed business decisions"
          icons={[
            { icon: FaTwitter, link: "#" },
            { icon: FaLinkedinIn, link: "#" },
            { icon: FaInstagram, link: "#" },
          ]}
        />
        <ExpertsCards
          image="/assets/p1.png"
          name="Arlyne Stefano"
          specialty="Power BI Specialist"
          text="Unlocking data insights for informed business decisions"
          icons={[
            { icon: FaTwitter, link: "#" },
            { icon: FaLinkedinIn, link: "#" },
            { icon: FaInstagram, link: "#" },
          ]}
        />
        <ExpertsCards
          image="/assets/p3.png"
          name="Arlyne Stefano"
          specialty="Power BI Specialist"
          text="Unlocking data insights for informed business decisions"
          icons={[
            { icon: FaTwitter, link: "#" },
            { icon: FaLinkedinIn, link: "#" },
            { icon: FaInstagram, link: "#" },
          ]}
        />
        <ExpertsCards
          image="/assets/p4.png"
          name="Arlyne Stefano"
          specialty="Power BI Specialist"
          text="Unlocking data insights for informed business decisions"
          icons={[
            { icon: FaTwitter, link: "#" },
            { icon: FaLinkedinIn, link: "#" },
            { icon: FaInstagram, link: "#" },
          ]}
        />
      </div>
    </PublicPageContainer>
  );
};

export default ExpertsSection;
