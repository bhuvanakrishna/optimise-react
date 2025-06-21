import React from 'react';
import Parent from './Parent';

const InefficientcontextTest14 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>inefficientcontextTest14</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default InefficientcontextTest14;
