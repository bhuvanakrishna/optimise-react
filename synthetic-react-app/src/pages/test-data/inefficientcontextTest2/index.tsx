import React from 'react';
import Parent from './Parent';

const inefficientcontextTest2 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>inefficientcontextTest2</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default inefficientcontextTest2;
