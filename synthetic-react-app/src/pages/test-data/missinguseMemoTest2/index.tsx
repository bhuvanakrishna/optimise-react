import React from 'react';
import Parent from './Parent';

const MissinguseMemoTest2 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>missinguseMemoTest2</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default MissinguseMemoTest2;
