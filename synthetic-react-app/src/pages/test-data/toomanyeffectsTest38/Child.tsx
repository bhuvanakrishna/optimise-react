
import React, { useState, useEffect, useCallback, startTransition, memo } from 'react';

import UI from '../../../components/Badge';


// Context setup for inefficient-context pattern


// Safe guards

const Child = (props: any) => {
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
  

  

  
  const handleClick = useCallback(() => {
    startTransition(() => setCount((c) => c + 1));
  }, []);
  
  

  
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
      

      <h3>Child</h3>
      <p>Count: {count}</p>
      <p>Data: {data ? 'Loaded' : 'Loading...'}</p>
      

      <UI onClick={handleClick} />

      

      
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} style={{ padding: 10 }}>Nested Level {i}</div>
        ))}
      

      
        <ul>
          {Array.from({ length: 300 }).map((_, i) => (
            <li key={i}>Item #{i}</li>
          ))}
        </ul>
      

    
      

      
      
    </div>
  );
  
};

export default memo(Child);
