import React from 'react';

import Parent from './Parent';


const MissingUsememoTest16 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>MissingUsememoTest16</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default MissingUsememoTest16;
