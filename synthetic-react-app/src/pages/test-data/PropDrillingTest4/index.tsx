import React from 'react';

import Parent from './Parent';


const PropDrillingTest4 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>PropDrillingTest4</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default PropDrillingTest4;
