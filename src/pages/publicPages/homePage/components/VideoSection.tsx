import PublicPageContainer from "@components/container/PublicPageContainer";
import Heading from "@components/heading/Heading";
import Paragraph from "@components/paragraph/Paragraph";

const VideoSection = () => {
  return (
    <PublicPageContainer gradientDirection="-45deg">
      <div className="w-full">
        <video controls preload="" width="100%">
          <source src="/example.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between my-4 text-center md:text-left">
          <div className="lef">
             <Heading>What you 
             should expect</Heading>
          </div>
          <div className="right">
            <Paragraph>At DataActions, we carry out real life-scenario training and work experience opportunities for students to help in building project portfolios.</Paragraph>
          </div>
        </div>
      </div>
    </PublicPageContainer>
  );
};

export default VideoSection;
