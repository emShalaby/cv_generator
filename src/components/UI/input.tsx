import React, { useState } from "react";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, value, onChange, ...rest }: IInput) {
  const [inputValue, setInputValue] = useState(value || "");

  function handleInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <div className="mb-1 flex flex-col gap-2 font-semibold">
      {label && <label htmlFor={rest.name}>{label}</label>}
      <input
        {...rest}
        value={inputValue}
        onChange={(e) => {
          handleInputValue(e);
          if (onChange) onChange(e);
        }}
        className={`flex rounded-md bg-[#EFF0F3] px-2 py-1 text-sm ${rest.className || ""}`}
      />
    </div>
  );
}
