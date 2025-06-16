import React from 'react';

import Parent from './Parent';


const MissingUsememoTest15 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>MissingUsememoTest15</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default MissingUsememoTest15;
