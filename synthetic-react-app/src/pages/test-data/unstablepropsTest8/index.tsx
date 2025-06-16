import React from 'react';

import Parent from './Parent';


const unstablepropsTest8 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>unstablepropsTest8</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default unstablepropsTest8;
