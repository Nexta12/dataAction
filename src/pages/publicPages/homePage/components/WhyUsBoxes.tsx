import Heading from "@components/heading/Heading";
import Paragraph from "@components/paragraph/Paragraph";
import { HtmlHTMLAttributes } from "react";

interface WhyUsBoxesProps extends HtmlHTMLAttributes<HTMLDivElement> {
  count?: string;
  text?: string;
  countClassName?: string;
  textClassName?: string;
}

const WhyUsBoxes = ({
  count,
  text,
  countClassName,
  textClassName,
}: WhyUsBoxesProps) => {
  return (
    <div className="bg-transparentWhite p-6 rounded-lg flex flex-col justify-center items-center text-center aspect-square ">
      <Heading className={countClassName}>{count}</Heading>
      <Paragraph className={textClassName}>{text}</Paragraph>
    </div>
  );
};

export default WhyUsBoxes;
