import React from 'react';

import Parent from './Parent';


const MissingUsememoTest18 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>MissingUsememoTest18</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default MissingUsememoTest18;
