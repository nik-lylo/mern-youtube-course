import React, { FC } from "react";
import "./simpleButton.scss";

interface SimpleButtonProps {
  text: string;
  background: string;
  color: string;
  type: any;
  handleClick?: () => void;
  disabled?: boolean;
}

const SimpleButton: FC<SimpleButtonProps> = ({
  text,
  background,
  color,
  type = "button",
  handleClick = null,
  disabled = false,
}) => {
  return (
    <button
      style={{ background, color }}
      type={type}
      onClick={() => handleClick && handleClick()}
      disabled={disabled}
      className="simple-button"
    >
      {text}
    </button>
  );
};

export default SimpleButton;
