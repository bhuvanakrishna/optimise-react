import React from 'react';
import Parent from './Parent';

const InefficientcontextTest29 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>inefficientcontextTest29</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default InefficientcontextTest29;
