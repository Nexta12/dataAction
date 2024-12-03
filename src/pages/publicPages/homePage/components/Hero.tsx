import ButtonLink from "@components/button/ButtonLink";
import Paragraph from "@components/paragraph/Paragraph";
import SmallTitle from "@components/smallTitle/SmallTitle";
import { paths } from "@routes/paths";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row gap-4 justify-between ">
      <div className="flex-1 flex flex-col gap-2">
        <SmallTitle className=" lg:!ml-0">Through Expert Online Training</SmallTitle>

        <p className="font-Lexend text-[28px] font-[400] lg:text-[40px] xl:text-[68px] leading-[1] lg:tracking-[-4px] text-DeepBlue xxs:my-4 sm:my-2 md:text-left">
          Journey With Us & Accelerate
        </p>

        <Paragraph className="my-3 text-wrap text-black xxs:text-justify lg:text-left text-md">
          Welcome to <span className="font-semibold">Data Actions</span> – Your
          pathway to Data Mastery. Our wide range of services is designed to
          transform your learning experience, offering customized solutions for
          businesses and individuals. Unlock endless possibilities as we
          leverage data to fuel success, innovation and growth.
        </Paragraph>
        <div className="w-[80%] lg:w-[40%] xl:w-[30%]  my-6 mx-auto lg:ml-0">
          <ButtonLink to={paths.Consultation} label="Book a consultation" />
        </div>
      </div>

      <div className="flex-1 flex ">
        <img
          src="/assets/Right.png"
          alt="heroImage"
          className="w-[500px] h-auto block ml-auto "
        />
      </div>
    </div>
  );
};

export default HeroSection;
