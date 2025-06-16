import React from 'react';

import Parent from './Parent';


const reactmemoTest5 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>reactmemoTest5</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default reactmemoTest5;
