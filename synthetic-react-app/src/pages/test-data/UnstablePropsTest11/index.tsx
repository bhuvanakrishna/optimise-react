import React from 'react';

import Parent from './Parent';


const UnstablePropsTest11 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>UnstablePropsTest11</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default UnstablePropsTest11;
