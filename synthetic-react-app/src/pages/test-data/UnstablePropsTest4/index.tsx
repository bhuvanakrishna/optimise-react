import React from 'react';

import Parent from './Parent';


const UnstablePropsTest4 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>UnstablePropsTest4</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default UnstablePropsTest4;
