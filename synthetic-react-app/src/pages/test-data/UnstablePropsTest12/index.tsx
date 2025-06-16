import React from 'react';

import Parent from './Parent';


const UnstablePropsTest12 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>UnstablePropsTest12</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default UnstablePropsTest12;
