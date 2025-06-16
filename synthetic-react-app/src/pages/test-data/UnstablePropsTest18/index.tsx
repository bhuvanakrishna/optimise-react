import React from 'react';

import Parent from './Parent';


const UnstablePropsTest18 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>UnstablePropsTest18</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default UnstablePropsTest18;
