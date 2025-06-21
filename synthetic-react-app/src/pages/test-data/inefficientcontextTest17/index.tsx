import React from 'react';
import Parent from './Parent';

const InefficientcontextTest17 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>inefficientcontextTest17</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default InefficientcontextTest17;
