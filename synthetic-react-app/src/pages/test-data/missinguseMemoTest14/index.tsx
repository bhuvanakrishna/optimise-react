import React from 'react';

import Parent from './Parent';


const missinguseMemoTest14 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>missinguseMemoTest14</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default missinguseMemoTest14;
