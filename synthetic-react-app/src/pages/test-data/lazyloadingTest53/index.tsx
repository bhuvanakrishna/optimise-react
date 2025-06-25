import React from 'react';
import Parent from './Parent';

const LazyloadingTest53 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>lazyloadingTest53</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default LazyloadingTest53;
