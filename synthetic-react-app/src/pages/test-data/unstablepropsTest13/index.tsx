import React from 'react';

import Parent from './Parent';


const unstablepropsTest13 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>unstablepropsTest13</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default unstablepropsTest13;
