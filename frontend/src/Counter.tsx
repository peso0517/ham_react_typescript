import React, { useState } from "react";
import { isPlusToken } from "typescript";

const Counter: React.FC<{}> = () => {
  const initialCount: any = 0;
  const [count, setCount] = useState<number>(initialCount);
  const plus = () => {
    setCount((prevState) => prevState++);
  };
  const minus = () => {
    setCount((prevState) => prevState--);
  };
  return (
    <div>
      <div>value: {count}</div>
      <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button>
    </div>
  );
};

export default Counter;
