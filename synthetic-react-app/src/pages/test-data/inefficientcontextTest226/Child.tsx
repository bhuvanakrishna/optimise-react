
import React, { useState, useEffect, useMemo, useCallback, startTransition, createContext, memo } from 'react';

import UI from '../../../components/TextArea';


// Context setup for inefficient-context pattern

const InefficientContext = createContext({});


// Safe guards

const Child = (props: any) => {
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
  
  

  

  
  return (
    <InefficientContext.Provider value={{ count, setCount, data }}>
      <div style={{ padding: 12 }}>
        <h3>Child</h3>
        <UI />
        
      </div>
    </InefficientContext.Provider>
  );
  
};

export default memo(Child);
