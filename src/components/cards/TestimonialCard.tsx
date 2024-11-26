import Paragraph from "@components/paragraph/Paragraph";
import SubHeading from "@components/subHeading/SubHeading";
import { HTMLAttributes } from "react";

interface TestimonialCardProps extends HTMLAttributes<HTMLDivElement> {
  author?: string;
  text?: string;
  image?: string;
  specialty?: string;
}

const TestimonialCards = ({
  text,
  image,
  specialty,
  author,
  ...props
}: TestimonialCardProps) => {
  return (
    <div className="bg-transparentWhite p-4 w-[340px] rounded-xl" {...props}>
      <Paragraph className="text-sm">{text}</Paragraph>
      <div className="mt-3 flex items-center gap-4">
        <img src={image || "/assets/p1.png"} alt="author" className="w-8 h-8 rounded-full object-cover block" />
        <div className="">
          <SubHeading>{author}</SubHeading>
          <Paragraph className="mt-[-5px]">{specialty}</Paragraph>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
