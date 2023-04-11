import { createContext } from 'react';

export const CounterContext = createContext(null);

export function CounterProvider(props) {
  const value = 'Test value 22';
  return <CounterContext.Provider value={value}>{props.children}</CounterContext.Provider>;
}
