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
  // non null assertion operator -> null!
  const ref = useRef<HTMLInputElement>(null!);
  // const ref = useRef(null);

  const focusInput = () => {
    // nullの場合,focus実行しない
    ref.current.focus();
  };

  return (
    <div>
      <div>value: {count}</div>
      <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button>
      <div>This components was re-rendered {renderTimes.current}</div>
      <input ref={ref} type="text"></input>
      <button onClick={focusInput}>Click Me!!</button>
    </div>
  );
};

export default Counter;
