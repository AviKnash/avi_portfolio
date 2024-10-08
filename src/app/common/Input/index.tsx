import React from "react";
import styles from "./style.module.scss";

interface IInput {
  placeholder: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: string;
  isTextArea?: boolean;
  rows?: number;
  cols?: number;
}

const Input = ({
  placeholder,
  value,
  onChange,
  type = "text",
  isTextArea,
  rows,
  cols,
}: IInput) => {
  return isTextArea ? (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      cols={cols}
      className={styles.customTextArea}
      style={{ resize: "none",overflow: "hidden" }}
    />
  ) : (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles.customInput}
    />
  );
};

export default Input;
