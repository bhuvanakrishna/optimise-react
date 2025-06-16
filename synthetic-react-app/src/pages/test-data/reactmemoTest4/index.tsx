import React from 'react';

import Parent from './Parent';


const reactmemoTest4 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>reactmemoTest4</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default reactmemoTest4;
