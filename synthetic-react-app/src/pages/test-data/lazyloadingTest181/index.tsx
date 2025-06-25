import React from 'react';
import Parent from './Parent';

const LazyloadingTest181 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>lazyloadingTest181</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default LazyloadingTest181;
