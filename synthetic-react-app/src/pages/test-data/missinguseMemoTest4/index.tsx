import React from 'react';
import Parent from './Parent';

const MissinguseMemoTest4 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>missinguseMemoTest4</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default MissinguseMemoTest4;
