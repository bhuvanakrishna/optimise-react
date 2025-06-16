import React from 'react';

import Parent from './Parent';


const UnstablePropsTest3 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>UnstablePropsTest3</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default UnstablePropsTest3;
