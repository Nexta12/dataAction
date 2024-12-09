import BulletPointDot from "@components/bulletPointDot/BulletPointDot";
import Paragraph from "@components/paragraph/Paragraph";

const CorePrinciples = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-md">
      <div className="left">
        <div className="flex items-center gap-[10px] mb-4">
          <BulletPointDot />
          <Paragraph>Integrity</Paragraph>
        </div>

        <div className="flex items-center gap-[10px] mb-4">
          <BulletPointDot />
          <Paragraph>Collaborative Learning</Paragraph>
        </div>
      </div>

      <div className="right">
        <div className="flex items-center gap-[10px] mb-4">
          <BulletPointDot />
          <Paragraph>Excellence</Paragraph>
        </div>

        <div className="flex items-center gap-[10px] mb-4 ">
          <BulletPointDot />
          <Paragraph>Innovation</Paragraph>
        </div>
      </div>
    </div>
  );
};

export default CorePrinciples;
