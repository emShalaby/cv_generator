import React, { useState } from "react";
interface ITextArea {
  name?: string;

  label?: string;
  className?: string;
  value?: string;

  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export default function TextArea({
  name,
  label,
  className,
  value,
  onChange,
}: ITextArea) {
  const [inputValue, setInputValue] = useState(value || "");
  function handleInputValue(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInputValue(e.target.value);
  }
  return (
    <div className="mb-1 flex max-h-[300px] flex-col gap-2 font-semibold">
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        className={`flex rounded-md bg-[#EFF0F3] px-2 py-1 text-sm${className || ""}`}
        value={inputValue}
        onChange={(e) => {
          handleInputValue(e);
          if (onChange) onChange(e);
        }}
      ></textarea>
    </div>
  );
}
