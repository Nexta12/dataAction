import { HTMLAttributes, ReactNode } from "react";

interface Heading extends HTMLAttributes<HTMLDivElement> {
  text?: ReactNode;
  className?: string;
  children?: ReactNode;
}
const Paragraph = ({ text, className, children, ...props }: Heading) => {
  return (
    <div
      className={`text-md leading-6 poppins font-[400] ${className}`}
      {...props}
    >
      {text ? text : children}
    </div>
  );
};

export default Paragraph;
