import React from 'react';
import Parent from './Parent';

const InlinefunctionsTest5 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>inlinefunctionsTest5</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default InlinefunctionsTest5;
