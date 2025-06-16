import React from 'react';

import Parent from './Parent';


const MissingUsememoTest11 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>MissingUsememoTest11</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default MissingUsememoTest11;
