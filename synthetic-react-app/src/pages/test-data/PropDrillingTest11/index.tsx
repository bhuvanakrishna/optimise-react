import React from 'react';

import Parent from './Parent';


const PropDrillingTest11 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>PropDrillingTest11</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default PropDrillingTest11;
