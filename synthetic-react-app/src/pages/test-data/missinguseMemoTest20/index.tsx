import React from 'react';
import Parent from './Parent';

const MissinguseMemoTest20 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>missinguseMemoTest20</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default MissinguseMemoTest20;
