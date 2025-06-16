import React from 'react';

import Parent from './Parent';


const unstablepropsTest3 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>unstablepropsTest3</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default unstablepropsTest3;
