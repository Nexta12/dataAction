import AnimatedText from "@components/animatedText/AnimatedText";
import ButtonLink from "@components/button/ButtonLink";
import { scrollUP } from "@components/footer/Footer";
import Paragraph from "@components/paragraph/Paragraph";
import SmallTitle from "@components/smallTitle/SmallTitle";
import { paths } from "@routes/paths";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row gap-4 justify-between items-start ">
      <div className="flex-1 flex flex-col gap-2">
        <SmallTitle className="hidden xl:block !w-fit"> Empowering Careers through Learning, Innovation, and Progress.</SmallTitle>
        <SmallTitle className="xl:hidden"> Empowering Careers</SmallTitle>

        <div className="font-Lexend text-[22px] font-bold lg:text-[40px] xl:text-[68px] leading-[1] lg:tracking-[-4px] text-DeepBlue xxs:my-4 sm:my-2 text-center md:text-left h-12 lg:h-32">
          Journey With Us <AnimatedText />
        </div>

        <Paragraph className="my-3 text-wrap text-black xxs:text-justify text-center lg:text-left">
        Welcome to DataActions, where your vision meets our expertise. We offer top-tier services to meet your unique needs. Whether you're looking to upskill, develop software solutions, or purchase a template dashboard, our team ensures a seamless, exceptional experience. Join us and achieve excellence with DataActions.
        </Paragraph>
        <div className="w-[80%] lg:w-[40%] xl:w-[30%]  my-6 mx-auto lg:ml-0">
          <ButtonLink
            to={paths.Consultation}
            onClick={scrollUP}
            label="Book a consultation"
            className="rounded-xl text-sm"
          />
        </div>
      </div>

      <div className="flex-1 flex animate-zoomIn">
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
