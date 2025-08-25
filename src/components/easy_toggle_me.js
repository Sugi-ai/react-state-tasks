"use client";
import { useState } from "react";

export const EasyToggleMe = () => {
  const [isShow, setIsShow] = useState(true);
  const handleToggle = () => {
    setIsShow(!isShow);
  };
  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {isShow && <p>Toggle me</p>}
    </div>
  );
};
