import React from 'react';

import Parent from './Parent';


const unstablepropsTest5 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>unstablepropsTest5</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default unstablepropsTest5;
