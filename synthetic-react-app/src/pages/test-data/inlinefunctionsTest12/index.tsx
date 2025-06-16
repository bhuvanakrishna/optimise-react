import React from 'react';
import Parent from './Parent';

const inlinefunctionsTest12 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>inlinefunctionsTest12</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default inlinefunctionsTest12;
