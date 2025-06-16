import React from 'react';

import Parent from './Parent';


const missinguseMemoTest13 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>missinguseMemoTest13</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default missinguseMemoTest13;
