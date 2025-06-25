
import React, { useState, useEffect, useMemo, useCallback, startTransition, memo } from 'react';

import UI from '../../../components/Input';

import Child from './Child';


// Context setup for inefficient-context pattern


// Safe guards

const Level2 = (props: any) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any>(null);
  
  const [showImage, setShowImage] = useState(false);
  
  

  
  useEffect(() => {
    const timer = setTimeout(() => setShowImage(true), 2000); // simulate delayed LCP
    return () => clearTimeout(timer);
  }, []);
  

  

  

  


  
  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then(setData);
  }, []);
  

  
  const computed = useMemo(() => {
    return Array(10000).fill(0).map((_, i) => i * count).reduce((a, b) => a + b, 0);
  }, [count]);
  

  
  const handleClick = useCallback(() => {
    startTransition(() => setCount((c) => c + 1));
  }, []);
  
  

  

  
  return (
    <div style={{ padding: 12 }}>
      <h3>Level2</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Click</button>
      <UI />
      <Child count={count} /> 
    </div>
  );
  
};

export default memo(Level2);
