import React from 'react';

import Parent from './Parent';


const MissingUsememoTest20 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>MissingUsememoTest20</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default MissingUsememoTest20;
