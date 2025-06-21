import React from 'react';
import Parent from './Parent';

const InlinefunctionsTest7 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>inlinefunctionsTest7</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default InlinefunctionsTest7;
