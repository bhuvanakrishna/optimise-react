import React from 'react';

import Parent from './Parent';


const MissingUsememoTest7 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>MissingUsememoTest7</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default MissingUsememoTest7;
