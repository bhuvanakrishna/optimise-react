import React from 'react';

import Parent from './Parent';


const unstablepropsTest2 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>unstablepropsTest2</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default unstablepropsTest2;
