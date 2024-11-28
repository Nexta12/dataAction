import { useState } from "react";
import { BiArrowBack, BiPlus } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

interface AccordionItem {
  question: string;
  answer: string;
  linkText?: string;
  linkUrl?: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-2">
      {items?.map((item, index) => (
        <div key={index}>
          <div className="flex items-center justify-between p-4 bg-white">
            {/* question */}
            <div className="text-sm">{item.question}</div>
            <button onClick={() => handleAccordion(index)}>
              <div className=" w-8 h-8 rounded-sm flex items-center justify-center bg-lightgray cursor-pointer">
                {activeIndex === index ? <IoMdClose /> : <BiPlus />}
              </div>
            </button>
            {/* answer */}
          </div>
          <div
            className={`bg-white overflow-hidden p-4 transition-[max-height] duration-500 ease-in-out ${
              activeIndex === index
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0 hidden"
            }`}
          >
            <div className=" text-sm mb-3">{item.answer}</div>

            <div className="flex items-center justify-between bg-lightgray p-4 rounded-lg text-sm">
              <div className="text-sm">
                {item.linkText && item.linkUrl && (
                  <a
                    href={item.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm"
                  >
                    {item.linkText}
                  </a>
                )}
              </div>
              <button onClick={() => handleAccordion(index)}>
                <div className=" w-8 h-8 rounded-full flex items-center justify-center bg-white cursor-pointer">
                  <BiArrowBack className="rotate-180" />
                </div>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
