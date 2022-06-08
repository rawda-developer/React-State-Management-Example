import { useState } from 'react';
import { CounterContext } from './CounterContext';
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = (amount) => setCount(count + amount);
  const decrement = (amount) => setCount(count - amount);
  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};
