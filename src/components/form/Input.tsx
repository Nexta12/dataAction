import { HTMLAttributes } from "react";

interface FormInputProps extends HTMLAttributes<HTMLInputElement> {
  name?: string;
  placeholder?: string;
  label?: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
}

const Input: React.FC<FormInputProps> = ({
  name,
  placeholder,
  type = "text",
  onChange,
  value,
  className,
  label,
  ...props
}) => {
  return (
    <div className="w-full">
      <div className="text-sm font-bold font-Lexend">{label}</div>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
       
        {...props}
        className={`border px-2 py-2 w-full outline-none hover:outline-none ${ className}`} 
      />
    </div>
  );
};

export default Input;
