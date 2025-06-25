import React from 'react';
import Parent from './Parent';

const InlinefunctionsTest111 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>inlinefunctionsTest111</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default InlinefunctionsTest111;
