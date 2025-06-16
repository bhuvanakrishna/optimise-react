import React from 'react';
import Parent from './Parent';

const lazyloadingTest30 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>lazyloadingTest30</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default lazyloadingTest30;
