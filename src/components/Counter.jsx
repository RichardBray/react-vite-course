import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <div>You clicked {count} times</div>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}
