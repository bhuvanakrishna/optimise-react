import React from 'react';

import Parent from './Parent';


const missinguseMemoTest6 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>missinguseMemoTest6</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default missinguseMemoTest6;
