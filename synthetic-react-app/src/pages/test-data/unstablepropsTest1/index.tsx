import React from 'react';

import Parent from './Parent';


const unstablepropsTest1 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>unstablepropsTest1</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default unstablepropsTest1;
