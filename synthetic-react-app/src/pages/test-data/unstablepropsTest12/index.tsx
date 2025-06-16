import React from 'react';

import Parent from './Parent';


const unstablepropsTest12 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>unstablepropsTest12</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default unstablepropsTest12;
