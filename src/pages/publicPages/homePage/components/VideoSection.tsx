import Heading from "@components/heading/Heading";
import Paragraph from "@components/paragraph/Paragraph";

const VideoSection = () => {
  return (
    <div className="w-full  xl:px-18 ">
      <div className="mx-auto">
        <video controls preload="" width="100%" className=" xl:h-[560px]">
          <source src="/example.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="flex flex-col md:flex-row items-center gap-4 justify-between my-4 text-center md:text-left">
          <div className="lef flex-1">
            <Heading className="xmd:text-[25px] text-xlg xmd:text-left text-center">
              What you should expect
            </Heading>
          </div>
          <div className="right flex-1">
            <Paragraph className="mb-[12px] lg:w-[80%] xmd:w-[85%] xmd:text-left text-center text-md">
              At DataActions, we carry out real life-scenario training and work
              experience opportunities for students to help in building project
              portfolios.
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
