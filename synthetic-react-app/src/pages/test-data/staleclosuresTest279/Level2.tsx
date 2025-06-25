
import React, { useState, useEffect, useMemo, memo } from 'react';

import UI from '../../../components/Slider';

import Level3 from './Level3';


// Context setup for inefficient-context pattern


// Safe guards

const Level2 = (props: any) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any>(null);
  
  const [showImage, setShowImage] = useState(false);
  
  

  
  useEffect(() => {
    const timer = setTimeout(() => setShowImage(true), 2000); // simulate delayed LCP
    return () => clearTimeout(timer);
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
  
  

  

  
  return (
    <div style={{ padding: 12 }}>
      

      <h3>Level2</h3>
      <p>Count: {count}</p>
      <p>Data: {data ? 'Loaded' : 'Loading...'}</p>
      
        <p>Computed: {computed}</p>
      

      <UI onClick={handleClick} />

      
        <Level3 count={count}  />
      

      

      

    
      

      
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

export default memo(Level2);
