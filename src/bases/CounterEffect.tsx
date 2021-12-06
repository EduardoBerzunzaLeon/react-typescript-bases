import { useEffect, useState } from "react";
import { gsap } from "gsap";

const MAXIMUN_COUNT: number = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    if (counter < 10) return;
    console.log(
      "%cSe llego al valor máximo",
      "color: red; background-color: black"
    );
  }, [counter]);

  const handleClick = () => {
    setCounter((c) => Math.min(c + 1, MAXIMUN_COUNT));
  };

  return (
    <>
      <h1>Counter Effect:</h1>
      <h2>{counter}</h2>
      <button onClick={handleClick}>+ 1</button>
    </>
  );
};
