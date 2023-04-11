import { useContext } from 'react';
import { CounterContext } from '../CounterContext';


export default function Details() {
  const value = useContext(CounterContext);

  return (
    <>
      <div>{value}</div>
      <h1>Title</h1>
      <p>1</p>
      <p>2</p>
    </>
  );
}
