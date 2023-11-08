import { React, useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const doIncrement = () => setCount(count + 1);
  const doDecrement = () => setCount(count - 1);
  return { count: count, increment: doIncrement, decrement: doDecrement };
};

export default useCounter;
