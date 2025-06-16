import React from 'react';

import Parent from './Parent';


const unstablepropsTest16 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>unstablepropsTest16</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default unstablepropsTest16;
