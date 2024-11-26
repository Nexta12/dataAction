import BulletPointDot from "@components/bulletPointDot/BulletPointDot";
import ButtonLink from "@components/button/ButtonLink";
import { Carousel } from "@components/carousel/Carousel";
import PublicPageContainer from "@components/container/PublicPageContainer";
import Heading from "@components/heading/Heading";
import Paragraph from "@components/paragraph/Paragraph";
import SmallTitle from "@components/smallTitle/SmallTitle";
import SubHeading from "@components/subHeading/SubHeading";
import { paths } from "@routes/paths";

export const sliderImages = [
  {
    id: 1,
    image: "/slides/slide1.png",
  },
  {
    id: 2,
    image: "/slides/slide2.png",
  },
];

const UpcommingEvents = () => {
  const customSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    adaptiveHeight: true,
  };
  return (


      <div className="flex flex-col lg:flex-row my-16 justify-between gap-8 lg:gap-28">

        <div className="flex-1 flex flex-col items-center lg:block w-full">
        
          <SmallTitle>Live Events</SmallTitle>
          <Heading>Upcoming Events</Heading>
          <div className="w-full p-3 flex justify-center lg:block">
            <div className="w-[530px] rounded-lg flex items-center justify-center">
              <Carousel
                images={sliderImages}
                settings={customSettings}
                className="w-full"
                imagesHeight="250px"
              />
            </div>
          </div>
          <SubHeading>Data Action Taster Sessions - Online</SubHeading>
          <Paragraph>
            Join us in London, TX. Explore our free classes and meet our team.
          </Paragraph>
          <div className="w-[80%] lg:w-[40%] xl:w-[30%]  my-6 mx-auto lg:ml-0">
            <ButtonLink
              to={paths.Register}
              label="Register"
              className=" bg-dark hover:bg-LightBlue"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col lg:items-center bg-danger ">
          <div className="w-[80%] block mx-auto">
    
          <SmallTitle className="hidden lg:block">Overview</SmallTitle>
          <Heading className="text-center text-md">
            Practical Transformative Journey
          </Heading>
          <div className=" block">
            <SubHeading className="py-5">
              Our training programs come with:
            </SubHeading>
            <div className="flex flex-col mb-[15px] gap-3">
              <div className="flex items-center gap-[10px]">
                <BulletPointDot />
                <p>Free CV building & review</p>
              </div>
              <div className="flex items-center gap-[10px]">
                <BulletPointDot />
                <p>
                  Up to 5 standard free project requests, review and feedbacks
                </p>
              </div>
              <div className="flex items-center gap-[10px]">
                <BulletPointDot />
                <p>Interview Preparation</p>
              </div>
              <div className="flex items-center gap-[10px]">
                <BulletPointDot />
                <p>Job Referral</p>
              </div>
              <div className="flex items-center gap-[10px]">
                <BulletPointDot />
                <p>1 Month Post Training Placement</p>
              </div>
            </div>
          </div>
          <div className="w-[80%]  xl:w-[50%]  my-6 ">
            <ButtonLink to={paths.Training} label="Sign Up for Training" />
          </div>
          </div>
        </div>

      </div>
   
  );
};

export default UpcommingEvents;
