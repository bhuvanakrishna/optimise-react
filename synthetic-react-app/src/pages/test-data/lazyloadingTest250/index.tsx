import React from 'react';
import Parent from './Parent';

const LazyloadingTest250 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>lazyloadingTest250</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default LazyloadingTest250;
