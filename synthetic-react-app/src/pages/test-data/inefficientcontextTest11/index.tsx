import React from 'react';
import Parent from './Parent';

const inefficientcontextTest11 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>inefficientcontextTest11</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default inefficientcontextTest11;
