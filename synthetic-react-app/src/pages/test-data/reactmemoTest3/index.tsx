import React from 'react';

import Parent from './Parent';


const reactmemoTest3 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>reactmemoTest3</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default reactmemoTest3;
