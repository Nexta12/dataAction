import BulletPointDot from "@components/bulletPointDot/BulletPointDot";

const CorePrinciples = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-[15px]">
        <div className="flex items-center gap-[10px]">
          <BulletPointDot />
          <p>Integrity</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <BulletPointDot />
          <p>Collaborative Learning</p>
        </div>
      </div>
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-[10px]">
          <BulletPointDot />
          <p>Excellence</p>
        </div>
        <div className="flex items-center gap-[10px]  ">
          <BulletPointDot />
          <p>Innovation</p>
        </div>
      </div>
    </div>
  );
};

export default CorePrinciples;
