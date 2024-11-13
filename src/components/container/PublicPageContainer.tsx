import React, { HTMLAttributes, ReactNode } from 'react';

interface PublicPageContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  gradientDirection?: string;
  gradientColors?: string[];
  gradientPositions?: string[];
}

const PublicPageContainer: React.FC<PublicPageContainerProps> = ({
  children,
  className = '',
  gradientDirection = '45deg',
  gradientColors = ['#c7e8f2', '#EDE7F4', '#EDE7F4'],
  gradientPositions = ['0%', '70%', '100%'],
  ...props
}) => {
  const background = `linear-gradient(${gradientDirection}, ${gradientColors
    .map((color, index) => `${color} ${gradientPositions[index] || ''}`)
    .join(', ')})`;

  return (
    <div
      className={`md:px-[40px] mlg:px-[80px] px-[20px] py-[20px] bg-gray w-full ${className}`}
      style={{ background }}
      {...props}
    >
      <div className="max-w-screen-xl mx-auto">{children}</div>
    </div>
  );
};

export default PublicPageContainer;
