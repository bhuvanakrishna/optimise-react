import React from 'react';
import Parent from './Parent';

const InefficientcontextTest8 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>inefficientcontextTest8</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default InefficientcontextTest8;
