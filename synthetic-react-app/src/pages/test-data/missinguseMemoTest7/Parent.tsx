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

import UI from '../../../components/Affix';

import Level2 from './Level2';


// Context setup for inefficient-context pattern


const Parent = (props: any) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any>(null);

  
  const computed = Array(10000)
    .fill(0)
    .map((_, i) => i * count)
    .reduce((a, b) => a + b, 0);
  

  
  const handleClick = useCallback(() => {
    startTransition(() => setCount((c) => c + 1));
  }, []);

  return (
    <div style={{ padding: 12 }}>
      <h3>Parent</h3>
      <p>Count: {count}</p>
      <p>Data: {data ? 'Loaded' : 'Loading...'}</p>
      <p>Computed: {computed}</p>
      <UI onClick={handleClick} />
      
        <Level2 count={count}  />
      
    </div>
  );
  
};

export default Parent;
