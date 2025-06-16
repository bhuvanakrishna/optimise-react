import React from 'react';

import Parent from './Parent';


const missinguseMemoTest9 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>missinguseMemoTest9</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default missinguseMemoTest9;
