import React from 'react';

import Parent from './Parent';


const missinguseMemoTest20 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>missinguseMemoTest20</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default missinguseMemoTest20;
