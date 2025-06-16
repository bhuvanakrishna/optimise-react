import React from 'react';

import Parent from './Parent';


const unstablepropsTest21 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>unstablepropsTest21</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default unstablepropsTest21;
