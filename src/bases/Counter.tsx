import { useState } from "react";

interface Props {
  initialCounter?: number;
}

export const Counter = ({ initialCounter = 0 }: Props) => {
  const [counter, setCounter] = useState(initialCounter);

  const handleClick = () => {
    setCounter((c) => c + 1);
  };
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={handleClick}>+ 1</button>
    </>
  );
};
