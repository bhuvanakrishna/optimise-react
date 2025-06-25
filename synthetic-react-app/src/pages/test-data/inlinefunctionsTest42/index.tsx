import React from 'react';
import Parent from './Parent';

const InlinefunctionsTest42 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>inlinefunctionsTest42</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default InlinefunctionsTest42;
