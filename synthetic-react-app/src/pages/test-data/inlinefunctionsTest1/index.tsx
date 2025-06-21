import React from 'react';
import Parent from './Parent';

const InlinefunctionsTest1 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>inlinefunctionsTest1</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default InlinefunctionsTest1;
