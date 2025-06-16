import React from 'react';

import Parent from './Parent';


const UnstablePropsTest2 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>UnstablePropsTest2</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default UnstablePropsTest2;
