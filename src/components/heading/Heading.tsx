import { HTMLAttributes, ReactNode } from "react";

interface Heading extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  text?: ReactNode;
  className?: string;
}
const Heading = ({ text, className, children, ...props }: Heading) => {
  return (
    <div
      className={`text-[30px] mb-[16px] text-DeepBlue font-[400] ${className}`}
      {...props}
    >
      {text || children}
    </div>
  );
};

export default Heading;
