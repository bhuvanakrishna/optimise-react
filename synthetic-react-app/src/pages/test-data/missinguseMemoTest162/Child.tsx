
import React, { useState, useEffect, useCallback, startTransition } from 'react';

import UI from '../../../components/Message';


// Context setup for inefficient-context pattern


// Safe guards

const Child = (props: any) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any>(null);
  
  

  

  

  
  useEffect(() => {
    const now = performance.now();
    while (performance.now() - now < 500) {} // simulate jank
  }, []);
  

  


  

  
  const computed = Array(10000).fill(0).map((_, i) => i * count).reduce((a, b) => a + b, 0);
  

  
  const handleClick = useCallback(() => {
    startTransition(() => setCount((c) => c + 1));
  }, []);
  
  
    const [bigData] = useState(() => Array(10000).fill({ x: Math.random(), y: 'a'.repeat(1000) }));
  

  

  
  return (
    <div style={{ padding: 12 }}>
      

      <h3>Child</h3>
      <p>Count: {count}</p>
      <p>Data: {data ? 'Loaded' : 'Loading...'}</p>
      
        <p>Computed: {computed}</p>
      

      <UI onClick={handleClick} />

      

      

      
        <ul>
          {Array.from({ length: 300 }).map((_, i) => (
            <li key={i}>Item #{i}</li>
          ))}
        </ul>
      

    
      

      
      
    </div>
  );
  
};

export default Child;
