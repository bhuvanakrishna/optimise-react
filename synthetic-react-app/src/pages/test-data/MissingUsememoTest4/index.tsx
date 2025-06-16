import React from 'react';

import Parent from './Parent';


const MissingUsememoTest4 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>MissingUsememoTest4</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default MissingUsememoTest4;
