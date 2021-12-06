import { useState } from "react";

interface Props {
  initialCounter?: number;
}

interface CounterState {
  count: number;
  clicks: number;
}

export const CounterBy = ({ initialCounter = 5 }: Props) => {
  const [{ count, clicks }, setCounter] = useState<CounterState>({
    count: initialCounter,
    clicks: 0,
  });

  const handleClick = (value: number) => {
    setCounter(({ count, clicks }) => ({
      count: count + value,
      clicks: clicks + 1,
    }));
  };

  return (
    <>
      <h1>Counter By: {count}</h1>
      <h2>Clicks: {clicks}</h2>
      <button onClick={() => handleClick(1)}>+ 1</button>
      <button onClick={() => handleClick(5)}>+ 5</button>
    </>
  );
};
