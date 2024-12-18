
import React, { HTMLAttributes } from "react";

export type SelectOption = {
  title: string;
  price?: number | string;
  _id: string;
};


interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  name?: string;
  options: SelectOption[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string | number;
  placeholder?: string;
  className?: string;
  selectLabel?: string;
}

const Select: React.FC<SelectProps> = ({
  name,
  options,
  onChange,
  value,
  placeholder = "Select one",
  className,
  selectLabel,
  ...props
}) => {
  return (
    <div className="w-full mb-2">
      <div className="text-sm font-bold font-Lexend text-dark mb-2">{selectLabel}</div>
      <select
        name={name}
        onChange={onChange}
        value={value || ""}
        {...props}
        className={`border rounded-lg bg-admingray border-dark/30 text-[14px] px-2 py-2 h-12 w-full outline-none hover:outline-none ${className}`}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.title} value={option.title}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
