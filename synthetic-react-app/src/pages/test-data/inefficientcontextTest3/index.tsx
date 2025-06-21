import React from 'react';
import Parent from './Parent';

const InefficientcontextTest3 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>inefficientcontextTest3</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default InefficientcontextTest3;
