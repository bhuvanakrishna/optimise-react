import React from 'react';

import Parent from './Parent';


const missinguseMemoTest19 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>missinguseMemoTest19</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default missinguseMemoTest19;
