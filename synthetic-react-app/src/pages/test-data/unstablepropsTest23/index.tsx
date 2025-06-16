import React from 'react';

import Parent from './Parent';


const unstablepropsTest23 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>unstablepropsTest23</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default unstablepropsTest23;
