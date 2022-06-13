import React, { useState, useRef, useEffect } from "react";
import { isPlusToken } from "typescript";

const Counter: React.FC<{}> = () => {
  const initialCount: any = 0;
  const [count, setCount] = useState<number>(initialCount);
  const plus = () => {
    setCount((prevState) => prevState + 1);
  };
  const minus = () => {
    setCount((prevState) => prevState - 1);
  };

  const renderTimes = useRef<number>(0);
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });

  return (
    <div>
      <div>value: {count}</div>
      <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button>
      <div>This components was re-rendered {renderTimes.current}</div>
    </div>
  );
};

export default Counter;
