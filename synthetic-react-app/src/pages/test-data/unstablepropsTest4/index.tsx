import React from 'react';

import Parent from './Parent';


const unstablepropsTest4 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>unstablepropsTest4</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default unstablepropsTest4;
