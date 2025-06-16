import React from 'react';
import Parent from './Parent';

const inlinefunctionsTest23 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>inlinefunctionsTest23</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default inlinefunctionsTest23;
