import React from 'react';
import Parent from './Parent';

const inlinefunctionsTest24 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>inlinefunctionsTest24</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default inlinefunctionsTest24;
