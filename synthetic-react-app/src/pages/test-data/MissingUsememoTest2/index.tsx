import React from 'react';

import Parent from './Parent';


const MissingUsememoTest2 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>MissingUsememoTest2</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default MissingUsememoTest2;
