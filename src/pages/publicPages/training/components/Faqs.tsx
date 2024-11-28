import Accordion from "@components/accordion/accordion";
import PublicPageContainer from "@components/container/PublicPageContainer";
import Heading from "@components/heading/Heading";
import Paragraph from "@components/paragraph/Paragraph";

export const AccordionData = [
  {
    question: "What kind of support can I expect from instructors?",
    answer:
      "You can expect personalized support from instructors via chat and live sessions.",
    linkText: "Learn more about support",
    linkUrl: "https://example.com/support",
  },
  {
    question: "How long do I have access to the course?",
    answer:
      "You will have lifetime access to the course materials after enrollment.",
  },
  {
    question: "Can I get a refund if I’m not satisfied?",
    answer: "Yes, there is a 30-day money-back guarantee for all our courses.",
    linkText: "View refund policy",
    linkUrl: "https://example.com/refund",
  },
];

const Faqs = () => {
  return (
    <PublicPageContainer gradientDirection="60deg" className="py-[60px]">
      <div className="flex flex-col md:flex-row items-start gap-4">
        <div className="left flex-1">
          <Heading className="text-md xmd:text-[35px] text-xlg xmd:text-left text-center">
            Frequently Asked Questions
          </Heading>
          <Paragraph
            className="mb-[12px] lg:w-[80%] xmd:w-[85%] xmd:text-left text-center"
            text="Got questions? Our FAQ answers common inquiries on training, scholarships, and support, guiding you from enrollment to career success."
          />
          <Paragraph
            className="mb-[12px] lg:w-[80%] xmd:w-[85%] xmd:text-left text-center"
            text={`For more help, visit our contact page`}
          />
        </div>
        <div className="right flex-1">
          <Accordion items={AccordionData} />
        </div>
      </div>
    </PublicPageContainer>
  );
};

export default Faqs;
