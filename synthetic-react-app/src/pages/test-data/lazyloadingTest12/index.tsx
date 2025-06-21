import React from 'react';
import Parent from './Parent';

const LazyloadingTest12 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>lazyloadingTest12</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default LazyloadingTest12;
