import React from 'react';
import Parent from './Parent';

const lazyloadingTest22 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>lazyloadingTest22</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default lazyloadingTest22;
