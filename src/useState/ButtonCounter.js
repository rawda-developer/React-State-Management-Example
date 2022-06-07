import { useState } from 'react';
export const ButtonCounter = () => {
  const [count, setCount] = useState(0);
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
      <button onClick={() => setCount(count + incrementBy)}>+</button>
      <button onClick={() => setCount(count - incrementBy)}>-</button>
      <p>{count}</p>
    </>
  );
};
