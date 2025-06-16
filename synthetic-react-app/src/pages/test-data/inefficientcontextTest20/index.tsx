import React from 'react';
import Parent from './Parent';

const inefficientcontextTest20 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>inefficientcontextTest20</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default inefficientcontextTest20;
