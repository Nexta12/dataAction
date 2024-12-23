import Heading from "@components/heading/Heading";
import { ExpertsCards } from "@components/imageCard/ImageCard";
import Paragraph from "@components/paragraph/Paragraph";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { expertsData } from "../../../../../dummyData";

const ExpertsSection = () => {
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
    <div className="">
      <div className="flex flex-col items-center md:flex-row md:items-end gap-4 justify-center mb-4">
        <div className="flex-1">
          <Heading>Meet Our Experts And Mentors</Heading>
        </div>
        <div className="flex-1">
          <Paragraph>
            Our team of industry professionals and mentors are here to guide you
            every step of the way in your learning journey.
          </Paragraph>
        </div>
      </div>
      <div className="">
        <Slider {...settings}>
          {expertsData.map((item) => (
            <ExpertsCards
              key={item.id}
              image={item.image}
              name={item.name}
              specialty={item.specialty}
              text={item.text}
              icons={[
                { icon: FaTwitter, link: "#" },
                { icon: FaLinkedinIn, link: "#" },
                { icon: FaInstagram, link: "#" },
              ]}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ExpertsSection;
