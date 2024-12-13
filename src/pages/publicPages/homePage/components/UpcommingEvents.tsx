import ButtonLink from "@components/button/ButtonLink";
import Heading from "@components/heading/Heading";
import Paragraph from "@components/paragraph/Paragraph";
import SubHeading from "@components/subHeading/SubHeading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Events = [
  {
    id: 1,
    image: "/assets/computer.png",
    title: "Data Action Taster Sessions - Online",
    text: "Join us in London, TX. Explore our free classes and meet our team.",
    link: "/register",
  },
  {
    id: 2,
    image: "/slides/slide1.png",
    title: "Live Node.js Training - Online",
    text: "Join us in London, TX. Explore our free classes and meet our team.",
    link: "/register",
  },
  {
    id: 3,
    image: "/slides/slide2.png",
    title: "Data Analytics Interactive session",
    text: "Join us in London, TX. Explore our free classes and meet our team.",
    link: "/register",
  },
];

const UpcommingEvents = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    // autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    // vertical: true,
    cssEase: "linear",
    pauseOnHover: true,
    // arrows: false,
  };

  return (
    <div className="flex flex-col mlg:flex-row items-start justify-between gap-20 xl:gap-60">
      <div className="flex-1">
        <Heading className="text-center mb-8">Upcoming Events</Heading>
        <div className=" w-[310px] xs:w-full mlg:w-[410px]  p-3 mx-auto">
          <Slider {...settings}>
            {Events.map((event, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 justify-center items-center"
              >
                <img
                  src={event.image}
                  alt="Image"
                  className="w-full h-[180px] md:h-[220px] xl:h-[180px] object-cover rounded-2xl"
                />
                <SubHeading>{event.title}</SubHeading>
                <Paragraph>{event.text}</Paragraph>
                <ButtonLink
                  to={event.link}
                  label="Register"
                  className=" bg-dark hover:bg-LightBlue w-[250px] my-6"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default UpcommingEvents;
