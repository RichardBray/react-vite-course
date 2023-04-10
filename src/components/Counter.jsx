import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <div>You clicked {count} times</div>
      <div>Count + 1: {count + 1}</div>
      <div>Count + 2: {count + 2}</div>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}
