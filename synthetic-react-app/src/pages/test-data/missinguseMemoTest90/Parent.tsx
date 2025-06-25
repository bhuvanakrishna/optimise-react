
import React, { useState, useEffect } from 'react';

import UI from '../../../components/Empty';

import Level2 from './Level2';


// Context setup for inefficient-context pattern


// Safe guards

const Parent = (props: any) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any>(null);
  
  
  const [shifted, setShifted] = useState(false);
  

  

  
  useEffect(() => {
    const shiftTimer = setTimeout(() => setShifted(true), 1500);
    return () => clearTimeout(shiftTimer);
  }, []);
  

  
  useEffect(() => {
    const now = performance.now();
    while (performance.now() - now < 500) {} // simulate jank
  }, []);
  

  


  

  
  const computed = Array(10000).fill(0).map((_, i) => i * count).reduce((a, b) => a + b, 0);
  

  
  const handleClick = () => {
    const items = Array(1000000).fill(0).map((_, i) => i ** 2).reduce((a, b) => a + b, 0);
    setData({ items });
    setCount(c => c + 1);
  };
  
  
    const [bigData] = useState(() => Array(10000).fill({ x: Math.random(), y: 'a'.repeat(1000) }));
  

  

  
  return (
    <div style={{ padding: 12 }}>
      
        <div style={{ height: shifted ? 300 : 150, background: '#f0f0f0' }} />

      

      <h3>Parent</h3>
      <p>Count: {count}</p>
      <p>Data: {data ? 'Loaded' : 'Loading...'}</p>
      
        <p>Computed: {computed}</p>
      

      <UI onClick={handleClick} />

      
        <Level2 count={count}  />
      

      
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} style={{ padding: 10 }}>Nested Level {i}</div>
        ))}
      

      

    
      

      
      
    </div>
  );
  
};

export default Parent;
