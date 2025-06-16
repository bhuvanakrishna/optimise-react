import React from 'react';

import Parent from './Parent';


const UnstablePropsTest17 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>UnstablePropsTest17</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default UnstablePropsTest17;
