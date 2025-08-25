"use client";
import { useState } from "react";

export const EasyControlledInputField = () => {
  const [input, setInput] = useState("");

  const handleOnChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <div>
      <input onChange={handleOnChange} type="text" />
      <p>input text: {input}</p>
    </div>
  );
};
