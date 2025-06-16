import React from 'react';

import Parent from './Parent';


const UnstablePropsTest14 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>UnstablePropsTest14</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default UnstablePropsTest14;
