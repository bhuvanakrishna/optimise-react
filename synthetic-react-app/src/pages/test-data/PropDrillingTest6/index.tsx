import React from 'react';

import Parent from './Parent';


const PropDrillingTest6 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>PropDrillingTest6</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default PropDrillingTest6;
