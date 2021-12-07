import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAXIMUN_COUNT: number = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (counter < 10) return;
    console.log(
      "%cSe llego al valor máximo",
      "color: red; background-color: black"
    );

    const timeline = gsap.timeline();

    timeline
      .to(counterElement.current, {
        y: -10,
        duration: 0.2,
        ease: "ease.out",
      })
      .to(counterElement.current, {
        y: 0,
        duration: 1,
        ease: "bounce.out",
      });
  }, [counter]);

  const handleClick = () => {
    setCounter((c) => Math.min(c + 1, MAXIMUN_COUNT));
  };

  const reset = () => {
    setCounter(5);
  };

  return (
    <>
      <h1>Counter Effect:</h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleClick}>+ 1</button>
      <button onClick={reset}> Reset</button>
    </>
  );
};
