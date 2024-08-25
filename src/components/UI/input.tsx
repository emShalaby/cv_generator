import React, { useState } from "react";
interface IInput {
  name?: string;
  type?: React.HTMLInputTypeAttribute;
  label?: string;
  className?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Input({
  name,
  type,
  label,
  className,
  value,
  onChange,
}: IInput) {
  const [inputValue, setInputValue] = useState(value || "");
  function handleInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }
  return (
    <div className="mb-1 flex flex-col gap-2 font-semibold">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className={`flex rounded-md bg-[#EFF0F3] px-2 py-1 text-sm ${className || ""}`}
        value={inputValue}
        onChange={(e) => {
          handleInputValue(e);
          if (onChange) onChange(e);
        }}
      ></input>
    </div>
  );
}
