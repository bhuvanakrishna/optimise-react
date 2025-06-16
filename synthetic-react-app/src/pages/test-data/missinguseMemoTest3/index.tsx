import React from 'react';

import Parent from './Parent';


const missinguseMemoTest3 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>missinguseMemoTest3</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default missinguseMemoTest3;
