import React from 'react';

import Parent from './Parent';


const missinguseMemoTest4 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>missinguseMemoTest4</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default missinguseMemoTest4;
