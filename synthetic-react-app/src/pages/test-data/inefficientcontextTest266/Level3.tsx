
import React, { useState, useEffect, useMemo, useCallback, startTransition, createContext, memo } from 'react';

import UI from '../../../components/Drawer';

import Child from './Child';


// Context setup for inefficient-context pattern

const InefficientContext = createContext({});


// Safe guards

const Level3 = (props: any) => {
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
  

  
  const handleClick = useCallback(() => {
    startTransition(() => setCount((c) => c + 1));
  }, []);
  
  
    const [bigData] = useState(() => Array(10000).fill({ x: Math.random(), y: 'a'.repeat(1000) }));
  

  

  
  return (
    <InefficientContext.Provider value={{ count, setCount, data }}>
      <div style={{ padding: 12 }}>
        <h3>Level3</h3>
        <UI />
        <Child /> 
      </div>
    </InefficientContext.Provider>
  );
  
};

export default memo(Level3);
