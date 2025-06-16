import React from 'react';

import Parent from './Parent';


const UnstablePropsTest8 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>UnstablePropsTest8</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default UnstablePropsTest8;
