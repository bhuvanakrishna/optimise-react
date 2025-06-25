import React from 'react';
import Parent from './Parent';

const InlinefunctionsTest123 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>inlinefunctionsTest123</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default InlinefunctionsTest123;
