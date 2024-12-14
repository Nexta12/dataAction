import { HTMLAttributes } from "react";

interface FormTextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  name?: string;
  placeholder?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  className?: string;
}

const SimpleTextArea: React.FC<FormTextAreaProps> = ({
  name,
  placeholder,
  onChange,
  value,
  className,
  label,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="text-sm font-bold font-Lexend text-black/60" htmlFor={name}>
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={` px-2 py-2 h-16 w-full outline-none hover:outline-none rounded border border-gray ${className}`}
        {...props}
      ></textarea>
    </div>
  );
};

export default SimpleTextArea;
