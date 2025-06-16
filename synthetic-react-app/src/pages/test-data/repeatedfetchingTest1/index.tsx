import React from 'react';
import Parent from './Parent';

const repeatedfetchingTest1 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>repeatedfetchingTest1</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default repeatedfetchingTest1;
