import React from 'react';

import Parent from './Parent';


const UnstablePropsTest15 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>UnstablePropsTest15</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default UnstablePropsTest15;
