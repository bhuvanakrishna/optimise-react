import React from 'react';

import Parent from './Parent';


const unstablepropsTest22 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>unstablepropsTest22</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default unstablepropsTest22;
