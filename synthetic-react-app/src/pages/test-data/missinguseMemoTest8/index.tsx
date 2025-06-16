import React from 'react';

import Parent from './Parent';


const missinguseMemoTest8 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>missinguseMemoTest8</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default missinguseMemoTest8;
