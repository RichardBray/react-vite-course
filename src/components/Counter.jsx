import { useReducer } from 'react';

export default function Counter() {
  const initialState = { count: 0 };

  function counterReducer(state, action) {
    const actions = {
      increment: () => ({ count: state.count + 1 }),
      decrement: () => ({ count: state.count - 1 }),
      reset: () => initialState,
    };

    return actions[action.type] ? actions[action.type]() : state;
  }

  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <div>Count value: {state.count}</div>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  );
}
