import React from 'react';
import Parent from './Parent';

const UnstablePropsTest1 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>UnstablePropsTest1</h2>
      <Parent />
    </div>
  );
};

export default UnstablePropsTest1;
