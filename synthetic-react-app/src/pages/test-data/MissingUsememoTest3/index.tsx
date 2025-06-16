import React from 'react';

import Parent from './Parent';


const MissingUsememoTest3 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>MissingUsememoTest3</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default MissingUsememoTest3;
