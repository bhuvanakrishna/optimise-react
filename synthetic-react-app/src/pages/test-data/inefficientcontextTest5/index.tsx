import React from 'react';
import Parent from './Parent';

const inefficientcontextTest5 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>inefficientcontextTest5</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default inefficientcontextTest5;
