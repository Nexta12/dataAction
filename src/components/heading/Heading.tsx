import { HTMLAttributes, ReactNode } from 'react';

interface Heading extends HTMLAttributes<HTMLDivElement> {
  text: ReactNode;
  className?: string;
}
const Heading = ({ text, className, ...props }: Heading) => {
  return (
    <div className={`text-[30px] text-DeepBlue font-[400] ${className}`} {...props}>
      {text}
    </div>
  );
};

export default Heading;
