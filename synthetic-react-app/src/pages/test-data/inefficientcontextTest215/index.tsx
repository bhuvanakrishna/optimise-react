import React from 'react';
import Parent from './Parent';

const InefficientcontextTest215 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>inefficientcontextTest215</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default InefficientcontextTest215;
