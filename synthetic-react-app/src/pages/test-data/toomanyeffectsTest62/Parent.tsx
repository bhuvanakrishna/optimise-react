
import React, { useState, useEffect, useCallback, startTransition, memo } from 'react';

import UI from '../../../components/PasswordInput';

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
      
        <div style={{ height: shifted ? 300 : 150, background: '#f0f0f0' }} />

      

      <h3>Parent</h3>
      <p>Count: {count}</p>
      <p>Data: {data ? 'Loaded' : 'Loading...'}</p>
      

      <UI onClick={handleClick} />

      
        <Level2 count={count}  />
      

      

      
        <ul>
          {Array.from({ length: 300 }).map((_, i) => (
            <li key={i}>Item #{i}</li>
          ))}
        </ul>
      

    
      

      
      
    </div>
  );
  
};

export default memo(Parent);
