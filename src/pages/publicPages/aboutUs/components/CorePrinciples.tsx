import BulletPointDot from "@components/bulletPointDot/BulletPointDot";

const CorePrinciples = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-md">
      <div className="left">
        <div className="flex items-center gap-[10px] mb-4">
          <BulletPointDot />
          <p>Integrity</p>
        </div>

        <div className="flex items-center gap-[10px] mb-4">
          <BulletPointDot />
          <p>Collaborative Learning</p>
        </div>
      </div>

      <div className="right">
        <div className="flex items-center gap-[10px] mb-4">
          <BulletPointDot />
          <p>Excellence</p>
        </div>

        <div className="flex items-center gap-[10px] mb-4 ">
          <BulletPointDot />
          <p>Innovation</p>
        </div>
      </div>
    </div>
  );
};

export default CorePrinciples;
