import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface DashboardCardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  count?: string;
  text?: string;
  link?: string;
}

const Cards = ({ title, count, text, link }: DashboardCardProps) => {
  return (
    <div className="bg-[#FFF1ED] border-l border-danger p-3">
      <div className=" flex flex-col items-start text-danger">
        <p className="font-semibold">{title}</p>
        <span className="text-xs">{text}</span>
      </div>
      <div className="Middle w-full text-center text-3xl font-bold">
        {count || 0}
      </div>
      {link && (
        <div className="botom text-right text-xs text-danger">
          <Link to={link || "#"}>View More &gt;&gt; </Link>
        </div>
      )}
    </div>
  );
};

export default Cards;
