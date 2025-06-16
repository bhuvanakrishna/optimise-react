import React from 'react';

import Parent from './Parent';


const MissingUsememoTest5 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>MissingUsememoTest5</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default MissingUsememoTest5;
