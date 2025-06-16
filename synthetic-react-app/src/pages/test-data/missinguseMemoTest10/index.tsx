import React from 'react';

import Parent from './Parent';


const missinguseMemoTest10 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>missinguseMemoTest10</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default missinguseMemoTest10;
