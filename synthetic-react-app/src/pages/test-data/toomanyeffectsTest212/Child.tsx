
import React, { useState, useEffect, useCallback, startTransition, memo } from 'react';

import UI from '../../../components/Table';


// Context setup for inefficient-context pattern


// Safe guards

const Child = (props: any) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any>(null);
  
  const [showImage, setShowImage] = useState(false);
  
  
  const [shifted, setShifted] = useState(false);
  

  
  useEffect(() => {
    const timer = setTimeout(() => setShowImage(true), 2000); // simulate delayed LCP
    return () => clearTimeout(timer);
  }, []);
  

  
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

      

      <h3>Child</h3>
      <p>Count: {count}</p>
      <p>Data: {data ? 'Loaded' : 'Loading...'}</p>
      

      <UI onClick={handleClick} />

      

      

      
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

export default memo(Child);
