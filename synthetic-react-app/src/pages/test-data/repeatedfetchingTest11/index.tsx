import React from 'react';
import Parent from './Parent';

const repeatedfetchingTest11 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>repeatedfetchingTest11</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default repeatedfetchingTest11;
