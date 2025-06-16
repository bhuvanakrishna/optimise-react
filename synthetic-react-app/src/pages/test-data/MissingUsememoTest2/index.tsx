import React from 'react';
import Parent from './Parent';

const missinguseMemoTest2 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>missinguseMemoTest2</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default missinguseMemoTest2;
