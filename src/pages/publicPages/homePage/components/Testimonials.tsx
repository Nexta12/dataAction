import Heading from "@components/heading/Heading";
import Paragraph from "@components/paragraph/Paragraph";
import SubHeading from "@components/subHeading/SubHeading";
import { BiArrowBack } from "react-icons/bi";
import { RiStarSFill } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute -bottom-10 right-20 w-8 h-8 md:w-10 md:h-10 rounded-full p-1 flex items-center justify-center bg-white text-black cursor-pointer z-10"
      onClick={onClick}
    >
      <BiArrowBack />
    </div>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute -bottom-10 right-10 w-8 h-8 md:w-10 md:h-10 rounded-full p-1 flex items-center justify-center bg-dark text-white cursor-pointer"
      onClick={onClick}
    >
      <BiArrowBack className="rotate-180" />
    </div>
  );
}

const TestimonialData = [
  {
    id: 1,
    text: "With Agency the results are very satisfying. wrapped with Hight quality and innovative design that makes a surge of visitors on my website",
    author: "Renne Wells",
    specialty: "Product Designer, Quotient",
  },
  {
    id: 2,
    text: "With Agency the results are very satisfying. wrapped with Hight quality and innovative design that makes a surge of visitors on my website",
    author: "Cheyi Brigs",
    specialty: "Chief Technical Office, BBSB Group",
  },
];

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    speed: 1000,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="">
      <div className=" flex  flex-col md:flex-row gap-4 justify-between mb-16">
        <div className=" inline-flex place-items-center">
          <Heading>What our customers are saying</Heading>
        </div>
        <div className=" inline-flex place-items-center">
          <Paragraph className="text-md">
            We are trusted to deliver our promises.
          </Paragraph>
        </div>
      </div>

      <div className="lg:px-32">
        <Slider {...settings}>
          {TestimonialData.map((item) => (
            <div key={item.id} className=" w-full lg:w-2/4 mx-auto">
              <div className="text-yellow-400 flex items-center text-lg   p-2 max-w-fit mb-2">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <span className="text-xs text-dark font-bold"> 5.0</span>
              </div>
              <div className="my-5">
                <SubHeading>“{item.text}”</SubHeading>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-4">
                  <img
                    src="/assets/p1.png"
                    alt="testimonial"
                    className=" w-10 h-10 md:w-16 md:h-16 rounded-full object-cover block"
                  />
                  <div className="">
                    <SubHeading>{item.author}</SubHeading>
                    <Paragraph>{item.specialty}</Paragraph>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
