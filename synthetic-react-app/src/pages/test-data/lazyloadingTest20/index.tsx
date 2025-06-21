import React from 'react';
import Parent from './Parent';

const LazyloadingTest20 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>lazyloadingTest20</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default LazyloadingTest20;
