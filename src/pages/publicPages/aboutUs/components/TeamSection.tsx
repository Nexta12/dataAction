import PublicPageContainer from "@components/container/PublicPageContainer";
import Heading from "@components/heading/Heading";
import { ExpertsCards } from "@components/imageCard/ImageCard";
import Paragraph from "@components/paragraph/Paragraph";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { expertsData } from "../../../../../dummyData";
import Slider from "react-slick";

const TeamSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 912,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <PublicPageContainer
      className="py-[60px]"
      gradientDirection="45deg"
      gradientColors={["#c7e8f2", "#EDE7F4", "#EDE7F4"]}
    >
      <Heading
        className=" xmd:text-left text-center"
        text="Team Introduction"
      />
      <Paragraph
        className=" xmd:text-left text-center xmd:mb-[35px] mb-[24px]"
        text="Meet the team behind DataActions — a group of dedicated professionals passionate about empowering individuals and organizations through technology."
      />
      <div className="w-full items-center justify-between">
        <Slider {...settings}>
          {expertsData.map((item) => (
            <ExpertsCards
              image={item.image}
              name={item.name}
              specialty={item.specialty}
              icons={[
                { icon: FaTwitter, link: "#" },
                { icon: FaLinkedinIn, link: "#" },
                { icon: FaInstagram, link: "#" },
              ]}
              className="lg:w-[32%]"
            />
          ))}
        </Slider>
      </div>
    </PublicPageContainer>
  );
};

export default TeamSection;
