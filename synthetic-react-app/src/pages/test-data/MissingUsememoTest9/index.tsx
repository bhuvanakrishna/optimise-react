import React from 'react';

import Parent from './Parent';


const MissingUsememoTest9 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>MissingUsememoTest9</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default MissingUsememoTest9;
