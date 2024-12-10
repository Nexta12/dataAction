import  { useState, useEffect } from "react";
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
  count = "100",
  text,
  countClassName,
  textClassName,
}: WhyUsBoxesProps) => {
  const targetCount = parseInt(count, 10); // Convert count to number
  const [currentCount, setCurrentCount] = useState(1);

  useEffect(() => {
    if (currentCount < targetCount) {
      const interval = setInterval(() => {
        setCurrentCount((prev) => {
          if (prev < targetCount) {
            return prev + 1; // Increment count by 1
          } else {
            clearInterval(interval); // Stop the interval when target is reached
            return prev;
          }
        });
      }, 10); // Adjust the speed of counting (milliseconds)
      
      return () => clearInterval(interval); // Cleanup the interval on component unmount
    }
  }, [currentCount, targetCount]);

  return (
    <div className="bg-transparentWhite p-6 rounded-3xl flex flex-col justify-center items-center text-center aspect-square w-40 h-40">
      <Heading className={countClassName}>{currentCount}+</Heading>
      <Paragraph className={textClassName}>{text}</Paragraph>
    </div>
  );
};

export default WhyUsBoxes;
