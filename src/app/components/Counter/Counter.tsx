import React, { useState } from 'react';
import NumberDisplay from '../NumberDisplay/NumberDisplay';

// interface ChildProps {
//     count: number;
//     updateCount: (newCount: number) => void;
// }

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  const [resetTrigger, setResetTrigger] = useState<boolean>(false);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const resetNums = () => {
    setCount(0);
    setResetTrigger(true);
  }

  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={resetNums}>Reset</button>
        <NumberDisplay 
          count={count} 
          resetTrigger={resetTrigger} 
          onResetComplete={ () => setResetTrigger(false) }
        />
    </div>
  );

}