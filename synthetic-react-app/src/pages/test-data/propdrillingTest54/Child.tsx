
import React, { useState, useEffect, useMemo, memo } from 'react';

import UI from '../../../components/Tabs';


// Context setup for inefficient-context pattern


// Safe guards

const Child = (props: any) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any>(null);
  
  
  const [shifted, setShifted] = useState(false);
  

  

  
  useEffect(() => {
    const shiftTimer = setTimeout(() => setShifted(true), 1500);
    return () => clearTimeout(shiftTimer);
  }, []);
  

  

  


  
  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then(setData);
  }, []);
  

  
  const computed = useMemo(() => {
    return Array(10000).fill(0).map((_, i) => i * count).reduce((a, b) => a + b, 0);
  }, [count]);
  

  
  const handleClick = () => {
    const items = Array(1000000).fill(0).map((_, i) => i ** 2).reduce((a, b) => a + b, 0);
    setData({ items });
    setCount(c => c + 1);
  };
  
  
    const [bigData] = useState(() => Array(10000).fill({ x: Math.random(), y: 'a'.repeat(1000) }));
  

  

  
  return (
    <div style={{ padding: 12 }}>
      
        <div style={{ height: shifted ? 300 : 150, background: '#f0f0f0' }} />

      

      <h3>Child</h3>
      <p>Count: {count}</p>
      <p>Data: {data ? 'Loaded' : 'Loading...'}</p>
      
        <p>Computed: {computed}</p>
      

      <UI onClick={handleClick} />

      

      

      

    
      

      
      
    </div>
  );
  
};

export default memo(Child);
