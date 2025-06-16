import React from 'react';

import Parent from './Parent';


const missinguseMemoTest25 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>missinguseMemoTest25</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default missinguseMemoTest25;
