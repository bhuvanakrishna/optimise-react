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

import UI from '../../../components/Image';

import Child from './Child';


// Context setup for inefficient-context pattern


const Parent = (props: any) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any>(null);

  
  useEffect(() => {
    const id = setInterval(() => setCount((c) => c + 1), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]);

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then(setData);
  }, []);
  

  
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
      <Child count={count} /> 
    </div>
  );
  
};

export default memo(Parent);
