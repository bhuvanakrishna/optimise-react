import React from 'react';
import Parent from './Parent';

const MissinguseMemoTest14 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>missinguseMemoTest14</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default MissinguseMemoTest14;
