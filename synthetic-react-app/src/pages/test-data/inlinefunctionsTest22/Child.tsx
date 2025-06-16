import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useContext,
  Suspense,
  lazy,
  memo,
  startTransition,
  createContext,
} from 'react';

import UI from '../../../components/Collapse';


// Context setup for inefficient-context pattern


const Child = (props: any) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any>(null);

  
  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const computed = useMemo(() => {
    return Array(10000)
      .fill(0)
      .map((_, i) => i * count)
      .reduce((a, b) => a + b, 0);
  }, [count]);
  

  
  return (
    <div style={{ padding: 12 }}>
      <h3>Child</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Click</button>
      <UI />
      
    </div>
  );
  
};

export default memo(Child);
