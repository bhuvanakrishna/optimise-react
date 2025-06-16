import React from 'react';

import Parent from './Parent';


const UnstablePropsTest20 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>UnstablePropsTest20</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default UnstablePropsTest20;
