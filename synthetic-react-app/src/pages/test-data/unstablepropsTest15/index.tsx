import React from 'react';

import Parent from './Parent';


const unstablepropsTest15 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>unstablepropsTest15</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default unstablepropsTest15;
