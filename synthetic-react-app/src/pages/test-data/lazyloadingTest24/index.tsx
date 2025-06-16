import React from 'react';
import Parent from './Parent';

const lazyloadingTest24 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>lazyloadingTest24</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default lazyloadingTest24;
