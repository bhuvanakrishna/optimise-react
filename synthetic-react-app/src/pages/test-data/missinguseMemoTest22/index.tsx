import React from 'react';
import Parent from './Parent';

const missinguseMemoTest22 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>missinguseMemoTest22</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default missinguseMemoTest22;
