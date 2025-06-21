import React from 'react';
import Parent from './Parent';

const InefficientcontextTest30 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>inefficientcontextTest30</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default InefficientcontextTest30;
