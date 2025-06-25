import React from 'react';
import Parent from './Parent';

const InlinefunctionsTest100 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>inlinefunctionsTest100</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default InlinefunctionsTest100;
