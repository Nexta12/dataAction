import TestimonialCards from "@components/cards/TestimonialCard";
import PublicPageContainer from "@components/container/PublicPageContainer";
import Heading from "@components/heading/Heading";
import Paragraph from "@components/paragraph/Paragraph";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = [
  {
    id: 1,
    text: "Dive into the world of technol comprehensive courses in programming web development data science, and more Learn to code, build applications, and harness power",
    author: "Fola Thomas",
    specialty: "IT Consultant",
  },
  {
    id: 2,
    text: "Dive into the world of technol comprehensive courses in programming web development data science, and more Learn to code, build applications, and harness power",
    author: "Fola Thomas",
    specialty: "IT Consultant",
  },
  {
    id: 3,
    text: "Dive into the world of technol comprehensive courses in programming web development data science, and more Learn to code, build applications, and harness power",
    author: "Fola Thomas",
    specialty: "IT Consultant",
  },
  {
    id: 4,
    text: "Dive into the world of technol comprehensive courses in programming web development data science, and more Learn to code, build applications, and harness power",
    author: "Fola Thomas",
    specialty: "IT Consultant",
  },
  {
    id: 5,
    text: "Dive into the world of technol comprehensive courses in programming web development data science, and more Learn to code, build applications, and harness power",
    author: "Fola Thomas",
    specialty: "IT Consultant",
  },
  {
    id: 6,
    text: "Dive into the world of technol comprehensive courses in programming web development data science, and more Learn to code, build applications, and harness power",
    author: "Fola Thomas",
    specialty: "IT Consultant",
  },
  {
    id: 7,
    text: "Dive into the world of technol comprehensive courses in programming web development data science, and more Learn to code, build applications, and harness power",
    author: "Fola Thomas",
    specialty: "IT Consultant",
  },
];

const TestimonialSection = () => {
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
          slidesToShow: 2,
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
      <Heading className=" xmd:text-left text-center" text="Testimonials" />
      <Paragraph
        className=" xmd:text-left text-center xmd:mb-[35px] mb-[24px]"
        text="See what our clients say about us. Genuine testimonials from satisified clients."
      />
      <div className="">
        <Slider {...settings}>
          {Testimonials.map((item) => (
            <TestimonialCards
              key={item.id}
              text={item.text}
              author={item.author}
              specialty={item.specialty}
            />
          ))}
        </Slider>
      </div>
    </PublicPageContainer>
  );
};

export default TestimonialSection;
