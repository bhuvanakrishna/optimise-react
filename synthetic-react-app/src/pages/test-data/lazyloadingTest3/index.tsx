import React from 'react';
import Parent from './Parent';

const LazyloadingTest3 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>lazyloadingTest3</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default LazyloadingTest3;
