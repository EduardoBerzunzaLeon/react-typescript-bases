import { useCounter } from "../hooks/useCounter";

export const CounterHook = () => {
  const { counter, elementToAnimate, handleClick, reset } = useCounter({
    initialState: 5,
    maxCount: 10,
  });

  return (
    <>
      <h1>Counter Effect:</h1>
      <h2 ref={elementToAnimate}>{counter}</h2>
      <button onClick={handleClick}>+ 1</button>
      <button onClick={reset}> Reset</button>
    </>
  );
};
