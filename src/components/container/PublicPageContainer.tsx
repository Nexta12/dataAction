import React, { HTMLAttributes, ReactNode } from "react";

interface PublicPageContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  gradientDirection?: string;
  gradientColors?: string[];
}

const PublicPageContainer: React.FC<PublicPageContainerProps> = ({
  children,
  className = "",
  gradientDirection = "-20deg",
  gradientColors = ["#c7e8f2", "#EDE7F4 20%", "#c7e8f2"],
  ...props
}) => {
  // Calculate equal spacing based on the number of colors
  const colorStops = gradientColors
    .map(
      (color, index) =>
        `${color} ${(index / (gradientColors.length - 1)) * 100}%`,
    )
    .join(", ");

  const background = `linear-gradient(${gradientDirection}, ${colorStops})`;

  return (
    <div
      className={`py-[50px] px-[30px] lg:px-[100px] ${className}`}
      style={{ background }}
      {...props}
    >
      {children}
    </div>
  );
};

export default PublicPageContainer;
