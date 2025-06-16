import React from 'react';

import Parent from './Parent';


const PropDrillingTest5 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>PropDrillingTest5</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default PropDrillingTest5;
