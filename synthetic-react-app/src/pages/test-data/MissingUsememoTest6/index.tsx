import React from 'react';

import Parent from './Parent';


const MissingUsememoTest6 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>MissingUsememoTest6</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default MissingUsememoTest6;
