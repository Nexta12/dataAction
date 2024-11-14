import ButtonLink from "@components/button/ButtonLink";
import PublicPageContainer from "@components/container/PublicPageContainer";
import { paths } from "@routes/paths";
import { FaCircle } from "react-icons/fa";

const Homepage = () => {
  return (
    <PublicPageContainer gradientDirection="45deg" className="py-[50px]">
      <div className="w-full flex flex-col-reverse md:flex-row gap-4 justify-between">

        <div className="flex-1">
          <div className="bg-skyBlue/20 rounded-full text-2xs my-3 px-3 py-2 md:w-[36%] flex items-center justify-center text-LightBlue font-semibold">
            Through Expert Online Training
          </div>

          <p className="font-Lexend text-xs lg:text-[80px] leading-[1] tracking-[-4px] text-DeepBlue my-2">
            Journey With Us & Accelerate your success
          </p>

          <p className="text-xs font-Poppins my-3 text-wrap text-black">
            Welcome to <span className="font-semibold">Data Actions</span> –
            Your pathway to Data Mastery. Our wide range of services is designed
            to transform your learning experience, offering customized solutions
            for businesses and individuals. Unlock endless possibilities as we
            leverage data to fuel success, innovation and growth.
          </p>
          <div className="w-[30%] my-6">
            <ButtonLink to={paths.Consultation} label="Book a consultation" />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-items-end">
          {/* Top Images */}
          <div className="flex justify-between lg:justify-around items-start relative">

            <div className="bg-white rounded-2xl py-2 px-4 lg:py-4 lg:px-6  flex items-center gap-4 lg:ml-20 ">
              <div className="flex ">
                <img
                  src="/assets/circle.png"
                  alt="circle"
                  className="w-7 h-7  object-cover"
                />
                <img
                  src="/assets/circle.png"
                  alt="circle"
                  className="w-7 h-7 ml-[-10px] object-cover"
                />
                <img
                  src="/assets/circle.png"
                  alt="circle"
                  className="w-7 h-7 ml-[-10px] object-cover"
                />
                <FaCircle className="w-7 h-7 ml-[-10px] object-cover text-LightBlue" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold font-Lexend">78K</span>
                <span className="text-2xs">Reviews</span>
              </div>
            </div>

            <div className="boxTwo">
              <img
                src="/assets/box2Image.png"
                alt="box2"
                className=" w-16 h-16 lg:w-24 lg:h-24 absolute right-8 top-[22px]"
              />
            </div>

          </div>

          {/* Middle Big Image */}
          <div className="w-full flex justify-center lg:justify-end mt-[-20px]">
            <img
              src="/assets/midImage.png"
              alt="midBox"
              className="w-[250px] lg:w-[300px] lg:mr-10 "
            />
          </div>
          {/* Bottom small imag */}
          <div className=" relative">
            <img
              src="/assets/box3.png"
              alt="box3"
              className="w-16 h-16 lg:w-24 lg:h-24 absolute right-[200px] bottom-[-26px] lg:right-[253px] lg:bottom-[-36px] "
            />
          </div>
        </div>

      </div>
    </PublicPageContainer>
  );
};

export default Homepage;
