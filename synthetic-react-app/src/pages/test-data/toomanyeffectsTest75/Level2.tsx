
import React, { useState, useEffect, memo } from 'react';

import UI from '../../../components/Badge';

import Level3 from './Level3';


// Context setup for inefficient-context pattern


// Safe guards

const Level2 = (props: any) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any>(null);
  
  

  

  

  

  


  

  

  
  const handleClick = () => {
    const items = Array(1000000).fill(0).map((_, i) => i ** 2).reduce((a, b) => a + b, 0);
    setData({ items });
    setCount(c => c + 1);
  };
  
  

  
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
  

  
  return (
    <div style={{ padding: 12 }}>
      

      <h3>Level2</h3>
      <p>Count: {count}</p>
      <p>Data: {data ? 'Loaded' : 'Loading...'}</p>
      

      <UI onClick={handleClick} />

      
        <Level3 count={count}  />
      

      
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} style={{ padding: 10 }}>Nested Level {i}</div>
        ))}
      

      

    
      

      
      
    </div>
  );
  
};

export default memo(Level2);
