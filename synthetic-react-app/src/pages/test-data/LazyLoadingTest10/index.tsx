import React from 'react';
import Parent from './Parent';

const lazyloadingTest10 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>lazyloadingTest10</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default lazyloadingTest10;
