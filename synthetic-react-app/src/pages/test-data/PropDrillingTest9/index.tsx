import React from 'react';

import Parent from './Parent';


const PropDrillingTest9 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>PropDrillingTest9</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default PropDrillingTest9;
