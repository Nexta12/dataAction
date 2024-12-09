import { HTMLAttributes, ReactNode } from "react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface ButtonWithLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
  className?: string;
  label?: string;
  to: string;
  icon?: IconType;
}

export const ButtonLink: React.FC<ButtonWithLinkProps> = ({
  className = "",
  label = "",
  to,
  icon: Icon,
  ...props
}) => (
  <Link
    to={to}
    className={`bg-LightBlue text-white py-[10px]  px-[14px] rounded-lg text-sm  flex items-center justify-center w-full transition-all duration-300 ease-in-out hover:bg-DeepBlue ${className}`}
    {...props}
  >
    {label} {Icon && <Icon />}
  </Link>
);

export default ButtonLink;
