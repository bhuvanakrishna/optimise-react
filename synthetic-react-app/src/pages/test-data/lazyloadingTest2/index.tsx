import React from 'react';
import Parent from './Parent';

const LazyloadingTest2 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>lazyloadingTest2</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default LazyloadingTest2;
