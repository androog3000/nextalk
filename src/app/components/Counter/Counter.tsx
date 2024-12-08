import React, { useState } from 'react';
import NumberDisplay from '../NumberDisplay/NumberDisplay';

// interface ChildProps {
//     count: number;
//     updateCount: (newCount: number) => void;
// }

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <NumberDisplay count={count} />
    </div>
  );

}