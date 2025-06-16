import React from 'react';

import Parent from './Parent';


const UnstablePropsTest7 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>UnstablePropsTest7</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default UnstablePropsTest7;
