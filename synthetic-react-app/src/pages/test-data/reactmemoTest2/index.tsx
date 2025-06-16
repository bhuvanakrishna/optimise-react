import React from 'react';

import Parent from './Parent';


const reactmemoTest2 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>reactmemoTest2</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default reactmemoTest2;
