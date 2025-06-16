import React from 'react';

import Parent from './Parent';


const PropDrillingTest12 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>PropDrillingTest12</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default PropDrillingTest12;
