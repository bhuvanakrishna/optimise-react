
import React, { useState, useEffect, useMemo, memo } from 'react';

import UI from '../../../components/InputNumber';

import Child from './Child';


// Context setup for inefficient-context pattern


// Safe guards

const Level4 = (props: any) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any>(null);
  
  

  

  

  

  


  
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
      <h3>Level4</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Click</button>
      <UI />
      <Child count={count} /> 
    </div>
  );
  
};

export default memo(Level4);
