import React from 'react';

import Parent from './Parent';


const unstablepropsTest25 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>unstablepropsTest25</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default unstablepropsTest25;
