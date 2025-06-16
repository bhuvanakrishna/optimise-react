import React from 'react';

import Parent from './Parent';


const MissingUsememoTest1 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>MissingUsememoTest1</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default MissingUsememoTest1;
