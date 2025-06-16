import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useContext,
  Suspense,
  lazy,
  memo,
  startTransition,
  createContext,
} from 'react';

import UI from '../../../components/List';

import Level3 from './Level3';


// Context setup for inefficient-context pattern

const InefficientContext = createContext({});


const Level2 = (props: any) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any>(null);

  
  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const computed = useMemo(() => {
    return Array(10000)
      .fill(0)
      .map((_, i) => i * count)
      .reduce((a, b) => a + b, 0);
  }, [count]);
  

  
  return (
    <InefficientContext.Provider value={{ count, setCount, data }}>
      <div style={{ padding: 12 }}>
        <h3>Level2</h3>
        <UI />
        <Level3 /> 
      </div>
    </InefficientContext.Provider>
  );
  
};

export default memo(Level2);
