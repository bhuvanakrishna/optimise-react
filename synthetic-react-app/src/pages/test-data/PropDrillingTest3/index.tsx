import React from 'react';

import Parent from './Parent';


const PropDrillingTest3 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>PropDrillingTest3</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default PropDrillingTest3;
