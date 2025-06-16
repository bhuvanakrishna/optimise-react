import React from 'react';

import Parent from './Parent';


const missinguseMemoTest7 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>missinguseMemoTest7</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default missinguseMemoTest7;
