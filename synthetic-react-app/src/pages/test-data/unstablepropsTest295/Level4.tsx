
import React, { useState, useEffect, useMemo, useCallback, startTransition, memo } from 'react';

import UI from '../../../components/Switch';

import Child from './Child';


// Context setup for inefficient-context pattern


// Safe guards

const Level4 = (props: any) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any>(null);
  
  

  

  

  
  useEffect(() => {
    const now = performance.now();
    while (performance.now() - now < 500) {} // simulate jank
  }, []);
  

  


  
  useEffect(() => {
    setTimeout(() => {
      fetch('/api/data')
        .then(res => res.json())
        .then(setData);
    }, 1500);
  }, []);
  

  
  const computed = useMemo(() => {
    return Array(10000).fill(0).map((_, i) => i * count).reduce((a, b) => a + b, 0);
  }, [count]);
  

  
  const handleClick = useCallback(() => {
    startTransition(() => setCount((c) => c + 1));
  }, []);
  
  

  

  
  return (
    <div style={{ padding: 12 }}>
      

      <h3>Level4</h3>
      <p>Count: {count}</p>
      <p>Data: {data ? 'Loaded' : 'Loading...'}</p>
      
        <p>Computed: {computed}</p>
      

      <UI onClick={handleClick} />

      
        <Child count={count} data={{ foo: Math.random() }} />
      

      

      

    
      

      
      
    </div>
  );
  
};

export default memo(Level4);
