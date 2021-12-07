import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";

interface HookProps {
  initialState?: number;
  maxCount?: number;
}

export const useCounter = ({ initialState = 0, maxCount = 1 }: HookProps) => {
  const [counter, setCounter] = useState(initialState);
  const elementToAnimate = useRef<any>(null);
  const tl = useRef(gsap.timeline());

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;

    tl.current
      .to(elementToAnimate.current, {
        y: -10,
        duration: 0.2,
        ease: "ease.out",
      })
      .to(elementToAnimate.current, {
        y: 0,
        duration: 1,
        ease: "bounce.out",
      })
      .pause();
  }, []);

  useEffect(() => {
    if (counter < maxCount) return;
    // console.log(
    //   "%cSe llego al valor máximo",
    //   "color: red; background-color: black"
    // );
    tl.current.play(0);
  }, [counter, maxCount]);

  const handleClick = () => {
    setCounter((c) => Math.min(c + 1, maxCount));
  };

  const reset = () => {
    setCounter(initialState);
  };

  return {
    counter,
    elementToAnimate,
    handleClick,
    reset,
  };
};
