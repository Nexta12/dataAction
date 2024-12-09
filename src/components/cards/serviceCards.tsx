import Paragraph from "@components/paragraph/Paragraph";
import SubHeading from "@components/subHeading/SubHeading";
import { HTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

interface ConsultCardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  title?: string;
  text?: string;
  url?: string;
  image?: string;
  btnClass?: string;
  linkText?: string;
}

const ServiceCards = ({
  title,
  text,
  children,
  url,
  image,
  btnClass,
  linkText,
}: ConsultCardProps) => {
  return (
    <div className="bg-transparentWhite p-4 rounded-xl w-full text-center flex flex-col gap-3 justify-between border-2 border-white">

      <div className="w-full h-44 bg-white rounded-xl">
        {image && (
          <img
            src={image}
            alt="image"
            className="w-full  object-cover block rounded-lg h-64"
          />
        )}{" "}
      </div>

      <SubHeading className="text-[24px]">{title}</SubHeading>

      <Paragraph>{text || children}</Paragraph>

      <Link to={url || "#"} className={btnClass}>
        {linkText}
      </Link>
    </div>
  );
};

export default ServiceCards;
