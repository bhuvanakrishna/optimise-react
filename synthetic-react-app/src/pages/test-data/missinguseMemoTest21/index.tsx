import React from 'react';
import Parent from './Parent';

const MissinguseMemoTest21 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>missinguseMemoTest21</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default MissinguseMemoTest21;
