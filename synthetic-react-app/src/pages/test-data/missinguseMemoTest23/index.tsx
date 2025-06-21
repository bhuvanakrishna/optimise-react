import React from 'react';
import Parent from './Parent';

const MissinguseMemoTest23 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>missinguseMemoTest23</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default MissinguseMemoTest23;
