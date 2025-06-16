import React from 'react';
import Parent from './Parent';

const inefficientcontextTest1 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>inefficientcontextTest1</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default inefficientcontextTest1;
