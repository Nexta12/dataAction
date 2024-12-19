import { HTMLAttributes } from "react";

interface FormTextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  name?: string;
  placeholder?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  className?: string;
  disabled?: boolean
}

const SimpleTextArea: React.FC<FormTextAreaProps> = ({
  name,
  placeholder,
  onChange,
  value,
  className,
  label,
  disabled,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="text-sm font-bold font-Lexend text-dark mb-2" htmlFor={name}>
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={disabled}
        className={`border rounded-lg bg-admingray border-dark/30 text-[14px] px-2 py-2 h-16 w-full outline-none hover:outline-none ${className}`}
        {...props}
      ></textarea>
    </div>
  );
};

export default SimpleTextArea;
