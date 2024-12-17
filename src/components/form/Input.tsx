import { HTMLAttributes } from "react";

interface FormInputProps extends HTMLAttributes<HTMLInputElement> {
  name?: string;
  placeholder?: string;
  label?: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
  required?: boolean;
}

const Input: React.FC<FormInputProps> = ({
  name,
  placeholder,
  type = "text",
  onChange,
  value,
  className,
  label,
  required,
  ...props
}) => {
  return (
    <div className="w-full mb-2">
      <div className="text-sm font-bold font-Lexend text-black/80">{label}</div>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
        {...props}
        autoComplete={name}
        className={`border border-gray text-[18px] px-2 py-2 h-12 w-full outline-none hover:outline-none ${className}`}
      />
    </div>
  );
};

export default Input;
