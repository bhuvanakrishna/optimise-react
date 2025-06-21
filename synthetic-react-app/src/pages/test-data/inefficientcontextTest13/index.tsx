import React from 'react';
import Parent from './Parent';

const InefficientcontextTest13 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>inefficientcontextTest13</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default InefficientcontextTest13;
