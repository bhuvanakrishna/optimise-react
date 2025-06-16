import React from 'react';

import Parent from './Parent';


const MissingUsememoTest10 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>MissingUsememoTest10</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default MissingUsememoTest10;
