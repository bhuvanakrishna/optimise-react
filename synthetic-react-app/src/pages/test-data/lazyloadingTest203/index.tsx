import React from 'react';
import Parent from './Parent';

const LazyloadingTest203 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>lazyloadingTest203</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default LazyloadingTest203;
