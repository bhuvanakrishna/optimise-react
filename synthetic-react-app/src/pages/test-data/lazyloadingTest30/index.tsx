import React from 'react';
import Parent from './Parent';

const LazyloadingTest30 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>lazyloadingTest30</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default LazyloadingTest30;
