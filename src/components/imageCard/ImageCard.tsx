import Paragraph from "@components/paragraph/Paragraph";
import SubHeading from "@components/subHeading/SubHeading";
import { HTMLAttributes } from "react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface ArticleCardProps extends HTMLAttributes<HTMLDivElement> {
  image?: string;
  title?: string;
  publishDate?: string;
  author?: string;
  text?: string;
  link?: string;
  imageClass?: string;
  textClass?: string;
  clasName?: string;
}

interface IconLink {
  icon: IconType;
  link: string;
}

interface ExpertsCardProps extends HTMLAttributes<HTMLDivElement> {
  image?: string;
  name?: string;
  className?: string;
  specialty?: string;
  text?: string;
  icons?: IconLink[];
  imageClass?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  title,
  text,
  publishDate,
  author,
  link,
  imageClass,
  textClass,
  clasName,
  ...props
}) => {
  return (
    <Link to={link || "#"} className={`w-full  ${clasName}`}>
      <div {...props} className="bg-white/75 shadow-sm p-3 rounded-md">
        {image && (
          <div className="w-full">
            <img
              src={image}
              alt={title || "Image"}
              className={`w-full object-cover block ${imageClass}`}
            />
          </div>
        )}
        <SubHeading className="my-4 w-full text-center text-md">
          {title}
        </SubHeading>
        <div className="w-full flex justify-between items-center gap-4 my-2 text-[10px]">
          <div> {publishDate}</div>
          <div>{author}</div>
        </div>

        <Paragraph className={`${textClass}`}>{text}</Paragraph>
      </div>
    </Link>
  );
};

export const ExpertsCards: React.FC<ExpertsCardProps> = ({
  image,
  className,
  specialty,
  name,
  text,
  icons = [],
  ...props
}) => {
  return (
    <div
      {...props}
      className={`w-full md:w-[48%] xmd:w-[22%] lg:w-[20%] mb-6 ${className}`}
    >
      {image && (
        <div className="w-full">
          <img
            src={image}
            alt={name || "Image"}
            className="w-full h-[400px] object-cover block"
          />
        </div>
      )}

      <div className="w-full flex justify-between items-center my-2">
        <SubHeading>{name}</SubHeading>
        <div className="flex gap-2">
          {icons.map(({ icon: Icon, link }, index) => (
            <Link
              to={link || "#"}
              key={index}
              className="w-[30px] h-[30px] rounded-full bg-dark/15 text-dark flex items-center justify-center transition-all duration-200 ease-in-out p-1 hover:text-white hover:bg-dark"
              target="_blanck"
            >
              <Icon />
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full text-2xs">
        <Paragraph>{specialty}</Paragraph>
        <Paragraph>{text}</Paragraph>
      </div>
    </div>
  );
};
