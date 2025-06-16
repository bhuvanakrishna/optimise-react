import React from 'react';

import Parent from './Parent';


const MissingUsememoTest8 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>MissingUsememoTest8</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default MissingUsememoTest8;
