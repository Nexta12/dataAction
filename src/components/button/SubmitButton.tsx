import { HTMLAttributes, ReactNode } from "react";
import { IconType } from "react-icons";

interface SubmitButtonWithProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  label?: string;
  icon?: IconType;
  isLoading?: boolean;
}

export const SubmitButton: React.FC<SubmitButtonWithProps> = ({
  children,
  className = "",
  label = "",
  icon: Icon,
  isLoading = false,
  ...props
}) => (
  <button
    type="submit"
    className={`flex items-center gap-6 text-sm transition-all duration-300 ease-in-out bg-LightBlue rounded-sm p-2 justify-center hover:bg-DeepBlue ${className} ${
      isLoading ? "opacity-70 cursor-not-allowed" : ""
    }`}
    disabled={isLoading}
    {...props}
  >
    {isLoading ? (
      <span className="loader mr-2 animate-spin-fast">...</span>
    ) : (
      <>
        {label || children}
        {Icon && <Icon />}
      </>
    )}
  </button>
);
