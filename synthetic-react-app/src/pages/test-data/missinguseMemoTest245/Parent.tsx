
import React, { useState, useEffect, useCallback, startTransition } from 'react';

import UI from '../../../components/Avatar';

import Level2 from './Level2';


// Context setup for inefficient-context pattern


// Safe guards

const Parent = (props: any) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any>(null);
  
  const [showImage, setShowImage] = useState(false);
  
  

  
  useEffect(() => {
    const timer = setTimeout(() => setShowImage(true), 2000); // simulate delayed LCP
    return () => clearTimeout(timer);
  }, []);
  

  

  

  


  

  
  const computed = Array(10000).fill(0).map((_, i) => i * count).reduce((a, b) => a + b, 0);
  

  
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

      
        <Level2 count={count}  />
      

      

      
        <ul>
          {Array.from({ length: 300 }).map((_, i) => (
            <li key={i}>Item #{i}</li>
          ))}
        </ul>
      

    
      

      
        {showImage && (
          <img
            src="/assets/hero1.jpg"
            alt="Big Banner"
            width="100%"
            height="400"
            loading="eager"
            style={{ marginTop: 24 }}
          />
        )}
      
      
    </div>
  );
  
};

export default Parent;
