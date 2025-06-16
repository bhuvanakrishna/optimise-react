import React from 'react';

import Parent from './Parent';


const UnstablePropsTest6 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>UnstablePropsTest6</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default UnstablePropsTest6;
