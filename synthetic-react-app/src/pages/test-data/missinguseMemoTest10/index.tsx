import React from 'react';
import Parent from './Parent';

const MissinguseMemoTest10 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>missinguseMemoTest10</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default MissinguseMemoTest10;
