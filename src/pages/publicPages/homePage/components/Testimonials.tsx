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
    text: "The training I received was top-notch! The hands-on sessions and real-world projects gave me the confidence to excel in my interview. I landed a fantastic role right after completing the course!",
    author: "Olaolu",
    specialty: "Head of business intelligence",
  },
  {
    id: 2,
    text: "I was struggling to break into the tech industry, but the training and mentorship I received here completely changed my career path.",
    author: "Amina",
    specialty: "Information Analyst",
  },
  {
    id: 3,
    text: "This program didn’t just teach me skills—it prepared me for the workplace. The interview prep sessions were especially helpful.",
    author: "Segun",
    specialty: "Information Governance Officer",
  },
  {
    id: 4,
    text: "I can’t thank the team enough! The structured training, personalized guidance, and focus on real-world scenarios helped me land a job as soon as I finished the course.",
    author: "Kazeem",
    specialty: "Power BI Developer",
  },
  {
    id: 5,
    text: "From resume building to interview coaching, every step of the training was focused on employability. I’m now thriving in a role I once thought was out of reach",
    author: "Marian",
    specialty: "Business Data Analyst",
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
      <div className=" flex  flex-col md:flex-row gap-4 justify-evenly mb-16">
        <div className=" inline-flex place-items-center">
          <Heading className="!text-5xl">What our customers are saying</Heading>
        </div>
        <div className="inline-flex place-items-center">
          <Paragraph>We are trusted to deliver our promises.</Paragraph>
        </div>
      </div>

      <div className="lg:px-64">
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
