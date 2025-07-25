import React, { useState, useEffect, useMemo, useCallback, memo } from 'react';
import UI from '../../../components/TimePicker';
import Child from './Child';

const Level2 = (props: any) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any>(null);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const imageTimer = setTimeout(() => setShowImage(true), 2000);
    const fetchTimer = setTimeout(() => {
      fetch('/api/data')
        .then(res => res.json())
        .then(setData);
    }, 1500);

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(fetchTimer);
    };
  }, []);

  const computed = useMemo(() => {
    return Array(10000).fill(0).map((_, i) => i * count).reduce((a, b) => a + b, 0);
  }, [count]);

  const handleClick = useCallback(() => {
    const items = Array(1000000).fill(0).map((_, i) => i ** 2).reduce((a, b) => a + b, 0);
    setData({ items });
    setCount(c => c + 1);
  }, []);

  return (
    <div style={{ padding: 12 }}>
      <h3>Level2</h3>
      <UI />
      <Child />
    </div>
  );
};

export default memo(Level2);
