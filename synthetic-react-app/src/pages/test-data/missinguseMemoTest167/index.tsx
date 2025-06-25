import React from 'react';
import Parent from './Parent';

const MissinguseMemoTest167 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>missinguseMemoTest167</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default MissinguseMemoTest167;
