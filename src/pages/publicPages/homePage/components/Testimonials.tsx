import PublicPageContainer from "@components/container/PublicPageContainer";
import Heading from "@components/heading/Heading";
import Paragraph from "@components/paragraph/Paragraph";
import SubHeading from "@components/subHeading/SubHeading";
import { BiArrowBack } from "react-icons/bi";
import { BsArrowBarRight } from "react-icons/bs";
import { RiStarSFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <PublicPageContainer gradientDirection="-60deg">
      <div className=" flex  flex-col md:flex-row gap-4 justify-between mb-5">
        <div className=" inline-flex place-items-center">
          <Heading>What our customers are saying</Heading>
        </div>
        <div className=" inline-flex place-items-center">
          <Paragraph className="">
            We are trusted to deliver our promises.
          </Paragraph>
        </div>
      </div>
      <div className=" w-full lg:w-2/4 mx-auto">

        <div className="text-yellow-400 flex items-center text-lg   p-2 max-w-fit mb-2">
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <span className="text-xs text-dark font-bold"> 5.0</span>
        </div>
          <div className="my-5">
          <SubHeading>“With Agency the results are very satisfying. wrapped with Hight quality and innovative design that makes a surge of visitors on my website”</SubHeading>
          </div>
        <div className="flex items-center justify-between mt-6">

          <div className="flex items-center gap-4">
            <img src="/assets/p1.png" alt="testimonial"  className=" w-10 h-10 md:w-16 md:h-16 rounded-full object-cover block"/>
            <div className="">
              <SubHeading>Renne Wells</SubHeading>
              <Paragraph>Product Designer, Quotient</Paragraph>
            </div>
           
          </div>
          <div className="flex items-center gap-1">
              <Link to={"/"} className=" w-8 h-8 md:w-10 md:h-10 rounded-full p-1 flex items-center justify-center  object-cover bg-white text-black">
                {" "}
                <BiArrowBack />
              </Link>
              <Link to={"/"} className=" w-8 h-8 md:w-10 md:h-10 rounded-full p-1 flex items-center justify-center bg-dark object-cover text-white">
              <BiArrowBack className="rotate-180" />
              </Link>
            </div>
        </div>

      </div>
    </PublicPageContainer>
  );
};

export default Testimonials;
