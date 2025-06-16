import React from 'react';

import Parent from './Parent';


const MissingUsememoTest12 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>MissingUsememoTest12</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default MissingUsememoTest12;
