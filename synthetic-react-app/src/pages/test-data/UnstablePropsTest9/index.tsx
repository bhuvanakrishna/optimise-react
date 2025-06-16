import React from 'react';

import Parent from './Parent';


const UnstablePropsTest9 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>UnstablePropsTest9</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default UnstablePropsTest9;
