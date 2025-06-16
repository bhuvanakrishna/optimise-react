import React from 'react';

import Parent from './Parent';


const PropDrillingTest8 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>PropDrillingTest8</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default PropDrillingTest8;
