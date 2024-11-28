import { HTMLAttributes, ReactNode } from "react";

interface SubHeadingProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  text?: ReactNode;
  className?: string;
}
const SubHeading = ({
  text,
  className,
  children,
  ...props
}: SubHeadingProps) => {
  return (
    <div
      className={`text-sm my-[5px] text-DeepBlue font-bold ${className}`}
      {...props}
    >
      {text || children}
    </div>
  );
};

export default SubHeading;
