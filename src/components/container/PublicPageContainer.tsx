import React, { HTMLAttributes, ReactNode } from 'react';

interface PublicPageContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const PublicPageContainer: React.FC<PublicPageContainerProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`px-[80px] py-[20px] bg-gray w-full ${className}`}
      {...props}
    >

      {children}
    </div>
  );
};

export default PublicPageContainer;
