import React, { useState, useEffect, useMemo, memo } from 'react';
import UI from '../../../components/Card';
import Child from './Child';

const Level4 = (props: any) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any>(null);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowImage(true), 2000);
    const now = performance.now();
    while (performance.now() - now < 500) {}
    fetch('/api/data')
      .then((res) => res.json())
      .then(setData);
    return () => clearTimeout(timer);
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
      <p>Data: {data ? 'Loaded' : 'Loading...'}</p>
      <p>Computed: {computed}</p>
      <UI onClick={handleClick} />
      <Child count={count} />
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} style={{ padding: 10 }}>Nested Level {i}</div>
      ))}
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

export default memo(Level4);
