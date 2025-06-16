import React from 'react';

import Parent from './Parent';


const UnstablePropsTest13 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>UnstablePropsTest13</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default UnstablePropsTest13;
