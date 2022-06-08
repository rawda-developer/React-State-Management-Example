import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { counterState } from './counterState';
import { incrementByState } from './incrementByState';
import { decrementByState } from './decrementByState';
import { counterStateSelector } from './counterStateSelector';
export const ButtonCounterWithRecoil = () => {
  const [counter, setCounter] = useRecoilState(counterState);
  const [incrementByStateValue, setIncrementByValue] =
    useRecoilState(incrementByState);
  const [decrementByValue] = useRecoilState(decrementByState);
  const getCountType = useRecoilValue(counterStateSelector);
  return (
    <>
      <label>
        Increment By
        <input
          type='number'
          value={incrementByStateValue}
          onChange={(e) => setIncrementByValue(Number(e.target.value))}
        />
      </label>
      <button onClick={() => setCounter(incrementByStateValue + counter)}>
        +
      </button>
      <button onClick={() => setCounter(counter - decrementByValue)}>-</button>
      <p>{counter}</p>
      <p>Count data type is {getCountType}</p>
    </>
  );
};
