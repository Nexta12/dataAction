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
  min?: string;
  disabled?: boolean
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
  min,
  disabled,
  ...props
}) => {
  return (
    <div className="w-full mb-2">
      <div className="text-sm font-bold font-Lexend text-dark mb-2">{label}</div>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
        required={required}
        disabled={disabled}
        min={min} 
        {...props}
        autoComplete={name}
        className={`border rounded-lg bg-admingray border-dark/30 text-[14px] px-2 py-2 h-12 w-full outline-none hover:outline-none ${className}`}
      />
    </div>
  );
};

export default Input;
