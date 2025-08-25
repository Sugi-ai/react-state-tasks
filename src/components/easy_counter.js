"use client";

import { useState } from "react";

export const EasyCounter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log("clicked", count);
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>+</button>
      <p>counter: {count} </p>
    </div>
  );
};
