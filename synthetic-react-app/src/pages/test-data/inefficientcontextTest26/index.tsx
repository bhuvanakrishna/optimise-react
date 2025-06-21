import React from 'react';
import Parent from './Parent';

const InefficientcontextTest26 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>inefficientcontextTest26</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default InefficientcontextTest26;
