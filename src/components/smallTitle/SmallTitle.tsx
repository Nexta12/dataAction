import { HTMLAttributes, ReactNode } from "react";

interface SmallTitleProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  text?: string;
}

const SmallTitle = ({
  children,
  className = "",
  text = "",
}: SmallTitleProps) => {
  return (
    <div
      className={`bg-[#674CEF26] rounded-full text-2xs my-4 px-3 py-2  flex items-center justify-center text-LightBlue font-semibold w-[280px] mx-auto  ${className}`}
    >
      {text || children}
    </div>
  );
};

export default SmallTitle;
