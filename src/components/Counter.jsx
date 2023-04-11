import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log('component has mounted')
    setMounted(true)
  }, []);

  useEffect(() => {
    if (mounted) {
      console.log('count incremented')
    }
    return () => console.log('component has unmounted');
  }, [count]);

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
