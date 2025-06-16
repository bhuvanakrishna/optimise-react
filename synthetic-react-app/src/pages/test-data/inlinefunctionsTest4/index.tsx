import React from 'react';
import Parent from './Parent';

const inlinefunctionsTest4 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>inlinefunctionsTest4</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default inlinefunctionsTest4;
