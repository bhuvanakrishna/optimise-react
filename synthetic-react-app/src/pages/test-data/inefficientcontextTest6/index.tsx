import React from 'react';
import Parent from './Parent';

const InefficientcontextTest6 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>inefficientcontextTest6</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default InefficientcontextTest6;
