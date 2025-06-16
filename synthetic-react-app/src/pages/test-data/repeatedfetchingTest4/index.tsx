import React from 'react';
import Parent from './Parent';

const repeatedfetchingTest4 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>repeatedfetchingTest4</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default repeatedfetchingTest4;
