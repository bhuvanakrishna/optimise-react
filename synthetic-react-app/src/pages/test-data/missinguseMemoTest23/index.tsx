import React from 'react';

import Parent from './Parent';


const missinguseMemoTest23 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>missinguseMemoTest23</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default missinguseMemoTest23;
