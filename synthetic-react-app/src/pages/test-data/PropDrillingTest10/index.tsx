import React from 'react';

import Parent from './Parent';


const PropDrillingTest10 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>PropDrillingTest10</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default PropDrillingTest10;
