import React from 'react';

import Parent from './Parent';


const missinguseMemoTest26 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>missinguseMemoTest26</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default missinguseMemoTest26;
