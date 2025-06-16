import React from 'react';

import Parent from './Parent';


const missinguseMemoTest5 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>missinguseMemoTest5</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default missinguseMemoTest5;
