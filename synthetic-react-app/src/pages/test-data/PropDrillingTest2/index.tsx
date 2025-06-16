import React from 'react';

import Parent from './Parent';


const PropDrillingTest2 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>PropDrillingTest2</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default PropDrillingTest2;
