import { HTMLAttributes, ReactNode } from "react";
import { IconType } from "react-icons";

interface SubmitButtonWithProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  label?: string;
  icon?: IconType;
  isLoading?: boolean;
  cost?: string | number;
}

export const SubmitButton: React.FC<SubmitButtonWithProps> = ({
  children,
  className = "",
  label = "",
  icon: Icon,
  isLoading = false,
  cost,
  ...props
}) => {
  // Determine the button's display label
  const displayLabel = cost ? `Pay £${cost}` : label || children;

  return (
    <button
      type="submit"
      className={`flex items-center gap-6 text-md transition-all duration-300 ease-in-out bg-LightBlue rounded-sm p-2 justify-center hover:bg-DeepBlue text-white ${className} ${
        isLoading ? "opacity-70 cursor-not-allowed" : ""
      }`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="loader mr-2 animate-spin-fast">...</span>
      ) : (
        <>
          {displayLabel}
          {Icon && <Icon />}
        </>
      )}
    </button>
  );
};
