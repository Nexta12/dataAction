import { HTMLAttributes } from "react";

interface Heading extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}
const BulletPointDot = ({ className, ...props }: Heading) => {
  return (
    <div
      className={`w-[10px] h-[10px] bg-DeepBlue rounded-[100px] ${className}`}
      {...props}
    />
  );
};

export default BulletPointDot;
