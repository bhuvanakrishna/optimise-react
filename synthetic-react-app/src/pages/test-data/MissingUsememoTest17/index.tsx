import React from 'react';

import Parent from './Parent';


const MissingUsememoTest17 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>MissingUsememoTest17</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default MissingUsememoTest17;
