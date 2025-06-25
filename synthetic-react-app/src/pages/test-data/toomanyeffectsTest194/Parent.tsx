
import React, { useState, useEffect, useCallback, startTransition, memo } from 'react';

import UI from '../../../components/Empty';

import Level2 from './Level2';


// Context setup for inefficient-context pattern


// Safe guards

const Parent = (props: any) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any>(null);
  
  

  

  

  

  


  
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
  
  
    const [bigData] = useState(() => Array(10000).fill({ x: Math.random(), y: 'a'.repeat(1000) }));
  

  
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
      

      <h3>Parent</h3>
      <p>Count: {count}</p>
      <p>Data: {data ? 'Loaded' : 'Loading...'}</p>
      

      <UI onClick={handleClick} />

      
        <Level2 count={count}  />
      

      

      

    
      

      
      
    </div>
  );
  
};

export default memo(Parent);
