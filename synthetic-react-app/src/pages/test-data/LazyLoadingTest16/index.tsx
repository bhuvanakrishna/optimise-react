import React from 'react';
import Parent from './Parent';

const lazyloadingTest16 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>lazyloadingTest16</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default lazyloadingTest16;
