import React from 'react';
import Parent from './Parent';

const MissinguseMemoTest17 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>missinguseMemoTest17</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default MissinguseMemoTest17;
