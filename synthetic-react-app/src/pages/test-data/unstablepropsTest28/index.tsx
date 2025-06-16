import React from 'react';

import Parent from './Parent';


const unstablepropsTest28 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>unstablepropsTest28</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default unstablepropsTest28;
