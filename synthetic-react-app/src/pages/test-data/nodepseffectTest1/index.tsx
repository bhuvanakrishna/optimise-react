import React from 'react';

import Parent from './Parent';


const nodepseffectTest1 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>nodepseffectTest1</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default nodepseffectTest1;
