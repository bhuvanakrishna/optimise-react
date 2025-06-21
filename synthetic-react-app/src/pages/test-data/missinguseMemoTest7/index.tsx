import React from 'react';
import Parent from './Parent';

const MissinguseMemoTest7 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>missinguseMemoTest7</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default MissinguseMemoTest7;
