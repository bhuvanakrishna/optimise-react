import React from 'react';
import Parent from './Parent';

const LazyloadingTest17 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>lazyloadingTest17</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default LazyloadingTest17;
