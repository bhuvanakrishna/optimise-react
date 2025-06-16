import React from 'react';

import Parent from './Parent';


const UnstablePropsTest10 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>UnstablePropsTest10</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default UnstablePropsTest10;
