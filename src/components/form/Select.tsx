import React, { HTMLAttributes } from "react";

interface SelectOption {
  label: string;
  value: string | number;
}

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
      <div className="text-sm font-bold font-Lexend">{selectLabel}</div>
      <select
        name={name}
        onChange={onChange}
        value={value || ""}
        {...props}
        className={`border border-gray px-2 py-2 h-14 w-full outline-none hover:outline-none ${className}`}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
