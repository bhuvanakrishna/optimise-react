import React from 'react';

import Parent from './Parent';


const PropDrillingTest7 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>PropDrillingTest7</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default PropDrillingTest7;
