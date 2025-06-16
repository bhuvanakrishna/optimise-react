import React from 'react';

import Parent from './Parent';


const PropDrillingTest1 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>PropDrillingTest1</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default PropDrillingTest1;
