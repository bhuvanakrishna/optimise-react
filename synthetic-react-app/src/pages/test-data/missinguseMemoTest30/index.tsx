import React from 'react';

import Parent from './Parent';


const missinguseMemoTest30 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>missinguseMemoTest30</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default missinguseMemoTest30;
