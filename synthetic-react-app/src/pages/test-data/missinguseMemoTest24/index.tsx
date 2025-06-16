import React from 'react';
import Parent from './Parent';

const missinguseMemoTest24 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>missinguseMemoTest24</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default missinguseMemoTest24;
