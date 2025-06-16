import React from 'react';

import Parent from './Parent';


const missinguseMemoTest27 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>missinguseMemoTest27</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default missinguseMemoTest27;
