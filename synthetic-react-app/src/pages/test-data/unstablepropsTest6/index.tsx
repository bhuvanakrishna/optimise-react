import React from 'react';

import Parent from './Parent';


const unstablepropsTest6 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>unstablepropsTest6</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default unstablepropsTest6;
