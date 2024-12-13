import Paragraph from "@components/paragraph/Paragraph";
import { Link } from "react-router-dom";

export interface CallToActionProps {
  text?: string;
  linkText?: string;
  link?: string;
  className?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  text,
  linkText,
  link,
  className,
}) => {
  return (
    <div
      className={` px-4 py-6 xl:py-12 bg-transparentWhite flex flex-col gap-4 md:flex-row items-center rounded  ${className}`}
    >
      <div className="flex-[3]">
        {text && <Paragraph className="text-md">{text}</Paragraph>}
      </div>
      <div className="flex-1">
        {linkText && (
          <Link
            to={link || "#"}
            className="bg-LightBlue text-white py-2 px-3 text-sm rounded text-center hover:bg-DeepBlue block ml-auto"
          >
            {linkText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default CallToAction;
