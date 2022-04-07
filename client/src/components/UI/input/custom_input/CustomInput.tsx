import React, { ChangeEvent, FC } from "react";
import "./customInput.scss";

interface CustomInputProps {
  type: string;
  placeholder: string;
  label: string;
  name: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: FC<CustomInputProps> = ({
  type,
  placeholder,
  label,
  name,
  value,
  handleChange,
}) => {
  return (
    <div className="custom-input">
      <div className="custom-input__label">{label}</div>
      <input
        value={value}
        className="custom-input__input"
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default CustomInput;
