import React from 'react';

import Parent from './Parent';


const missinguseMemoTest15 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>missinguseMemoTest15</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default missinguseMemoTest15;
