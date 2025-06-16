import React from 'react';

import Parent from './Parent';


const missinguseMemoTest18 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>missinguseMemoTest18</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default missinguseMemoTest18;
