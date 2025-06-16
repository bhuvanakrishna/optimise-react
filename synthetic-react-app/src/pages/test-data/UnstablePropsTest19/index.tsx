import React from 'react';

import Parent from './Parent';


const UnstablePropsTest19 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>UnstablePropsTest19</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default UnstablePropsTest19;
