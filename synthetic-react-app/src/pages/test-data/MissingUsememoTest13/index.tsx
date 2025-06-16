import React from 'react';

import Parent from './Parent';


const MissingUsememoTest13 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>MissingUsememoTest13</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default MissingUsememoTest13;
