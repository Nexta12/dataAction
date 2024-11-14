import BulletPointDot from '@components/bulletPointDot/BulletPointDot';
import PublicPageContainer from '@components/container/PublicPageContainer';
import Heading from '@components/heading/Heading';
import Paragraph from '@components/paragraph/Paragraph';
import CorePrinciples from './CorePrinciples';

const VisionAndMission = () => {
  return (
    <PublicPageContainer
      className="py-[60px]"
      gradientDirection="45deg"
      gradientColors={['#c7e8f2', '#EDE7F4', '#EDE7F4']}
      gradientPositions={['20%', '60%', '100%']}
    >
      <div className="flex flex-col xmd:flex-row items-center gap-[40px] sm:gap-[50px] lg:gap-[180px]">
        <div className="flex-[1] order-1 xmd:order-1 hidden xmd:block">
          <img src="/images/aboutPage/vision.png" alt="about data action" />
        </div>

        <div className="flex-[1] order-2 md:order-1">
          <Heading
            className="xmd:text-[35px] text-xlg xmd:text-left text-center"
            text="Vision and Mission"
          />

          <Paragraph className="mb-[12px]  xmd:text-left text-center">
            <span className="text-DeepBlue">Mission:</span> Our mission is to transform lives by
            providing exceptional training programs for individuals and companies to  empower them
            with the skills toward successful careers in tech. 
          </Paragraph>
          <Paragraph className=" w-full xmd:text-left text-center">
            <span className="text-DeepBlue">Vision:</span> Our vision is to create an environment
            where learning drives positive change, fostering a culture of growth and
            opportunity for all. 
          </Paragraph>

          <Heading
            className="xmd:text-[35px] text-xlg xmd:text-left text-center mt-[30px]"
            text="Core Principles"
          />

          <CorePrinciples />
        </div>
      </div>
    </PublicPageContainer>
  );
};

export default VisionAndMission;
