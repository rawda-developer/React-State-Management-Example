import { useState, useContext } from 'react';
import { CounterContext } from './CounterContext';
export const ButtonCounterWithContext = () => {
  const { count, increment, decrement } = useContext(CounterContext);
  const [incrementBy, setIncrementBy] = useState(1);
  return (
    <>
      <label>
        Increment By
        <input
          type='number'
          value={incrementBy}
          onChange={(e) => setIncrementBy(Number(e.target.value))}
        />
      </label>
      <button onClick={() => increment(incrementBy)}>+</button>
      <button onClick={() => decrement(incrementBy)}>-</button>
      <p>{count}</p>
    </>
  );
};
